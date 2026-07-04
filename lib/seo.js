/**
 * Generates Next.js metadata objects for each page.
 * Import generateMetadata from here instead of duplicating metadata.
 */

const BASE_URL = "https://velvetydigital.com"; // ← update to your live domain

export function buildMetadata({ title, description, path = "" }) {
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
      siteName: "Velvety Brand Studio",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
