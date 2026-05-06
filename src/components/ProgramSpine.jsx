import { useEffect, useState } from 'react';

const CHAPTER_DEFINITIONS = [
  { id: 'about',         numeral: 'I',    label: 'About' },
  { id: 'investment',    numeral: 'II',   label: 'Investment' },
  { id: 'benefits',      numeral: 'III',  label: 'Benefits' },
  { id: 'eligibility',   numeral: 'IV',   label: 'Eligibility' },
  { id: 'documents',     numeral: 'V',    label: 'Documents' },
  { id: 'process',       numeral: 'VI',   label: 'Process' },
  { id: 'visa-free',     numeral: 'VII',  label: 'Visa-Free Countries' },
  { id: 'case-studies',  numeral: 'VIII', label: 'Case Studies' },
  { id: 'licenses',      numeral: 'IX',   label: 'Our Licenses' },
];

// Mirrors PROGRAM_PITCH in ProgramPage.jsx (used by HeroPitchCard).
// Same source copy — rendered text-only here, with icons in the hero.
const PROGRAM_BENEFITS = [
  {
    kicker: 'Mobility',
    title: 'Freedom of movement',
    body:
      'Visa-free or visa-on-arrival access across the OECD, plus a second jurisdiction the family can actually live in — schooling, healthcare and tax all mapped before you commit.',
  },
  {
    kicker: 'Tax',
    title: 'Tax positioning',
    body:
      'Residency and tax-resident status modelled against the family’s real income picture — not a brochure assumption. We tell you the break-even before the application is filed.',
  },
  {
    kicker: 'Family',
    title: 'Family & legacy',
    body:
      'Spouse, children — including adult dependants where the rules allow — and where relevant parents and grandparents, sequenced into a single mandate rather than separate filings.',
  },
];

function pad2(n) {
  return String(n).padStart(2, '0');
}

function FallbackPanel() {
  return (
    <div className="ht-spine__fallback">
      <p className="ht-spine__fallback-body">
        Specifics for this program are shared on the first call — under NDA.
      </p>
      <a href="/contact" className="ht-spine__fallback-link">
        Schedule a call <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}

function ChapterAbout({ program }) {
  return (
    <div className="ht-program__summary">
      <h2>At a glance</h2>
      <p>{program.summary}</p>
      {Array.isArray(program.notes) && program.notes.length > 0 && (
        <>
          <h3>What we actually think</h3>
          <ul className="ht-program__notes">
            {program.notes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

function ChapterInvestment({ program }) {
  const facts = Array.isArray(program.facts) ? program.facts : [];
  if (facts.length === 0) return <FallbackPanel />;
  const [headline, ...sidecar] = facts;
  return (
    <div className="ht-program__facts">
      <div className="ht-program__fact-hero">
        <span className="ht-program__fact-hero-label">{headline.label}</span>
        <span className="ht-program__fact-hero-value">{headline.value}</span>
        <span className="ht-program__fact-hero-tag">Headline figure</span>
      </div>
      {sidecar.length > 0 && (
        <ul className="ht-program__fact-sidecar">
          {sidecar.map((f) => (
            <li key={f.label} className="ht-program__fact-sidecar-item">
              <span className="ht-program__fact-sidecar-label">{f.label}</span>
              <span className="ht-program__fact-sidecar-value">{f.value}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ChapterBenefits() {
  return (
    <div className="ht-spine__benefits-grid">
      {PROGRAM_BENEFITS.map((b) => (
        <article key={b.kicker} className="ht-spine__benefit">
          <span className="ht-spine__benefit-kicker">{b.kicker}</span>
          <h3 className="ht-spine__benefit-title">{b.title}</h3>
          <p className="ht-spine__benefit-body">{b.body}</p>
        </article>
      ))}
    </div>
  );
}

function ChapterProcess({ program }) {
  const timeline = Array.isArray(program.timeline) ? program.timeline : [];
  if (timeline.length === 0) return <FallbackPanel />;
  return (
    <aside className="ht-program__timeline">
      <h3>Engagement timeline</h3>
      <ol>
        {timeline.map((t) => (
          <li key={t.step}>
            <span className="ht-program__timeline-step">{t.step}</span>
            <span className="ht-program__timeline-weeks">{t.weeks}</span>
            <p>{t.body}</p>
          </li>
        ))}
      </ol>
    </aside>
  );
}

const CHAPTER_RENDERERS = {
  about: ChapterAbout,
  investment: ChapterInvestment,
  benefits: ChapterBenefits,
  eligibility: FallbackPanel,
  documents: FallbackPanel,
  process: ChapterProcess,
  'visa-free': FallbackPanel,
  'case-studies': FallbackPanel,
  licenses: FallbackPanel,
};

function ContentsPage() {
  const [open, setOpen] = useState(false);
  return (
    <section
      className={`ht-spine__contents${open ? ' is-open' : ''}`}
      id="contents"
    >
      <div className="container">
        <button
          type="button"
          className="ht-spine__contents-toggle"
          aria-expanded={open}
          aria-controls="contents-list"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="ht-spine__contents-eyebrow">Contents</span>
          <span className="ht-spine__contents-meta">9 chapters</span>
          <span className="ht-spine__contents-chevron" aria-hidden="true">
            {open ? '–' : '+'}
          </span>
        </button>
        <ol
          className="ht-spine__contents-list"
          id="contents-list"
          hidden={!open}
        >
          {CHAPTER_DEFINITIONS.map((c, i) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                className="ht-spine__contents-link"
                onClick={() => setOpen(false)}
              >
                <span className="ht-spine__contents-numeral">{c.numeral}</span>
                <span className="ht-spine__contents-label">{c.label}</span>
                <span className="ht-spine__contents-leader" aria-hidden="true"></span>
                <span className="ht-spine__contents-page">{pad2(i + 1)}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default function ProgramSpine({ program }) {
  useEffect(() => {
    const html = document.documentElement;
    html.classList.add('has-program-spine');
    return () => html.classList.remove('has-program-spine');
  }, []);

  return (
    <div className="ht-spine">
      <ContentsPage />
      {CHAPTER_DEFINITIONS.map((chapter, i) => {
        const Renderer = CHAPTER_RENDERERS[chapter.id];
        return (
          <section
            key={chapter.id}
            id={chapter.id}
            className="ht-spine__chapter"
            aria-labelledby={`chapter-${chapter.id}-band`}
          >
            <header
              className="ht-spine__band"
              id={`chapter-${chapter.id}-band`}
            >
              <div className="container ht-spine__band-row">
                <span className="ht-spine__band-numeral">{chapter.numeral}</span>
                <span className="ht-spine__band-sep" aria-hidden="true">·</span>
                <span className="ht-spine__band-label">{chapter.label}</span>
                <span className="ht-spine__band-counter">
                  {pad2(i + 1)} <span aria-hidden="true">/</span> 09
                </span>
              </div>
            </header>
            <div className="ht-spine__chapter-body">
              <div className="container">
                <Renderer program={program} />
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
