import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.jsx';
import CTABand from '../components/CTABand.jsx';
import { PROGRAMS, PROGRAMS_BY_SLUG } from '../data/programs.js';

export default function ProgramPage() {
  const { slug } = useParams();
  const program = PROGRAMS_BY_SLUG[slug];

  if (!program) {
    return <Navigate to="/pricing" replace />;
  }

  const related = PROGRAMS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Breadcrumb title={program.name} current={program.region} />
      <section className="ht-program">
        <div className="container">
          <div className="ht-program__head">
            <div className="ht-program__intro">
              <span className="ht-program__eyebrow">{program.region}</span>
              <h1 className="ht-program__title">{program.name}</h1>
              <p className="ht-program__tagline">{program.tagline}</p>
              <Link to="/contact" className="ht-btn style-2 ht-program__cta">
                Schedule Consultation
                <i className="fa-solid fa-arrow-right" aria-hidden="true" style={{ marginLeft: 10 }}></i>
              </Link>
            </div>
            <div className="ht-program__hero">
              <img src={program.heroImg} alt={program.name} loading="lazy" />
            </div>
          </div>

          <div className="ht-program__facts">
            {program.facts.map((f) => (
              <div className="ht-program__fact" key={f.label}>
                <span className="ht-program__fact-label">{f.label}</span>
                <span className="ht-program__fact-value">{f.value}</span>
              </div>
            ))}
          </div>

          <div className="ht-program__body">
            <div className="ht-program__summary">
              <h2>At a glance</h2>
              <p>{program.summary}</p>
              <h3>What we actually think</h3>
              <ul className="ht-program__notes">
                {program.notes.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            </div>
            <aside className="ht-program__timeline">
              <h3>Engagement timeline</h3>
              <ol>
                {program.timeline.map((t) => (
                  <li key={t.step}>
                    <span className="ht-program__timeline-step">{t.step}</span>
                    <span className="ht-program__timeline-weeks">{t.weeks}</span>
                    <p>{t.body}</p>
                  </li>
                ))}
              </ol>
            </aside>
          </div>

          {related.length > 0 && (
            <div className="ht-program__related">
              <span className="ht-program__eyebrow">Related programs</span>
              <div className="ht-program__related-grid">
                {related.map((r) => (
                  <Link to={`/programs/${r.slug}`} className="ht-program__related-card" key={r.slug}>
                    <span className="ht-program__related-thumb">
                      <img src={r.heroImg} alt="" loading="lazy" />
                    </span>
                    <span className="ht-program__related-body">
                      <span className="ht-program__related-region">{r.region}</span>
                      <span className="ht-program__related-name">{r.name}</span>
                      <span className="ht-program__related-link">Explore <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <CTABand
        eyebrow="Next step"
        title="Before you commit to this program, hear our read."
        body="Most first calls end with a clear yes, no or redirect. Tell us the situation — we respond under NDA within two business days."
        primary={{ label: 'Schedule Consultation', to: '/contact' }}
        secondary={{ label: 'Programs & Fees', to: '/pricing' }}
        bg="ink"
      />
    </>
  );
}
