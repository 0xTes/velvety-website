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

The current share and browser artwork is intentionally easy to replace:

- `public/og-image.png` — 1200 × 630 social-sharing image
- `public/favicon.ico`, `public/icon.png`, `public/apple-touch-icon.png`
- `public/android-chrome-192.png`, `public/android-chrome-512.png`

Keep the filenames and dimensions when replacing these temporary branded placeholders.
`public/site.webmanifest` references the Android icon files.

## Legal content

`app/legal/page.jsx` provides the single legal destination with independently linkable
Terms, Privacy, Cookies, and Contact sections. The legal content is structured,
business-aware placeholder copy and requires qualified legal review before publication.
