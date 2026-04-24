import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.jsx';

export default function About() {
  return (
    <>
      <Breadcrumb
        title="About"
        emphasis="the firm."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        tagline="Independent advisory · Warsaw · Small by design"
      />
      <section className="ht-about-area section-padding fix">
              <div className="container">
                  <div className="ht-about-wrapper">
                      <div className="row align-items-lg-center g-5">
                          <div className="col-lg-6 col-sm-12">
                              <div className="ht-about-img wow fadeInUp" data-wow-delay=".3s">
                                  <img src="/assets/img/about/1.jpg" alt="Mobius advisory office" />
                              </div>
                          </div>
                          <div className="offset-lg-1 col-lg-5 col-sm-12">
                              <div className="ht-about-content">
                                  <div className="section-title">
                                      <span className="subtitle wow fadeInUp" data-wow-delay=".2s">About the firm</span>
                                      <h2 className="title wow fadeInUp" data-wow-delay=".5s">Founded for discerning clients — built to stay small on purpose</h2>
                                      <p className="wow fadeIn" data-wow-delay=".8s">Mobius is an independent
                                          strategic consultancy advising a small roster of private clients on citizenship,
                                          residency and tax residency decisions. We work from Warsaw, coordinate with licensed
                                          counsel in every jurisdiction we recommend, and take on fewer mandates than we turn
                                          down. Your outcome is the only metric we are paid on.</p>
                                  </div>
                                  <Link to="/contact" className="ht-btn style-3 wow fadeInUp" data-wow-delay="1.1s">Schedule Consultation</Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="ht-process-area inner-two fix section-padding">
              <div className="ht-process-shape">
                  <img src="/assets/img/shape/3.svg" alt="" aria-hidden="true" />
              </div>
              <div className="container">
                  <div className="section-title text-center">
                      <span className="subtitle wow fadeInUp" data-wow-delay=".2s">How we work</span>
                      <h2 className="title wow fadeInUp" data-wow-delay=".5s">A measured path from <br /> first conversation to execution</h2>
                  </div>
                  <div className="ht-process-wrapper">
                      <div className="row justify-content-between">
                          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                              <div className="ht-process-item two mt-25">
                                  <span className="step">step 01</span>
                                  <h3 className="title">Discovery</h3>
                                  <p>Confidential intake — family, assets, tax footprint, risk tolerance and the outcomes that actually matter.</p>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".6s">
                              <div className="ht-process-item two mt-25">
                                  <span className="step">step 02</span>
                                  <h3 className="title">Strategy Memo</h3>
                                  <p>A jurisdiction-ranked memo with programs, timelines, tax impact and honest disqualifications — the ones you aren't a fit for.</p>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".9s">
                              <div className="ht-process-item two mt-25">
                                  <span className="step">step 03</span>
                                  <h3 className="title">Execution</h3>
                                  <p>Coordinated delivery with licensed local counsel, banks and investment agents under a single point of accountability.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="ht-stats-area section-padding fix">
              <div className="container">
                  <div className="ht-stats-wrapper wow fadeInUp" data-wow-delay=".3s">
                      <div className="ht-stats-items">
                          <h2 className="number"><span className="count">14</span><span className="plus">+</span></h2>
                          <h4>Years in capital markets</h4>
                          <p>CFA-trained, NYSE-seasoned</p>
                      </div>
                      <div className="ht-stats-items">
                          <h2 className="number"><span className="count">100</span><span className="plus">+</span></h2>
                          <h4>Mandates delivered</h4>
                          <p>CBI, RBI and tax residency</p>
                      </div>
                      <div className="ht-stats-items">
                          <h2 className="number"><span className="count">32</span></h2>
                          <h4>Jurisdictions covered</h4>
                          <p>Caribbean to the Gulf</p>
                      </div>
                  </div>
              </div>
          </section>

          <section className="ht-choose-area section-padding">
              <div className="container">
                  <div className="ht-choose-wrapper">
                      <div className="row gy-5">
                          <div className="col-xl-7 col-lg-6">
                              <div className="ht-choose-left">
                                  <div className="content">
                                      <h2 className="wow fadeInUp" data-wow-delay=".2s">Four pillars of the practice</h2>
                                      <p className="wow fadeInUp" data-wow-delay=".4s">We work the way private clients expect a
                                          serious advisory to work: quietly, independently and with a written record of every
                                          recommendation we make. We do not accept referral fees from program agents — our
                                          income is the retainer you pay, and nothing else.</p>
                                      <Link to="/contact" className="ht-btn style-4 wow fadeInUp" data-wow-delay=".6s">Schedule Consultation</Link>
                                  </div>
                                  <div className="thumb wow fadeInUp" data-wow-delay=".8s">
                                      <img src="/assets/img/choose/1.jpg" alt="Private client discussion at the firm" />
                                  </div>
                              </div>
                          </div>
                          <div className="col-xl-5 col-lg-6">
                              <div className="ht-choose-right">
                                  <div className="single-item wow fadeInUp" data-wow-delay=".3s">
                                      <div className="icon">
                                          <img src="/assets/img/icon/cashback.svg" alt="" aria-hidden="true" />
                                      </div>
                                      <div className="content">
                                          <h3>Expertise</h3>
                                          <p>CFA-trained, NYSE-seasoned advisory combined with on-the-ground program experience.</p>
                                      </div>
                                  </div>
                                  <div className="single-item wow fadeInUp" data-wow-delay=".6s">
                                      <div className="icon">
                                          <img src="/assets/img/icon/resignation.svg" alt="" aria-hidden="true" />
                                      </div>
                                      <div className="content">
                                          <h3>Discretion</h3>
                                          <p>Private intake, written memos under NDA and a strict no-marketing policy on client names.</p>
                                      </div>
                                  </div>
                                  <div className="single-item wow fadeInUp" data-wow-delay=".9s">
                                      <div className="icon">
                                          <img src="/assets/img/icon/secure-shield.svg" alt="" aria-hidden="true" />
                                      </div>
                                      <div className="content">
                                          <h3>Results</h3>
                                          <p>Over 100 families relocated under mandate — CBI approvals, golden visas and tax moves.</p>
                                      </div>
                                  </div>
                                  <div className="single-item wow fadeInUp" data-wow-delay="1.2s">
                                      <div className="icon">
                                          <img src="/assets/img/icon/money-bag.svg" alt="" aria-hidden="true" />
                                      </div>
                                      <div className="content">
                                          <h3>Network</h3>
                                          <p>Licensed counsel, bankers and program agents across 32 jurisdictions — vetted, not curated.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

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

          <section className="ht-testimonials-area section-padding pt-0">
              <div className="container">
                  <div className="ht-testimonials-wrapper">
                      <div className="row gy-5">
                          <div className="col-lg-5">
                              <div className="section-title">
                                  <span className="subtitle wow fadeInUp" data-wow-delay=".2s">In their own words</span>
                                  <h2 className="title">What private<br /> clients say<br /> about us.
                                  </h2>
                              </div>
                              <div className="ht-testi-btn">
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
                                                  <p className="desc">"They turned down two programs that would have been easier to sell and walked us through the one that actually fit the exit. The memo alone paid for the retainer."
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
