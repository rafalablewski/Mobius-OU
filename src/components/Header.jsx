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
                  <i className="fa-solid fa-location-dot"></i> 2774 Oak Drive, Plattsburgh, New York
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="right">
                <li>
                  <i className="fa-solid fa-phone"></i>
                  <a href="tel:5185643200">518-564-3200</a>
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  <a href="mailto:hello@mobius.com">hello@mobius.com</a>
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
                <Link to="/">
                  <img src="/assets/img/logo/logo.svg" alt="Mobius" />
                </Link>
              </div>
              <div className="ht-menu-main d-none d-lg-block">
                <nav className="ht-mobile-menu-active">
                  <ul>
                    <li className="has-dropdown">
                      <a href="#">home</a>
                      <ul className="sub-menu">
                        <li><NavLink to="/">Main Home</NavLink></li>
                        <li><NavLink to="/home-corporate">Corporate Business</NavLink></li>
                        <li><NavLink to="/home-insurance">Insurance</NavLink></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="#">pages</a>
                      <ul className="sub-menu">
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/services">Our Services</NavLink></li>
                        <li><NavLink to="/service-details">Service Details</NavLink></li>
                        <li><NavLink to="/team">Team</NavLink></li>
                        <li><NavLink to="/team-details">Team Details</NavLink></li>
                        <li><NavLink to="/pricing">Pricing</NavLink></li>
                        <li><NavLink to="/faq">FAQ</NavLink></li>
                        <li><NavLink to="/404">404</NavLink></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="#">portfolio</a>
                      <ul className="sub-menu">
                        <li><NavLink to="/project">Our Projects</NavLink></li>
                        <li><NavLink to="/project-details">project details</NavLink></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="#">blog</a>
                      <ul className="sub-menu">
                        <li><NavLink to="/blog">Blog</NavLink></li>
                        <li><NavLink to="/blog-list">Blog List</NavLink></li>
                        <li><NavLink to="/blog-details">Blog Details</NavLink></li>
                      </ul>
                    </li>
                    <li><NavLink to="/contact">contact</NavLink></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="ht-menu-right">
              <Link to="/contact" className="ht-btn d-none d-lg-block">
                lets get in touch
              </Link>
              <button
                type="button"
                className="ht-menu-btn d-lg-none offcanvas-toggle"
                onClick={onOffcanvasOpen}
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
