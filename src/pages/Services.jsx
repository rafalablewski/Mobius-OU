import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.jsx';
import CTABand from '../components/CTABand.jsx';

export default function Services() {
  return (
    <>
      <Breadcrumb title="Advisory Practice" current="Advisory Practice" />
      <section className="ht-services-area section-padding fix">
              <div className="container">
                  <div className="ht-services-wrapper">
                      <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".2s">
                              <div className="ht-services-items mt-30">
                                  <div className="icon">
                                      <img src="/assets/img/icon/1.svg" alt="" aria-hidden="true" />
                                  </div>
                                  <Link to="/service-details">
                                      <h3 className="title">Citizenship by Investment <img className="one" src="/assets/img/icon/arrow-up.svg" alt="" aria-hidden="true" /></h3>
                                  </Link>
                                  <p className="desc">Program selection and mandate management across Caribbean, Mediterranean and
                                      Pacific CBI routes — structured to pass enhanced due diligence and age with the family.</p>
                              </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".4s">
                              <div className="ht-services-items mt-30">
                                  <div className="icon">
                                      <img src="/assets/img/icon/2.svg" alt="" aria-hidden="true" />
                                  </div>
                                  <Link to="/service-details">
                                      <h3 className="title">Residency by Investment <img className="two" src="/assets/img/icon/arrow-up.svg" alt="" aria-hidden="true" /></h3>
                                  </Link>
                                  <p className="desc">EU Golden Visas, UAE Golden Residence, Singapore GIP, Swiss lump-sum —
                                      mapped against the family's real mobility, schooling and tax footprint.</p>
                              </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".6s">
                              <div className="ht-services-items mt-30">
                                  <div className="icon">
                                      <img src="/assets/img/icon/3.svg" alt="" aria-hidden="true" />
                                  </div>
                                  <Link to="/service-details">
                                      <h3 className="title">Tax Residency Planning <img className="three" src="/assets/img/icon/arrow-up.svg" alt="" aria-hidden="true" /></h3>
                                  </Link>
                                  <p className="desc">Lawful relocation sequencing, day-count discipline and exit strategy —
                                      coordinated with your counsel so residency decisions compound rather than collide.</p>
                              </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".8s">
                              <div className="ht-services-items mt-30">
                                  <div className="icon">
                                      <img src="/assets/img/icon/4.svg" alt="" aria-hidden="true" />
                                  </div>
                                  <Link to="/service-details">
                                      <h3 className="title">Asset Protection <img className="four" src="/assets/img/icon/arrow-up.svg" alt="" aria-hidden="true" /></h3>
                                  </Link>
                                  <p className="desc">Holding structures, trusts and private foundations selected for legitimacy
                                      and longevity — so the next generation inherits clarity, not litigation.</p>
                              </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1s">
                              <div className="ht-services-items mt-30">
                                  <div className="icon">
                                      <img src="/assets/img/icon/3.svg" alt="" aria-hidden="true" />
                                  </div>
                                  <Link to="/service-details">
                                      <h3 className="title">Family Relocation <img className="three" src="/assets/img/icon/arrow-up.svg" alt="" aria-hidden="true" /></h3>
                                  </Link>
                                  <p className="desc">Schooling, healthcare, housing, domestic staff and banking — sequenced so
                                      the family lands with utilities, not surprises.</p>
                              </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1.2s">
                              <div className="ht-services-items mt-30">
                                  <div className="icon">
                                      <img src="/assets/img/icon/4.svg" alt="" aria-hidden="true" />
                                  </div>
                                  <Link to="/service-details">
                                      <h3 className="title">Investment Strategy <img className="four" src="/assets/img/icon/arrow-up.svg" alt="" aria-hidden="true" /></h3>
                                  </Link>
                                  <p className="desc">Qualifying investments reviewed on their own merits — real estate, funds,
                                      bonds and enterprise — not on the commission they pay the agent.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      <CTABand
        eyebrow="Next step"
        title="Ready to map your path across jurisdictions?"
        body="One conversation is usually enough to tell you whether a program fits. We respond under NDA within two business days."
        primary={{ label: 'Schedule Consultation', to: '/contact' }}
        secondary={{ label: 'Programs & Fees', to: '/pricing' }}
        bg="ink"
      />
    </>
  );
}
