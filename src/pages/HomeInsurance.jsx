export default function HomeInsurance() {
  return (
    <>
      <div className="ht-header-search-bar d-flex align-items-center justify-content-center">
              <button className="ht-search-close">x</button>
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-lg-6">
                          <div className="ht-search-bar">
                              <h3 className="ht-search-title text-center mb-20">
                                  What are you looking for?
                              </h3>
                              <div className="ht-form-box ht-search-form-box">
                                  <form action="#">
                                      <input type="text" placeholder="Your Keywords..." />
                                      <button type="submit"><i className="fa fa-search"></i></button>
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
                      <img src="/assets/img/shape/7.svg" alt="shape" />
                  </div>
              </div>
              <div className="container">
                  <div className="hero-wrapper">
                      <div className="ht-hero-content style-3">
                          <h1 className="wow fadeInUp" data-wow-delay=".3s">Trusted <br /> Insurance for a <br /> Peaceful Life</h1>
                          <p className="desc wow fadeInUp" data-wow-delay=".6s">Explore our tailored insurance solutions and
                              experience the peace of mind that <br />
                              comes
                              with knowing you're with covered Potenti nullam </p>
                          <a href="/contact" className="ht-btn style-2 wow fadeInUp" data-wow-delay=".9s">Let's Get in
                              Touch</a>
                      </div>
                      <div className="video-card wow fadeInUp" data-wow-delay=".3s">
                          <div className="swiper hero-img-slide">
                              <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                      <div className="thumb">
                                          <img src="/assets/img/hero/3.jpg" alt="" />
                                      </div>
                                  </div>
                                  <div className="swiper-slide">
                                      <div className="thumb">
                                          <img src="/assets/img/hero/3.jpg" alt="" />
                                      </div>
                                  </div>
                                  <div className="swiper-slide">
                                      <div className="thumb">
                                          <img src="/assets/img/hero/3.jpg" alt="" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="txt">
                              <span>Featured Services</span>
                              <i className="fa-solid fa-arrow-right-long ht-hero-next"></i>
                          </div>
                          <div className="play-icon">
                              <img src="/assets/img/hero/text-spiner.png" alt="text" />
                              <div className="icon"><a href="https://www.youtube.com/watch?v=axzocwX0rEo" className="video-popup"><i className="fa-solid fa-play"></i></a></div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="ht-services-area pt-130 fix">
              <div className="container">
                  <div className="section-title text-center">
                      <span className="subtitle wow fadeInUp" data-wow-delay=".2s">Our Services</span>
                      <h2 className="title wow fadeInUp" data-wow-delay=".5s">We're Covering All the <br /> Insurance Services </h2>
                  </div>
                  <div className="ht-services-wrapper">
                      <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
                              <div className="ht-services-items mt-25">
                                  <div className="icon">
                                      <img src="/assets/img/icon/4.svg" alt="icon" />
                                  </div>
                                  <a href="/service-details">
                                      <h3 className="title title-2">Health Insurance</h3>
                                  </a>
                                  <p className="desc">With our innovative consulting today's breakthroughs become the leadership
                                      strategies propelling your</p>
                                  <a href="/service-details" className="link">Read more <i className="fa-solid fa-arrow-right"></i></a>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                              <div className="ht-services-items mt-25">
                                  <div className="icon">
                                      <img src="/assets/img/icon/4.svg" alt="icon" />
                                  </div>
                                  <a href="/service-details">
                                      <h3 className="title title-2">Home Insurance</h3>
                                  </a>
                                  <p className="desc">With our innovative consulting today's breakthroughs become the leadership
                                      strategies propelling your</p>
                                  <a href="/service-details" className="link">Read more <i className="fa-solid fa-arrow-right"></i></a>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
                              <div className="ht-services-items mt-25">
                                  <div className="icon">
                                      <img src="/assets/img/icon/4.svg" alt="icon" />
                                  </div>
                                  <a href="/service-details">
                                      <h3 className="title title-2">Travel Insurance</h3>
                                  </a>
                                  <p className="desc">With our innovative consulting today's breakthroughs become the leadership
                                      strategies propelling your</p>
                                  <a href="/service-details" className="link">Read more <i className="fa-solid fa-arrow-right"></i></a>
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
                                  <img src="/assets/img/about/3.jpg" alt="img" />
                              </div>
                          </div>
                          <div className="col-lg-6 col-sm-12">
                              <div className="ht-about-content style-2">
                                  <div className="section-title">
                                      <span className="subtitle wow fadeInUp" data-wow-delay=".2s">About company</span>
                                      <h2 className="title wow fadeInUp" data-wow-delay=".5s">We committed to helping you achieve
                                          your goals</h2>
                                      <p className="wow fadeInUp" data-wow-delay=".8s">At the core of our ethos lies a dedication
                                          to our clients. Your success is our shared
                                          triumph, and we're unwavering in our commitment to delivering exceptional,</p>
                                  </div>
                                  <a href="/about" className="ht-btn style-3 wow fadeInUp" data-wow-delay="1.1s">Let's Get in
                                      Touch</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <div className="section ht-process-area-3">
              <div className="container">
                  <div className="section-title text-center">
                      <span className="subtitle wow fadeInUp" data-wow-delay=".2s">Process Bar</span>
                      <h2 className="title wow fadeInUp" data-wow-delay=".5s">Easy process to find <br /> your ideal plan</h2>
                  </div>
                  <div className="ht-process-wrapper-3">
                      <div className="row gy-5 justify-content-between">
                          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                              <div className="process-item">
                                  <div className="thumb">
                                      <img src="/assets/img/process/1.jpg" alt="process-img" />
                                      <div className="circle"><img src="/assets/img/shape/9.svg" alt="circle" /></div>
                                      <span>1</span>
                                      <div className="step-arrow">
                                          <img src="/assets/img/icon/6.svg" alt="arrow-icon" />
                                      </div>
                                  </div>
                                  <div className="contents">
                                      <h3>Talk to an Advisor</h3>
                                      <p>Credibly conceptualize multifunctional human capital after that awesome revenue
                                          superior scenarios.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                              <div className="process-item">
                                  <div className="thumb">
                                      <img src="/assets/img/process/2.jpg" alt="process-img" />
                                      <div className="circle"><img src="/assets/img/shape/9.svg" alt="circle" /></div>
                                      <span className="nth">2</span>
                                      <div className="step-arrow">
                                          <img src="/assets/img/icon/7.svg" alt="arrow-icon" />
                                      </div>
                                  </div>
                                  <div className="contents">
                                      <h3>Get a Quote</h3>
                                      <p>Credibly conceptualize multifunctional human capital after that awesome revenue
                                          superior scenarios.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                              <div className="process-item">
                                  <div className="thumb">
                                      <img src="/assets/img/process/3.jpg" alt="process-img" />
                                      <div className="circle"><img src="/assets/img/shape/9.svg" alt="circle" /></div>
                                      <span>3</span>
                                  </div>
                                  <div className="contents">
                                      <h3>Relax & Sleep Easy</h3>
                                      <p>Credibly conceptualize multifunctional human capital after that awesome revenue
                                          superior scenarios.</p>
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
                                      <span className="subtitle wow fadeInUp" data-wow-delay=".2s">Pricing plan</span>
                                      <h2 className="title wow fadeInUp" data-wow-delay=".4s">Coaching Packages That Fit You</h2>
                                      <p className="wow fadeInUp" data-wow-delay=".6s">Our coaching packages are designed to meet
                                          diverse needs and budgets, providing
                                          flexibility for every individual and organization. Whether you're seeking personal.
                                      </p>
                                  </div>
                                  <a href="/pricing" className="ht-btn style-2 wow fadeInUp" data-wow-delay=".8s">get all
                                      touch</a>
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <div className="ht-price-item">
                                  <div className="single-item wow fadeInUp" data-wow-delay=".3s">
                                      <div className="left">
                                          <span>Basic Package</span>
                                          <h2>$199<span>/month</span></h2>
                                          <a href="/pricing" className="link">Read more <i className="fa-solid fa-arrow-right"></i></a>
                                      </div>
                                      <div className="right">
                                          <ul className="price-details">
                                              <li><i className="fa-solid fa-check"></i>Initial consultation</li>
                                              <li><i className="fa-solid fa-check"></i>Email support</li>
                                              <li><i className="fa-solid fa-check"></i>Online resources</li>
                                              <li><i className="fa-solid fa-check"></i>Flexible scheduling</li>
                                              <li><i className="fa-solid fa-check"></i>Tracking sheets</li>
                                              <li><i className="fa-solid fa-check"></i>Private client portal</li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="single-item style-2 wow fadeInUp" data-wow-delay=".6s">
                                      <div className="left">
                                          <span>Basic Package</span>
                                          <h2>$199<span>/month</span></h2>
                                          <a href="/pricing" className="link">Read more <i className="fa-solid fa-arrow-right"></i></a>
                                      </div>
                                      <div className="right">
                                          <ul className="price-details">
                                              <li><i className="fa-solid fa-check"></i>Initial consultation</li>
                                              <li><i className="fa-solid fa-check"></i>Email support</li>
                                              <li><i className="fa-solid fa-check"></i>Online resources</li>
                                              <li><i className="fa-solid fa-check"></i>Flexible scheduling</li>
                                              <li><i className="fa-solid fa-check"></i>Tracking sheets</li>
                                              <li><i className="fa-solid fa-check"></i>Private client portal</li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="single-item wow fadeInUp" data-wow-delay=".9s">
                                      <div className="left">
                                          <span>Basic Package</span>
                                          <h2>$199<span>/month</span></h2>
                                          <a href="/pricing" className="link">Read more <i className="fa-solid fa-arrow-right"></i></a>
                                      </div>
                                      <div className="right">
                                          <ul className="price-details">
                                              <li><i className="fa-solid fa-check"></i>Initial consultation</li>
                                              <li><i className="fa-solid fa-check"></i>Email support</li>
                                              <li><i className="fa-solid fa-check"></i>Online resources</li>
                                              <li><i className="fa-solid fa-check"></i>Flexible scheduling</li>
                                              <li><i className="fa-solid fa-check"></i>Tracking sheets</li>
                                              <li><i className="fa-solid fa-check"></i>Private client portal</li>
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
                  <img src="/assets/img/shape/8.svg" alt="shape" />
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
                                                  <img src="/assets/img/icon/5.svg" alt="icon" />
                                              </div>
                                              <p>“It’s a pleasure working with Bunker our new brand positioning guidelines and
                                                  translated them
                                                  beautifully and consistently into our on-going marketing comms”</p>
                                              <div className="info">
                                                  <h4>Joshua liddell</h4>
                                                  <span>Agency owner</span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="swiper-testi-btn">
                          <div className="testi-slides-prev">
                              <i className="fa-solid fa-arrow-left-long"></i>
                          </div>
                          <div className="testi-slides-next">
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
                                  <img src="/assets/img/faq/1.jpg" alt="thumb" />
                              </div>
                          </div>
                          <div className="col-xl-5 offset-xl-1 col-lg-6">
                              <div className="ht-faq-content">
                                  <div className="section-title">
                                      <span className="subtitle wow fadeInUp" data-wow-delay=".3s">faq's</span>
                                      <h2 className="title wow fadeInUp" data-wow-delay=".6s">Frequently asked asked question</h2>
                                      <p className="wow fadeInUp" data-wow-delay=".9s">Morem ipsum dolor sit amet, consectetur
                                          adipiscing elita florai psum dolor sit amet,
                                          amet consecteture.</p>
                                  </div>
                                  <div className="accordion" id="faqAccordion">
                                      <div className="accordion-item wow fadeInUp" data-wow-delay="1.2s">
                                          <h5 className="accordion-header">
                                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                                  HOW TO CHOOSE HEALTH INSURANCE?
                                              </button>
                                          </h5>
                                          <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                              <div className="accordion-body">
                                                  If you ask our clients what it’s like working 36, they’ll about how much we
                                                  care about their success.
                                              </div>
                                          </div>
                                      </div>
                                      <div className="accordion-item wow fadeInUp" data-wow-delay="1.5s">
                                          <h5 className="accordion-header">
                                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                                                  HOW DOES LIFE INSURANCE HELP MY FAMILY?
                                              </button>
                                          </h5>
                                          <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                              <div className="accordion-body">
                                                  Life insurance can provide financial security and peace of mind for your
                                                  loved ones.
                                              </div>
                                          </div>
                                      </div>
                                      <div className="accordion-item wow fadeInUp" data-wow-delay="1.8s">
                                          <h5 className="accordion-header">
                                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                                                  ESSENTIAL TYPES OF BUSINESS INSURANCE?
                                              </button>
                                          </h5>
                                          <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                              <div className="accordion-body">
                                                  Common business insurances include general liability, property, and workers’
                                                  compensation.
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

          <section className="ht-blog-area-3 section-padding fix">
              <div className="container">
                  <div className="ht-blog-wrapper">
                      <div className="row gy-5">
                          <div className="col-lg-5">
                              <div className="ht-blog-contents">
                                  <div className="section-title">
                                      <span className="subtitle wow fadeInUp" data-wow-delay=".2s">recent posts</span>
                                      <h2 className="title wow fadeInUp" data-wow-delay=".5s">Recent blog news <br /> & articles
                                      </h2>
                                      <p className="mt-7 wow fadeInUp" data-wow-delay=".8s">Morem ipsum dolor sit amet,
                                          consectetur adipiscing elita florai psum
                                          dolor sit amet, amet consecteture.</p>
                                  </div>
                                  <a href="/blog" className="ht-btn style-2">view all blogs</a>
                              </div>
                          </div>
                          <div className="col-lg-7">
                              <div className="ht-blog-item-wrapper">
                                  <div className="single-item wow fadeInUp" data-wow-delay=".3s">
                                      <div className="thumb">
                                          <a href="/blog-details"><img src="/assets/img/blog/10.jpg" alt="blog-thumb" /></a>
                                      </div>
                                      <div className="content">
                                          <span className="meta">June 16, 2024 | Business</span>
                                          <a href="/blog-details">
                                              <h3>Travel insurance tips for <br /> safety abroad</h3>
                                          </a>
                                          <a href="blog-details" className="link">read more</a>
                                      </div>
                                  </div>
                                  <div className="single-item wow fadeInUp" data-wow-delay=".6s">
                                      <div className="thumb">
                                          <a href="/blog-details"><img src="/assets/img/blog/11.jpg" alt="blog-thumb" /></a>
                                      </div>
                                      <div className="content">
                                          <span className="meta">June 16, 2024 | Business</span>
                                          <a href="blog-details">
                                              <h3>Back-to-school coverage <br /> tips for kids.</h3>
                                          </a>
                                          <a href="/blog-details" className="link">read more</a>
                                      </div>
                                  </div>
                                  <div className="single-item wow fadeInUp" data-wow-delay=".9s">
                                      <div className="thumb">
                                          <a href="/blog-details"><img src="/assets/img/blog/12.jpg" alt="blog-thumb" /></a>
                                      </div>
                                      <div className="content">
                                          <span className="meta">June 16, 2024 | Business</span>
                                          <a href="blog-details">
                                              <h3>Tips for handling a car <br /> accident scene.</h3>
                                          </a>
                                          <a href="/blog-details" className="link">read more</a>
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
