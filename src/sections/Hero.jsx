import { IconArrow, IconCompass } from '../components/Icons.jsx';

const STATS = [
  { num: '€ 2.4B+', lbl: 'Capital placed across programs' },
  { num: '42',      lbl: 'Jurisdictions covered' },
  { num: '< 120',   lbl: 'Active engagements per year' },
  { num: '98%',     lbl: 'Client retention' },
];

export default function Hero() {
  return (
    <section className="ap-hero" id="top">
      <div className="ap-hero__media" aria-hidden="true">
        {/*
          Bespoke atlas.svg — a stylised globe with mobility arcs on a navy
          ground. Swap the src below for /assets/img/hero/skyline.jpg (or a
          WebP) to layer a photograph instead; the gradient overlay in CSS
          keeps copy legible against either.
        */}
        <img
          className="ap-hero__bg"
          src="/assets/img/hero/atlas.svg"
          alt=""
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="ap-container ap-hero__grid">
        <div>
          <span className="ap-eyebrow ap-reveal">Ablewski &amp; Partners · Established in Warsaw</span>
          <h1 className="ap-reveal">
            Unlock <em>global</em><br />freedom on your<br />own terms.
          </h1>
          <p className="ap-hero__lede ap-reveal">
            We advise private clients and their families on Citizenship and Residency
            by Investment, tax residency and long-horizon legacy — quietly, independently,
            and only where the outcome is worth the effort.
          </p>
          <div className="ap-hero__cta ap-reveal">
            <a className="ap-btn" href="#contact">Schedule a private consultation <IconArrow /></a>
            <a className="ap-link" href="#programs" style={{ color: 'var(--ap-ivory)', borderColor: 'var(--ap-gold)' }}>
              Explore programs <IconArrow />
            </a>
          </div>
        </div>

        <div className="ap-hero__meta ap-reveal">
          {STATS.map((s) => (
            <div key={s.lbl}>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="ap-hero__scroll" aria-hidden="true">
        <IconCompass style={{ width: 20, height: 20, color: 'var(--ap-gold)' }} />
        Scroll
      </div>
    </section>
  );
}
