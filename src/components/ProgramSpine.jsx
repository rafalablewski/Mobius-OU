import { useEffect } from 'react';

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

const LICENSES = [
  {
    regulator: 'Polish Bar Council',
    body:
      'Counsel rendered under the rules of the Polish Bar (Adwokatura Polska); members maintain professional indemnity in line with national requirements.',
    refLine: 'Adwokatura Polska — Warsaw',
  },
  {
    regulator: 'Corporate-services authorisation',
    body:
      'Authorised corporate-services provider for the EU and Caribbean program registries we file with directly; sub-agents declared by name on every mandate.',
    refLine: 'CSC-EU · 2024-118',
  },
  {
    regulator: 'AML / KYC framework',
    body:
      'Onboarding aligned with EU 6AMLD and FATF recommendations; enhanced due diligence runs on every file before quotation, regardless of program size.',
    refLine: 'AML · 2025.Q1',
  },
];

function pad2(n) {
  return String(n).padStart(2, '0');
}

function FallbackPanel({ title, microcopy }) {
  return (
    <div className="ht-spine__fallback">
      <h3 className="ht-spine__heading">{title}</h3>
      <p className="ht-spine__body">
        {microcopy ||
          'This chapter is tailored to the family on the first call. We share the specifics under NDA — not on a brochure.'}
      </p>
      <a href="/contact" className="ht-spine__fallback-link">
        Schedule a call <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}

function ChapterAbout({ program }) {
  return (
    <div className="ht-spine__grid ht-spine__grid--lead-aside">
      <div className="ht-spine__lead">
        <p className="ht-spine__lede">{program.tagline}</p>
        <p className="ht-spine__body">{program.summary}</p>
      </div>
      {Array.isArray(program.notes) && program.notes.length > 0 && (
        <aside className="ht-spine__aside">
          <h3 className="ht-spine__aside-title">What we actually think</h3>
          <ul className="ht-spine__aside-list">
            {program.notes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  );
}

function ChapterInvestment({ program }) {
  const facts = Array.isArray(program.facts) ? program.facts : [];
  const [headline, ...sidecar] = facts;
  return (
    <div className="ht-spine__investment">
      {headline && (
        <div className="ht-spine__fact-hero">
          <span className="ht-spine__fact-hero-label">{headline.label}</span>
          <span className="ht-spine__fact-hero-value">{headline.value}</span>
          <span className="ht-spine__fact-hero-tag">Headline figure</span>
        </div>
      )}
      {sidecar.length > 0 && (
        <ul className="ht-spine__fact-sidecar">
          {sidecar.map((f) => (
            <li key={f.label} className="ht-spine__fact-sidecar-item">
              <span className="ht-spine__fact-sidecar-label">{f.label}</span>
              <span className="ht-spine__fact-sidecar-value">{f.value}</span>
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

function ChapterEligibility({ program }) {
  if (!program.eligibility) {
    return <FallbackPanel title={`Eligibility for ${program.name}`} />;
  }
  const { dependants, requirements = [] } = program.eligibility;
  return (
    <div className="ht-spine__grid ht-spine__grid--lead-aside">
      <div className="ht-spine__lead">
        <h3 className="ht-spine__heading">Who qualifies — with whom.</h3>
        <p className="ht-spine__body">{dependants}</p>
      </div>
      {requirements.length > 0 && (
        <aside className="ht-spine__aside">
          <h3 className="ht-spine__aside-title">Conditions</h3>
          <ul className="ht-spine__aside-list">
            {requirements.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  );
}

function ChapterDocuments({ program }) {
  if (!Array.isArray(program.documents) || program.documents.length === 0) {
    return <FallbackPanel title="The portfolio you’ll prepare" />;
  }
  return (
    <div className="ht-spine__docs-wrap">
      <h3 className="ht-spine__heading">The portfolio you’ll prepare.</h3>
      <ol className="ht-spine__docs-list">
        {program.documents.map((d, i) => (
          <li key={i} className="ht-spine__docs-item">
            <span className="ht-spine__docs-num">{pad2(i + 1)}</span>
            <span className="ht-spine__docs-text">{d}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ChapterProcess({ program }) {
  const timeline = Array.isArray(program.timeline) ? program.timeline : [];
  if (timeline.length === 0) {
    return <FallbackPanel title="How the engagement runs" />;
  }
  return (
    <div className="ht-spine__process">
      <h3 className="ht-spine__heading">How the engagement runs.</h3>
      <ol className="ht-spine__timeline">
        {timeline.map((t, i) => (
          <li key={t.step} className="ht-spine__timeline-item">
            <span className="ht-spine__timeline-num">{pad2(i + 1)}</span>
            <div className="ht-spine__timeline-meta">
              <span className="ht-spine__timeline-step">{t.step}</span>
              <span className="ht-spine__timeline-weeks">{t.weeks}</span>
            </div>
            <p className="ht-spine__timeline-body">{t.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ChapterVisaFree({ program }) {
  if (!program.visaFree) {
    return <FallbackPanel title="Visa-free access" />;
  }
  const { count, headline, regions = [] } = program.visaFree;
  return (
    <div className="ht-spine__grid ht-spine__grid--lead-aside">
      <div className="ht-spine__lead">
        <span className="ht-spine__big-figure">{count}</span>
        <p className="ht-spine__body">{headline}</p>
      </div>
      {regions.length > 0 && (
        <aside className="ht-spine__aside">
          <h3 className="ht-spine__aside-title">Where it lands</h3>
          <ul className="ht-spine__aside-list ht-spine__aside-list--compact">
            {regions.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  );
}

function ChapterCaseStudies({ program }) {
  const cases = Array.isArray(program.caseStudies) ? program.caseStudies : [];
  if (cases.length === 0) {
    return (
      <FallbackPanel
        title="Cases"
        microcopy="Anonymised case studies are shared under NDA on the first call — not posted to the open web."
      />
    );
  }
  return (
    <div className="ht-spine__cases">
      <h3 className="ht-spine__heading">Three families, anonymised.</h3>
      <div className="ht-spine__cases-grid">
        {cases.map((c, i) => (
          <article key={i} className="ht-spine__case">
            <span className="ht-spine__case-num">{pad2(i + 1)}</span>
            <h4 className="ht-spine__case-profile">{c.profile}</h4>
            <p className="ht-spine__case-brief">{c.brief}</p>
            <p className="ht-spine__case-outcome">
              <span className="ht-spine__case-outcome-label">Outcome</span>
              <span>{c.outcome}</span>
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

function ChapterLicenses() {
  return (
    <div className="ht-spine__licenses-wrap">
      <h3 className="ht-spine__heading">Where we’re authorised.</h3>
      <div className="ht-spine__licenses">
        {LICENSES.map((l) => (
          <article key={l.regulator} className="ht-spine__license">
            <header className="ht-spine__license-head">
              <span className="ht-spine__license-regulator">{l.regulator}</span>
              <span className="ht-spine__license-ref">{l.refLine}</span>
            </header>
            <p className="ht-spine__license-body">{l.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

const CHAPTER_RENDERERS = {
  about: ChapterAbout,
  investment: ChapterInvestment,
  benefits: ChapterBenefits,
  eligibility: ChapterEligibility,
  documents: ChapterDocuments,
  process: ChapterProcess,
  'visa-free': ChapterVisaFree,
  'case-studies': ChapterCaseStudies,
  licenses: ChapterLicenses,
};

function ContentsPage({ program }) {
  return (
    <section
      className="ht-spine__contents"
      id="contents"
      aria-labelledby="contents-heading"
    >
      <div className="container">
        <article className="ht-spine__contents-card">
          <div className="ht-spine__contents-eyebrow">— Contents —</div>
          <h2 className="ht-spine__contents-heading" id="contents-heading">
            In this <em>dossier</em>.
          </h2>
          <p className="ht-spine__contents-deck">
            Nine chapters · one reading arc — {program.name.toLowerCase()},
            walked end to end.
          </p>
          <ol className="ht-spine__contents-list">
            {CHAPTER_DEFINITIONS.map((c, i) => (
              <li key={c.id}>
                <a href={`#${c.id}`} className="ht-spine__contents-link">
                  <span className="ht-spine__contents-numeral">{c.numeral}</span>
                  <span className="ht-spine__contents-label">{c.label}</span>
                  <span className="ht-spine__contents-leader" aria-hidden="true"></span>
                  <span className="ht-spine__contents-page">{pad2(i + 1)}</span>
                </a>
              </li>
            ))}
          </ol>
          <a href="#about" className="ht-spine__contents-begin">
            Begin reading <span aria-hidden="true">↓</span>
          </a>
        </article>
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
      <ContentsPage program={program} />
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
