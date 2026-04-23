import Breadcrumb from '../components/Breadcrumb.jsx';

export default function ProjectDetails() {
  return (
    <>
      <Breadcrumb title="Mandate — Portugal Golden Visa" current="Case Study" />
      <section className="ht-project-details-area section-padding">
              <div className="container">
                  <div className="project-details-wrapper">
                      <div className="thumbnails">
                          <img src="/assets/img/project/15.jpg" alt="Lisbon skyline — Portugal Golden Visa mandate" />
                      </div>
                      <div className="row">
                          <div className="col-xl-9">
                              <div className="project-details-content">
                                  <h2 className="mb-12">Portugal Golden Visa — Founder Relocation</h2>
                                  <p className="mb-18">
                                      A founder in their late thirties sold a software business in Central Europe and wanted
                                      a stable European base — ideally without disrupting schooling for two children, and
                                      without moving tax residency in year one. They had reviewed two other advisory firms,
                                      both of which pitched the fastest package rather than the right one.
                                  </p>
                                  <p>
                                      The mandate ran over fourteen months. Year one: program selection, a fund-route
                                      investment sized and sourced correctly, biometric appointments in Lisbon, and family
                                      residency cards issued. Year two: a coordinated, lawful tax residency shift once the
                                      sale proceeds were settled and the children's school year permitted a clean move.
                                  </p>
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="project-thumbs">
                                              <img src="/assets/img/project/16.jpg" alt="Lisbon residential neighborhood" />
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="project-thumbs">
                                              <img src="/assets/img/project/17.jpg" alt="Approved qualifying investment fund documents" />
                                          </div>
                                      </div>
                                  </div>
                                  <p className="mt-35">
                                      Throughout, the firm held the single point of accountability. Licensed Portuguese
                                      counsel handled the application itself; a qualifying investment fund was selected on
                                      independent merit, not agent commission; and the client's own tax counsel was looped
                                      in before any residency-day decisions were made.
                                  </p>
                                  <h3>Challenge</h3>
                                  <p>
                                      The client's existing tax residency carried exit-tax exposure if handled carelessly.
                                      Two prior advisors had suggested a same-year move that would have triggered it.
                                      Separately, the family wanted a European footprint that would mature into citizenship
                                      after the five-year threshold — without committing to full-time residence.
                                  </p>
                                  <h3>Solution</h3>
                                  <p>
                                      Portugal's Golden Visa via the qualifying-fund route: low minimum physical presence
                                      (seven days per year), no local taxation by default, and a defined five-year path to
                                      citizenship. Investment structured to sit in a regulated EU fund chosen on returns
                                      and governance, not commission. Tax residency change deferred to the following fiscal
                                      year on written advice from the client's counsel.
                                  </p>
                                  <h3>Outcome</h3>
                                  <p>
                                      Family residency cards issued within ten months of first biometric appointment.
                                      Clean tax residency transition in year two without exit-tax exposure. Children's
                                      schooling continued uninterrupted. The family remains on track for Portuguese
                                      citizenship at the five-year mark, and is now a multi-year advisory client on
                                      estate structuring.
                                  </p>
                              </div>
                          </div>
                          <div className="col-xl-3">
                              <div className="project-details-sidebar">
                                  <h5 className="widget-title">Mandate summary</h5>
                                  <div className="widget-item-wrapper">
                                      <div className="single-widget">
                                          <div className="icon">
                                              <img src="/assets/img/icon/12.svg" alt="" aria-hidden="true" />
                                          </div>
                                          <div className="info">
                                              <span>Client</span>
                                              <h6>Founder, tech exit (anonymised)</h6>
                                          </div>
                                      </div>
                                      <div className="single-widget">
                                          <div className="icon">
                                              <img src="/assets/img/icon/13.svg" alt="" aria-hidden="true" />
                                          </div>
                                          <div className="info">
                                              <span>Category</span>
                                              <h6>Residency by Investment</h6>
                                          </div>
                                      </div>
                                      <div className="single-widget">
                                          <div className="icon">
                                              <img src="/assets/img/icon/14.svg" alt="" aria-hidden="true" />
                                          </div>
                                          <div className="info">
                                              <span>Duration</span>
                                              <h6>14 months (incl. tax move)</h6>
                                          </div>
                                      </div>
                                      <div className="single-widget">
                                          <div className="icon">
                                              <img src="/assets/img/icon/15.svg" alt="" aria-hidden="true" />
                                          </div>
                                          <div className="info">
                                              <span>Jurisdiction</span>
                                              <h6>Portugal (Lisbon)</h6>
                                          </div>
                                      </div>
                                  </div>
                                  <p style={{ marginTop: '24px', fontSize: '12px', opacity: 0.7 }}>
                                    Case study is anonymised. Facts, jurisdiction and outcome are
                                    representative; identifying details are withheld by policy.
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
