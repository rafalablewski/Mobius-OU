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
        const inner = (
          <>
            {c.glyph && <span className="ht-breadcrumb__crumb-glyph" aria-hidden="true">{c.glyph}</span>}
            <span className="ht-breadcrumb__crumb-label">{c.label}</span>
          </>
        );
        return (
          <Fragment key={`${typeof c.label === 'string' ? c.label : 'crumb'}-${i}`}>
            <li className={`ht-breadcrumb__crumb${isLast ? ' is-current' : ''}${c.glyph ? ' has-glyph' : ''}`}>
              {c.to && !isLast ? <Link to={c.to}>{inner}</Link> : inner}
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
  pitch,
  freshness,
}) {
  const { lead, tail } = splitTitle(title, emphasis);
  const hasStage = variant === 'editorial' && (pitch || aside);
  const className = `ht-breadcrumb-area is-${variant}${hasStage ? ' has-stage' : ''}`;

  if (variant === 'editorial') {
    return (
      <section className={className}>
        <div className="container">
          <div className="ht-breadcrumb__top">
            <Crumbs crumbs={crumbs} current={current} title={title} />
            {(meta || freshness) && (
              <ul className="ht-breadcrumb__meta">
                {meta &&
                  meta.map((m, i) => (
                    <Fragment key={`${m}-${i}`}>
                      <li>{m}</li>
                      {i < meta.length - 1 && (
                        <li className="ht-breadcrumb__sep" aria-hidden="true">·</li>
                      )}
                    </Fragment>
                  ))}
                {freshness && (
                  <li className="ht-breadcrumb__freshness">
                    <span className="ht-breadcrumb__freshness-dot" aria-hidden="true" />
                    {freshness}
                  </li>
                )}
              </ul>
            )}
          </div>
          {hasStage && (
            <div
              className={`ht-breadcrumb__stage${pitch ? ' has-pitch' : ''}${
                aside ? ' has-aside' : ''
              }`}
            >
              {pitch && <div className="ht-breadcrumb__stage-pitch">{pitch}</div>}
              {aside && <div className="ht-breadcrumb__stage-aside">{aside}</div>}
            </div>
          )}
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
