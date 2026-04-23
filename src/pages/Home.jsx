import { Link } from 'react-router-dom';
import TopPrograms from '../components/TopPrograms.jsx';
import Principles from '../components/Principles.jsx';
import Approach from '../components/Approach.jsx';
import { PROGRAMS } from '../data/programs.js';

const RBI_PROGRAMS = PROGRAMS.filter((p) => p.category === 'RBI');
const CBI_PROGRAMS = PROGRAMS.filter((p) => p.category === 'CBI');

export default function Home() {
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
                  <div className="section-title text-center">
                      <span className="subtitle wow fadeInUp" data-wow-delay=".2s">Advisory Practice</span>
                      <h2 className="title wow fadeInUp" data-wow-delay=".4s">Curated intelligence <br /> across the global mobility agenda</h2>
                  </div>
                  <div className="ht-services-wrapper">
                      <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".2s">
                              <div className="ht-services-items mt-30">
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
                              <div className="ht-services-items mt-30">
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
                              <div className="ht-services-items mt-30">
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
                              <div className="ht-services-items mt-30">
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
                                  <div className="section-title">
                                      <span className="subtitle wow fadeInUp" data-wow-delay=".2s">About the firm</span>
                                      <h2 className="title">Founded for clients who value discretion over volume</h2>
                                      <p>Mobius is an independent advisory built around a small
                                          roster of private clients — entrepreneurs, founders and families whose
                                          next decade depends on where, and on what terms, they are allowed to live,
                                          bank and leave.</p>
                                  </div>
                                  <Link to="/about" className="ht-btn style-3">Meet the Firm</Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <Principles />

          <section className="ht-stats-area fix">
              <div className="container">
                  <div className="ht-stats-wrapper wow fadeInUp" data-wow-delay=".2s">
                      <div className="ht-stats-items">
                          <h2 className="number"><span className="count">14</span><span className="plus">+</span></h2>
                          <h4>Years in capital markets</h4>
                          <p>CFA-trained, NYSE-seasoned advisory</p>
                      </div>
                      <div className="ht-stats-items">
                          <h2 className="number"><span className="count">100</span><span className="plus">+</span></h2>
                          <h4>Mandates delivered</h4>
                          <p>Across CBI, RBI and tax residency</p>
                      </div>
                      <div className="ht-stats-items">
                          <h2 className="number"><span className="count">32</span></h2>
                          <h4>Jurisdictions covered</h4>
                          <p>From the Caribbean to the Gulf</p>
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
          />

          <TopPrograms
            tone="cbi"
            eyebrow="Top CBI"
            title="Citizenship programs on the shortlist"
            body="The two citizenship routes we still take mandates on — one EU passport, one Caribbean portfolio. Every file pre-screened on source of funds."
            programs={CBI_PROGRAMS}
          />

          <section className="ht-project-area section-padding fix">
              <div className="container">
                  <div className="section-title-area align-items-lg-end mb-25">
                      <div className="section-title">
                          <span className="subtitle wow fadeInUp" data-wow-delay=".2s">Select Mandates</span>
                          <h2 className="title wow fadeInUp" data-wow-delay=".4s">Representative <br /> case studies</h2>
                      </div>
                  </div>
                  <div className="project-slide-wrapper">
                      <div className="swiper ht-project-slider">
                          <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                  <div className="single-item">
                                      <div className="thumb">
                                          <Link to="/project-details"><img src="/assets/img/project/1.jpg" alt="Portugal Golden Visa mandate" /></Link>
                                          <div className="content">
                                              <Link to="/project-details">
                                                  <h3>Portugal Golden Visa — Founder Relocation</h3>
                                              </Link>
                                              <div className="bottom">
                                                  <p>Residency by Investment</p>
                                                  <Link to="/project-details" aria-label="Open case study"><img src="/assets/img/icon/arrow-up.svg" alt="" aria-hidden="true" /></Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="single-item">
                                      <div className="thumb">
                                          <Link to="/project-details"><img src="/assets/img/project/2.jpg" alt="Caribbean CBI mandate" /></Link>
                                          <div className="content">
                                              <Link to="/project-details">
                                                  <h3>Caribbean CBI — Family Passport Portfolio</h3>
                                              </Link>
                                              <div className="bottom">
                                                  <p>Citizenship by Investment</p>
                                                  <Link to="/project-details" aria-label="Open case study"><img src="/assets/img/icon/arrow-up.svg" alt="" aria-hidden="true" /></Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="single-item">
                                      <div className="thumb">
                                          <Link to="/project-details"><img src="/assets/img/project/3.jpg" alt="UAE relocation mandate" /></Link>
                                          <div className="content">
                                              <Link to="/project-details">
                                                  <h3>UAE Golden Residence — Operator Exit</h3>
                                              </Link>
                                              <div className="bottom">
                                                  <p>Tax Residency</p>

                                                  <Link to="/project-details" aria-label="Open case study"><img src="/assets/img/icon/arrow-up.svg" alt="" aria-hidden="true" /></Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="single-item">
                                      <div className="thumb">
                                          <Link to="/project-details"><img src="/assets/img/project/4.jpg" alt="Swiss lump-sum mandate" /></Link>
                                          <div className="content">
                                              <Link to="/project-details">
                                                  <h3>Swiss Lump-Sum — Legacy Structuring</h3>
                                              </Link>
                                              <div className="bottom">
                                                  <p>Asset Protection</p>

                                                  <Link to="/project-details" aria-label="Open case study"><img src="/assets/img/icon/arrow-up.svg" alt="" aria-hidden="true" /></Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="ht-project-footer wow fadeInUp" data-wow-delay=".3s">
                      <div className="ht-project-nav" role="group" aria-label="Case study carousel controls">
                          <button className="ht-project-prev" type="button" aria-label="Previous case study"><i className="fa-solid fa-arrow-left"></i></button>
                          <button className="ht-project-next" type="button" aria-label="Next case study"><i className="fa-solid fa-arrow-right"></i></button>
                      </div>
                      <Link to="/project" className="ht-project-all">
                          View all case studies <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                      </Link>
                  </div>
              </div>

          </section>

          <Approach />

          <section className="ht-team-area section-padding fix">
              <div className="container">
                  <div className="section-title text-center">
                      <span className="subtitle wow fadeInUp" data-wow-delay=".2s">Our Advisors</span>
                      <h2 className="title wow fadeInUp" data-wow-delay=".4s">A small bench of senior <br /> specialists — no junior handoffs</h2>
                  </div>
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

          <section className="ht-testimonials-area">
              <div className="container">
                  <div className="ht-testimonials-wrapper">
                      <div className="row gy-5">
                          <div className="col-lg-5">
                              <div className="section-title">
                                  <span className="subtitle wow fadeInUp" data-wow-delay=".2s">In their own words</span>
                                  <h2 className="title wow fadeInUp" data-wow-delay=".4s">What private<br /> clients say<br /> about us.
                                  </h2>
                              </div>
                              <div className="ht-testi-btn wow fadeInUp" data-wow-delay=".6s">
                                  <button className="ht-testi-prev" aria-label="Previous testimonial"><i className="fa-solid fa-chevron-left"></i></button>
                                  <button className="ht-testi-next" aria-label="Next testimonial"><i className="fa-solid fa-chevron-right"></i></button>
                              </div>
                          </div>
                          <div className="col-lg-7">
                              <div className="ht-testimonials-slider">
                                  <div className="swiper ht-testi-slider">
                                      <div className="swiper-wrapper">
                                          <div className="swiper-slide">
                                              <div className="ht-testimonials-item">
                                                  <div className="star" aria-label="5 out of 5">
                                                      <i className="fa-solid fa-star"></i>
                                                      <i className="fa-solid fa-star"></i>
                                                      <i className="fa-solid fa-star"></i>
                                                      <i className="fa-solid fa-star"></i>
                                                      <i className="fa-solid fa-star"></i>
                                                  </div>
                                                  <p className="desc">"They refused two programs that would have been easier to sell us and instead walked us through the one that actually fit our exit. That conversation alone was worth the retainer."
                                                  </p>
                                                  <div className="ht-testimonials-author">
                                                      <div className="avatar">
                                                          <img src="/assets/img/testimonials/1.png" alt="" aria-hidden="true" />
                                                      </div>
                                                      <div className="author-info">
                                                          <h5 className="name">Founder, SaaS exit</h5>
                                                          <p className="role">Central Europe · name withheld</p>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
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
