import { useState } from 'react';

const STEPS = [
  {
    title: 'Strategic Assessment',
    body:
      'Intake under NDA and a written scope document. We understand who we are advising, what outcomes actually matter, and the real constraints — tax, schooling, timing — before any program is named.',
  },
  {
    title: 'Jurisdiction Architecture',
    body:
      'A ranked memo across two or three jurisdictions, written on merit. Programs are scored on political stability, family fit, presence cost and the five-year end state — not on who pays placement commissions.',
  },
  {
    title: 'Due Diligence & Documentation',
    body:
      'Source-of-funds pack, compliance screening, apostilles, translations. Every file leaves the desk at a tier-one private-bank standard so enhanced due diligence clears without re-work.',
  },
  {
    title: 'Application Management',
    body:
      'Biometrics, fund selection, local counsel coordination, appointment scheduling. One senior advisor owns every touchpoint — nothing is delegated to a junior or an intake desk.',
  },
  {
    title: 'Post-Approval Integration',
    body:
      'Tax residency sequencing, banking, schooling, succession structures. The mandate does not end at the card — it ends when the family is operating in the new jurisdiction without surprises.',
  },
];

export default function Approach() {
  const [open, setOpen] = useState(0);

  return (
    <section className="ht-approach-v2">
      <div className="container">
        <header className="ht-approach-v2__head">
          <span className="ht-approach-v2__eyebrow">Engagement Method</span>
          <h2 className="ht-approach-v2__title">
            A structured <em>engagement.</em>
          </h2>
          <p className="ht-approach-v2__lede">
            Every mandate follows the same rigorous methodology. A single senior advisor owns your file from first contact to passport in hand. No handoffs.
          </p>
        </header>

        <ol className="ht-approach-v2__steps">
          {STEPS.map((step, i) => {
            const isOpen = i === open;
            const num = String(i + 1).padStart(2, '0');
            return (
              <li
                key={step.title}
                className={`ht-approach-v2__step${isOpen ? ' is-open' : ''}`}
              >
                <button
                  type="button"
                  className="ht-approach-v2__trigger"
                  aria-expanded={isOpen}
                  aria-controls={`approach-panel-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="ht-approach-v2__num">{num}</span>
                  <span className="ht-approach-v2__step-title">{step.title}</span>
                  <span className="ht-approach-v2__chev" aria-hidden="true">
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </button>
                <div
                  id={`approach-panel-${i}`}
                  className="ht-approach-v2__panel"
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <div className="ht-approach-v2__panel-inner">
                    <p>{step.body}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
