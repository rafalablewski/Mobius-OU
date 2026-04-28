import { Link } from 'react-router-dom';

export default function TopPrograms({
  eyebrow,
  title,
  body,
  programs,
  viewAllHref,
  viewAllLabel,
  tone = 'rbi',
}) {
  const moreDelay = 0.1 + programs.length * 0.1;

  return (
    <section className={`ht-top-programs ht-top-programs--${tone}`}>
      <div className="container">
        <header className="ht-top-programs__head">
          <div className="ht-top-programs__head-left">
            <span className="ht-top-programs__eyebrow">{eyebrow}</span>
            <h2 className="ht-top-programs__title">{title}</h2>
          </div>
          {body && <p className="ht-top-programs__body">{body}</p>}
        </header>

        <ol className="ht-top-programs__list">
          {programs.map((p, i) => (
            <li
              className="ht-top-programs__row wow fadeInUp"
              data-wow-delay={`${0.1 + i * 0.1}s`}
              key={p.slug}
            >
              <Link to={`/programs/${p.slug}`} className="ht-top-programs__row-link">
                <span className="ht-top-programs__index">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="ht-top-programs__arms">
                  <img src={p.arms} alt="" loading="lazy" referrerPolicy="no-referrer" />
                </span>
                <span className="ht-top-programs__body-cell">
                  <span className="ht-top-programs__country">{p.country}</span>
                  <span className="ht-top-programs__name">{p.name}</span>
                  <span className="ht-top-programs__tagline">{p.tagline}</span>
                </span>
                <span className="ht-top-programs__fact">{p.headline}</span>
                <span className="ht-top-programs__arrow" aria-hidden="true">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            </li>
          ))}
        </ol>

        {viewAllHref && (
          <Link
            to={viewAllHref}
            className="ht-top-programs__more-row wow fadeInUp"
            data-wow-delay={`${moreDelay}s`}
          >
            <span className="ht-top-programs__more-plus" aria-hidden="true">+</span>
            <span aria-hidden="true"></span>
            <span className="ht-top-programs__more-label">
              <span className="ht-top-programs__more-underline">
                {viewAllLabel || 'View all programmes'}
              </span>
            </span>
            <span aria-hidden="true"></span>
            <span className="ht-top-programs__arrow" aria-hidden="true">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </Link>
        )}
      </div>
    </section>
  );
}
