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
        <div className="container">
          {floats && floats.length > 0 && (
            <>
              <div className="ht-breadcrumb__shape" aria-hidden="true">
                <div className="arrow-shape float-bob-x">
                  <img src="/assets/img/shape/1.svg" alt="" aria-hidden="true" />
                </div>
              </div>
              <div className="ht-breadcrumb__counter" aria-hidden="true">
                {floats[0] && (
                  <div className="count-card float-bob-x">
                    <h2>
                      <span className="count">{floats[0].count}</span>
                      {floats[0].plus !== false && <span className="plus">+</span>}
                    </h2>
                    <p>{floats[0].label}</p>
                  </div>
                )}
                {floats[1] && (
                  <div className="count-card-2 float-bob-y">
                    <h2>
                      <span className="count">{floats[1].count}</span>
                      {floats[1].plus !== false && <span className="plus">+</span>}
                    </h2>
                    <p>{floats[1].label}</p>
                  </div>
                )}
              </div>
            </>
          )}
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
