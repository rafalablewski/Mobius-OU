import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.jsx';

export default function Pricing() {
  return (
    <>
      <Breadcrumb
        title="Programs &amp;"
        emphasis="fees."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Programs' }]}
        tagline="Fixed retainers · No referral kickbacks"
      />
      <section className="ht-price-area section-padding pb-0">
              <div className="container">
                  <div className="ht-price-wrapper">
                      <div className="row">
                          <div className="col-lg-6">
                              <div className="ht-price-content">
                                  <div className="section-title">
                                      <span className="subtitle wow fadeInUp" data-wow-delay=".2s">Programs at a glance</span>
                                      <h2 className="title wow fadeInUp" data-wow-delay=".4s">Compare the routes most private clients consider</h2>
                                      <p className="wow fadeInUp" data-wow-delay=".6s">Minimum investment, processing time and
                                          the main benefit — at a glance. Actual eligibility, fees and ongoing obligations depend
                                          on household composition, source of funds and the current policy cycle in each jurisdiction.
                                          Figures below are rounded indicative amounts as of 2026.
                                      </p>
                                  </div>
                                  <Link to="/contact" className="ht-btn style-2 wow fadeInUp" data-wow-delay=".8s">Request a program memo</Link>
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <div className="ht-price-item">
                                  <div className="single-item wow fadeInUp" data-wow-delay=".3s">
                                      <div className="left">
                                          <span>Residency · EU</span>
                                          <h2>€500K<span>/min.</span></h2>
                                          <Link to="/contact" className="link">Request memo <i className="fa-solid fa-arrow-right"></i></Link>
                                      </div>
                                      <div className="right">
                                          <ul className="price-details">
                                              <li><i className="fa-solid fa-check"></i>Portugal Golden Visa (fund route)</li>
                                              <li><i className="fa-solid fa-check"></i>6–12 month processing</li>
                                              <li><i className="fa-solid fa-check"></i>Schengen mobility for the family</li>
                                              <li><i className="fa-solid fa-check"></i>Pathway to citizenship after 5 years</li>
                                              <li><i className="fa-solid fa-check"></i>Minimum stay: 7 days / year</li>
                                              <li><i className="fa-solid fa-check"></i>No local tax by default</li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="single-item style-2 wow fadeInUp" data-wow-delay=".6s">
                                      <div className="left">
                                          <span>Citizenship · Caribbean</span>
                                          <h2>$200K<span>/min.</span></h2>
                                          <Link to="/contact" className="link">Request memo <i className="fa-solid fa-arrow-right"></i></Link>
                                      </div>
                                      <div className="right">
                                          <ul className="price-details">
                                              <li><i className="fa-solid fa-check"></i>St Kitts, Dominica, Grenada, Antigua</li>
                                              <li><i className="fa-solid fa-check"></i>4–9 month processing to oath</li>
                                              <li><i className="fa-solid fa-check"></i>Visa-free access to 140+ countries</li>
                                              <li><i className="fa-solid fa-check"></i>No residency or language requirement</li>
                                              <li><i className="fa-solid fa-check"></i>Inherited by children at birth</li>
                                              <li><i className="fa-solid fa-check"></i>Contribution or approved real estate</li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="single-item wow fadeInUp" data-wow-delay=".9s">
                                      <div className="left">
                                          <span>Residency · UAE</span>
                                          <h2>AED 2M<span>/min.</span></h2>
                                          <Link to="/contact" className="link">Request memo <i className="fa-solid fa-arrow-right"></i></Link>
                                      </div>
                                      <div className="right">
                                              <ul className="price-details">
                                              <li><i className="fa-solid fa-check"></i>UAE Golden Residence — 10 years</li>
                                              <li><i className="fa-solid fa-check"></i>2–4 month processing</li>
                                              <li><i className="fa-solid fa-check"></i>0% personal income tax (conditional)</li>
                                              <li><i className="fa-solid fa-check"></i>Sponsorship for spouse and children</li>
                                              <li><i className="fa-solid fa-check"></i>Banking and corporate setup included</li>
                                              <li><i className="fa-solid fa-check"></i>Real estate or qualifying deposit route</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="ht-price-wrapper" style={{ marginTop: '80px' }}>
                      <div className="section-title text-center">
                          <span className="subtitle wow fadeInUp" data-wow-delay=".2s">Side-by-side</span>
                          <h2 className="title wow fadeInUp" data-wow-delay=".4s">Program comparison table</h2>
                      </div>
                      <div className="wow fadeInUp" data-wow-delay=".6s" style={{ overflowX: 'auto' }}>
                          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '30px' }}>
                              <thead>
                                  <tr style={{ borderBottom: '2px solid rgba(0,0,0,.12)', textAlign: 'left' }}>
                                      <th style={{ padding: '16px 12px' }}>Program</th>
                                      <th style={{ padding: '16px 12px' }}>Type</th>
                                      <th style={{ padding: '16px 12px' }}>Minimum investment</th>
                                      <th style={{ padding: '16px 12px' }}>Timeline</th>
                                      <th style={{ padding: '16px 12px' }}>Key benefit</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr style={{ borderBottom: '1px solid rgba(0,0,0,.08)' }}>
                                      <td style={{ padding: '14px 12px', fontWeight: 600 }}>Portugal Golden Visa</td>
                                      <td style={{ padding: '14px 12px' }}>Residency</td>
                                      <td style={{ padding: '14px 12px' }}>€500,000 (fund)</td>
                                      <td style={{ padding: '14px 12px' }}>6–12 months</td>
                                      <td style={{ padding: '14px 12px' }}>EU residency, citizenship after 5 years</td>
                                  </tr>
                                  <tr style={{ borderBottom: '1px solid rgba(0,0,0,.08)' }}>
                                      <td style={{ padding: '14px 12px', fontWeight: 600 }}>Malta MEIN</td>
                                      <td style={{ padding: '14px 12px' }}>Citizenship (exceptional services)</td>
                                      <td style={{ padding: '14px 12px' }}>€690,000+</td>
                                      <td style={{ padding: '14px 12px' }}>12–36 months</td>
                                      <td style={{ padding: '14px 12px' }}>EU passport via extended residency</td>
                                  </tr>
                                  <tr style={{ borderBottom: '1px solid rgba(0,0,0,.08)' }}>
                                      <td style={{ padding: '14px 12px', fontWeight: 600 }}>St Kitts &amp; Nevis CBI</td>
                                      <td style={{ padding: '14px 12px' }}>Citizenship</td>
                                      <td style={{ padding: '14px 12px' }}>$250,000 (contribution)</td>
                                      <td style={{ padding: '14px 12px' }}>4–6 months</td>
                                      <td style={{ padding: '14px 12px' }}>Caribbean passport, 150+ visa-free</td>
                                  </tr>
                                  <tr style={{ borderBottom: '1px solid rgba(0,0,0,.08)' }}>
                                      <td style={{ padding: '14px 12px', fontWeight: 600 }}>Dominica CBI</td>
                                      <td style={{ padding: '14px 12px' }}>Citizenship</td>
                                      <td style={{ padding: '14px 12px' }}>$200,000 (contribution)</td>
                                      <td style={{ padding: '14px 12px' }}>4–9 months</td>
                                      <td style={{ padding: '14px 12px' }}>Most cost-efficient Caribbean route</td>
                                  </tr>
                                  <tr style={{ borderBottom: '1px solid rgba(0,0,0,.08)' }}>
                                      <td style={{ padding: '14px 12px', fontWeight: 600 }}>UAE Golden Residence</td>
                                      <td style={{ padding: '14px 12px' }}>Residency</td>
                                      <td style={{ padding: '14px 12px' }}>AED 2,000,000</td>
                                      <td style={{ padding: '14px 12px' }}>2–4 months</td>
                                      <td style={{ padding: '14px 12px' }}>Tax-light residency, 10-year permit</td>
                                  </tr>
                                  <tr style={{ borderBottom: '1px solid rgba(0,0,0,.08)' }}>
                                      <td style={{ padding: '14px 12px', fontWeight: 600 }}>Swiss Lump-Sum Taxation</td>
                                      <td style={{ padding: '14px 12px' }}>Tax residency</td>
                                      <td style={{ padding: '14px 12px' }}>CHF 400,000+ /yr</td>
                                      <td style={{ padding: '14px 12px' }}>3–6 months</td>
                                      <td style={{ padding: '14px 12px' }}>Fixed-base taxation in select cantons</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                      <p className="wow fadeInUp" data-wow-delay=".8s" style={{ marginTop: '20px', fontSize: '13px', opacity: 0.7 }}>
                          Indicative only. Figures exclude due diligence fees, government charges and professional fees,
                          which vary by household and program. Not legal, tax or investment advice — request a memo
                          for your specific circumstances.
                      </p>
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
                                      <span className="subtitle wow fadeInUp" data-wow-delay=".3s">faq's</span>
                                      <h2 className="title wow fadeInUp" data-wow-delay=".6s">Fees &amp; engagement — answered</h2>
                                      <p className="wow fadeInUp" data-wow-delay=".9s">Advisory fees are fixed per mandate, invoiced
                                          in stages and independent of program commissions. A condensed answer to what private
                                          clients ask before they engage.
                                      </p>
                                  </div>
                                  <div className="accordion" id="faqAccordion">
                                      <div className="accordion-item wow fadeInUp" data-wow-delay="1.2s">
                                          <h5 className="accordion-header">
                                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                                  HOW DO YOU CHARGE FOR AN ADVISORY MANDATE?
                                              </button>
                                          </h5>
                                          <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                              <div className="accordion-body">
                                                  A fixed-fee retainer for strategy and mandate management, invoiced in
                                                  milestones. Government, legal and program-agent fees are separate and paid
                                                  to those parties directly. We do not accept commissions.
                                              </div>
                                          </div>
                                      </div>
                                      <div className="accordion-item wow fadeInUp" data-wow-delay="1.5s">
                                          <h5 className="accordion-header">
                                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                                                  CAN YOU GUARANTEE APPROVAL?
                                              </button>
                                          </h5>
                                          <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                              <div className="accordion-body">
                                                  No serious advisor can. We can, and do, decline mandates we think will not
                                                  clear due diligence — that conversation is part of the first engagement.
                                              </div>
                                          </div>
                                      </div>
                                      <div className="accordion-item wow fadeInUp" data-wow-delay="1.8s">
                                          <h5 className="accordion-header">
                                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                                                  HOW LONG DOES AN AVERAGE MANDATE TAKE?
                                              </button>
                                          </h5>
                                          <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                              <div className="accordion-body">
                                                  Four to nine months for Caribbean CBI, six to twelve for most EU golden
                                                  visas, and up to thirty-six for Malta. Tax residency moves are usually a
                                                  single tax year end-to-end.
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
