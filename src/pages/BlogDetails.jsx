import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.jsx';
import { BRIEFS } from '../data/briefs.js';

const TAGS = ['#GoldenVisa', '#Portugal', '#EUResidency', '#CBI', '#TaxResidency'];

export default function BlogDetails() {
  const brief = BRIEFS[0];
  const recent = BRIEFS.slice(1, 5);

  return (
    <>
      <Breadcrumb title="Brief" current={brief.title} />
      <section className="ht-blog-details-area section-padding">
              <div className="container">
                  <div className="row gy-5">
                      <div className="col-lg-8">
                          <div className="ht-blog-details-wrapper">
                              <div className="blog-single-post">
                                  <div className="thumb">
                                      <Link to="/blog-details"><img src={`/assets/img/blog/${brief.img}`} alt={brief.title} /></Link>
                                  </div>
                                  <div className="content">
                                      <div className="blog-meta">
                                          <div className="single-meta">
                                              <img src="/assets/img/icon/user.svg" alt="" aria-hidden="true" />
                                              <span>Ablewski &amp; Partners</span>
                                          </div>
                                          <div className="single-meta">
                                              <img src="/assets/img/icon/comment-2.svg" alt="" aria-hidden="true" />
                                              <span>{brief.category}</span>
                                          </div>
                                          <div className="single-meta">
                                              <img src="/assets/img/icon/calendar.svg" alt="" aria-hidden="true" />
                                              <span>{brief.date}</span>
                                          </div>
                                      </div>
                                      <h2 className="title">{brief.title}</h2>
                                      <p>EU Golden Visas have entered their second decade. Portugal pulled the real-estate
                                          route; Greece priced Athens out of reach; Spain signalled a phase-out; Italy quietly
                                          kept its own route open. For clients deciding now, the right question is no longer
                                          "which program is cheapest" but "which program is still politically stable five years
                                          from issue."</p>
                                      <p className="mt-20">Portugal remains the most robust. Fund-route investment (currently
                                          a €500,000 minimum in regulated EU funds) keeps the minimum physical presence low —
                                          seven days per year — and preserves the statutory five-year path to EU citizenship.
                                          Fund governance and returns vary widely; we select on independent merit, not on
                                          placement commissions, because a Golden Visa is a fifteen-year relationship, not a
                                          transaction.</p>
                                  </div>
                              </div>
                              <div className="qoute">
                                  <div className="icon">
                                      <img src="/assets/img/icon/10.svg" alt="" aria-hidden="true" />
                                  </div>
                                  <p>The right question is no longer "which program is cheapest" but "which program is still
                                      politically stable five years from issue."</p>
                              </div>
                              <h3 className="mb-10">Greece, Italy and the shift to second-tier hubs</h3>
                              <p className="mb-12">Greece repriced its Golden Visa in and around Athens, Thessaloniki and the
                                  islands, effectively pushing fresh applicants to the €400,000 / €800,000 tiers depending on
                                  the municipality. For clients whose objective is mobility rather than a physical Greek base,
                                  the program is still sensible — but the case for Portugal's fund route strengthens in most
                                  side-by-side comparisons we run.
                              </p>

                              <p>Italy's own residency routes — the investor visa and the flat-tax regime for new residents —
                                  remain underused. For the right profile (substantial foreign-source income, willingness to
                                  physically reside), the €100,000 / €200,000 flat tax on foreign income is one of the
                                  strongest propositions in Europe.
                              </p>
                              <div className="row my-40 gy-3 gy-lg-0">
                                  <div className="col-md-6">
                                      <div className="details-img">
                                          <img src="/assets/img/blog/29.jpg" alt="Lisbon riverfront" loading="lazy" />
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="details-img">
                                          <img src="/assets/img/blog/30.jpg" alt="Rome architectural skyline" loading="lazy" />
                                      </div>
                                  </div>
                              </div>
                              <h3 className="mb-10">Our working view</h3>
                              <p>Portugal for optionality. Italy for residents with real substance. Greece for cost-conscious
                                  mobility. Malta only when the end-state is an EU passport and the client can sustain the
                                  process. We rank these quarterly for active clients and will send the current internal
                                  memo on request.
                              </p>

                              <div className="tag-social">
                                  <div className="tag">
                                      <h6>tags: </h6>
                                      <div className="taglink">
                                          {TAGS.map((t) => (<a key={t} href="#">{t}</a>))}
                                      </div>
                                  </div>
                                  <div className="social">
                                      <h6>share: </h6>
                                      <ul className="social-list">
                                          <li><a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                          <li><a href="#" aria-label="X"><i className="fa-brands fa-twitter"></i></a></li>
                                          <li><a href="#" aria-label="Copy link"><i className="fa-solid fa-link"></i></a></li>
                                          <li><a href="#" aria-label="Email"><i className="fa-solid fa-envelope"></i></a></li>
                                      </ul>
                                  </div>
                              </div>

                              <div className="details-arrrow-btn">
                                  <span><i className="fa-solid fa-arrow-left"></i> Previous brief</span>
                                  <span>Next brief <i className="fa-solid fa-arrow-right"></i></span>
                              </div>

                              <div className="blog-details-author">
                                  <div className="thumb">
                                      <img src="/assets/img/blog/31.jpg" alt="Rafał Ablewski" />
                                  </div>
                                  <div className="content">
                                      <h3>Rafał Ablewski, CFA</h3>
                                      <p>Managing Partner of Ablewski &amp; Partners, a private-client advisory focused on
                                          Citizenship and Residency by Investment, tax residency sequencing and family
                                          relocation. Fourteen years across NYSE-listed capital markets and European
                                          wealth advisory before founding the firm.
                                      </p>
                                  </div>
                              </div>

                              <div className="comment-form-wrap">
                                  <h3>Request the internal memo</h3>
                                  <p className="my-10">Active clients receive the quarterly program re-ranking by email. To
                                      request a one-off memo, share a short note below and we will respond under NDA.</p>

                                  <div className="ht-contact-wrapper">
                                      <form onSubmit={(e) => e.preventDefault()}>
                                          <div className="row">
                                              <div className="col-md-6">
                                                  <input type="text" placeholder="Full name" autoComplete="name" required />
                                              </div>
                                              <div className="col-md-6">
                                                  <input type="email" placeholder="Email address" autoComplete="email" required />
                                              </div>
                                              <div className="col-12">
                                                  <input type="text" placeholder="Primary objective — e.g. Portugal, UAE" required />
                                              </div>
                                              <div className="col-12">
                                                  <textarea placeholder="Family composition, timeframe, constraints." required></textarea>
                                              </div>
                                              <div className="col-12">
                                                  <button type="submit" className="ht-btn style-2">Request memo</button>
                                              </div>
                                          </div>
                                      </form>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="ht-sidebar-area">
                              <div className="single-widget">
                                  <h4 className="widget-title">Search briefs</h4>
                                  <form onSubmit={(e) => e.preventDefault()}>
                                      <div className="search-box">
                                          <input type="text" placeholder="Programs, jurisdictions, tax..." aria-label="Search briefs" />
                                          <button type="submit" aria-label="Search"><i className="fa-solid fa-magnifying-glass"></i></button>
                                      </div>
                                  </form>
                              </div>

                              <div className="single-widget">
                                  <h4 className="widget-title">Recent briefs</h4>
                                  <div className="recent-post-wrapper">
                                      {recent.map((b) => (
                                        <div key={b.title} className="recent-post">
                                          <div className="thumb">
                                              <img src={`/assets/img/blog/${b.img}`} alt={b.title} loading="lazy" />
                                          </div>
                                          <div className="content">
                                              <Link to="/blog-details">
                                                  <h5 className="title">{b.title}</h5>
                                              </Link>
                                              <span className="date">{b.date}</span>
                                          </div>
                                        </div>
                                      ))}
                                  </div>
                              </div>

                              <div className="single-widget">
                                  <h4 className="widget-title">Practice areas</h4>
                                  <ul className="service-list">
                                      <li><Link to="/services">Citizenship by Investment <i className="fa-solid fa-arrow-right"></i></Link></li>
                                      <li><Link to="/services">Residency by Investment <i className="fa-solid fa-arrow-right"></i></Link></li>
                                      <li><Link to="/services">Tax Residency Planning <i className="fa-solid fa-arrow-right"></i></Link></li>
                                      <li><Link to="/services">Asset Protection <i className="fa-solid fa-arrow-right"></i></Link></li>
                                      <li><Link to="/services">Family Relocation <i className="fa-solid fa-arrow-right"></i></Link></li>
                                      <li><Link to="/services">Investment Strategy <i className="fa-solid fa-arrow-right"></i></Link></li>
                                  </ul>
                              </div>

                              <div className="single-widget">
                                  <h4 className="widget-title">Tags</h4>
                                  <div className="tags-list">
                                      {TAGS.map((t) => (<a key={t} href="#">{t}</a>))}
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
