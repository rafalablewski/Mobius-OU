import Breadcrumb from '../components/Breadcrumb.jsx';

export default function Faq() {
  return (
    <>
      <Breadcrumb title="FAQ" />
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

          <section className="ht-testimonials-area-2 section-padding">
              <div className="container">
                  <div className="section-title-area align-items-lg-end mb-30">
                      <div className="section-title mb-0">
                          <span className="subtitle wow fadeInUp" data-wow-delay=".2s">TESTIMONIALS</span>
                          <h2 className="title wow fadeInUp" data-wow-delay=".4s">Client feedback</h2>
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
                                      <p className="desc desc-2">"Working with Campaign was a game-changer for our business. Their
                                          expertise and strategies helped us reach new heights we never thought possible
                                          heights
                                          we never"
                                      </p>
                                      <div className="ht-testimonials-author ht-testimonials-author-2">
                                          <div className="avatar">
                                              <img src="/assets/img/testimonials/2.png" alt="img" />
                                          </div>
                                          <div className="author-info">
                                              <h5 className="name">Ronald richards</h5>
                                              <p className="role">Finance Advisor</p>
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
                                      <p className="desc desc-2">"Working with Campaign was a game-changer for our business. Their
                                          expertise and strategies helped us reach new heights we never thought possible
                                          heights we never"
                                      </p>
                                      <div className="ht-testimonials-author ht-testimonials-author-2">
                                          <div className="avatar">
                                              <img src="/assets/img/testimonials/3.png" alt="img" />
                                          </div>
                                          <div className="author-info">
                                              <h5 className="name">Charlize Theron</h5>
                                              <p className="role">Ceo & Owner</p>
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
                                      <p className="desc desc-2">"Working with Campaign was a game-changer for our business. Their
                                          expertise and strategies helped us reach new heights we never thought possible
                                          heights
                                          we never"
                                      </p>
                                      <div className="ht-testimonials-author ht-testimonials-author-2">
                                          <div className="avatar">
                                              <img src="/assets/img/testimonials/4.png" alt="img" />
                                          </div>
                                          <div className="author-info">
                                              <h5 className="name">Marvin mcKinney</h5>
                                              <p className="role">Product Manager</p>
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
