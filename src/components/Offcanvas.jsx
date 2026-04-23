import { useState } from 'react';
import { Link } from 'react-router-dom';

const PANELS = {
  firm: {
    label: 'Firm',
    items: [
      { to: '/about', label: 'About the Firm' },
      { to: '/services', label: 'Advisory Practice' },
      { to: '/service-details', label: 'Service Overview' },
      { to: '/team', label: 'Our Advisors' },
      { to: '/team-details', label: 'Advisor Profile' },
      { to: '/pricing', label: 'Programs & Fees' },
      { to: '/faq', label: 'Client FAQ' },
    ],
  },
  programs: {
    label: 'Programs',
    items: [
      { to: '/programs/portugal-golden-visa', label: 'Portugal Golden Visa' },
      { to: '/programs/malta-mein',           label: 'Malta MEIN' },
      { to: '/programs/switzerland-lump-sum', label: 'Switzerland Lump-Sum' },
      { to: '/programs/italy-flat-tax',       label: 'Italy Flat-Tax' },
      { to: '/programs/caribbean-cbi',        label: 'Caribbean CBI' },
      { to: '/programs/uae-golden-residence', label: 'UAE Golden Residence' },
      { to: '/services', label: 'Tax Residency Planning' },
      { to: '/services', label: 'Asset Protection' },
    ],
  },
  insights: {
    label: 'Insights',
    items: [
      { to: '/blog', label: 'Intelligence Briefs' },
      { to: '/blog-list', label: 'Brief Archive' },
      { to: '/project', label: 'Select Mandates' },
    ],
  },
};

export default function Offcanvas({ open, onClose }) {
  const [expanded, setExpanded] = useState(null);
  const toggle = (id) => setExpanded((cur) => (cur === id ? null : id));

  return (
    <>
      <div className={`ht-offcanvas${open ? ' active' : ''}`}>
        <div className="ht-offcanvas-wrapper">
          <div className="ht-offcanvas-header mb-50">
            <Link to="/" className="ht-offcanvas-logo ht-wordmark" onClick={onClose}>
              <span className="ht-wordmark__lead">Mobius</span>
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
              <ul className="offcanvas-accordion">
                <li><Link to="/" onClick={onClose}>Home</Link></li>
                {Object.entries(PANELS).map(([id, panel]) => (
                  <li
                    key={id}
                    className={`has-panel${expanded === id ? ' open' : ''}`}
                  >
                    <button
                      type="button"
                      className="offcanvas-accordion__trigger"
                      aria-expanded={expanded === id}
                      onClick={() => toggle(id)}
                    >
                      {panel.label}
                      <i className="fa-solid fa-chevron-down offcanvas-accordion__chev"></i>
                    </button>
                    <ul className="offcanvas-accordion__panel">
                      {panel.items.map((item) => (
                        <li key={`${id}-${item.label}`}>
                          <Link to={item.to} onClick={onClose}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
                <li><Link to="/contact" onClick={onClose}>Schedule Consultation</Link></li>
              </ul>
            </nav>
          </div>

          <div className="ht-offcanvas-content d-none d-xl-block mb-50">
            <h2 className="ht-offcanvas-content__title">Discretion. Strategy. Legacy.</h2>
            <p>
              Mobius is an independent advisory for private clients considering
              a second residence, a second citizenship, or a quieter way of owning the world.
            </p>
          </div>

          <div className="ht-offcanvas-info mb-50">
            <h3 className="ht-offcanvas__title">Private Office</h3>
            <span><a href="tel:+48221000000">+48 22 100 00 00</a></span>
            <span><a href="mailto:advisory@passportbros.org">advisory@passportbros.org</a></span>
            <span><a href="#">Rondo ONZ 1, 00-124 Warsaw</a></span>
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
