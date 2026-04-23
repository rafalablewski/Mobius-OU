import { Link } from 'react-router-dom';

export default function HomeInsurance() {
  return (
    <>
      <div className="ht-header-search-bar d-flex align-items-center justify-content-center">
              <button className="ht-search-close" aria-label="Close search">x</button>
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-lg-6">
                          <div className="ht-search-bar">
                              <h3 className="ht-search-title text-center mb-20">
                                  Search briefs &amp; programs
                              </h3>
                              <div className="ht-form-box ht-search-form-box">
                                  <form onSubmit={(e) => e.preventDefault()}>
                                      <input type="text" placeholder="e.g. Portugal Golden Visa, UAE, Malta MEIN..." aria-label="Search briefs and programs" />
                                      <button type="submit" aria-label="Search"><i className="fa fa-search"></i></button>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <section className="ht-hero-area hero-3" style={{ "backgroundImage": "url(/assets/img/hero/hero-bg-3.jpg)", "backgroundSize": "cover", "backgroundPosition": "center", "backgroundRepeat": "no-repeat" }}>
              <div className="ht-hero-shape">
                  <div className="arrow-shape-3 float-bob-y">
                      <img src="/assets/img/shape/7.svg" alt="" aria-hidden="true" />
                  </div>
              </div>
              <div className="container">
                  <div className="hero-wrapper">
                      <div className="ht-hero-content style-3">
                          <h1 className="wow fadeInUp" data-wow-delay=".3s">Succession <br /> &amp; Legacy <br /> Planning</h1>
                          <p className="desc wow fadeInUp" data-wow-delay=".6s">Structures that outlive the strategy. Holding
                              companies, private foundations, trusts and family <br /> constitutions — designed so the next
                              generation inherits clarity, not litigation.</p>
                          <Link to="/contact" className="ht-btn style-2 wow fadeInUp" data-wow-delay=".9s">Schedule Consultation</Link>
                      </div>
                      <div className="video-card wow fadeInUp" data-wow-delay=".3s">
                          <div className="swiper hero-img-slide">
                              <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                      <div className="thumb">
                                          <img src="/assets/img/hero/3.jpg" alt="Family office document room" />
                                      </div>
                                  </div>
                                  <div className="swiper-slide">
                                      <div className="thumb">
                                          <img src="/assets/img/hero/3.jpg" alt="Private advisory meeting" />
                                      </div>
                                  </div>
                                  <div className="swiper-slide">
                                      <div className="thumb">
                                          <img src="/assets/img/hero/3.jpg" alt="Archival vault" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="txt">
                              <span>Featured Practice</span>
                              <i className="fa-solid fa-arrow-right-long ht-hero-next"></i>
                          </div>
                          <div className="play-icon">
                              <img src="/assets/img/hero/text-spiner.png" alt="" aria-hidden="true" />
                              <div className="icon"><a href="#" className="video-popup" aria-label="Play introduction"><i className="fa-solid fa-play"></i></a></div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="ht-services-area pt-130 fix">
              <div className="container">
                  <div className="section-title text-center">
                      <span className="subtitle wow fadeInUp" data-wow-delay=".2s">Legacy Practice</span>
                      <h2 className="title wow fadeInUp" data-wow-delay=".5s">Three pillars of a <br /> durable family structure</h2>
                  </div>
                  <div className="ht-services-wrapper">
                      <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
                              <div className="ht-services-items mt-25">
                                  <div className="icon">
                                      <img src="/assets/img/icon/4.svg" alt="" aria-hidden="true" />
                                  </div>
                                  <Link to="/service-details">
                                      <h3 className="title title-2">Holding &amp; Operating</h3>
                                  </Link>
                                  <p className="desc">A jurisdiction-ranked holding structure that separates operating risk from family wealth — reviewed annually against policy drift.</p>
                                  <Link to="/service-details" className="link">Read more <i className="fa-solid fa-arrow-right"></i></Link>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                              <div className="ht-services-items mt-25">
                                  <div className="icon">
                                      <img src="/assets/img/icon/4.svg" alt="" aria-hidden="true" />
                                  </div>
                                  <Link to="/service-details">
                                      <h3 className="title title-2">Foundations &amp; Trusts</h3>
                                  </Link>
                                  <p className="desc">Private foundations and trusts selected for civil-law legitimacy, governance transparency and a forty-year time horizon — not headline tax.</p>
                                  <Link to="/service-details" className="link">Read more <i className="fa-solid fa-arrow-right"></i></Link>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
                              <div className="ht-services-items mt-25">
                                  <div className="icon">
                                      <img src="/assets/img/icon/4.svg" alt="" aria-hidden="true" />
                                  </div>
                                  <Link to="/service-details">
                                      <h3 className="title title-2">Family Governance</h3>
                                  </Link>
                                  <p className="desc">Family constitutions, next-generation onboarding and the quiet rules that keep inherited wealth from becoming inherited disputes.</p>
                                  <Link to="/service-details" className="link">Read more <i className="fa-solid fa-arrow-right"></i></Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="ht-about-area section-padding fix">
              <div className="container">
                  <div className="ht-about-wrapper">
                      <div className="row align-items-lg-center gy-5 gy-lg-0">
                          <div className="col-lg-6 col-sm-12">
                              <div className="ht-about-img wow fadeInUp" data-wow-delay=".3s">
                                  <img src="/assets/img/about/3.jpg" alt="Mobius private office" />
                              </div>
                          </div>
                          <div className="col-lg-6 col-sm-12">
                              <div className="ht-about-content style-2">
                                  <div className="section-title">
                                      <span className="subtitle wow fadeInUp" data-wow-delay=".2s">About the firm</span>
                                      <h2 className="title wow fadeInUp" data-wow-delay=".5s">Built for the quiet parts of becoming wealthy</h2>
                                      <p className="wow fadeInUp" data-wow-delay=".8s">Mobius is an independent
                                          strategic consultancy. We advise a small roster of private clients on the
                                          unromantic decisions — residency, citizenship, structures, succession — that
                                          determine whether the next generation actually keeps what you build.</p>
                                  </div>
                                  <Link to="/about" className="ht-btn style-3 wow fadeInUp" data-wow-delay="1.1s">Meet the Firm</Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <div className="section ht-process-area-3">
              <div className="container">
                  <div className="section-title text-center">
                      <span className="subtitle wow fadeInUp" data-wow-delay=".2s">Our Approach</span>
                      <h2 className="title wow fadeInUp" data-wow-delay=".5s">From first conversation <br /> to family constitution</h2>
                  </div>
                  <div className="ht-process-wrapper-3">
                      <div className="row gy-5 justify-content-between">
                          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                              <div className="process-item">
                                  <div className="thumb">
                                      <img src="/assets/img/process/1.jpg" alt="Discovery meeting" />
                                      <div className="circle"><img src="/assets/img/shape/9.svg" alt="" aria-hidden="true" /></div>
                                      <span>1</span>
                                      <div className="step-arrow">
                                          <img src="/assets/img/icon/6.svg" alt="" aria-hidden="true" />
                                      </div>
                                  </div>
                                  <div className="contents">
                                      <h3>Speak with a Partner</h3>
                                      <p>Confidential intake under NDA. Family composition, balance sheet, time horizon and the outcomes that actually matter.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                              <div className="process-item">
                                  <div className="thumb">
                                      <img src="/assets/img/process/2.jpg" alt="Strategy memo drafting" />
                                      <div className="circle"><img src="/assets/img/shape/9.svg" alt="" aria-hidden="true" /></div>
                                      <span className="nth">2</span>
                                      <div className="step-arrow">
                                          <img src="/assets/img/icon/7.svg" alt="" aria-hidden="true" />
                                      </div>
                                  </div>
                                  <div className="contents">
                                      <h3>Receive the Memo</h3>
                                      <p>A jurisdiction-ranked structure memo with honest disqualifications, sequencing and tax impact — in writing.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                              <div className="process-item">
                                  <div className="thumb">
                                      <img src="/assets/img/process/3.jpg" alt="Execution and coordination" />
                                      <div className="circle"><img src="/assets/img/shape/9.svg" alt="" aria-hidden="true" /></div>
                                      <span>3</span>
                                  </div>
                                  <div className="contents">
                                      <h3>Execute Under Mandate</h3>
                                      <p>Licensed local counsel, banks and fiduciaries coordinated under our mandate — one point of accountability for the whole structure.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <section className="ht-price-area section-padding">
              <div className="container">
                  <div className="ht-price-wrapper">
                      <div className="row">
                          <div className="col-lg-6">
                              <div className="ht-price-content">
                                  <div className="section-title">
                                      <span className="subtitle wow fadeInUp" data-wow-delay=".2s">Mandate tiers</span>
                                      <h2 className="title wow fadeInUp" data-wow-delay=".4s">Three ways we engage with private clients</h2>
                                      <p className="wow fadeInUp" data-wow-delay=".6s">Fees are fixed per mandate, invoiced in
                                          milestones, and independent of any program commission. We decline commissions as a
                                          matter of policy. The figures below are indicative ranges — every retainer is
                                          scoped against the written brief we produce at Discovery.
                                      </p>
                                  </div>
                                  <Link to="/pricing" className="ht-btn style-2 wow fadeInUp" data-wow-delay=".8s">Programs &amp; Fees</Link>
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <div className="ht-price-item">
                                  <div className="single-item wow fadeInUp" data-wow-delay=".3s">
                                      <div className="left">
                                          <span>Discovery Brief</span>
                                          <h2>€9K<span>/fixed</span></h2>
                                          <Link to="/contact" className="link">Enquire <i className="fa-solid fa-arrow-right"></i></Link>
                                      </div>
                                      <div className="right">
                                          <ul className="price-details">
                                              <li><i className="fa-solid fa-check"></i>Confidential intake under NDA</li>
                                              <li><i className="fa-solid fa-check"></i>Jurisdiction-ranked strategy memo</li>
                                              <li><i className="fa-solid fa-check"></i>Honest disqualifications in writing</li>
                                              <li><i className="fa-solid fa-check"></i>Two follow-up calls with a partner</li>
                                              <li><i className="fa-solid fa-check"></i>Indicative timeline and budget</li>
                                              <li><i className="fa-solid fa-check"></i>Credited against full mandate</li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="single-item style-2 wow fadeInUp" data-wow-delay=".6s">
                                      <div className="left">
                                          <span>Full Mandate</span>
                                          <h2>€45K+<span>/mandate</span></h2>
                                          <Link to="/contact" className="link">Enquire <i className="fa-solid fa-arrow-right"></i></Link>
                                      </div>
                                      <div className="right">
                                          <ul className="price-details">
                                              <li><i className="fa-solid fa-check"></i>End-to-end CBI, RBI or tax move</li>
                                              <li><i className="fa-solid fa-check"></i>Single point of accountability</li>
                                              <li><i className="fa-solid fa-check"></i>Licensed counsel coordination</li>
                                              <li><i className="fa-solid fa-check"></i>Banking and residency utilities</li>
                                              <li><i className="fa-solid fa-check"></i>Source-of-funds file assembly</li>
                                              <li><i className="fa-solid fa-check"></i>Post-approval compliance</li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="single-item wow fadeInUp" data-wow-delay=".9s">
                                      <div className="left">
                                          <span>Retained Advisor</span>
                                          <h2>By engagement</h2>
                                          <Link to="/contact" className="link">Enquire <i className="fa-solid fa-arrow-right"></i></Link>
                                      </div>
                                      <div className="right">
                                          <ul className="price-details">
                                              <li><i className="fa-solid fa-check"></i>Annual retainer for families</li>
                                              <li><i className="fa-solid fa-check"></i>Quarterly program re-ranking memo</li>
                                              <li><i className="fa-solid fa-check"></i>Standing advisor on next steps</li>
                                              <li><i className="fa-solid fa-check"></i>Priority access to the partner</li>
                                              <li><i className="fa-solid fa-check"></i>Succession and governance reviews</li>
                                              <li><i className="fa-solid fa-check"></i>NDA-bound, no marketing use</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="ht-testimonials-area-2 section-padding fix">
              <div className="bg-shape">
                  <img src="/assets/img/shape/8.svg" alt="" aria-hidden="true" />
              </div>
              <div className="container">
                  <div className="testimonial-slides-wrapper">
                      <div className="row justify-content-center">
                          <div className="col-lg-8 col-md-10">
                              <div className="swiper ht-testi-slider-3">
                                  <div className="swiper-wrapper">
                                      <div className="swiper-slide">
                                          <div className="testimonial-slides-item">
                                              <div className="icon">
                                                  <img src="/assets/img/icon/5.svg" alt="" aria-hidden="true" />
                                              </div>
                                              <p>"The firm wrote the honest disqualifications before it wrote the recommendation. Three years later, the structure still holds — and still reads cleanly to counsel in every jurisdiction we touch."</p>
                                              <div className="info">
                                                  <h4>Single-Family Office</h4>
                                                  <span>Central Europe · name withheld</span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="swiper-testi-btn">
                          <div className="testi-slides-prev" aria-label="Previous">
                              <i className="fa-solid fa-arrow-left-long"></i>
                          </div>
                          <div className="testi-slides-next" aria-label="Next">
                              <i className="fa-solid fa-arrow-right-long"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="ht-faq-area section-padding fix">
              <div className="container">
                  <div className="ht-faq-wrapper">
                      <div className="row gy-5">
                          <div className="col-xl-6 col-lg-6">
                              <div className="ht-faq-thumb wow fadeInUp" data-wow-delay=".3s">
                                  <img src="/assets/img/faq/1.jpg" alt="Private client advisory session" />
                              </div>
                          </div>
                          <div className="col-xl-5 offset-xl-1 col-lg-6">
                              <div className="ht-faq-content">
                                  <div className="section-title">
                                      <span className="subtitle wow fadeInUp" data-wow-delay=".3s">legacy faq</span>
                                      <h2 className="title wow fadeInUp" data-wow-delay=".6s">Succession, quietly answered</h2>
                                      <p className="wow fadeInUp" data-wow-delay=".9s">A condensed answer to what families ask
                                          before they engage on structures. Detailed answers sit in your Strategy Memo,
                                          under NDA.</p>
                                  </div>
                                  <div className="accordion" id="faqAccordion">
                                      <div className="accordion-item wow fadeInUp" data-wow-delay="1.2s">
                                          <h5 className="accordion-header">
                                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                                  TRUST OR PRIVATE FOUNDATION?
                                              </button>
                                          </h5>
                                          <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                              <div className="accordion-body">
                                                  For most civil-law Central European families, a Liechtenstein or
                                                  Panamanian foundation outperforms a common-law trust on recognition
                                                  and predictability. For common-law families, a properly-drafted
                                                  discretionary trust often wins. We rank both for your facts, not a house view.
                                              </div>
                                          </div>
                                      </div>
                                      <div className="accordion-item wow fadeInUp" data-wow-delay="1.5s">
                                          <h5 className="accordion-header">
                                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                                                  HOW DO YOU COORDINATE WITH OUR EXISTING COUNSEL?
                                              </button>
                                          </h5>
                                          <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                              <div className="accordion-body">
                                                  Your existing tax and legal counsel are retained. We coordinate the
                                                  strategy, translate between jurisdictions, and put a single written
                                                  record around the advice. We do not replace licensed practitioners —
                                                  we make sure the pieces fit.
                                              </div>
                                          </div>
                                      </div>
                                      <div className="accordion-item wow fadeInUp" data-wow-delay="1.8s">
                                          <h5 className="accordion-header">
                                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                                                  WHAT ABOUT THE NEXT GENERATION?
                                              </button>
                                          </h5>
                                          <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                              <div className="accordion-body">
                                                  Structures age well when the people using them understand them. A
                                                  family constitution, a written governance map and a calibrated
                                                  next-generation onboarding program are part of most retained mandates.
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
