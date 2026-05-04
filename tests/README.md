# /tests/ — drafts, sketches and design R&D

Scratchpad for things that **aren't** part of the deployed site. Anything in
this folder is for review, exploration or comparison and should not be linked
from the production app.

## Convention

- All draft sketches, wireframes and design R&D go under
  `/tests/sketches/<name>.html` (or `.svg`).
- Standalone exploratory pages (logo concepts, palette tests, type specimens,
  competitor comparisons) live at the top of `/tests/`.
- Nothing in `/tests/` ships in the Vite build — it sits outside `public/` and
  outside `src/` so it never reaches `dist/`.
- If a sketch becomes a real component, port it into `src/components/` and
  delete the draft.

## Current contents

| Path | What |
| --- | --- |
| `tests/logo-concepts.html` | Standalone preview of logo wordmark concepts (was `public/assets/logo-concepts.html`). |
| `tests/sketches/program-page-improvements.html` | Five proposed improvements to `ProgramPage.jsx` benchmarked against Astons' Vanuatu landing — ideas + hand-drawn-style wireframes. Includes a second section with five UX variations of idea 01's "Brief a Partner" panel (inline strip, email-gated dossier, expanding pill, dock-on-scroll, calendar-first). |
| `tests/sketches/freshness-badge-redesign.html` | Fifteen redesigns of the program-page "UPDATED 2026.Q1" badge (`Breadcrumb.jsx` `freshness` prop), in three rounds. Round one (pragmatic): dossier stamp, masthead line, changelog tab, gutter mark, status pill + tooltip. Round two (bolder, decorative): wax-seal monogram, watermark chapter mark, postage stamp, redline correction, almanac · roman numeral. Round three (institutional, restrained — audit-report register): document-control block, ISO datestamp, filing reference table, semver tag, standfirst compliance line. Each shown as a pencil sketch on dark hero ground plus a live HTML/CSS micro-mock. |
| `tests/sketches/calendar-redesign-concepts.html` | Ten redesigns of the program-page booking card (`BriefPanel.jsx` — "Pick a 30-minute slot"), drawing on Apple, Tesla, Lucid Motors and Adobe. Apple — Stocks-style frosted card with weekday chips; Apple Wallet perforated boarding-pass stub. Tesla — touchscreen slab with oversized 88px time and single CTA; Tesla service-appointment list with "soonest" tag and host monogram. Lucid — horizontal hairline cluster with three pips; Lucid Air interior with champagne monogram and three glass blades. Adobe — Creative Cloud panel with per-row swatches and ⌥1/⌥2/⌥3 keyboard shortcuts; Adobe XD split dock pairing month grid + day's slot list. Hybrids — Apple × Lucid clock-face dial picker; Tesla × Adobe split panel that exposes booked-vs-open scarcity. Each is a live HTML/CSS render on dark hero ground, with TOC, baseline of today's card, and a per-idea "vs. today" contrast note. |

## Viewing

```bash
# Quickest: any static server pointed at the repo root
npx serve .
# then open http://localhost:3000/tests/sketches/program-page-improvements.html
```

`vite dev` won't serve `/tests/` — that's intentional. Use a plain static
server when reviewing drafts.
