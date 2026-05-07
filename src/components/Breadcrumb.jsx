import { Fragment, useState } from 'react';
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

function DocControl({ id, category, docCode, lastRevisedAt, status = 'up-to-date', classification = 'Client' }) {
  const STATUS_LABEL = {
    'up-to-date':   'Up to date',
    'under-review': 'Under review',
    'deprecated':   'Deprecated',
  };
  return (
    <div
      id={id}
      className="ht-breadcrumb__doc-control"
      role="group"
      aria-label={`Document control: ${category} ${docCode}, last revised ${lastRevisedAt}, ${STATUS_LABEL[status]}`}
    >
      {category && (
        <span className="ht-breadcrumb__doc-control-tag">
          <span>{category}</span>
        </span>
      )}
      {docCode && (
        <span className="ht-breadcrumb__doc-control-cell">
          <span className="ht-breadcrumb__doc-control-key">Doc</span>
          <span className="ht-breadcrumb__doc-control-val">{docCode}</span>
        </span>
      )}
      {lastRevisedAt && (
        <span className="ht-breadcrumb__doc-control-cell">
          <span className="ht-breadcrumb__doc-control-key">Last revision</span>
          <span className="ht-breadcrumb__doc-control-val">{lastRevisedAt}</span>
        </span>
      )}
      <span className={`ht-breadcrumb__doc-control-cell is-status is-${status}`}>
        <span className="ht-breadcrumb__doc-control-key">Status</span>
        {status === 'up-to-date' && (
          <span className="ht-breadcrumb__doc-control-mark" aria-hidden="true" />
        )}
        <span className="ht-breadcrumb__doc-control-val">{STATUS_LABEL[status]}</span>
      </span>
      {classification && (
        <span className="ht-breadcrumb__doc-control-cell">
          <span className="ht-breadcrumb__doc-control-key">Class</span>
          <span className="ht-breadcrumb__doc-control-val">{classification}</span>
        </span>
      )}
    </div>
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
  docControl,
}) {
  const { lead, tail } = splitTitle(title, emphasis);
  const [docOpen, setDocOpen] = useState(false);
  const hasStage = variant === 'editorial' && (pitch || aside);
  const className = `ht-breadcrumb-area is-${variant}${hasStage ? ' has-stage' : ''}${
    docControl ? ' has-doc-control' : ''
  }${docControl && docOpen ? ' is-doc-open' : ''}`;

  if (variant === 'editorial') {
    return (
      <section className={className}>
        <div className="container">
          <div className="ht-breadcrumb__top">
            <Crumbs crumbs={crumbs} current={current} title={title} />
            {meta && (
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
            {docControl && (
              <button
                type="button"
                className="ht-breadcrumb__doc-toggle"
                aria-expanded={docOpen}
                aria-controls="ht-breadcrumb-doc-control"
                onClick={() => setDocOpen((v) => !v)}
              >
                <span className="ht-breadcrumb__doc-toggle-label">Doc&nbsp;control</span>
                <span className="ht-breadcrumb__doc-toggle-chevron" aria-hidden="true">
                  {docOpen ? '–' : '+'}
                </span>
              </button>
            )}
          </div>
          {docControl && (
            <DocControl id="ht-breadcrumb-doc-control" {...docControl} />
          )}
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
