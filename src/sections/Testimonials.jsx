import { useState } from 'react';
import { IconArrow } from '../components/Icons.jsx';

const QUOTES = [
  {
    body:
      'What we valued most was what Rafał declined to sell us. Two jurisdictions were ruled out on a single call — for the right reasons. That is rare, and it paid for the engagement many times over.',
    name: 'Principal',
    role: 'Family office · Central Europe',
  },
  {
    body:
      'We had worked with two CBI agents before. Ablewski & Partners was the first to put our family’s long-term tax residency ahead of any program quota. The outcome was structurally cleaner than we thought possible.',
    name: 'Founder',
    role: 'Technology sector · GCC',
  },
  {
    body:
      'A principal-led mandate, conducted in the quietest possible way. The coordination between counsel, bank and the program unit was seamless. References available on mutual request.',
    name: 'Principal',
    role: 'Private investment holding · APAC',
  },
  {
    body:
      'They negotiated timelines, not fees — which told us everything about the service. Our relocation completed six weeks ahead of the agent consensus.',
    name: 'Managing Director',
    role: 'Energy sector · EU',
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const q = QUOTES[i];

  return (
    <section className="ap-section ap-section--ink" id="testimonials">
      <div className="ap-container">
        <div className="ap-section-head ap-reveal">
          <span className="ap-eyebrow">04 · Clients</span>
          <h2 className="ap-display">
            The quietest<br />references <em>speak loudest.</em>
          </h2>
          <p className="ap-lede">
            Our clients are not public figures. Their words below are anonymised
            and reproduced with permission; full references are available on a
            mutually-agreed, NDA-covered basis.
          </p>
        </div>

        <div className="ap-testimonials ap-reveal">
          <div className="ap-quote">
            <div className="ap-quote__mark" aria-hidden="true">“</div>
            <blockquote>{q.body}</blockquote>
            <div className="ap-quote__attrib">
              {q.name}
              <small>{q.role}</small>
            </div>
            <div className="ap-quote__nav">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => setI((i - 1 + QUOTES.length) % QUOTES.length)}
              >
                <IconArrow style={{ transform: 'rotate(180deg)' }} />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => setI((i + 1) % QUOTES.length)}
              >
                <IconArrow />
              </button>
              <span style={{
                alignSelf: 'center',
                marginLeft: '1rem',
                fontFamily: 'var(--ap-sans)',
                fontSize: '0.78rem',
                letterSpacing: '0.2em',
                color: 'rgba(244,237,224,0.5)',
              }}>
                {String(i + 1).padStart(2, '0')} / {String(QUOTES.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: 'var(--ap-step-3)', marginBottom: '1.25rem' }}>
              The brief, not the pitch.
            </h3>
            <p style={{ color: 'rgba(244,237,224,0.78)' }}>
              Each engagement begins with a one-page written brief — the outcome
              you want, the trade-offs you will accept, the ones you will not. Only
              then are programs proposed. If the brief cannot be met on acceptable
              terms, we say so, in writing.
            </p>
            <p style={{ color: 'rgba(244,237,224,0.78)' }}>
              If it can, the next step is a signed fixed-fee mandate — no success-
              weighted upside, no commission conflicts, no referrals we cannot
              defend on paper.
            </p>
            <a className="ap-link" href="#contact" style={{ marginTop: '1.25rem' }}>
              Request a brief review <IconArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
