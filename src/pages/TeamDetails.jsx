import Breadcrumb from '../components/Breadcrumb.jsx';

export default function TeamDetails() {
  return (
    <>
      <Breadcrumb title="Team Details" />
      <section className="team-details-area fix section-padding">
              <div className="container">
                  <div className="team-details-wrapper">
                      <div className="team-author-items">
                          <div className="row align-items-center justify-content-between">
                              <div className="col-lg-5">
                                  <div className="thumb">
                                      <img src="/assets/img/team/13.jpg" alt="img" />
                                  </div>
                              </div>
                              <div className="col-lg-6">
                                  <div className="content">
                                      <h2>Linda F. Collins</h2>
                                      <h6>SR Marketer</h6>
                                      <p>
                                          A content management system helps you create, manage, and publish content on the
                                          web. It
                                          also keep content organized and accessible so it can be used and repurposed
                                          effectively.
                                      </p>

                                      <a className="tl" href="tel:1234565678"><i className="fa-solid fa-phone"></i> 123-456-5678</a>
                                      <a className="tl" href="mailto:lindaf.collins@example.com"><i className="fa-solid fa-envelope"></i>
                                          lindaf.collins@example.com
                                      </a>

                                      <ul className="team-social">
                                          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                          <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                          <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="team-details-info-skills">
                      <div className="row">
                          <div className="col-lg-6">
                              <div className="team-about">
                                  <h3>About Me</h3>
                                  <p>Vitae lacus mi interdum orci libero mollis vivamus mattis. vehicula a erat. Phasellus ac
                                      sem sed erat pos se quam dignissim. Mauris feugiat, nisi nec dapibuasas a gas dictum,
                                      ligula nulla gravida ante, non aliquet odio elit ac orci. Curabi tinc Nunc eu rhoncus
                                      justo, nec mattis risus auris conse quat viverra sapien id lobortis. Vivamus auctor
                                      turpis vel dignissim licitudin. Etiam vitae posuere est. Donec gravida facilisis purus,
                                      eget bibendum neque varius ac. Nulla ullamcorper, sem viverra.
                                  </p>
                                  <p>
                                      Using advanced software, we create a custom solar system tailored to your location and
                                      energy needs. We handle all necessary permits, paperwork, and approvals, ensuring a
                                      seamless planning process that prepares your.
                                  </p>
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <div className="team-skills">
                                  <h3>Professional skills</h3>
                                  <p>
                                      We begin with an in-depth consultation to understand your energy needs and goals. Our
                                      team then conducts a site assessment.
                                  </p>
                                  <div className="skills">
                                      <div className="skill">
                                          <div className="skill-header">
                                              <span>PROJECT MANAGEMENT</span>
                                              <span className="percent">70%</span>
                                          </div>
                                          <div className="progress-bar">
                                              <div className="progress" style={{ "width": "70%" }}></div>
                                          </div>
                                      </div>

                                      <div className="skill">
                                          <div className="skill-header">
                                              <span>PROJECT MANAGEMENT</span>
                                              <span className="percent two">80%</span>
                                          </div>
                                          <div className="progress-bar">
                                              <div className="progress two" style={{ "width": "80%" }}></div>
                                          </div>
                                      </div>

                                      <div className="skill">
                                          <div className="skill-header">
                                              <span>PROJECT MANAGEMENT</span>
                                              <span className="percent three">90%</span>
                                          </div>
                                          <div className="progress-bar">
                                              <div className="progress three" style={{ "width": "90%" }}></div>
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
