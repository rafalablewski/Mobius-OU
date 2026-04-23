import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="ht-footer-area fix">
      <div className="container">
        <div className="ht-footer-top-wrapper">
          <div className="ht-footer-top-left wow fadeInUp" data-wow-delay=".2s">
            <Link to="/" className="ht-wordmark ht-wordmark--ivory">
              <span className="ht-wordmark__lead">Ablewski</span>
              <span className="ht-wordmark__amp">&amp;</span>
              <span className="ht-wordmark__tail">Partners</span>
            </Link>
            <p className="desc">
              Independent strategic advisory on global mobility, citizenship and residency
              <br /> programs, tax residency planning and legacy structures for private clients.
            </p>
          </div>
          <div className="ht-footer-top-right wow fadeInUp" data-wow-delay=".4s">
            <ul className="footer-social">
              <li><a href="https://www.linkedin.com/company/ablewski-partners" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a></li>
              <li><a href="https://x.com/ablewskipartners" target="_blank" rel="noopener noreferrer" aria-label="X"><i className="fa-brands fa-x-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/ablewskipartners" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href="https://www.facebook.com/ablewskipartners" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a></li>
            </ul>
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
                <li><Link to="/pricing">Portugal Golden Visa</Link></li>
                <li><Link to="/pricing">Caribbean CBI</Link></li>
                <li><Link to="/pricing">Malta MEIN</Link></li>
                <li><Link to="/pricing">UAE Golden Residence</Link></li>
              </ul>
            </div>
            <div className="ht-footer-widget-items wow fadeInUp" data-wow-delay=".9s">
              <h5 className="head">Firm</h5>
              <ul className="link-list">
                <li><Link to="/about">About the Firm</Link></li>
                <li><Link to="/team">Our Advisors</Link></li>
                <li><Link to="/project">Case Studies</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="ht-footer-widget-items wow fadeInUp" data-wow-delay="1.2s">
              <h5 className="head">Intelligence</h5>
              <ul className="link-list">
                <li><Link to="/blog">Briefs &amp; Analysis</Link></li>
                <li><Link to="/faq">Client FAQ</Link></li>
                <li><Link to="/blog-list">Program Updates</Link></li>
                <li><Link to="/contact">Request a Memo</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ht-footer-copyright wow fadeInUp" data-wow-delay=".2s">
          <p>
            ©{new Date().getFullYear()} <span>Ablewski &amp; Partners</span>. All rights reserved. &nbsp;|&nbsp;
            Educational and strategic advisory only — not legal, tax or investment advice. Regulated legal
            and tax work is delivered by licensed partners in each jurisdiction.
          </p>
        </div>
      </div>
    </footer>
  );
}
