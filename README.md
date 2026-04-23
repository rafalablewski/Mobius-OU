# Mobius

Mobius — Business Consulting React template. Converted from a static HTML
template to a Vite + React + React Router app, deployable on Vercel.

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
index.html              Vite entry — loads vendor CSS, mounts React
src/
  main.jsx              React bootstrap + BrowserRouter
  App.jsx               Route table
  components/
    Layout.jsx          Shared shell (Header + Offcanvas + Footer + plugin init)
    Header.jsx          Top bar + sticky nav
    Footer.jsx          Footer widgets + copyright
    Offcanvas.jsx       Mobile drawer
    Breadcrumb.jsx      Reusable breadcrumb banner for interior pages
  hooks/
    useScrollTop.js     Scroll to top on route change
    usePluginInit.js    Loads jQuery/Swiper/WOW plugins and (re)inits them
  pages/                One component per original HTML page
public/
  assets/               CSS, JS, images, webfonts from the original template
  favicon.svg
scripts/
  convert-html.mjs      One-shot HTML → JSX converter used during the port
vercel.json             SPA rewrite + build config for Vercel
```

## Routing

| Path | Page |
| --- | --- |
| `/` | Home |
| `/home-corporate` | Corporate Business (index-2) |
| `/home-insurance` | Insurance (index-3) |
| `/about` | About Us |
| `/services`, `/service-details` | Services |
| `/team`, `/team-details` | Team |
| `/pricing` | Pricing |
| `/faq` | FAQ |
| `/project`, `/project-details` | Projects |
| `/blog`, `/blog-list`, `/blog-details` | Blog |
| `/contact` | Contact |
| `/404`, anything else | 404 |

## Deploying on Vercel

The project is a standard Vite app; `vercel.json` tells Vercel to use the
`vite` framework preset, build to `dist/`, and rewrite non-asset requests to
`index.html` so deep links work with React Router.
