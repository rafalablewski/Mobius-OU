import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.jsx';
import CTABand from '../components/CTABand.jsx';
import { BRIEFS } from '../data/briefs.js';

const ALL = 'All briefs';

export default function Blog() {
  const [active, setActive] = useState(ALL);

  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(BRIEFS.map((b) => b.category)))],
    [],
  );

  const filtered = active === ALL ? BRIEFS : BRIEFS.filter((b) => b.category === active);
  const [feature, ...rest] = filtered;

  return (
    <>
      <Breadcrumb
        title="Intelligence"
        emphasis="briefs."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Briefs' }]}
        tagline="Curated intelligence · Private-client cadence"
      />
      <section className="ht-briefs section-padding">
        <div className="container">
          <div className="ht-briefs__filter" role="tablist" aria-label="Filter briefs by category">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={active === c}
                className={`ht-briefs__chip${active === c ? ' is-active' : ''}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {feature && (
            <Link to={`/blog-details/${feature.slug}`} className="ht-brief-feature">
              <img
                src={`/assets/img/blog/${feature.img}`}
                alt=""
                aria-hidden="true"
                className="ht-brief-feature__bg"
                loading="eager"
              />
              <div className="ht-brief-feature__panel">
                <span className="ht-brief-feature__eyebrow">
                  <span className="ht-brief-feature__dot" aria-hidden="true" />
                  Latest brief · {feature.category}
                </span>
                <h2 className="ht-brief-feature__title">{feature.title}</h2>
                <p className="ht-brief-feature__lede">{feature.excerpt}</p>
                <div className="ht-brief-feature__meta">
                  <span>{feature.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{feature.readMinutes} min read</span>
                  <span className="ht-brief-feature__cta" aria-hidden="true">
                    Read brief →
                  </span>
                </div>
              </div>
            </Link>
          )}

          {rest.length > 0 && (
            <ul className="ht-briefs__grid">
              {rest.map((b, i) => {
                const tone = i % 2 === 0 ? 'cream' : 'ink';
                return (
                  <li key={b.id} className={`ht-brief-tile ht-brief-tile--${tone}`}>
                    <Link to={`/blog-details/${b.slug}`} className="ht-brief-tile__link">
                      <span className="ht-brief-tile__cat">{b.category}</span>
                      <h3 className="ht-brief-tile__title">{b.title}</h3>
                      <p className="ht-brief-tile__excerpt">{b.excerpt}</p>
                      <span className="ht-brief-tile__foot">
                        <span>{b.date} · {b.readMinutes} min</span>
                        <span className="ht-brief-tile__arrow" aria-hidden="true">→</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}

          {filtered.length === 0 && (
            <p className="ht-briefs__empty">No briefs in this category yet.</p>
          )}
        </div>
      </section>
      <CTABand
        eyebrow="Private clients"
        title="Want the memo behind the brief?"
        body="Active clients receive the quarterly program re-ranking by email. One-off memos are available under NDA."
        primary={{ label: 'Request a Memo', to: '/contact' }}
        bg="ink"
      />
    </>
  );
}
