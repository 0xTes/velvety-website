# Velvety Brand Studio

Production Next.js App Router site for Velvety Brand Studio.

## Run locally

```powershell
npm.cmd run dev
npm.cmd run build
```

## Production metadata and sharing

Global metadata, JSON-LD, canonical URLs, robots directives, and theme colors live in
`app/layout.jsx`. Reusable business and site values live in `lib/constants.js`; update
`SITE_URL`, `SITE_NAME`, `SITE_TAGLINE`, and `SITE_DESCRIPTION` there when production
details change. Page-specific metadata is created through `lib/seo.js`.

Production share and browser artwork lives in `public/`:

- `public/og-image.jpg` — 1200 × 630 social-sharing image
- `public/favicon.ico`, `public/icon.png`, `public/apple-touch-icon.png`
- `public/android-chrome-192.png`, `public/android-chrome-512.png`

`public/site.webmanifest` references the Android icon files.

## Blog publishing

Velvety publishes new Blog listing cards from the official Substack RSS feed. The
publication and feed URLs are centralized in `lib/constants.js`. The server-side
RSS data layer refreshes hourly and renders the newest three valid articles in
publication-date order. If the feed is unavailable or invalid, the existing
local articles remain available as the predictable listing fallback and continue
to power their local article pages and sitemap entries.

## Legal content

`app/legal/page.jsx` provides the single legal destination with independently linkable
Terms, Privacy, Cookies, and Contact sections.
