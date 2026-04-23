import Breadcrumb from '../components/Breadcrumb.jsx';

export default function Contact() {
  return (
    <>
      <Breadcrumb title="Contact Us" current="Contact" />
      <section className="ht-contact-info-area section-padding">
              <div className="container">
                  <div className="contact-info-wrapper">
                      <div className="row gy-5">
                          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                              <div className="contact-info-item">
                                  <div className="icon">
                                      <img src="/assets/img/icon/phone.svg" alt="icon" />
                                  </div>
                                  <div className="content">
                                      <span>Phone number</span>
                                      <h4>+44 204 577 0077</h4>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                              <div className="contact-info-item">
                                  <div className="icon">
                                      <img src="/assets/img/icon/comment.svg" alt="icon" />
                                  </div>
                                  <div className="content">
                                      <span>Email address</span>
                                      <a href="mailto:hello@mobius.com">
                                          <h4>hello@mobius.com</h4>
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                              <div className="contact-info-item">
                                  <div className="icon">
                                      <img src="/assets/img/icon/location.svg" alt="icon" />
                                  </div>
                                  <div className="content">
                                      <span>Office Address</span>
                                      <h4>Washington Ave, NY</h4>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="ht-contact-form-area section-padding">
              <div className="container">
                  <div className="section-title text-center">
                      <span className="subtitle wow fadeInUp" data-wow-delay=".2s">Contact Us</span>
                      <h2 className="title wow fadeInUp text-black" data-wow-delay=".5s">Have questions? <br />
                          contact us!</h2>
                  </div>
                  <div className="ht-contact-wrapper">
                      <form action="#" method="post">
                          <div className="row justify-content-center">
                              <div className="col-lg-10">
                                  <div className="row">
                                      <div className="col-md-6">
                                          <input type="text" placeholder="Your name" required />
                                      </div>
                                      <div className="col-md-6">
                                          <input type="email" placeholder="Email address" required />
                                      </div>
                                      <div className="col-12">
                                          <input type="text" placeholder="Select subject" required />
                                      </div>
                                      <div className="col-12">
                                          <textarea placeholder="Type your message" required></textarea>
                                      </div>
                                      <div className="col-12 text-center">
                                          <button type="submit" className="ht-btn style-2">SEND MESSAGE HERE</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </section>

          <div className="ht-map-area">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29187.55100927148!2d90.4212538!3d23.8738739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c43b23589ec9%3A0x3f71bf01a9cd40de!2sBNS%20Center!5e0!3m2!1sen!2sbd!4v1760704093362!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
              </iframe>
          </div>
    </>
  );
}
