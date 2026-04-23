import { IconArrow } from '../components/Icons.jsx';

const CREDS = [
  'CFA Charterholder',
  'Former NYSE-listed operator',
  'Polish &amp; EU regulated',
  'AML / CRS trained',
  'FATF-aligned onboarding',
];

export default function About() {
  return (
    <section className="ap-section ap-section--bone" id="about">
      <div className="ap-container">
        <div className="ap-about">
          <figure className="ap-about__portrait ap-reveal">
            {/*
              Default: bespoke house.svg — colonnade + A&P monogram.
              To swap for a principal portrait, replace the src with
              /assets/img/about/principal.jpg (4:5 aspect, 1200×1500+).
            */}
            <img
              src="/assets/img/about/house.svg"
              alt="Ablewski &amp; Partners — the house"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="ap-reveal">
            <span className="ap-eyebrow">05 · House</span>
            <h2 className="ap-h2">
              Founded for <em>discerning</em> clients — and for the outcomes they have been
              told are unrealistic.
            </h2>
            <p>
              Ablewski &amp; Partners was founded in Warsaw after two decades of work
              across capital markets, private banking and cross-border structuring —
              including an operating role inside an NYSE-listed group. The house was
              built on a single observation: the agents selling CBI and RBI programs
              are rarely the people a family should be taking advice from.
            </p>
            <p>
              We take the opposite position. No commissions from program operators,
              no volume quotas, no white-labelled legal work. Every mandate is a
              written, fixed-fee engagement — conflict-free, documented, and
              answerable to the principal alone.
            </p>

            <ul className="ap-about__creds" aria-label="Credentials">
              {CREDS.map((c) => (
                <li key={c} dangerouslySetInnerHTML={{ __html: c }} />
              ))}
            </ul>

            <div className="ap-about__sig">
              <div>
                <strong>Rafał Ablewski</strong>
                <div style={{ color: 'var(--ap-slate)', letterSpacing: '0.16em', textTransform: 'uppercase', fontSize: '0.72rem', marginTop: '0.25rem' }}>
                  Founder &amp; Principal
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <a className="ap-link" href="#contact">
                Arrange an introduction <IconArrow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
