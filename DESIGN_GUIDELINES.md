# Mobius & Partners — Design Guidelines

These are the design rules for the public site at **passportbros.org**. The
firm is private-client advisory; the visual system has to read as serious,
quiet, and a little old-world without sliding into pastiche. Editorial, not
corporate. Lawyer's office, not bank lobby.

If a design choice is not covered here, the rule is: **less, slower, with
more whitespace**.

---

## 1. Brand voice

| | |
| --- | --- |
| Firm name (display) | Mobius & Partners |
| Legal entity | Mobius Global OÜ |
| Public domain | passportbros.org |
| Office | Warsaw |

**Voice.** Senior advisor speaking to a peer. Direct, declarative, no
adjectives that the client could not verify. Prefer the indicative ("we
coordinate", "we refuse referral fees") over the aspirational ("we strive",
"we believe in").

**Length.** Short paragraphs. Sentences end before the reader expects them
to. One idea per sentence.

**Tells.** A handful of phrases recur and should sound like the firm:
"written record of every recommendation", "fewer mandates than we turn
down", "your outcome is the only metric we are paid on", "educational and
strategic only — not legal, tax or investment advice."

**Do not.** No emojis, no "🚀", no exclamation marks, no sales superlatives
("world-class", "best-in-class"), no first-name appeals to authority, no
client names in marketing copy.

---

## 2. Color

All colors are exposed as CSS custom properties on `:root` in
`public/assets/css/style.css`. Use the variable, never the hex.

| Token | Hex | Role |
| --- | --- | --- |
| `--ht-body` | `#F4EFE6` | Page background — warm parchment cream |
| `--ht-theme-color-5` | `#FAF6EE` | Lifted surfaces (cards on cream) |
| `--ht-theme-color-3` | `#F4EFE6` | Inverse-of-ink panels |
| `--ht-black` | `#0B0F14` | Headlines, ink panels, primary CTA fill |
| `--ht-heading-color` | `#0B0F14` | All H1–H4 |
| `--ht-text-color` | `#1C232B` | Body copy |
| `--ht-theme-color-6` | `#6B6257` | Muted body, captions, taglines |
| `--ht-theme-color-2` | `#C9A86A` | Single accent — gold; used sparingly |
| `--ht-border-color` | `#E2DBCE` | Hairlines, dividers, card borders |
| `--ht-border-color-2` | `#0B0F14` | Borders on ink surfaces |
| `--ht-white` | `#FFFFFF` | Type-on-ink only |

**Rules of thumb.**

- The cream `#F4EFE6` is the default canvas. Pure white is for type set on
  the ink surfaces, not for backgrounds.
- Gold (`--ht-theme-color-2`) is an accent, not a section color. Use it for
  one thing per viewport: a rule under a kicker, a hover underline, a single
  numeric stat. If two gold elements compete, drop one.
- Never tint gold with a gradient. No drop shadows on gold.
- Body copy is `--ht-text-color`, not pure black. Pure black is reserved for
  headings and ink-filled surfaces.
- Status colors (success/warn/error) are intentionally absent. The site does
  not present transactional UI; if a future component needs them, derive
  from the gold and the ink, not stock Bootstrap reds and greens.

---

## 3. Typography

Three families, loaded once in `index.html`. Do not introduce a fourth.

| Token | Family | Use |
| --- | --- | --- |
| `--ht-font-display` | Cormorant Garamond | H1, H2, page titles, oversized pull-quotes |
| `--ht-font-serif-body` | Newsreader | Long-form editorial paragraphs (Intelligence Briefs) |
| `--ht-font-ui` | Manrope | All UI: nav, buttons, body, captions, tabular |

**Scale.** Defer to the existing classes (`.section-title .title`,
`.subtitle`, `.ht-about-content`, etc.). New components inherit the scale
they sit inside; do not introduce ad-hoc font sizes.

**Headings.** Display serif, regular weight, generous leading. Optical
sizing is part of the brand — do not letter-space it tighter to "fix" it.

**Subtitles / kickers.** Manrope, uppercase, tracked +0.18em, in
`--ht-theme-color-6`. Always sit above the H2, never below.

**Body.** Manrope 16/28 on UI surfaces; Newsreader 18/32 on editorial
surfaces (Intelligence Briefs). Maximum measure 64ch.

**Numerals.** When numbers carry weight (stats block, pricing) use
tabular-nums. The headline number gets the display serif; the unit and
qualifier stay in Manrope.

---

## 4. Layout & spacing

The grid is Bootstrap 5 (12 col, `.container`, `.row`, `.col-lg-*`).
Don't fight it.

- Vertical rhythm uses `.section-padding` (≈120px desktop, ≈80px tablet,
  ≈60px mobile). Stack sections with `.section-padding` and remove the top
  half (`pt-0`) when two related sections sit together — see the About page
  for the pattern.
- Gutters: `g-4` for tight pairs, `g-5` for hero rows.
- Maximum content column width is `.col-lg-7` for body copy. Anything wider
  reads as a press release.
- Whitespace is a feature. Do not fill empty columns with decorative
  graphics; the cream background carries the page.

---

## 5. Components

Use what exists in `src/components/` before authoring anything new.

| Component | Purpose |
| --- | --- |
| `Layout.jsx` | Shell — header, offcanvas, footer, plugin init. Every route renders inside it. |
| `Header.jsx` | Top bar + mega-menu. Edits to navigation happen here, not per-page. |
| `Footer.jsx` | Disclaimer lives here. Do not duplicate it elsewhere. |
| `Breadcrumb.jsx` | Interior page banner. Always set `title`, `emphasis` (the period-terminated tail), `crumbs`, optional `tagline`. |
| `SectionHeading.jsx` | Centred kicker + H2 used by most interior sections. |
| `CTABand.jsx`, `CTA.jsx` | The two approved CTA placements per page. Don't add a third. |
| `Glyph.jsx` | The wordmark mark. Tones: `ink` (on cream) and `ivory` (on ink). |

**Buttons.** Two variants only:

- `.ht-btn.style-3` — ink-filled primary, used at most twice per page.
- `.ht-btn.border-btn` — hairline secondary, used when the primary is
  already on screen.

Do not introduce a "ghost" or "tertiary" button.

**Cards.** Cream-on-cream cards take `--ht-border-color` hairlines, no
shadow. Cards on ink surfaces invert: ivory hairline, ink fill.

**Forms.** Single-column. Labels above inputs. The submit button is the
only filled button on the screen. The contact form must reproduce the
educational-only disclaimer above the submit.

---

## 6. Imagery

- Photography is desaturated, warm-toned, and people are clothed in muted
  earth tones. No stock travel photos. No suitcases on tarmacs. No gold
  passports on marble.
- Office photography is preferred over location photography. If we must
  show a place, show its built environment (a quiet courtyard, a desk),
  not its tourist face.
- Decorative SVG shapes (the curved blobs in `/public/assets/img/shape/`)
  must carry `alt=""` and `aria-hidden="true"`. They are texture, not
  content.
- Icons are the line-weight set in `/public/assets/img/icon/`. Do not mix
  in Font Awesome solid glyphs as content icons; FA is reserved for
  navigation chevrons, social icons and slider controls.

---

## 7. Motion

Motion is present, restrained, and never delays the disclaimer or a CTA.

- `wow fadeInUp` / `wow fadeIn` with stepped `data-wow-delay` (.2s, .4s,
  .6s …). Cap any single section at six staggered items.
- Swiper for testimonials and the press strip — autoplay 6s, no infinite
  bounce, no scale-on-hover.
- Hover transitions: 200ms, ease-out, opacity and color only. No transform
  scale on cards.
- Respect `prefers-reduced-motion`: if the user has it on, WOW should not
  trigger and Swiper autoplay must be disabled.

---

## 8. Accessibility

- Every image gets descriptive `alt`. Decorative shapes get `alt=""` plus
  `aria-hidden="true"`.
- Color contrast on the cream background is verified against `--ht-text-color`
  and `--ht-theme-color-6`. Do not introduce body copy on top of gold.
- Interactive elements have an accessible name (`aria-label` on icon
  buttons, visible text otherwise).
- Focus rings are not removed; they are restyled to a 2px gold outline with
  2px offset on the cream surface, ink outline on the ink surface.
- Hit areas are at least 44×44px.

---

## 9. Compliance & disclaimers

The site is **educational and strategic advisory only — not legal, tax or
investment advice**. Regulated work is delivered by licensed partners in
each jurisdiction.

- The full disclaimer lives in `Footer.jsx` and renders on every page. Do
  not paraphrase it elsewhere.
- The contact form repeats a one-line version above the submit button.
- Do not name clients, name programs the firm "guarantees", or quote
  processing times as commitments. Programs change; pages do not.

---

## 10. SEO & metadata

- `index.html` carries the global meta and the `ProfessionalService`
  JSON-LD. Update there, not in individual pages.
- Each route sets its own `<Breadcrumb>` title; this becomes the visible H1
  for the surface and should match the meta description's framing.
- Canonical URLs are absolute (`https://passportbros.org/...`) and do not
  carry tracking parameters.

---

## 11. Adding a new page

In order:

1. Add the route in `src/App.jsx`.
2. Create the page component in `src/pages/` using `Breadcrumb` +
   `SectionHeading` + existing section patterns.
3. Reuse Tailwind-style utility classes already present in `style.css`;
   do not introduce a new CSS file.
4. Add a navigation entry in `Header.jsx` only if the page belongs in the
   primary navigation — orphan pages reachable only by deep link are fine
   and often preferred.
5. Confirm the page renders on cream, mobile and desktop, with the
   disclaimer in the footer and the contact CTA reachable in one scroll.

---

## 12. What this site is not

A list, because it is easier to spot drift this way:

- Not a brochure for travel programs. We do not sell trips.
- Not a comparison shopper. The pricing page exists; it is a reference,
  not a marketplace.
- Not a blog network. Intelligence Briefs are written, not aggregated.
- Not a lead-gen funnel. The contact form takes one consultation request
  at a time and replies by email.

When in doubt, remove the element. The brand is built on what the firm
does not do.
