import "server-only";
import { XMLParser, XMLValidator } from "fast-xml-parser";
import { ARTICLES } from "./articles";
import { SUBSTACK_RSS_URL } from "./constants";

export const SUBSTACK_REVALIDATE_SECONDS = 3600;
const REQUEST_TIMEOUT_MS = 8000;

const parser = new XMLParser({
  attributeNamePrefix: "@_",
  cdataPropName: "__cdata",
  ignoreAttributes: false,
  trimValues: true,
});

function asArray(value) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function asText(value) {
  if (typeof value === "string" || typeof value === "number") {
    return String(value).trim();
  }

  if (value && typeof value === "object") {
    return asText(value.__cdata || value["#text"] || "");
  }

  return "";
}

function asExcerpt(value) {
  return asText(value).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function asArticleUrl(value) {
  try {
    const url = new URL(asText(value));
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : null;
  } catch {
    return null;
  }
}

function asPublishedAt(value) {
  const date = new Date(asText(value));
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

function comparePublishedAt(first, second) {
  return new Date(second.publishedAt).getTime() - new Date(first.publishedAt).getTime();
}

export function normalizeSubstackArticles(items) {
  return asArray(items)
    .map((item) => {
      const title = asText(item?.title);
      const url = asArticleUrl(item?.link);
      const publishedAt = asPublishedAt(item?.pubDate);

      if (!title || !url || !publishedAt) return null;

      return {
        category: asText(item.category) || "Velvety Journal",
        title,
        description:
          asExcerpt(item.description) || "Read the latest note from Velvety Journal.",
        publishedAt,
        url,
      };
    })
    .filter(Boolean)
    .sort(comparePublishedAt)
    .slice(0, 3);
}

export async function fetchSubstackArticles() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(SUBSTACK_RSS_URL, {
      headers: { Accept: "application/rss+xml, application/xml, text/xml" },
      next: { revalidate: SUBSTACK_REVALIDATE_SECONDS },
      signal: controller.signal,
    });

    if (!response.ok) return [];

    const xml = await response.text();
    if (XMLValidator.validate(xml) !== true) return [];

    const feed = parser.parse(xml);
    return normalizeSubstackArticles(feed?.rss?.channel?.item);
  } catch {
    return [];
  } finally {
    clearTimeout(timeout);
  }
}

export async function getBlogArticles() {
  const articles = await fetchSubstackArticles();

  if (articles.length > 0) return articles;

  return [...ARTICLES].sort(comparePublishedAt).slice(0, 3);
}
