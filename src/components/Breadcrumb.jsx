import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function splitTitle(title, emphasis) {
  if (emphasis) return { lead: title, tail: emphasis };
  const words = String(title ?? '').trim().split(/\s+/);
  if (words.length <= 1) return { lead: title, tail: null };
  return { lead: words.slice(0, -1).join(' '), tail: words[words.length - 1] };
}

function Crumbs({ crumbs, current, title }) {
  const trail =
    crumbs && crumbs.length
      ? crumbs
      : [{ label: 'Home', to: '/' }, { label: current || title }];
  return (
    <ol className="ht-breadcrumb__crumbs">
      {trail.map((c, i) => {
        const isLast = i === trail.length - 1;
        return (
          <Fragment key={`${c.label}-${i}`}>
            <li className={isLast ? 'is-current' : ''}>
              {c.to && !isLast ? <Link to={c.to}>{c.label}</Link> : c.label}
            </li>
            {!isLast && (
              <li className="ht-breadcrumb__sep" aria-hidden="true">·</li>
            )}
          </Fragment>
        );
      })}
    </ol>
  );
}

export default function Breadcrumb({
  variant = 'aperture',
  title,
  emphasis,
  crumbs,
  current,
  meta,
  tagline,
  aside,
  floats,
}) {
  const { lead, tail } = splitTitle(title, emphasis);
  const className = `ht-breadcrumb-area is-${variant}`;

  if (variant === 'editorial') {
    return (
      <section className={className}>
        {floats && floats.length > 0 && (
          <div className="ht-breadcrumb__floats" aria-hidden="true">
            <span className="ht-breadcrumb__float-arrow float-bob-x">
              <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 60 C 28 22, 52 22, 72 50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <path
                  d="M64 44 L72 50 L64 56"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {floats.map((f, i) => (
              <span
                key={`${f}-${i}`}
                className={`ht-breadcrumb__float ht-breadcrumb__float--${i + 1} ${
                  i % 2 === 0 ? 'float-bob-y' : 'float-bob-x'
                }`}
              >
                {f}
              </span>
            ))}
          </div>
        )}
        <div className="container">
          <div className="ht-breadcrumb__top">
            <Crumbs crumbs={crumbs} current={current} title={title} />
            {meta && meta.length > 0 && (
              <ul className="ht-breadcrumb__meta">
                {meta.map((m, i) => (
                  <Fragment key={`${m}-${i}`}>
                    <li>{m}</li>
                    {i < meta.length - 1 && (
                      <li className="ht-breadcrumb__sep" aria-hidden="true">·</li>
                    )}
                  </Fragment>
                ))}
              </ul>
            )}
          </div>
          <div className={`ht-breadcrumb__layout${aside ? ' has-aside' : ''}`}>
            <div className="ht-breadcrumb__editorial-body">
              <h1 className="ht-breadcrumb__title">
                {lead}
                {tail && (
                  <>
                    {' '}
                    <em>{tail}</em>
                  </>
                )}
              </h1>
              <span className="ht-breadcrumb__rule" aria-hidden="true" />
              {tagline && <p className="ht-breadcrumb__dateline">{tagline}</p>}
            </div>
            {aside && <div className="ht-breadcrumb__aside">{aside}</div>}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={className}>
      <div className="container">
        <Crumbs crumbs={crumbs} current={current} title={title} />
        <div className="ht-breadcrumb__aperture" aria-hidden="true">
          <span className="ht-breadcrumb__ring" />
          <span className="ht-breadcrumb__dot" />
        </div>
        <h1 className="ht-breadcrumb__title">
          {lead}
          {tail && (
            <>
              {' '}
              <em>{tail}</em>
            </>
          )}
        </h1>
        {tagline && <p className="ht-breadcrumb__dateline">{tagline}</p>}
      </div>
    </section>
  );
}
