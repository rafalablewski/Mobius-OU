import { Link, NavLink } from 'react-router-dom';

export default function Header({ onOffcanvasOpen }) {
  return (
    <header className="ht-header-area header-1">
      <div className="ht-top-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left">
                <p>
                  <i className="fa-solid fa-location-dot"></i> Rondo ONZ 1, 00-124 Warsaw, Poland
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="right">
                <li>
                  <i className="fa-solid fa-phone"></i>
                  <a href="tel:+48221000000">+48 22 100 00 00</a>
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  <a href="mailto:advisory@passportbros.org">advisory@passportbros.org</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="ht-main-header header-1" id="header-sticky">
        <div className="container">
          <div className="ht-menu-wrapper">
            <div className="ht-menu-left">
              <div className="ht-menu-logo">
                <Link to="/" aria-label="Ablewski & Partners — home">
                  <img src="/assets/img/logo/logo.svg" alt="Ablewski & Partners" />
                </Link>
              </div>
              <div className="ht-menu-main d-none d-lg-block">
                <nav className="ht-mobile-menu-active" aria-label="Primary">
                  <ul>
                    <li className="has-dropdown">
                      <a href="#">home</a>
                      <ul className="sub-menu">
                        <li><NavLink to="/">Private Clients</NavLink></li>
                        <li><NavLink to="/home-corporate">Corporate &amp; Family Office</NavLink></li>
                        <li><NavLink to="/home-insurance">Succession &amp; Legacy</NavLink></li>
                      </ul>
                    </li>
                    <li className="has-mega-menu">
                      <a href="#">firm</a>
                      <div className="mega-menu mega-menu--3">
                        <div className="mega-col">
                          <h6>Practice</h6>
                          <NavLink to="/about">About the Firm</NavLink>
                          <NavLink to="/services">Advisory Practice</NavLink>
                          <NavLink to="/service-details">Service Overview</NavLink>
                          <p className="mega-col__note">Independent, partner-led advisory for private clients on mobility and residency.</p>
                        </div>
                        <div className="mega-col">
                          <h6>People</h6>
                          <NavLink to="/team">Our Advisors</NavLink>
                          <NavLink to="/team-details">Advisor Profile</NavLink>
                        </div>
                        <div className="mega-col">
                          <h6>Resources</h6>
                          <NavLink to="/pricing">Programs &amp; Fees</NavLink>
                          <NavLink to="/faq">Client FAQ</NavLink>
                          <NavLink to="/contact" className="mega-col__cta">Schedule Consultation <i className="fa-solid fa-arrow-right"></i></NavLink>
                        </div>
                      </div>
                    </li>
                    <li className="has-mega-menu">
                      <a href="#">programs</a>
                      <div className="mega-menu mega-menu--3">
                        <div className="mega-col">
                          <h6>Europe</h6>
                          <NavLink to="/pricing">Portugal Golden Visa</NavLink>
                          <NavLink to="/pricing">Malta MEIN</NavLink>
                          <NavLink to="/pricing">Switzerland Lump-Sum</NavLink>
                          <NavLink to="/pricing">Italy Flat-Tax</NavLink>
                        </div>
                        <div className="mega-col">
                          <h6>Americas &amp; Gulf</h6>
                          <NavLink to="/pricing">Caribbean CBI</NavLink>
                          <NavLink to="/pricing">UAE Golden Residence</NavLink>
                        </div>
                        <div className="mega-col">
                          <h6>Practice areas</h6>
                          <NavLink to="/services">Tax Residency Planning</NavLink>
                          <NavLink to="/services">Asset Protection</NavLink>
                          <NavLink to="/services">Family Relocation</NavLink>
                          <NavLink to="/pricing" className="mega-col__cta">All Programs &amp; Fees <i className="fa-solid fa-arrow-right"></i></NavLink>
                        </div>
                      </div>
                    </li>
                    <li className="has-dropdown">
                      <a href="#">case studies</a>
                      <ul className="sub-menu">
                        <li><NavLink to="/project">Select Mandates</NavLink></li>
                        <li><NavLink to="/project-details">Mandate Detail</NavLink></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="#">insights</a>
                      <ul className="sub-menu">
                        <li><NavLink to="/blog">Intelligence Briefs</NavLink></li>
                        <li><NavLink to="/blog-list">Brief Archive</NavLink></li>
                        <li><NavLink to="/blog-details">Brief Detail</NavLink></li>
                      </ul>
                    </li>
                    <li><NavLink to="/contact">contact</NavLink></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="ht-menu-right">
              <Link to="/contact" className="ht-btn d-none d-lg-block">
                Schedule Consultation
              </Link>
              <button
                type="button"
                className="ht-menu-btn d-lg-none offcanvas-toggle"
                onClick={onOffcanvasOpen}
                aria-label="Open navigation menu"
              >
                <i className="fa-solid fa-bars-staggered"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
