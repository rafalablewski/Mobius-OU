import { Link } from 'react-router-dom';

export default function Offcanvas({ open, onClose }) {
  return (
    <>
      <div className={`ht-offcanvas${open ? ' active' : ''}`}>
        <div className="ht-offcanvas-wrapper">
          <div className="ht-offcanvas-header mb-50">
            <Link to="/" className="ht-offcanvas-logo" onClick={onClose}>
              <img src="/assets/img/logo/logo.svg" alt="Ablewski & Partners" />
            </Link>
            <button
              type="button"
              className="ht-offcanvas-toggle-close"
              onClick={onClose}
              aria-label="Close navigation"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="ht-offcanvas-menu d-xl-none mb-50">
            <nav aria-label="Mobile">
              <ul>
                <li><Link to="/" onClick={onClose}>Home</Link></li>
                <li><Link to="/about" onClick={onClose}>About the Firm</Link></li>
                <li><Link to="/services" onClick={onClose}>Advisory Practice</Link></li>
                <li><Link to="/pricing" onClick={onClose}>Programs &amp; Fees</Link></li>
                <li><Link to="/project" onClick={onClose}>Case Studies</Link></li>
                <li><Link to="/team" onClick={onClose}>Advisors</Link></li>
                <li><Link to="/blog" onClick={onClose}>Insights</Link></li>
                <li><Link to="/faq" onClick={onClose}>Client FAQ</Link></li>
                <li><Link to="/contact" onClick={onClose}>Schedule Consultation</Link></li>
              </ul>
            </nav>
          </div>

          <div className="ht-offcanvas-content d-none d-xl-block mb-50">
            <h2 className="ht-offcanvas-content__title">Discretion. Strategy. Legacy.</h2>
            <p>
              Ablewski &amp; Partners is an independent advisory for private clients considering
              a second residence, a second citizenship, or a quieter way of owning the world.
            </p>
          </div>

          <div className="ht-offcanvas-info mb-50">
            <h3 className="ht-offcanvas__title">Private Office</h3>
            <span><a href="tel:+48221000000">+48 22 100 00 00</a></span>
            <span><a href="mailto:advisory@passportbros.org">advisory@passportbros.org</a></span>
            <span><a href="#">Rondo ONZ 1, 00-124 Warsaw</a></span>
          </div>

          <div className="ht-offcanvas-social mb-50">
            <h3 className="ht-offcanvas__title">Follow Us</h3>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="X"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div
        className={`ht-offcanvas-overlay${open ? ' active' : ''}`}
        onClick={onClose}
      ></div>
    </>
  );
}
