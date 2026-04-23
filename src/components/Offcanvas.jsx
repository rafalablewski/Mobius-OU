import { Link } from 'react-router-dom';

export default function Offcanvas({ open, onClose }) {
  return (
    <>
      <div className={`ht-offcanvas${open ? ' active' : ''}`}>
        <div className="ht-offcanvas-wrapper">
          <div className="ht-offcanvas-header mb-50">
            <Link to="/" className="ht-offcanvas-logo" onClick={onClose}>
              <img src="/assets/img/logo/logo.svg" alt="Mobius" />
            </Link>
            <button
              type="button"
              className="ht-offcanvas-toggle-close"
              onClick={onClose}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="ht-offcanvas-menu d-xl-none mb-50">
            <nav>
              <ul>
                <li><Link to="/" onClick={onClose}>Home</Link></li>
                <li><Link to="/about" onClick={onClose}>About</Link></li>
                <li><Link to="/services" onClick={onClose}>Services</Link></li>
                <li><Link to="/project" onClick={onClose}>Projects</Link></li>
                <li><Link to="/team" onClick={onClose}>Team</Link></li>
                <li><Link to="/blog" onClick={onClose}>Blog</Link></li>
                <li><Link to="/contact" onClick={onClose}>Contact</Link></li>
              </ul>
            </nav>
          </div>

          <div className="ht-offcanvas-content d-none d-xl-block mb-50">
            <h2 className="ht-offcanvas-content__title">Hello There!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="ht-offcanvas-info mb-50">
            <h3 className="ht-offcanvas__title">Information</h3>
            <span><a href="tel:5185643200">+ 4 20 7700 1007</a></span>
            <span><a href="mailto:hello@mobius.com">hello@mobius.com</a></span>
            <span><a href="#">Avenue de Roma 158b, Lisboa</a></span>
          </div>

          <div className="ht-offcanvas-social mb-50">
            <h3 className="ht-offcanvas__title">Follow Us</h3>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
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
