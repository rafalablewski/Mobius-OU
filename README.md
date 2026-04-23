# Ablewski & Partners — passportbros.org

Independent strategic advisory on Citizenship by Investment, Residency by
Investment, tax residency planning, asset protection and family relocation.
This repository is the firm's public-facing site: a Vite + React + React
Router single-page application, deployable on Vercel.

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
index.html              Vite entry — SEO meta, JSON-LD, mounts React
src/
  main.jsx              React bootstrap + BrowserRouter
  App.jsx               Route table
  components/
    Layout.jsx          Shared shell (Header + Offcanvas + Footer + plugin init)
    Header.jsx          Top bar + sticky nav — Warsaw office details
    Footer.jsx          Footer widgets + educational-only disclaimer
    Offcanvas.jsx       Mobile drawer
    Breadcrumb.jsx      Reusable breadcrumb banner for interior pages
  data/
    briefs.js           Shared intelligence-brief list (Blog, BlogList, BlogDetails)
  hooks/
    useScrollTop.js     Scroll to top on route change
    usePluginInit.js    Loads jQuery/Swiper/WOW plugins and (re)inits them
  pages/                One component per surface
public/
  assets/               CSS, JS, images, webfonts
  favicon.svg
scripts/
  convert-html.mjs      Port helper retained from the initial conversion
vercel.json             SPA rewrite + build config for Vercel
```

## Routing

| Path | Surface |
| --- | --- |
| `/` | Private Clients (primary home) |
| `/home-corporate` | Corporate & Family Office |
| `/home-insurance` | Succession & Legacy |
| `/about` | About the Firm |
| `/services`, `/service-details` | Advisory Practice |
| `/team`, `/team-details` | Advisors |
| `/pricing` | Programs & Fees (with comparison table) |
| `/faq` | Client FAQ |
| `/project`, `/project-details` | Select Mandates (case studies) |
| `/blog`, `/blog-list`, `/blog-details` | Intelligence Briefs |
| `/contact` | Schedule Consultation |
| `/404`, anything else | Not Found |

## Deploying on Vercel

The project is a standard Vite app; `vercel.json` tells Vercel to use the
`vite` framework preset, build to `dist/`, and rewrite non-asset requests to
`index.html` so deep links into the SPA continue to work.

Other static hosts (Netlify, Cloudflare Pages, GitHub Pages) work the same
way — build command `npm run build`, publish directory `dist/`, with a SPA
fallback rewrite from `/*` to `/index.html`.

## SEO notes

- `index.html` ships SEO meta (description, keywords, Open Graph, Twitter
  Card), a `<link rel="canonical">`, and a JSON-LD `ProfessionalService`
  schema block with the firm's services and Warsaw address.
- Every page sets its own breadcrumb title so the H1 reflects the
  sub-section (About the Firm, Advisory Practice, Programs & Fees, etc.).
- Images carry descriptive `alt` text; decorative shape SVGs use
  `alt=""` and `aria-hidden="true"`.
- Anchor links use React Router `<Link>` for SPA navigation so interior
  routes do not trigger full-page reloads.

## Compliance

The site is educational and strategic advisory only — not legal, tax or
investment advice. Regulated legal and tax work is delivered by licensed
partners in each jurisdiction. The disclaimer appears in the footer on
every page and inside the contact form.
