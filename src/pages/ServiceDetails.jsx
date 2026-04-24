import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.jsx';
import PracticeIndex from '../components/PracticeIndex.jsx';

export default function ServiceDetails() {
  return (
    <>
      <Breadcrumb
        title="Citizenship by"
        emphasis="investment."
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Practice', to: '/services' },
          { label: 'Citizenship by Investment' },
        ]}
        tagline="End-to-end mandate delivery"
      />
      <section className="ht-service-details-area section-padding">
              <div className="container">
                  <div className="service-details-wrapper">
                      <div className="row">
                          <div className="col-lg-4">
                              <div className="ht-sidebar-area v2">
                                  <div className="single-widget single-widget--flat">
                                      <PracticeIndex eyebrow="Advisory Practice" />
                                  </div>
                                  <aside className="ht-direct-line" aria-label="Direct advisor line">
                                      <p className="ht-direct-line__eyebrow">Direct Line</p>
                                      <h3 className="ht-direct-line__title">Speak with a partner, not a sales desk</h3>
                                      <p className="ht-direct-line__lede">
                                          First conversations are confidential, unrecorded and always with a named advisor.
                                      </p>
                                      <ul className="ht-direct-line__meta">
                                          <li>
                                              <span className="ht-direct-line__meta-label">Response</span>
                                              <span className="ht-direct-line__meta-value">Within one business day</span>
                                          </li>
                                          <li>
                                              <span className="ht-direct-line__meta-label">Format</span>
                                              <span className="ht-direct-line__meta-value">30 minutes, by appointment</span>
                                          </li>
                                          <li>
                                              <span className="ht-direct-line__meta-label">Compensation</span>
                                              <span className="ht-direct-line__meta-value">Advisory fee only — no commissions</span>
                                          </li>
                                      </ul>
                                      <Link to="/contact" className="ht-direct-line__cta">
                                          Schedule a consultation
                                          <span className="ht-direct-line__cta-arrow" aria-hidden="true">→</span>
                                      </Link>
                                  </aside>
                              </div>
                          </div>
                          <div className="col-lg-8">
                              <div className="service-details-thumb">
                                  <img src="/assets/img/service/3.jpg" alt="Advisor presenting a citizenship program memo" />
                              </div>
                              <div className="service-details-content">
                                  <h2 className="mb-12">Citizenship by Investment — a second passport, earned through due diligence</h2>
                                  <p className="mb-15">
                                      Citizenship by Investment (CBI) is the lawful acquisition of a second nationality in
                                      exchange for a qualifying contribution to a sovereign state — a non-refundable fund
                                      donation, approved real estate, government bonds or an enterprise investment. The
                                      strongest programs are not the fastest or the cheapest; they are the ones that continue
                                      to pass enhanced due diligence, retain visa-free travel, and remain politically stable
                                      for the next two decades.
                                  </p>
                                  <p>
                                      Our role is to tell you which of those programs you are actually a fit for — and which
                                      you are not. Some clients should not pursue CBI at all, and we will say so in writing.
                                      Where CBI is right, we manage the mandate end to end: structuring the investment,
                                      preparing the file, coordinating with licensed local agents, and tracking the
                                      application through to oath.
                                  </p>
                                  <h3>Programs we currently advise on</h3>
                                  <p>
                                      We maintain an active view on every major CBI route, including Antigua &amp; Barbuda,
                                      Dominica, Grenada, St Kitts &amp; Nevis, St Lucia, Malta (MEIN), Vanuatu and Turkey. We
                                      track processing times, minimum contributions and policy risk weekly, and publish an
                                      internal re-ranking each quarter for active clients.
                                  </p>
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="service-thumbs">
                                              <img src="/assets/img/service/4.jpg" alt="Caribbean CBI planning documents" />
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="service-thumbs">
                                              <img src="/assets/img/service/5.jpg" alt="EU citizenship planning documents" />
                                          </div>
                                      </div>
                                  </div>
                                  <p className="mt-35">
                                      CBI is not a transaction. It is a long-lived family asset that is only as strong as the
                                      paperwork behind it. Every file we submit is built to survive scrutiny five, ten and
                                      twenty years after approval — including under the political cycles we cannot control.
                                  </p>
                                  <h3>What a full CBI mandate covers</h3>
                                  <p>
                                      A typical engagement runs four to nine months depending on program and household size.
                                      You receive a single point of contact, a written mandate with fee schedule, and a named
                                      partner on every call. We never accept commission from developers, funds or agents —
                                      our only compensation is the advisory fee you agree to.
                                  </p>
                                  <ul className="service-details-list">
                                      <li><i className="fa-solid fa-check"></i>Program-fit memo with honest disqualifications</li>
                                      <li><i className="fa-solid fa-check"></i>Enhanced due diligence preparation and source-of-funds file</li>
                                      <li><i className="fa-solid fa-check"></i>Coordination with licensed local counsel in each jurisdiction</li>
                                      <li><i className="fa-solid fa-check"></i>Investment structuring — donation, real estate, bonds or enterprise</li>
                                      <li><i className="fa-solid fa-check"></i>Family banking, residency and post-approval compliance</li>
                                  </ul>
                                  <p className="mt-35">
                                      <em>Educational and strategic advisory only — not legal, tax or investment advice.
                                      Regulated legal and tax work is delivered by licensed partners in each jurisdiction.</em>
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    </>
  );
}
