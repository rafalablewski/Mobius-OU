# Ablewski &amp; Partners

Production single-page site for **Ablewski &amp; Partners** — an independent
strategic advisory on Citizenship by Investment (CBI), Residency by Investment
(RBI), tax residency planning, asset protection and family relocation for
discerning private clients.

Built as a Vite + React SPA. All content is bespoke; the original business-
consulting template has been stripped out.

## Development

```bash
npm install
npm run dev
```

Dev server runs at http://localhost:5173.

## Production build

```bash
npm run build
npm run preview
```

Output goes to `dist/`.

## Project structure

```
index.html                      Vite entry — meta, JSON-LD, mounts React
src/
  main.jsx                      React bootstrap
  App.jsx                       Single-page composition
  components/                   Header, Footer, section components
  sections/                     Hero, Services, WhyUs, Programs, …
  hooks/                        useReveal, useStickyNav, useSmoothScroll
public/
  assets/
    css/ablewski.css            Bespoke design system (no vendor reliance)
    js/main.js                  Progressive enhancements
    img/                        Imagery (replace placeholders before launch)
    icons/                      Custom line-art SVG iconography
    logo.svg                    Wordmark
  favicon.svg
vercel.json                     Vercel build + SPA rewrite
```

## SEO

- `<title>` / `<meta description>` target "CBI RBI advisory Poland".
- `JSON-LD` schema of type `ProfessionalService` in `index.html`.
- Open Graph + Twitter card tags; add `assets/img/og-cover.jpg` (1200×630)
  before launch.
- `sitemap.xml` and `robots.txt` can be added to `public/` on deploy.

## Compliance

The site is editorial / informational. Every page carries a disclaimer stating
that the content is educational only and does not constitute legal, tax or
investment advice. Update the privacy policy and disclaimer text in
`src/components/Footer.jsx` and `src/sections/*` to match your jurisdiction
before publishing.

## Performance

- No jQuery, no heavy vendor CSS — a single bespoke stylesheet.
- Images are `loading="lazy"` and `decoding="async"` by default; replace the
  `assets/img/*` placeholders with optimized WebP/AVIF for best Lighthouse
  scores.
- Self-hosted fonts via Google Fonts CDN with `preconnect`.

## Deploying on Vercel

Vercel auto-detects the Vite preset. `vercel.json` sets the build command,
output directory and SPA fallback rewrite. No environment variables are
required for the public site; wire up a serverless endpoint if you replace the
contact form's mailto fallback with an API submission.
