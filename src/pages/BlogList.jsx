import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.jsx';
import { BRIEFS } from '../data/briefs.js';

const PRACTICE_TAGS = ['CBI', 'RBI', 'Tax Residency', 'Relocation', 'Asset Protection', 'Investment', 'Compliance', 'Malta', 'Portugal', 'UAE'];

export default function BlogList() {
  const listed = BRIEFS.slice(0, 4);
  const recent = BRIEFS.slice(4, 8);

  return (
    <>
      <Breadcrumb title="Brief Archive" current="Insights" />
      <section className="ht-blog-list-area section-padding">
              <div className="container">
                  <div className="row gy-5">
                      <div className="col-lg-8">
                          <div className="blog-list-wrapper">
                              <div className="row">
                                  {listed.map((b) => (
                                    <div key={b.title} className="col-12">
                                      <div className="blog-list-item">
                                          <div className="thumb">
                                              <Link to="/blog-details"><img src={`/assets/img/blog/${b.img}`} alt={b.title} loading="lazy" /></Link>
                                          </div>
                                          <div className="content">
                                              <div className="blog-meta">
                                                  <div className="single-meta">
                                                      <img src="/assets/img/icon/user.svg" alt="" aria-hidden="true" />
                                                      <span>Ablewski &amp; Partners</span>
                                                  </div>
                                                  <div className="single-meta">
                                                      <img src="/assets/img/icon/comment-2.svg" alt="" aria-hidden="true" />
                                                      <span>{b.category}</span>
                                                  </div>
                                                  <div className="single-meta">
                                                      <img src="/assets/img/icon/calendar.svg" alt="" aria-hidden="true" />
                                                      <span>{b.date}</span>
                                                  </div>
                                              </div>
                                              <Link to="/blog-details">
                                                  <h2 className="title">{b.title}</h2>
                                              </Link>
                                              <p>{b.excerpt}</p>
                                              <Link to="/blog-details" className="ht-btn style-2">read brief</Link>
                                          </div>
                                      </div>
                                    </div>
                                  ))}
                              </div>
                              <div className="page-nav-wrap">
                                  <ul>
                                      <li className="active"><a className="page-numbers" href="#">01</a></li>
                                      <li><a className="page-numbers" href="#">02</a></li>
                                      <li><a className="page-numbers" href="#">03</a></li>
                                      <li><a className="page-numbers" href="#" aria-label="Next page"><i className="fa-solid fa-chevron-right"></i></a></li>
                                  </ul>
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
                                      {PRACTICE_TAGS.map((t) => (
                                        <a key={t} href="#">{t}</a>
                                      ))}
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
