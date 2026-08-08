import { SITE_URL } from "../lib/constants";
import { ARTICLES } from "../lib/articles";

const paths = [
  "/",
  "/blog",
  "/faq",
  "/onlyfans-marketing",
  "/fansly-marketing",
  "/other-platforms-marketing",
  "/creator-branding",
  "/legal",
];

export default function sitemap() {
  const sitePages = paths.map((path) => ({
    url: SITE_URL + path,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));

  const articlePages = ARTICLES.map((article) => ({
    url: SITE_URL + "/blog/" + article.slug,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...sitePages, ...articlePages];
}
