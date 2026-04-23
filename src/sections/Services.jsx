import {
  IconPassport,
  IconGlobe,
  IconGraph,
  IconShield,
  IconFamily,
  IconDiamond,
  IconArrow,
} from '../components/Icons.jsx';

const SERVICES = [
  {
    icon: IconPassport,
    title: 'Citizenship by Investment',
    copy:
      'Confidential access to tier-one CBI programs — from Caribbean passports to selective European routes — underwritten by independent due diligence.',
  },
  {
    icon: IconGlobe,
    title: 'Residency by Investment',
    copy:
      'EU Golden Visas and long-stay residence permits structured around your mobility, tax and family priorities rather than off-the-shelf thresholds.',
  },
  {
    icon: IconGraph,
    title: 'Tax Residency Planning',
    copy:
      'Multi-jurisdiction residency strategies that survive scrutiny — CRS, exit taxation, substance requirements and treaty mapping addressed upfront.',
  },
  {
    icon: IconShield,
    title: 'Asset Protection',
    copy:
      'Trusts, foundations and holding structures calibrated to your jurisdictional exposure — preserving privacy without sacrificing compliance.',
  },
  {
    icon: IconFamily,
    title: 'Family Relocation',
    copy:
      'End-to-end relocation for principals, spouses and children — schools, healthcare, housing and successional planning coordinated in one mandate.',
  },
  {
    icon: IconDiamond,
    title: 'Investment Strategy',
    copy:
      'Cross-border allocation advice for capital that follows residency — denominated in the currencies, markets and horizons that matter to your household.',
  },
];

export default function Services() {
  return (
    <section className="ap-section ap-section--cream" id="services">
      <div className="ap-container">
        <div className="ap-section-head ap-reveal">
          <span className="ap-eyebrow">01 · Practice</span>
          <h2 className="ap-display">
            A narrow remit,<br />executed <em>without compromise.</em>
          </h2>
          <p className="ap-lede">
            Six interlocking mandates that, together, move a family across borders
            with its capital, dignity and options intact. We do not take every engagement —
            we take those where independence materially changes the outcome.
          </p>
        </div>

        <div className="ap-services__grid ap-reveal">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <article className="ap-service" key={s.title}>
                <div className="ap-service__num">
                  {String(i + 1).padStart(2, '0')} /{' '}
                  {String(SERVICES.length).padStart(2, '0')}
                </div>
                <div className="ap-service__icon">
                  <Icon />
                </div>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
                <a className="ap-service__link" href="#contact">
                  Discuss this mandate <IconArrow />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
