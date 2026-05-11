import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import TopPrograms from '../components/TopPrograms.jsx';
import Principles from '../components/Principles.jsx';
import PressLine from '../components/PressLine.jsx';
import Approach from '../components/Approach.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { PROGRAMS } from '../data/programs.js';

const RBI_PROGRAMS = PROGRAMS.filter((p) => p.category === 'RBI');
const CBI_PROGRAMS = PROGRAMS.filter((p) => p.category === 'CBI');

export default function Home() {
  const statsScrollerRef = useRef(null);

  useEffect(() => {
    const scroller = statsScrollerRef.current;
    if (!scroller) return;
    const wrapper = scroller.querySelector('.ht-stats-wrapper');
    if (!wrapper) return;
    const cards = Array.from(wrapper.querySelectorAll('.ht-stats-items'));
    if (!cards.length) return;
    const update = () => {
      const center = wrapper.scrollLeft + wrapper.clientWidth / 2;
      let bestIdx = 0;
      let bestDist = Infinity;
      for (let i = 0; i < cards.length; i++) {
        const c = cards[i];
        const cardCenter = c.offsetLeft + c.offsetWidth / 2;
        const d = Math.abs(cardCenter - center);
        if (d < bestDist) { bestDist = d; bestIdx = i; }
      }
      cards.forEach((c, i) => c.classList.toggle('is-focal', i === bestIdx));
    };
    update();
    const onClick = (e) => {
      const card = e.currentTarget;
      if (card.classList.contains('is-focal')) return;
      card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    };
    cards.forEach((c) => c.addEventListener('click', onClick));
    wrapper.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      cards.forEach((c) => c.removeEventListener('click', onClick));
      wrapper.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <>
      <section className="ht-hero-area" style={{ "backgroundImage": "url(/assets/img/hero/hero-bg.jpg)", "backgroundSize": "cover", "backgroundPosition": "center", "backgroundRepeat": "no-repeat" }}>
              <div className="ht-hero-shape">
                  <div className="arrow-shape float-bob-x">
                      <img src="/assets/img/shape/1.svg" alt="" aria-hidden="true" />
                  </div>
              </div>
              <div className="container">
                  <div className="ht-hero-content">
                      <h1 className="wow fadeInUp" data-wow-delay=".2s">Unlock <br />
                          <span>global</span> <br />
                          freedom — <br />
                          quietly.
                      </h1>
                      <p className="desc wow fadeInUp" data-wow-delay=".4s">Independent advisory on Citizenship and Residency by Investment, <br />
                          tax residency and legacy planning for private clients.</p>
                      <Link to="/contact" className="ht-btn style-2 wow fadeInUp" data-wow-delay=".6s">Schedule Consultation</Link>
                  </div>
              </div>
              <div className="ht-hero-img">
                  <img className="wow fadeInUp" data-wow-delay=".2s" src="/assets/img/hero/1.png" alt="Advisor reviewing global mobility programs" />
              </div>
              <div className="ht-hero-counter">
                  <div className="count-card float-bob-x">
                      <h2><span className="count">32</span><span className="plus">+</span></h2>
                      <p>Programs covered across five continents</p>
                  </div>
                  <div className="count-card-2 float-bob-y">
                      <h2><span className="count">100</span><span className="plus">+</span></h2>
                      <p>Families relocated under advisory mandate</p>
                  </div>
              </div>
          </section>

          <section className="ht-services-area pt-130 fix">
              <div className="container">
                  <SectionHeading
                    align="center"
                    eyebrow="Advisory Practice"
                    title="Curated intelligence across"
                    emphasis="the global mobility agenda."
                  />
                  <div className="ht-services-wrapper">
                      <div className="row g-4 g-lg-5">
                          <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".2s">
                              <div className="ht-services-items">
                                  <div className="icon">
                                      <img src="/assets/img/icon/1.svg" alt="" aria-hidden="true" />
                                  </div>
                                  <Link to="/service-details">
                                      <h3 className="title">Citizenship by Investment <img className="one" src="/assets/img/icon/arrow-up.svg" alt="" aria-hidden="true" /></h3>
                                  </Link>
                                  <p className="desc">Program selection and mandate management across Caribbean, Mediterranean and Pacific CBI routes — structured to withstand due diligence and scrutiny.</p>
                              </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".4s">
                              <div className="ht-services-items">
                                  <div className="icon">
                                      <img src="/assets/img/icon/2.svg" alt="" aria-hidden="true" />
                                  </div>
                                  <Link to="/service-details">
                                      <h3 className="title">Residency by Investment <img className="two" src="/assets/img/icon/arrow-up.svg" alt="" aria-hidden="true" /></h3>
                                  </Link>
                                  <p className="desc">EU Golden Visas, UAE, Singapore and Switzerland — mapped against the family's real mobility, schooling and tax footprint, not a brochure.</p>
                              </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".6s">
                              <div className="ht-services-items">
                                  <div className="icon">
                                      <img src="/assets/img/icon/3.svg" alt="" aria-hidden="true" />
                                  </div>
                                  <Link to="/service-details">
                                      <h3 className="title">Tax Residency Planning <img className="three" src="/assets/img/icon/arrow-up.svg" alt="" aria-hidden="true" /></h3>
                                  </Link>
                                  <p className="desc">Lawful relocation sequencing, day-count discipline and exit strategy — coordinated with your counsel so residency decisions compound rather than collide.</p>
                              </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".8s">
                              <div className="ht-services-items">
                                  <div className="icon">
                                      <img src="/assets/img/icon/4.svg" alt="" aria-hidden="true" />
                                  </div>
                                  <Link to="/service-details">
                                      <h3 className="title">Asset Protection <img className="four" src="/assets/img/icon/arrow-up.svg" alt="" aria-hidden="true" /></h3>
                                  </Link>
                                  <p className="desc">Holding structures, trusts and private foundations selected for legitimacy and longevity — so the next generation inherits clarity, not litigation.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="ht-about-area section-padding fix">
              <div className="container">
                  <div className="ht-about-wrapper">
                      <div className="row align-items-lg-center g-5">
                          <div className="col-lg-6 col-sm-12 wow fadeInLeft" data-wow-delay=".2s">
                              <div className="ht-about-img">
                                  <img src="/assets/img/about/1.jpg" alt="Mobius private office" />
                              </div>
                          </div>
                          <div className="offset-lg-1 col-lg-5 col-sm-12 wow fadeInRight" data-wow-delay=".2s">
                              <div className="ht-about-content">
                                  <SectionHeading
                                    eyebrow="About the Firm"
                                    title="Founded for clients who value"
                                    emphasis="discretion over volume."
                                    lede="Mobius is an independent advisory built around a small roster of private clients — entrepreneurs, founders and families whose next decade depends on where, and on what terms, they are allowed to live, bank and leave."
                                  />
                                  <Link to="/about" className="ht-btn style-3">Meet the Firm</Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <Principles />

          <PressLine />

          <section className="ht-stats-area fix">
              <div className="container">
                  <div className="ht-stats-masthead wow fadeInUp" data-wow-delay=".2s">
                      <div className="ht-stats-eyebrow">The practice in three figures.</div>
                      <Link to="/contact" className="ht-stats-audit">
                          <em>Audit trail on request</em>
                      </Link>
                  </div>
                  <div className="ht-stats-scroller wow fadeInUp" data-wow-delay=".3s" ref={statsScrollerRef}>
                      <div className="ht-stats-wrapper" role="list">
                          <div className="ht-stats-items" role="listitem">
                              <h2 className="number"><span className="count">14</span><span className="plus">+</span></h2>
                              <h4>Years on the desk &mdash; CFA-trained, NYSE-seasoned advisory.</h4>
                              <div className="ht-stats-rule" aria-hidden="true"></div>
                              <p>In private practice since 2018. Charter held continuously since 2012.</p>
                          </div>
                          <div className="ht-stats-items" role="listitem">
                              <h2 className="number"><span className="count">100</span><span className="plus">+</span></h2>
                              <h4>Private files &mdash; citizenship, residency and tax.</h4>
                              <div className="ht-stats-rule" aria-hidden="true"></div>
                              <p>Every brief pre-screened on source of funds before engagement.</p>
                          </div>
                          <div className="ht-stats-items" role="listitem">
                              <h2 className="number"><span className="count">32</span></h2>
                              <h4>Jurisdictions &mdash; firms and partners operational.</h4>
                              <div className="ht-stats-rule" aria-hidden="true"></div>
                              <p>From the Caribbean shelf programmes to the Gulf&rsquo;s new tax routes.</p>
                          </div>
                          <div className="ht-stats-items" role="listitem">
                              <h2 className="number"><span className="count">5</span></h2>
                              <h4>Offices &mdash; local presence where the programmes are written.</h4>
                              <div className="ht-stats-rule" aria-hidden="true"></div>
                              <p>Counsel on the ground from Europe to the Gulf, briefed in your timezone.</p>
                          </div>
                          <div className="ht-stats-items" role="listitem">
                              <h2 className="number"><span className="count">1</span></h2>
                              <h4>Dedicated team &mdash; senior bench, no junior handoffs.</h4>
                              <div className="ht-stats-rule" aria-hidden="true"></div>
                              <p>The partner you brief is the partner who writes the file.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <TopPrograms
            tone="rbi"
            eyebrow="Top RBI"
            title="Residency routes we actively run"
            body="Four programs we return to most often — ranked on political stability, physical-presence cost, and the five-year end state."
            programs={RBI_PROGRAMS}
            viewAllHref="/services"
            viewAllLabel="View all RBI programmes"
          />

          <TopPrograms
            tone="cbi"
            eyebrow="Top CBI"
            title="Citizenship programs on the shortlist"
            body="The two citizenship routes we still take mandates on — one EU passport, one Caribbean portfolio. Every file pre-screened on source of funds."
            programs={CBI_PROGRAMS}
            viewAllHref="/services"
            viewAllLabel="View all CBI programmes"
          />

          <Approach />

          <section className="ht-team-area section-padding fix">
              <div className="container">
                  <SectionHeading
                    align="center"
                    eyebrow="Our Advisors"
                    title="A small bench of senior specialists —"
                    emphasis="no junior handoffs."
                  />
                  <div className="ht-team-wrapper">
                      <div className="row">
                          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".2s">
                              <div className="ht-team-items">
                                  <div className="ht-team-thumb">
                                      <Link to="/team-details"><img src="/assets/img/team/1.jpg" alt="Rafał Ablewski" /></Link>
                                      <div className="social">
                                          <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                                          <a href="#" aria-label="X"><i className="fa-brands fa-x-twitter"></i></a>
                                      </div>
                                  </div>
                                  <div className="ht-team-content">
                                      <Link to="/team-details">
                                          <h4 className="name">Rafał Ablewski</h4>
                                      </Link>
                                      <p className="role">Managing Partner, CFA</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".4s">
                              <div className="ht-team-items">
                                  <div className="ht-team-thumb">
                                      <Link to="/team-details"><img src="/assets/img/team/2.jpg" alt="Head of Residency Programs" /></Link>
                                      <div className="social">
                                          <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                                          <a href="#" aria-label="X"><i className="fa-brands fa-x-twitter"></i></a>
                                      </div>
                                  </div>
                                  <div className="ht-team-content">
                                      <Link to="/team-details">
                                          <h4 className="name">M. Kowalska</h4>
                                      </Link>
                                      <p className="role">Head of Residency Programs</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".6s">
                              <div className="ht-team-items">
                                  <div className="ht-team-thumb">
                                      <Link to="/team-details"><img src="/assets/img/team/3.jpg" alt="Head of Citizenship Programs" /></Link>
                                      <div className="social">
                                          <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                                          <a href="#" aria-label="X"><i className="fa-brands fa-x-twitter"></i></a>
                                      </div>
                                  </div>
                                  <div className="ht-team-content">
                                      <Link to="/team-details">
                                          <h4 className="name">A. Nowak</h4>
                                      </Link>
                                      <p className="role">Head of Citizenship Programs</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".8s">
                              <div className="ht-team-items">
                                  <div className="ht-team-thumb">
                                      <Link to="/team-details"><img src="/assets/img/team/4.jpg" alt="Senior Tax Counsel" /></Link>
                                      <div className="social">
                                          <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                                          <a href="#" aria-label="X"><i className="fa-brands fa-x-twitter"></i></a>
                                      </div>
                                  </div>
                                  <div className="ht-team-content">
                                      <Link to="/team-details">
                                          <h4 className="name">J. Wiśniewski</h4>
                                      </Link>
                                      <p className="role">Senior Tax Counsel</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    </>
  );
}
