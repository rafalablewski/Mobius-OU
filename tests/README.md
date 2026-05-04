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
| `tests/sketches/program-page-improvements.html` | Five proposed improvements to `ProgramPage.jsx` benchmarked against Astons' Vanuatu landing — ideas + hand-drawn-style wireframes. |

## Viewing

```bash
# Quickest: any static server pointed at the repo root
npx serve .
# then open http://localhost:3000/tests/sketches/program-page-improvements.html
```

`vite dev` won't serve `/tests/` — that's intentional. Use a plain static
server when reviewing drafts.
