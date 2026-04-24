import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.jsx';
import { BRIEFS } from '../data/briefs.js';

function renderBlock(block, i) {
  switch (block.type) {
    case 'h3':
      return <h3 key={i}>{block.text}</h3>;
    case 'quote':
      return (
        <figure key={i} className="ht-brief-article__quote">
          <blockquote>{block.text}</blockquote>
        </figure>
      );
    case 'pair':
      return (
        <div key={i} className="ht-brief-article__pair">
          {block.images.map((img) => (
            <img
              key={img.src}
              src={`/assets/img/blog/${img.src}`}
              alt={img.alt}
              loading="lazy"
            />
          ))}
        </div>
      );
    case 'p':
    default:
      return <p key={i}>{block.text}</p>;
  }
}

export default function BlogDetails() {
  const { slug } = useParams();
  const index = Math.max(0, BRIEFS.findIndex((b) => b.slug === slug));
  const brief = BRIEFS[index];
  const prev = index > 0 ? BRIEFS[index - 1] : null;
  const next = index < BRIEFS.length - 1 ? BRIEFS[index + 1] : null;

  return (
    <>
      <Breadcrumb
        title={brief.title}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Briefs', to: '/blog' },
          { label: brief.title },
        ]}
        tagline={brief.date ? `Brief · ${brief.date}` : 'Intelligence brief'}
      />
      <article className="ht-brief-article">
        <div className="container">
          <header className="ht-brief-article__header">
            <span className="ht-brief-article__cat">{brief.category}</span>
            <h1 className="ht-brief-article__title">{brief.title}</h1>
            <p className="ht-brief-article__lede">{brief.excerpt}</p>
            <div className="ht-brief-article__chip">
              <span>{brief.date}</span>
              <span className="ht-brief-article__chip-dot" aria-hidden="true">·</span>
              <span>{brief.readMinutes} min read</span>
              <span className="ht-brief-article__chip-dot" aria-hidden="true">·</span>
              <span>Mobius</span>
            </div>
          </header>

          <figure className="ht-brief-article__hero">
            <img src={`/assets/img/blog/${brief.img}`} alt={brief.title} />
          </figure>

          <div className="ht-brief-article__body">
            {brief.body && brief.body.length > 0 ? (
              brief.body.map(renderBlock)
            ) : (
              <>
                <p>{brief.excerpt}</p>
                <aside className="ht-brief-article__locked" aria-label="Brief continued for active clients">
                  <span className="ht-brief-article__locked-eyebrow">Continued for active clients</span>
                  <h2 className="ht-brief-article__locked-title">
                    The full {brief.category.toLowerCase()} memo is sent under NDA.
                  </h2>
                  <p className="ht-brief-article__locked-body">
                    We publish the lede here and circulate the full analysis privately. Request the
                    memo and we will respond within one business day.
                  </p>
                  <Link to="/contact" className="ht-brief-article__locked-cta">
                    Request the memo
                    <span aria-hidden="true">→</span>
                  </Link>
                </aside>
              </>
            )}
          </div>

          {(prev || next) && (
            <nav className="ht-brief-article__continue" aria-label="Continue reading">
              {prev ? (
                <Link to={`/blog-details/${prev.slug}`} className="ht-brief-article__nav ht-brief-article__nav--prev">
                  <span className="ht-brief-article__nav-label">
                    <span className="ht-brief-article__nav-arrow" aria-hidden="true">←</span>
                    Previous brief
                  </span>
                  <strong>{prev.title}</strong>
                </Link>
              ) : <span aria-hidden="true" />}
              {next ? (
                <Link to={`/blog-details/${next.slug}`} className="ht-brief-article__nav ht-brief-article__nav--next">
                  <span className="ht-brief-article__nav-label">
                    Next brief
                    <span className="ht-brief-article__nav-arrow" aria-hidden="true">→</span>
                  </span>
                  <strong>{next.title}</strong>
                </Link>
              ) : <span aria-hidden="true" />}
            </nav>
          )}
        </div>
      </article>
    </>
  );
}
