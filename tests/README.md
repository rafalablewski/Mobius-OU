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
| `tests/sketches/calendar-fomo-countdown-ideas.html` | Ten polish variants for the shipped Tesla `BriefPanel`, each combining three required elements — a FOMO scarcity signal ("2 left"), a live countdown chip, and a specific mobile reflow. Desktop + mobile rendered side-by-side per idea on dark hero ground; one shared JS timer drives every live counter. (01) gold "2 LEFT" pill + slim countdown bar between header and bigtime + 1-col mobile rows; (02) editorial serif italic "Two left this week" + serif sentence countdown + compact mobile; (03) 12-pip warm-orange capacity rail + flip-clock HH/MM/SS cards + scroll-snap horizontal slab rail on mobile; (04) blinking top "Last reserved 4 min ago" feed + persistent foot timer + true bottom-sheet on mobile (radius + grabber); (05) per-slab tags (LAST / 2 LEFT / OPEN) with per-slab relative-time + denser 3-up holds on mobile; (06) terracotta "CLOSES TODAY 18:00 CET" eyebrow + stopwatch row + sticky CTA at viewport bottom on mobile; (07) 35° corner ribbon "ALMOST FULL" + inline countdown in the bigmeta line + drawer-up animation on mobile; (08) faster-pulsing dot when ≤2 left + breathing chip + tighter mobile (48px bigtime); (09) split-status pair row "2 LEFT / CLOSES 18:00" + per-slab chips + collapsed mini-bar that taps to expand on mobile; (10) gold hairline rule that animates left-to-right on mount holding the inline timer + same hairline at narrower scale on mobile. Replaces the earlier `calendar-polish-ideas.html` punch list. |

## Viewing

```bash
# Quickest: any static server pointed at the repo root
npx serve .
# then open http://localhost:3000/tests/sketches/program-page-improvements.html
```

`vite dev` won't serve `/tests/` — that's intentional. Use a plain static
server when reviewing drafts.
