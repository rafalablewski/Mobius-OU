# Mobius — notes for Claude

## Where draft sketches and test artifacts go

**All draft sketches, wireframes and design R&D belong in `/tests/`.**

- New sketches → `/tests/sketches/<descriptive-name>.html`
- Standalone exploratory pages (logo concepts, palette tests, competitor
  comparisons) → top of `/tests/`
- Never put drafts in `public/assets/` (it ships) or `src/` (it ships). Keep
  `/tests/` out of the deployed bundle.
- See `/tests/README.md` for the full convention and current contents.

## Project basics

- Vite + React + React Router SPA, deployed on Vercel.
- `npm run dev` for local dev, `npm run build` for production.
- Source lives in `src/`; static assets in `public/`; routing table in
  `src/App.jsx`; per-page components in `src/pages/`.
- Program pages are driven by `src/data/programs.js` and rendered by
  `src/pages/ProgramPage.jsx`.
- Brand palette and typography are defined in `public/assets/css/style.css`
  and previewed in `tests/logo-concepts.html`.

## Tone of voice

Editorial, advisory, NDA-first. Specifics over superlatives. The site is
educational/strategic only — not legal, tax or investment advice. Keep that
disclaimer wording intact in the footer and contact form.
