import { useState } from 'react';

const TRACKS = {
  rbi: {
    label: 'Residency (RBI)',
    programs: [
      {
        country: 'Portugal',
        name: 'Golden Residence',
        investment: '€ 500,000',
        investmentDetail: 'Qualifying fund subscription',
        timeline: '6 – 9 months',
        stay: '7 days / year',
        citizenship: 'Eligible after 5 years',
        benefits: 'Schengen mobility · EU treaty access · no worldwide tax by default',
      },
      {
        country: 'Greece',
        name: 'Golden Visa',
        investment: '€ 250,000',
        investmentDetail: 'Real estate (raised zones: € 500k)',
        timeline: '3 – 6 months',
        stay: 'No minimum',
        citizenship: 'Eligible after 7 years',
        benefits: 'Schengen mobility · family included · passive holding permitted',
      },
      {
        country: 'U.A.E.',
        name: 'Golden Visa (10-yr)',
        investment: 'AED 2M',
        investmentDetail: 'Real estate or public fund',
        timeline: '30 – 60 days',
        stay: 'Flexible',
        citizenship: 'Not available',
        benefits: '0% personal income tax · banking access · multi-generation sponsorship',
      },
      {
        country: 'Italy',
        name: 'Investor Visa',
        investment: '€ 250,000',
        investmentDetail: 'Innovative start-up route',
        timeline: '4 – 6 months',
        stay: 'No fixed minimum',
        citizenship: 'Eligible after 10 years',
        benefits: '€100k flat-tax regime · Schengen · world-class private banking',
      },
    ],
  },
  cbi: {
    label: 'Citizenship (CBI)',
    programs: [
      {
        country: 'Malta',
        name: 'Citizenship by Exceptional Services',
        investment: '€ 690,000+',
        investmentDetail: 'Contribution + real estate + donation',
        timeline: '12 – 36 months',
        stay: 'Residency required prior',
        citizenship: 'Full EU passport',
        benefits: 'EU citizenship · top-tier visa-free access · treaty network',
      },
      {
        country: 'Saint Kitts & Nevis',
        name: 'CBI — Sustainable Island Contribution',
        investment: 'USD 250,000',
        investmentDetail: 'Non-refundable contribution',
        timeline: '4 – 6 months',
        stay: 'No residency requirement',
        citizenship: 'Granted within process',
        benefits: 'Visa-free to 150+ jurisdictions · no worldwide taxation',
      },
      {
        country: 'Dominica',
        name: 'CBI — Economic Diversification Fund',
        investment: 'USD 200,000',
        investmentDetail: 'Non-refundable contribution',
        timeline: '4 – 6 months',
        stay: 'No residency requirement',
        citizenship: 'Granted within process',
        benefits: 'Schengen · UK · Singapore visa-free · dual citizenship allowed',
      },
      {
        country: 'Antigua & Barbuda',
        name: 'CBI — National Development Fund',
        investment: 'USD 230,000',
        investmentDetail: 'Family of 4 contribution',
        timeline: '4 – 8 months',
        stay: '5 days within 5 years',
        citizenship: 'Granted within process',
        benefits: 'Commonwealth standing · 150+ visa-free · favourable inheritance rules',
      },
    ],
  },
};

const ROWS = [
  { key: 'investment', label: 'Minimum investment' },
  { key: 'timeline',   label: 'Indicative timeline' },
  { key: 'stay',       label: 'Physical presence' },
  { key: 'citizenship', label: 'Path to citizenship' },
  { key: 'benefits',   label: 'Principal benefits' },
];

export default function Programs() {
  const [track, setTrack] = useState('rbi');
  const active = TRACKS[track];

  return (
    <section className="ap-section ap-section--cream" id="programs">
      <div className="ap-container">
        <div className="ap-section-head ap-reveal">
          <span className="ap-eyebrow">03 · Programs</span>
          <h2 className="ap-display">
            A curated shortlist<br />— nothing more, <em>nothing less.</em>
          </h2>
          <p className="ap-lede">
            Side-by-side comparison of the programs we consistently recommend for
            private clients in 2025. Figures are indicative minimums; final
            structuring depends on jurisdiction of origin, family composition and
            long-term residency intent.
          </p>

          <div className="ap-programs__switch" role="tablist" aria-label="Program track">
            {Object.entries(TRACKS).map(([id, t]) => (
              <button
                key={id}
                role="tab"
                aria-selected={track === id}
                className={track === id ? 'is-active' : ''}
                onClick={() => setTrack(id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="ap-programs__wrap ap-reveal">
          <table className="ap-programs__table">
            <thead>
              <tr>
                <th scope="col">Criterion</th>
                {active.programs.map((p) => (
                  <th scope="col" key={p.country}>
                    <span className="ap-country">{p.country}</span>
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.key}>
                  <th scope="row">{r.label}</th>
                  {active.programs.map((p) => (
                    <td key={p.country + r.key}>
                      <span className="ap-val">{p[r.key]}</span>
                      {r.key === 'investment' && p.investmentDetail && (
                        <span className="ap-val--muted">{p.investmentDetail}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="ap-disclaimer ap-reveal" style={{ marginTop: '2rem' }}>
          Indicative figures, current April 2025. Not legal, tax or investment advice.
        </div>
      </div>
    </section>
  );
}
