const PILLARS = [
  {
    stat: '22',
    statSuffix: 'years',
    title: 'Expertise',
    copy:
      'Principal-led advisory across capital markets, private banking and cross-border legal structuring — no junior hand-offs, no outsourced triage.',
  },
  {
    stat: '100%',
    title: 'Discretion',
    copy:
      'Every engagement is conducted under signed NDA and on a strict name-never-discussed basis. We take referrals, not advertising leads.',
  },
  {
    stat: '100+',
    title: 'Results',
    copy:
      'Families successfully relocated and restructured across the EU, Caribbean, GCC and APAC. Every mandate measured against a written brief.',
  },
  {
    stat: '42',
    statSuffix: 'jurisdictions',
    title: 'Network',
    copy:
      'A curated panel of lawyers, bankers, real-estate counsel and licensed agents — hand-selected, conflict-checked, compensated transparently.',
  },
];

export default function WhyUs() {
  return (
    <section className="ap-section ap-section--ink" id="why">
      <div className="ap-container">
        <div className="ap-section-head ap-reveal">
          <span className="ap-eyebrow">02 · Principles</span>
          <h2 className="ap-display">
            The discipline a <em>legacy</em> deserves.
          </h2>
          <p className="ap-lede">
            Independence from providers. Accountability to the principal.
            Four tenets by which every engagement is designed, measured and,
            where warranted, declined.
          </p>
        </div>

        <div className="ap-pillars">
          {PILLARS.map((p, i) => (
            <div className="ap-pillar ap-reveal" key={p.title}>
              <div className="ap-pillar__num">0{i + 1}</div>
              <div className="ap-pillar__stat">
                {p.stat}
                {p.statSuffix && <em> · {p.statSuffix}</em>}
              </div>
              <h3>{p.title}</h3>
              <p>{p.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
