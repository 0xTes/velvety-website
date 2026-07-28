import { SITE_URL } from "../lib/constants";

const paths = [
  "/",
  "/onlyfans-marketing",
  "/fansly-marketing",
  "/other-platforms-marketing",
  "/creator-branding",
  "/legal",
];

export default function sitemap() {
  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
