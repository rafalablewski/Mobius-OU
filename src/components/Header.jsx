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
                    <li className="has-dropdown">
                      <a href="#">firm</a>
                      <ul className="sub-menu">
                        <li><NavLink to="/about">About the Firm</NavLink></li>
                        <li><NavLink to="/services">Advisory Practice</NavLink></li>
                        <li><NavLink to="/service-details">Service Overview</NavLink></li>
                        <li><NavLink to="/team">Our Advisors</NavLink></li>
                        <li><NavLink to="/team-details">Advisor Profile</NavLink></li>
                        <li><NavLink to="/pricing">Programs &amp; Fees</NavLink></li>
                        <li><NavLink to="/faq">Client FAQ</NavLink></li>
                      </ul>
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
