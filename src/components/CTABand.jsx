import CTA from './CTA.jsx';

export default function CTABand({
  eyebrow,
  title,
  body,
  primary,
  secondary,
  bg = 'ink',
}) {
  return (
    <section className={`ht-cta-band ht-cta-band--${bg}`}>
      <div className="container">
        <div className="ht-cta-band__inner">
          <div className="ht-cta-band__copy">
            {eyebrow && <span className="ht-cta-band__eyebrow">{eyebrow}</span>}
            {title && <h2 className="ht-cta-band__title">{title}</h2>}
            {body && <p className="ht-cta-band__body">{body}</p>}
          </div>
          <div className="ht-cta-band__actions">
            {primary && (
              <CTA
                label={primary.label}
                to={primary.to}
                variant={primary.variant ?? (bg === 'ink' ? 'primary' : 'ink')}
              />
            )}
            {secondary && (
              <CTA
                label={secondary.label}
                to={secondary.to}
                variant={secondary.variant ?? 'ghost'}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
