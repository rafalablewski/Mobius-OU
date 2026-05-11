/**
 * PressLine — "As seen in" credibility strip. Cream ground, slow horizontal
 * scroll, used on editorial pages (Home, About) above where the reader drops
 * into substance.
 *
 * Each logo is a <span> whose background is painted in currentColor and
 * masked by the brand SVG in /public/. That gives us:
 *   - one unified colour across four very different brand identities
 *   - no inline-SVG ID-collision worries
 *   - no JSX attribute conversion
 * If you need the original brand colours back, swap the spans for <img>.
 */
const LOGOS = [
  { mod: 'ft',  label: 'Financial Times' },
  { mod: 'bb',  label: 'Bloomberg' },
  { mod: 'nyt', label: 'The New York Times' },
  { mod: 'hp',  label: 'The Huffington Post' },
];

function LogoSet({ ariaHidden = false }) {
  return (
    <div
      className="ht-press-line__set"
      {...(ariaHidden ? { 'aria-hidden': 'true' } : {})}
    >
      {LOGOS.map(({ mod, label }) => (
        <span
          key={mod}
          className={`ht-press-line__logo ht-press-line__logo--${mod}`}
          role={ariaHidden ? undefined : 'img'}
          aria-label={ariaHidden ? undefined : label}
        />
      ))}
    </div>
  );
}

export default function PressLine() {
  return (
    <section className="ht-press-line-area" aria-label="As seen in">
      <div className="container">
        <div className="ht-press-line ht-press-line--marquee">
          <span className="ht-press-line__label">As seen in</span>
          <div className="ht-press-line__viewport">
            <div className="ht-press-line__track">
              <LogoSet />
              <LogoSet ariaHidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
