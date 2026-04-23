const PRINCIPLES = [
  {
    title: 'Absolute discretion',
    body:
      'We operate under strict NDAs. Your mandate, identity, and family affairs are handled with the same confidentiality as a tier-one private bank.',
  },
  {
    title: 'End-to-end accountability',
    body:
      'A single senior advisor owns your file throughout. No handoffs, no junior teams left to manage critical decisions on your behalf.',
  },
  {
    title: 'Complete fee transparency',
    body:
      'Fixed fees agreed upfront. No referral kickbacks from developers, funds, or banks. Your interests are our only loyalty.',
  },
  {
    title: 'Programme-independent advice',
    body:
      'We advise across all jurisdictions with complete objectivity. We take no government appointment fees that could bias our recommendations.',
  },
  {
    title: 'Multi-generational perspective',
    body:
      'We think about succession, education, and the long-term value of our recommended jurisdictions — not just today’s approval rate.',
  },
];

export default function Principles() {
  return (
    <section className="ht-principles">
      <div className="container">
        <div className="ht-principles__grid">
          <header className="ht-principles__head">
            <span className="ht-principles__eyebrow">House Rules</span>
            <h2 className="ht-principles__title">
              The principles that guide <em>every mandate.</em>
            </h2>
            <p className="ht-principles__lede">
              Five non-negotiables that sit behind every recommendation we put in writing.
            </p>
          </header>
          <ol className="ht-principles__list">
            {PRINCIPLES.map((p, i) => (
              <li
                key={p.title}
                className="ht-principles__item wow fadeInUp"
                data-wow-delay={`${0.1 + i * 0.1}s`}
              >
                <span className="ht-principles__numeral" aria-hidden="true" />
                <div className="ht-principles__copy">
                  <h3 className="ht-principles__item-title">{p.title}</h3>
                  <p className="ht-principles__item-body">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
