import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.jsx';
import { BRIEFS } from '../data/briefs.js';

export default function Blog() {
  return (
    <>
      <Breadcrumb title="Intelligence Briefs" current="Insights" />
      <section className="ht-blog-area section-padding fix">
        <div className="container">
          <div className="ht-blog-wrapper">
            <div className="row">
              {BRIEFS.map((b, i) => (
                <div
                  key={b.id}
                  className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                  data-wow-delay={`${0.2 + i * 0.2}s`}
                >
                  <div className="ht-blog-item v2 mt-20">
                    <div className="ht-blog-thumb">
                      <Link to={`/blog-details/${b.slug}`}>
                        <img src={`/assets/img/blog/${b.img}`} alt={b.title} loading="lazy" />
                      </Link>
                    </div>
                    <div className="ht-blog-content">
                      <ul className="ht-blog-meta">
                        <li>{b.date}</li>
                        <li>{b.category}</li>
                      </ul>
                      <Link to={`/blog-details/${b.slug}`}>
                        <h3 className="title">{b.title}</h3>
                      </Link>
                      <Link to={`/blog-details/${b.slug}`} className="ht-link">Read Brief</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="page-nav-wrap text-center">
              <ul>
                <li className="active"><a className="page-numbers" href="#">01</a></li>
                <li><a className="page-numbers" href="#">02</a></li>
                <li><a className="page-numbers" href="#">03</a></li>
                <li><a className="page-numbers" href="#" aria-label="Next page"><i className="fa-solid fa-chevron-right"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
