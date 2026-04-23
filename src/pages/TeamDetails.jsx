import Breadcrumb from '../components/Breadcrumb.jsx';
import CTABand from '../components/CTABand.jsx';

export default function TeamDetails() {
  return (
    <>
      <Breadcrumb title="Advisor Profile" current="Rafał Ablewski" />
      <section className="team-details-area fix section-padding">
              <div className="container">
                  <div className="team-details-wrapper">
                      <div className="team-author-items">
                          <div className="row align-items-center justify-content-between">
                              <div className="col-lg-5">
                                  <div className="thumb">
                                      <img src="/assets/img/team/13.jpg" alt="Rafał Ablewski, Managing Partner" />
                                  </div>
                              </div>
                              <div className="col-lg-6">
                                  <div className="content">
                                      <h2>Rafał Ablewski</h2>
                                      <h6>Managing Partner, CFA</h6>
                                      <p>
                                          Rafał founded Ablewski &amp; Partners after fourteen years across NYSE-listed capital
                                          markets and European wealth advisory. His practice covers citizenship selection,
                                          residency sequencing and the structural decisions that sit underneath both —
                                          treasury, custody and inheritance.
                                      </p>

                                      <a className="tl" href="tel:+48221000000"><i className="fa-solid fa-phone"></i> +48 22 100 00 00</a>
                                      <a className="tl" href="mailto:advisory@passportbros.org"><i className="fa-solid fa-envelope"></i>
                                          advisory@passportbros.org
                                      </a>

                                      <ul className="team-social">
                                          <li><a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                          <li><a href="#" aria-label="X"><i className="fab fa-twitter"></i></a></li>
                                          <li><a href="#" aria-label="Substack"><i className="fa-solid fa-newspaper"></i></a></li>
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
                                  <h3>Background</h3>
                                  <p>
                                      Rafał began his career in equity capital markets in New York, spending six years on the
                                      sell side before returning to Europe to work with single-family offices on cross-border
                                      structuring. He holds the Chartered Financial Analyst designation, reads Polish, English
                                      and German, and speaks functional Portuguese after a decade advising on Iberian programs.
                                  </p>
                                  <p>
                                      His writing on global mobility has appeared in specialist trade publications; he does
                                      not comment publicly on active mandates, and the firm's client list is not published
                                      anywhere. A first consultation is always with Rafał, never with a junior or a sales desk.
                                  </p>
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <div className="team-skills">
                                  <h3>Areas of focus</h3>
                                  <p>
                                      Where most of the advisory hours land in a typical mandate — before any licensed counsel
                                      or investment agent is introduced.
                                  </p>
                                  <div className="skills">
                                      <div className="skill">
                                          <div className="skill-header">
                                              <span>CITIZENSHIP &amp; RESIDENCY PROGRAMS</span>
                                              <span className="percent">92%</span>
                                          </div>
                                          <div className="progress-bar">
                                              <div className="progress" style={{ "width": "92%" }}></div>
                                          </div>
                                      </div>

                                      <div className="skill">
                                          <div className="skill-header">
                                              <span>TAX RESIDENCY &amp; RELOCATION SEQUENCING</span>
                                              <span className="percent two">84%</span>
                                          </div>
                                          <div className="progress-bar">
                                              <div className="progress two" style={{ "width": "84%" }}></div>
                                          </div>
                                      </div>

                                      <div className="skill">
                                          <div className="skill-header">
                                              <span>ASSET PROTECTION &amp; FAMILY STRUCTURES</span>
                                              <span className="percent three">78%</span>
                                          </div>
                                          <div className="progress-bar">
                                              <div className="progress three" style={{ "width": "78%" }}></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      <CTABand
        eyebrow="Book the advisor"
        title="Ask for this partner directly."
        body="Our advisors respond only to enquiries routed through the firm. Schedule a call and we will confirm the right pair for your file."
        primary={{ label: 'Schedule Consultation', to: '/contact' }}
        secondary={{ label: 'Our Advisors', to: '/team' }}
        bg="ink"
      />
    </>
  );
}
