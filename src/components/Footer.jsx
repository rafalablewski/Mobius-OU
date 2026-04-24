import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="ht-footer-area fix">
      <div className="container">
        <div className="ht-footer-top-wrapper">
          <div className="ht-footer-top-left wow fadeInUp" data-wow-delay=".2s">
            <Link to="/" className="ht-wordmark ht-wordmark--ivory">
              <span className="ht-wordmark__lead">Mobius</span>
            </Link>
            <p className="desc">
              Independent strategic advisory on global mobility, citizenship and residency
              <br /> programs, tax residency planning and legacy structures for private clients.
            </p>
          </div>
          <div className="ht-footer-top-right wow fadeInUp" data-wow-delay=".4s">
            <a className="ht-footer-contact" href="mailto:advisory@passportbros.org">
              advisory@passportbros.org
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="ht-footer-widget-wrapper">
          <div className="ht-footer-widget">
            <div className="ht-footer-widget-items wow fadeInUp" data-wow-delay=".3s">
              <h5 className="head">Advisory</h5>
              <ul className="link-list">
                <li><Link to="/services">Citizenship by Investment</Link></li>
                <li><Link to="/services">Residency by Investment</Link></li>
                <li><Link to="/services">Tax Residency Planning</Link></li>
                <li><Link to="/services">Asset Protection</Link></li>
              </ul>
            </div>
            <div className="ht-footer-widget-items wow fadeInUp" data-wow-delay=".6s">
              <h5 className="head">Programs</h5>
              <ul className="link-list">
                <li><Link to="/programs/portugal-golden-visa">Portugal Golden Visa</Link></li>
                <li><Link to="/programs/caribbean-cbi">Caribbean CBI</Link></li>
                <li><Link to="/programs/malta-mein">Malta MEIN</Link></li>
                <li><Link to="/programs/uae-golden-residence">UAE Golden Residence</Link></li>
              </ul>
            </div>
            <div className="ht-footer-widget-items wow fadeInUp" data-wow-delay=".9s">
              <h5 className="head">Firm</h5>
              <ul className="link-list">
                <li><Link to="/about">About the Firm</Link></li>
                <li><Link to="/team">Our Advisors</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="ht-footer-widget-items wow fadeInUp" data-wow-delay="1.2s">
              <h5 className="head">Intelligence</h5>
              <ul className="link-list">
                <li><Link to="/blog">Briefs &amp; Analysis</Link></li>
                <li><Link to="/faq">Client FAQ</Link></li>
                <li><Link to="/contact">Request a Memo</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ht-footer-copyright wow fadeInUp" data-wow-delay=".2s">
          <p>
            ©{new Date().getFullYear()} <span>Mobius</span>. All rights reserved. &nbsp;|&nbsp;
            Educational and strategic advisory only — not legal, tax or investment advice. Regulated legal
            and tax work is delivered by licensed partners in each jurisdiction.
          </p>
        </div>
      </div>
    </footer>
  );
}
