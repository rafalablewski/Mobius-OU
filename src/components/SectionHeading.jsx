export default function SectionHeading({
  eyebrow,
  title,
  emphasis,
  lede,
  align = 'left',
  className = '',
}) {
  const modifier = align === 'center' ? ' ht-section-heading--center' : '';
  const composed = `ht-section-heading${modifier}${className ? ` ${className}` : ''}`;

  return (
    <header className={composed}>
      {eyebrow && <span className="ht-section-heading__eyebrow">{eyebrow}</span>}
      <h2 className="ht-section-heading__title">
        {title}
        {emphasis && (
          <>
            {' '}
            <em>{emphasis}</em>
          </>
        )}
      </h2>
      {lede && <p className="ht-section-heading__lede">{lede}</p>}
    </header>
  );
}
