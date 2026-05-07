import { useCallback, useEffect, useState } from 'react';

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

function ContentsIconDefs() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: 'absolute' }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <symbol id="ic-about" viewBox="0 0 18 18">
          <circle cx="9" cy="9" r="7" />
          <circle className="ht-spine__contents-icon-solid" cx="9" cy="5.6" r="0.7" />
          <line x1="9" y1="8.2" x2="9" y2="13" />
        </symbol>
        <symbol id="ic-investment" viewBox="0 0 18 18">
          <circle cx="9" cy="9" r="7" />
          <path d="M6.2 6.6 Q9 4.8 11.8 6.6" />
          <path d="M6.2 11.4 Q9 13.2 11.8 11.4" />
          <line x1="9" y1="3.5" x2="9" y2="14.5" />
        </symbol>
        <symbol id="ic-benefits" viewBox="0 0 18 18">
          <path d="M9 2.2 L10.65 6.55 L15.4 6.85 L11.75 9.85 L13.05 14.5 L9 11.85 L4.95 14.5 L6.25 9.85 L2.6 6.85 L7.35 6.55 Z" />
        </symbol>
        <symbol id="ic-eligibility" viewBox="0 0 18 18">
          <circle cx="5" cy="9" r="3" />
          <line x1="8" y1="9" x2="16" y2="9" />
          <line x1="13" y1="9" x2="13" y2="11.7" />
          <line x1="15.5" y1="9" x2="15.5" y2="10.8" />
        </symbol>
        <symbol id="ic-documents" viewBox="0 0 18 18">
          <path d="M5 4 L11 4 L13.2 6.2 L13.2 14 L5 14 Z" />
          <path d="M11 4 L11 6.2 L13.2 6.2" />
          <line x1="6.6" y1="9" x2="11.6" y2="9" />
          <line x1="6.6" y1="11.4" x2="11.6" y2="11.4" />
        </symbol>
        <symbol id="ic-process" viewBox="0 0 18 18">
          <line x1="3" y1="9" x2="15" y2="9" />
          <circle className="ht-spine__contents-icon-solid" cx="3.5" cy="9" r="1.4" />
          <circle cx="9" cy="9" r="1.4" />
          <circle cx="14.5" cy="9" r="1.4" />
        </symbol>
        <symbol id="ic-visa-free" viewBox="0 0 18 18">
          <circle cx="9" cy="9" r="7" />
          <ellipse cx="9" cy="9" rx="3" ry="7" />
          <line x1="2" y1="9" x2="16" y2="9" />
        </symbol>
        <symbol id="ic-case-studies" viewBox="0 0 18 18">
          <path d="M4 12.5 Q4 5.5 7.5 5 L7.5 7.2 Q5.8 7.4 5.8 9 L7.5 9 L7.5 12.5 Z" />
          <path d="M11 12.5 Q11 5.5 14.5 5 L14.5 7.2 Q12.8 7.4 12.8 9 L14.5 9 L14.5 12.5 Z" />
        </symbol>
        <symbol id="ic-licenses" viewBox="0 0 18 18">
          <path d="M9 2 L15 4 L15 9.2 Q15 13 9 16 Q3 13 3 9.2 L3 4 Z" />
          <path d="M6.4 9.2 L8.1 10.9 L11.6 7.4" />
        </symbol>
      </defs>
    </svg>
  );
}

function ContentsPage() {
  const [open, setOpen] = useState(false);
  return (
    <section
      className={`ht-spine__contents${open ? ' is-open' : ''}`}
      id="contents"
    >
      <ContentsIconDefs />
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
          className="ht-spine__contents-grid"
          id="contents-list"
          hidden={!open}
        >
          {CHAPTER_DEFINITIONS.map((c) => (
            <li key={c.id} className="ht-spine__contents-cell">
              <a
                href={`#${c.id}`}
                className="ht-spine__contents-cell-face"
                onClick={() => setOpen(false)}
              >
                <span className="ht-spine__contents-corner ht-spine__contents-corner--tl" aria-hidden="true" />
                <span className="ht-spine__contents-corner ht-spine__contents-corner--br" aria-hidden="true" />
                <span className="ht-spine__contents-numeral">{c.numeral}</span>
                <span className="ht-spine__contents-foot">
                  <svg className="ht-spine__contents-icon" aria-hidden="true">
                    <use href={`#ic-${c.id}`} />
                  </svg>
                  <span className="ht-spine__contents-label">{c.label}</span>
                </span>
              </a>
            </li>
          ))}
          <li
            className="ht-spine__contents-cell ht-spine__contents-cell--colophon"
            aria-hidden="true"
          >
            <span className="ht-spine__contents-cell-face">
              <span className="ht-spine__contents-corner ht-spine__contents-corner--tl" aria-hidden="true" />
              <span className="ht-spine__contents-corner ht-spine__contents-corner--br" aria-hidden="true" />
              <span className="ht-spine__contents-numeral">·</span>
              <span className="ht-spine__contents-foot">
                <span className="ht-spine__contents-label">
                  Mobius Dossier · Edition 2026.Q1 · printed by hand for the family.
                </span>
              </span>
            </span>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default function ProgramSpine({ program }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = CHAPTER_DEFINITIONS.length;

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add('has-program-spine');
    return () => html.classList.remove('has-program-spine');
  }, []);

  // Keep --ht-spine-band-top in sync with the actual rendered height of the
  // fixed page header. A hard-coded 82px drifts whenever the header chrome
  // changes (or differs across breakpoints), which leaves a visible seam
  // between the header bottom and the sticky chapter band on mobile.
  useEffect(() => {
    const html = document.documentElement;
    const update = () => {
      const header = document.getElementById('header-sticky');
      if (!header) return;
      const h = Math.round(header.getBoundingClientRect().height);
      if (h > 0) html.style.setProperty('--ht-spine-band-top', `${h}px`);
    };
    update();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(update) : null;
    const header = document.getElementById('header-sticky');
    if (ro && header) ro.observe(header);
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      if (ro) ro.disconnect();
      html.style.removeProperty('--ht-spine-band-top');
    };
  }, []);

  const scrollToChapter = useCallback((idx) => {
    if (idx < 0 || idx >= total) return;
    const el = document.getElementById(CHAPTER_DEFINITIONS[idx].id);
    if (!el) return;
    const offset = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--ht-spine-band-top'),
    ) || 82;
    // scrollIntoView({block:'start'}) honors scroll-margin-top inconsistently
    // on iOS Safari, which is why the pager felt stuck on mobile. Computing
    // the target manually and calling window.scrollTo is reliable everywhere.
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }, [total]);

  // Track which chapter is currently in view so J/K keyboard navigation
  // advances from the right place. The active chapter is the topmost one
  // whose top has crossed the sticky band offset (--ht-spine-band-top).
  useEffect(() => {
    const sections = CHAPTER_DEFINITIONS
      .map((c) => document.getElementById(c.id))
      .filter(Boolean);
    if (sections.length === 0) return undefined;

    const update = () => {
      const offset = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--ht-spine-band-top'),
      ) || 82;
      let current = 0;
      for (let i = 0; i < sections.length; i += 1) {
        const top = sections[i].getBoundingClientRect().top;
        if (top - offset <= 1) current = i;
        else break;
      }
      setActiveIndex(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target;
      if (t && t.matches && t.matches('input, textarea, select, [contenteditable="true"]')) return;
      if (e.key === 'j' || e.key === 'J') {
        e.preventDefault();
        scrollToChapter(activeIndex + 1);
      } else if (e.key === 'k' || e.key === 'K') {
        e.preventDefault();
        scrollToChapter(activeIndex - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex, scrollToChapter]);

  return (
    <div className="ht-spine">
      <ContentsPage />
      {CHAPTER_DEFINITIONS.map((chapter, i) => {
        const Renderer = CHAPTER_RENDERERS[chapter.id];
        const isFirst = i === 0;
        const isLast = i === total - 1;
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
                <span className="ht-spine__band-pager" role="group" aria-label="Chapter pager">
                  <button
                    type="button"
                    className="ht-spine__band-pager-btn"
                    onClick={() => scrollToChapter(i - 1)}
                    disabled={isFirst}
                    aria-label="Previous chapter"
                  >
                    <span aria-hidden="true">↑</span>
                  </button>
                  <span className="ht-spine__band-pager-vbar" aria-hidden="true" />
                  <button
                    type="button"
                    className="ht-spine__band-pager-btn"
                    onClick={() => scrollToChapter(i + 1)}
                    disabled={isLast}
                    aria-label="Next chapter"
                  >
                    <span aria-hidden="true">↓</span>
                  </button>
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
