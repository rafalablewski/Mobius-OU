export default function HomeCorporate() {
  return (
    <>
      <div className="ht-header-search-bar d-flex align-items-center justify-content-center">
              <button className="ht-search-close">x</button>
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

          <section className="ht-hero-area hero-2">
              <div className="shape-two float-bob-x"><img src="/assets/img/shape/11.svg" alt="shape" /></div>
              <div className="container">
                  <div className="hero-wrapper">
                      <div className="row gy-5 align-items-lg-center ">
                          <div className="col-lg-5">
                              <div className="ht-hero-content style-2">
                                  <h1 className="wow fadeIn" data-wow-delay=".2s">
                                      Mobility strategy for corporates &amp; family offices
                                  </h1>
                                  <p className="desc wow fadeInUp" data-wow-delay=".4s">Cross-border residency, executive relocation
                                      and structuring for founders, funds and single-family offices — delivered under one
                                      mandate and one NDA.</p>
                                  <a href="/contact" className="ht-btn style-2 wow fadeInUp" data-wow-delay=".6s">Schedule Consultation</a>
                              </div>
                          </div>
                          <div className="col-lg-7">
                              <div className="hero-img two wow fadeInUp" data-wow-delay=".2s">
                                  <img src="/assets/img/hero/2.jpg" alt="img" />
                                  <div className="sm-img float-bob-y">
                                      <img src="/assets/img/hero/4.jpg" alt="img" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="ht-stats-area-2 section-padding fix">
              <div className="shape">
                  <div className="up">
                      <img src="/assets/img/shape/5.svg" alt="shape" />
                  </div>
                  <div className="down">
                      <img src="/assets/img/shape/6.svg" alt="shape" />
                  </div>
              </div>
              <div className="container">
                  <div className="ht-stats-wrapper-2 wow fadeInUp" data-wow-delay=".2s">
                      <div className="ht-stats-items-2">
                          <h2 className="number"><span className="count">14</span><span className="plus">+</span></h2>
                          <h4>Years in capital markets</h4>
                          <p>CFA-trained, NYSE-seasoned advisory combined with on-the-ground mobility program
                              experience.</p>
                      </div>
                      <div className="ht-stats-items-2">
                          <h2 className="number"><span className="count">100</span><span className="plus">+</span></h2>
                          <h4>Mandates delivered</h4>
                          <p>Citizenship, residency and tax residency mandates for private clients and family
                              offices.</p>
                      </div>
                      <div className="ht-stats-items-2">
                          <h2 className="number"><span className="count">32</span><span className="plus">+</span></h2>
                          <h4>Jurisdictions covered</h4>
                          <p>From the Caribbean and Mediterranean to the Gulf, Asia and the Alps.</p>
                      </div>
                  </div>
              </div>
          </section>

          <section className="ht-services-area pt-130 fix">
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                          <div className="section-title">
                              <span className="subtitle wow fadeInUp" data-wow-delay=".2s">Corporate &amp; Family Office</span>
                              <h2 className="title wow fadeInUp" data-wow-delay=".4s">Mobility mandates built <br /> for serious balance sheets</h2>
                          </div>
                      </div>
                  </div>
                  <div className="ht-services-wrapper-two">
                      <div className="row">
                          <div className="col-lg-4">
                              <div className="ht-services-thumbs wow fadeInUp" data-wow-delay=".6s">
                                  <img src="/assets/img/service/1.jpg" alt="Strategic mobility planning" />
                                  <div className="content">
                                      <h3>Strategic mobility for the next decade</h3>
                                      <a href="/services" className="ht-btn style-4">view advisory practice</a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-8">
                              <div className="ht-services-item">
                                  <div className="single-item wow fadeInUp" data-wow-delay=".2s">
                                      <h3>Executive Relocation Programs</h3>
                                      <p>Founders and senior operators relocated under a single mandate — residency,
                                          housing, schooling, banking, domestic staff. Landing with utilities, not surprises.</p>
                                      <a href="/service-details"><i className="fa-solid fa-arrow-right"></i></a>
                                      <img src="/assets/img/service/2.jpg" alt="" aria-hidden="true" />
                                  </div>
                                  <div className="single-item wow fadeInUp" data-wow-delay=".4s">
                                      <h3>Tax Residency Sequencing</h3>
                                      <p>Coordinated moves across jurisdictions so residency, exit tax and corporate
                                          structure line up — not fight each other — across fiscal years.</p>
                                      <a href="/service-details"><i className="fa-solid fa-arrow-right"></i></a>
                                      <img src="/assets/img/service/2.jpg" alt="" aria-hidden="true" />
                                  </div>
                                  <div className="single-item wow fadeInUp" data-wow-delay=".6s">
                                      <h3>Family Office Structuring</h3>
                                      <p>Holding companies, private foundations and trusts sized to the balance sheet
                                          and selected for regulatory longevity — not the latest brochure.</p>
                                      <a href="/service-details"><i className="fa-solid fa-arrow-right"></i></a>
                                      <img src="/assets/img/service/2.jpg" alt="" aria-hidden="true" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              
              <div className="brand-slider">
                  <div className="swiper ht-brand-slider">
                      <div className="swiper-wrapper">
                          <div className="swiper-slide">
                              <div className="brand-item">
                                  <h2>PRIVATE CONSULTATION</h2>
                                  <img src="/assets/img/icon/9.svg" alt="" aria-hidden="true" />
                              </div>
                          </div>
                          <div className="swiper-slide">
                              <div className="brand-item">
                                  <h2>CITIZENSHIP BY INVESTMENT</h2>
                                  <img src="/assets/img/icon/9.svg" alt="" aria-hidden="true" />
                              </div>
                          </div>
                          <div className="swiper-slide">
                              <div className="brand-item">
                                  <h2>RESIDENCY BY INVESTMENT</h2>
                                  <img src="/assets/img/icon/9.svg" alt="" aria-hidden="true" />
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
                          <div className="col-lg-6 col-sm-12">
                              <div className="ht-about-img ht-about-img-2 wow fadeInUp" data-wow-delay=".2s">
                                  <img src="/assets/img/about/2.jpg" alt="img" />
                                  <div className="client-review float-bob-y">
                                      <h2><span className="count">10</span>K+</h2>
                                      <p>Client review</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-6 col-sm-12">
                              <div className="ht-about-content style-2">
                                  <div className="section-title">
                                      <span className="subtitle wow fadeInUp" data-wow-delay=".2s">About the firm</span>
                                      <h2 className="title wow fadeInUp" data-wow-delay=".4s">Senior bench, narrow client list, written record</h2>
                                      <p>Mobius advises a small roster of founders, family offices and
                                          private investors. We write before we recommend, we decline what we should not
                                          sell, and we do not accept commissions.</p>
                                  </div>
                                  <div className="client-reviews">
                                      <div className="review-item wow fadeInUp" data-wow-delay=".6s">
                                          <h2><span className="count">100</span><span className="plus">+</span></h2>
                                          <p>Mandates delivered</p>
                                      </div>
                                      <div className="review-item wow fadeInUp" data-wow-delay=".8s">
                                          <h2><span className="count">32</span><span className="plus">+</span></h2>
                                          <p>Jurisdictions covered</p>
                                      </div>
                                  </div>
                                  <a href="/about" className="ht-btn style-3 wow fadeInUp" data-wow-delay="1s">Meet the Firm</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="ht-project-area-2 section-padding fix">
              <div className="container">
                  <div className="section-title-area align-items-lg-end">
                      <div className="section-title mb-0">
                          <span className="subtitle wow fadeInUp" data-wow-delay=".2s">Select Mandates</span>
                          <h2 className="title wow fadeInUp" data-wow-delay=".4s">Representative <br /> case studies</h2>
                      </div>
                      <a href="/services" className="ht-btn style-2 wow fadeInUp" data-wow-delay=".6s">View Advisory Practice</a>
                  </div>
                  <div className="ht-project-wrapper">
                      <div className="row g-5">
                          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                              <div className="single-item">
                                  <div className="thumb">
                                      <a href="/project"><img src="/assets/img/project/5.jpg" alt="Portugal Golden Visa mandate" /></a>
                                  </div>
                                  <div className="content">
                                      <a href="/project">
                                          <h4>Portugal Golden Visa</h4>
                                      </a>
                                      <span>Residency by Investment</span>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                              <div className="single-item">
                                  <div className="thumb">
                                      <a href="/project"><img src="/assets/img/project/6.jpg" alt="Caribbean CBI mandate" /></a>
                                  </div>
                                  <div className="content">
                                      <a href="/project">
                                          <h4>Caribbean CBI</h4>
                                      </a>
                                      <span>Citizenship by Investment</span>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".6s">
                              <div className="single-item">
                                  <div className="thumb">
                                      <a href="/project"><img src="/assets/img/project/7.jpg" alt="UAE Golden Residence mandate" /></a>
                                  </div>
                                  <div className="content">
                                      <a href="/project">
                                          <h4>UAE Golden Residence</h4>
                                      </a>
                                      <span>Tax Residency</span>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".8s">
                              <div className="single-item">
                                  <div className="thumb">
                                      <a href="/project"><img src="/assets/img/project/8.jpg" alt="Swiss lump-sum mandate" /></a>
                                  </div>
                                  <div className="content">
                                      <a href="/project">
                                          <h4>Swiss Lump-Sum</h4>
                                      </a>
                                      <span>Asset Protection</span>
                                  </div>
                              </div>
                          </div>
                          <a href="/project" className="project-btn mx-auto wow fadeInUp" data-wow-delay="1s">View All <br />
                              Mandates</a>
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
                                          serious advisory to work: quietly, independently, and with a written record of
                                          every recommendation. Commissions from program agents are refused as a matter of
                                          policy — the retainer you pay is our only compensation.</p>
                                      <a href="/contact" className="ht-btn style-4 wow fadeInUp" data-wow-delay=".6s">Schedule Consultation</a>
                                  </div>
                                  <div className="thumb wow fadeInUp" data-wow-delay=".8s">
                                      <img src="/assets/img/choose/1.jpg" alt="Private client advisory session" />
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
                  <div className="ht-team-wrapper">
                      <div className="row gy-5">
                          <div className="col-lg-4">
                              <div className="ht-team-content-2">
                                  <div className="section-title">
                                      <span className="subtitle wow fadeInUp" data-wow-delay=".2s">Our Advisors</span>
                                      <h2 className="title fadeInUp" data-wow-delay=".2s">Meet the partners</h2>
                                      <p>Every mandate is led by a named partner from first conversation to post-approval
                                          compliance. No junior handoffs — and no sales desk.</p>
                                  </div>
                                  <a href="/team" className="ht-btn fadeInUp" data-wow-delay=".4s">Full Advisor Bench</a>
                              </div>
                          </div>
                          <div className="col-lg-8">
                              <div className="ht-team-items-wrapper">
                                  <div className="row g-4">

                                      <div className="col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                          <div className="single-item">
                                              <div className="thumb">
                                                  <a href="/team-details"><img src="/assets/img/team/5.jpg" alt="img" /></a>
                                                  <div className="social-wrapper">
                                                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                                      <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                                      <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                                  </div>
                                              </div>
                                              <div className="info">
                                                  <a href="/team-details">
                                                      <h4>Rafał Ablewski</h4>
                                                  </a>
                                                  <p>Managing Partner, CFA</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                          <div className="single-item">
                                              <div className="thumb">
                                                  <a href="/team-details"><img src="/assets/img/team/6.jpg" alt="img" /></a>
                                                  <div className="social-wrapper">
                                                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                                      <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                                      <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                                  </div>
                                              </div>
                                              <div className="info">
                                                  <a href="/team-details">
                                                      <h4>M. Kowalska</h4>
                                                  </a>
                                                  <p>Head of Residency Programs</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                          <div className="single-item">
                                              <div className="thumb">
                                                  <a href="/team-details"><img src="/assets/img/team/7.jpg" alt="img" /></a>
                                                  <div className="social-wrapper">
                                                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                                      <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                                      <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                                  </div>
                                              </div>
                                              <div className="info">
                                                  <a href="/team-details">
                                                      <h4>A. Nowak</h4>
                                                  </a>
                                                  <p>Head of Citizenship Programs</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                          <div className="single-item">
                                              <div className="thumb">
                                                  <a href="/team-details"><img src="/assets/img/team/8.jpg" alt="img" /></a>
                                                  <div className="social-wrapper">
                                                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                                      <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                                      <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                                  </div>
                                              </div>
                                              <div className="info">
                                                  <a href="/team-details">
                                                      <h4>J. Wiśniewski</h4>
                                                  </a>
                                                  <p>Senior Tax Counsel</p>
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

          <section className="ht-testimonials-area-2 section-padding">
              <div className="container">
                  <div className="section-title-area align-items-lg-end mb-30">
                      <div className="section-title mb-0">
                          <span className="subtitle wow fadeInUp" data-wow-delay=".2s">In their own words</span>
                          <h2 className="title wow fadeInUp" data-wow-delay=".4s">Private client voices</h2>
                      </div>
                      <div className="ht-testi-btn mt-0 wow fadeInUp" data-wow-delay=".6s">
                          <button className="ht-testi-prev ht-testi-prev-2"><i className="fa-solid fa-chevron-left"></i></button>
                          <button className="ht-testi-next ht-testi-next-2"><i className="fa-solid fa-chevron-right"></i></button>
                      </div>
                  </div>
                  <div className="ht-testimonials-wrapper-2">
                      <div className="swiper ht-testi-slider-2">
                          <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                  <div className="ht-testimonials-item ht-testimonials-item-2">
                                      <div className="star">
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                      </div>
                                      <p className="desc desc-2">"The memo gave us a two-year plan we could actually live with — not a brochure. The firm stayed with us through every application stage."
                                      </p>
                                      <div className="ht-testimonials-author ht-testimonials-author-2">
                                          <div className="avatar">
                                              <img src="/assets/img/testimonials/2.png" alt="" aria-hidden="true" />
                                          </div>
                                          <div className="author-info">
                                              <h5 className="name">Industrial Family Office</h5>
                                              <p className="role">Germany · name withheld</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="ht-testimonials-item ht-testimonials-item-2">
                                      <div className="star">
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                      </div>
                                      <p className="desc desc-2">"We briefed three advisors. Mobius was the only one who put the honest disqualifications in writing before asking for a cent."
                                      </p>
                                      <div className="ht-testimonials-author ht-testimonials-author-2">
                                          <div className="avatar">
                                              <img src="/assets/img/testimonials/3.png" alt="" aria-hidden="true" />
                                          </div>
                                          <div className="author-info">
                                              <h5 className="name">Tech founder</h5>
                                              <p className="role">UAE · name withheld</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="ht-testimonials-item ht-testimonials-item-2">
                                      <div className="star">
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                      </div>
                                      <p className="desc desc-2">"Discretion was non-negotiable for us. Over three years, nothing about our file has ever surfaced anywhere."
                                      </p>
                                      <div className="ht-testimonials-author ht-testimonials-author-2">
                                          <div className="avatar">
                                              <img src="/assets/img/testimonials/4.png" alt="" aria-hidden="true" />
                                          </div>
                                          <div className="author-info">
                                              <h5 className="name">Private Investor</h5>
                                              <p className="role">CEE · name withheld</p>
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
