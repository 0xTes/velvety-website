/**
 * Generates Next.js metadata objects for each page.
 * Import generateMetadata from here instead of duplicating metadata.
 */

import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./constants";

const BASE_URL = SITE_URL;
const OG_IMAGE = "/og-image.jpg";

export function buildMetadata({
  title,
  description,
  path = "",
  type = "website",
  publishedTime,
}) {
  const url = `${BASE_URL}${path}`;
  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — ${SITE_DESCRIPTION}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
