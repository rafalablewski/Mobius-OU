import Breadcrumb from '../components/Breadcrumb.jsx';
import CTABand from '../components/CTABand.jsx';

const FAQS = [
  {
    id: 'faq1',
    open: true,
    q: 'WHAT IS THE DIFFERENCE BETWEEN CBI AND RBI?',
    a: 'Citizenship by Investment (CBI) grants a second nationality and passport in exchange for a qualifying contribution or investment — St Kitts, Dominica, Malta. Residency by Investment (RBI) grants the right to live and, over time, naturalise — Portugal Golden Visa, UAE Golden Residence, Switzerland. CBI is faster and portable; RBI is slower, cheaper and tied to physical presence.',
  },
  {
    id: 'faq2',
    q: 'DO I HAVE TO GIVE UP MY CURRENT CITIZENSHIP?',
    a: 'In almost all programs we advise on, no. Most Caribbean CBI states, Malta, Portugal, Switzerland, Singapore and the UAE accept dual or multiple citizenship or residency. Your own country of citizenship may have its own rules — we flag that at Discovery and coordinate with your local counsel.',
  },
  {
    id: 'faq3',
    q: 'WILL A SECOND RESIDENCY CHANGE WHERE I PAY TAX?',
    a: 'Only if you move your tax residency, which is a separate question from immigration residency. Tax residency is set by physical presence, ties and treaty rules — not by where your permit was issued. We plan the two together, in writing, with your tax counsel.',
  },
  {
    id: 'faq4',
    q: 'HOW LONG DOES A TYPICAL MANDATE TAKE?',
    a: 'Caribbean CBI: four to nine months. Portugal Golden Visa: six to twelve months. Malta citizenship via exceptional services: twelve to thirty-six months. UAE Golden Residence: two to four months. We publish updated timelines to active clients each quarter.',
  },
  {
    id: 'faq5',
    q: 'CAN YOU GUARANTEE APPROVAL?',
    a: 'No serious advisor can. What we can do is review your file against each program\'s current due diligence standard before we accept the mandate, and decline cases we think will not clear. That conversation is part of the first engagement.',
  },
  {
    id: 'faq6',
    q: 'HOW IS THE ADVISORY PAID?',
    a: 'A fixed-fee retainer, invoiced in milestones, independent of program outcomes. Government, legal and program-agent fees are separate and paid to those parties directly. We do not accept referral commissions — you pay us, nobody else does.',
  },
  {
    id: 'faq7',
    q: 'IS EVERYTHING CONFIDENTIAL?',
    a: 'Yes. Every mandate runs under NDA. The firm does not publish client names, case photographs or identifiable numbers. Testimonials on this site are attributed by role and region only.',
  },
];

export default function Faq() {
  return (
    <>
      <Breadcrumb title="Client FAQ" current="FAQ" />
      <section className="ht-faq-area section-padding fix">
              <div className="container">
                  <div className="ht-faq-wrapper">
                      <div className="row gy-5">
                          <div className="col-xl-6 col-lg-6">
                              <div className="ht-faq-thumb wow fadeInUp" data-wow-delay=".3s">
                                  <img src="/assets/img/faq/1.jpg" alt="Private client advisory session in Warsaw" />
                              </div>
                          </div>
                          <div className="col-xl-5 offset-xl-1 col-lg-6">
                              <div className="ht-faq-content">
                                  <div className="section-title">
                                      <span className="subtitle wow fadeInUp" data-wow-delay=".3s">client faq</span>
                                      <h2 className="title wow fadeInUp" data-wow-delay=".6s">What private clients ask us first</h2>
                                      <p className="wow fadeInUp" data-wow-delay=".9s">A condensed answer to the questions that come
                                          up in every first call — on residency versus citizenship, on tax, on fees, and on
                                          confidentiality. Detailed answers are in your Strategy Memo, under NDA.</p>
                                  </div>
                                  <div className="accordion" id="faqAccordion">
                                      {FAQS.map((f, i) => (
                                        <div
                                          key={f.id}
                                          className="accordion-item wow fadeInUp"
                                          data-wow-delay={`${1.2 + i * 0.15}s`}
                                        >
                                          <h5 className="accordion-header">
                                            <button
                                              className={`accordion-button${f.open ? '' : ' collapsed'}`}
                                              type="button"
                                              data-bs-toggle="collapse"
                                              data-bs-target={`#${f.id}`}
                                              aria-expanded={f.open ? 'true' : 'false'}
                                              aria-controls={f.id}
                                            >
                                              {f.q}
                                            </button>
                                          </h5>
                                          <div
                                            id={f.id}
                                            className={`accordion-collapse collapse${f.open ? ' show' : ''}`}
                                            data-bs-parent="#faqAccordion"
                                          >
                                            <div className="accordion-body">{f.a}</div>
                                          </div>
                                        </div>
                                      ))}
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
                          <button className="ht-testi-prev ht-testi-prev-2" aria-label="Previous testimonial"><i className="fa-solid fa-chevron-left"></i></button>
                          <button className="ht-testi-next ht-testi-next-2" aria-label="Next testimonial"><i className="fa-solid fa-chevron-right"></i></button>
                      </div>
                  </div>
                  <div className="ht-testimonials-wrapper-2">
                      <div className="swiper ht-testi-slider-2">
                          <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                  <div className="ht-testimonials-item ht-testimonials-item-2">
                                      <div className="star" aria-label="5 out of 5">
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
                                      <div className="star" aria-label="5 out of 5">
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                      </div>
                                      <p className="desc desc-2">"We briefed three advisors. Ablewski was the only one who put the honest disqualifications in writing before asking for a cent."
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
                                      <div className="star" aria-label="5 out of 5">
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
      <CTABand
        eyebrow="Still unanswered?"
        title="Every file is different. Ask the one that matters to yours."
        body="If your question is not on the list, it is usually because the answer depends on facts we would rather hear from you directly."
        primary={{ label: 'Schedule Consultation', to: '/contact' }}
        secondary={{ label: 'Programs & Fees', to: '/pricing' }}
        bg="ivory"
      />
    </>
  );
}
