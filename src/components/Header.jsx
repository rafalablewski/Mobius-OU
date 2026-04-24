import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const FIRM_COLUMNS = [
  {
    heading: 'Practice',
    items: [
      { to: '/about',           label: 'About the Firm',    blurb: 'Independent, partner-led — no junior handoffs, no in-house product to sell.' },
      { to: '/services',        label: 'Advisory Practice', blurb: 'Six practice areas, one partner accountable end-to-end.' },
      { to: '/service-details', label: 'Service Overview',  blurb: 'How a mandate unfolds — from first call to second passport.' },
    ],
  },
  {
    heading: 'People',
    items: [
      { to: '/team',         label: 'Our Advisors',    blurb: 'A small bench of senior specialists — written opinions, on the record.' },
      { to: '/team-details', label: 'Advisor Profile', blurb: 'Meet Rafał — fourteen years across NYSE capital markets and EU private client advisory.' },
    ],
  },
  {
    heading: 'Resources',
    items: [
      { to: '/pricing', label: 'Programs & Fees', blurb: 'Comparison table of the programs we actively run.' },
      { to: '/faq',     label: 'Client FAQ',      blurb: 'Seven questions prospective clients ask before the first call.' },
    ],
  },
];

const FIRM_DEFAULT_PREVIEW = FIRM_COLUMNS[0].items[0];

const PROGRAMS_COLUMNS = [
  {
    heading: 'Europe',
    items: [
      { to: '/programs/portugal-golden-visa', label: 'Portugal Golden Visa',  badge: 'Top RBI', blurb: 'Fund-route residency with a five-year path to EU citizenship.' },
      { to: '/programs/malta-mein',           label: 'Malta MEIN',            badge: 'Top CBI', blurb: 'The last direct path to an EU passport — slower, heavier, still worth it.' },
      { to: '/programs/switzerland-lump-sum', label: 'Switzerland Lump-Sum',  blurb: 'Canton-level negotiated taxation for substantial foreign income.' },
      { to: '/programs/italy-flat-tax',       label: 'Italy Flat-Tax',        blurb: '€100,000 flat tax on foreign source income — one of Europe\'s strongest propositions.' },
    ],
  },
  {
    heading: 'Americas & Gulf',
    items: [
      { to: '/programs/caribbean-cbi',        label: 'Caribbean CBI',         blurb: 'Passport portfolio planning after the US–EU pressure cycle.' },
      { to: '/programs/uae-golden-residence', label: 'UAE Golden Residence',  blurb: 'Ten-year residency in Dubai — who still belongs there after corporate tax.' },
    ],
  },
  {
    heading: 'Practice areas',
    items: [
      { to: '/services', label: 'Tax Residency Planning', blurb: 'Lawful relocation sequencing — day-counts, exit tax, written advice.' },
      { to: '/services', label: 'Asset Protection',       blurb: 'Foundations and trusts — selected for legitimacy and longevity.' },
      { to: '/services', label: 'Family Relocation',      blurb: 'Schooling, banking, staff — so the family lands with utilities, not surprises.' },
    ],
  },
];

const PROGRAMS_DEFAULT_PREVIEW = PROGRAMS_COLUMNS[0].items[0];

function MegaPanel({ id, columns, defaultPreview, ctaLabel, ctaTo, hovered, setHovered }) {
  const preview = hovered ?? defaultPreview;
  return (
    <div
      className={`mega-menu mega-menu--${id}`}
      onMouseLeave={() => setHovered(null)}
    >
      <div className="mega-menu__lists">
        {columns.map((col) => (
          <div className="mega-col" key={col.heading}>
            <h6>{col.heading}</h6>
            {col.items.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={preview === item ? 'is-active' : undefined}
                onMouseEnter={() => setHovered(item)}
                onFocus={() => setHovered(item)}
              >
                {item.label}
                {item.badge && (
                  <span className={`mega-col__badge mega-col__badge--${(item.badge.split(' ').pop() || 'default').toLowerCase()}`}>
                    {item.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </div>
        ))}
      </div>
      <aside className="mega-menu__preview" aria-hidden="true">
        <div className="mega-menu__preview-caption">
          <span className="mega-menu__preview-eyebrow">
            Featured
            {preview.badge && (
              <span className={`mega-col__badge mega-col__badge--${(preview.badge.split(' ').pop() || 'default').toLowerCase()}`}>
                {preview.badge}
              </span>
            )}
          </span>
          <h4>{preview.label}</h4>
          <p>{preview.blurb}</p>
          <Link to={preview.to} className="mega-menu__preview-cta">
            Explore <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
        <Link to={ctaTo} className="mega-menu__all">
          {ctaLabel} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </Link>
        {id === 'firm' && (
          <div className="mega-menu__signoff">
            <span className="mega-menu__signoff-name">Rafał Ablewski</span>
            <span className="mega-menu__signoff-role">Managing Partner · CFA</span>
            <span className="mega-menu__signoff-tag">Every first call is with the partner.</span>
          </div>
        )}
      </aside>
    </div>
  );
}

export default function Header({ onOffcanvasOpen }) {
  const [firmHover, setFirmHover] = useState(null);
  const [programsHover, setProgramsHover] = useState(null);

  return (
    <header className="ht-header-area header-1 ht-header-area--full">
      <div className="ht-main-header header-1" id="header-sticky">
        <div className="ht-nav-bar">
          <div className="ht-menu-wrapper">
            <div className="ht-menu-left">
              <div className="ht-menu-logo">
                <Link to="/" aria-label="Mobius — home" className="ht-wordmark">
                  <span className="ht-wordmark__lead">Mobius</span>
                </Link>
              </div>
              <div className="ht-menu-main d-none d-lg-block">
                <nav className="ht-mobile-menu-active" aria-label="Primary">
                  <ul>
                    <li className="has-dropdown">
                      <a href="#">home<span className="ht-menu-dot ht-menu-dot--ink" aria-hidden="true"></span></a>
                      <ul className="sub-menu">
                        <li><NavLink to="/">Private Clients</NavLink></li>
                        <li><NavLink to="/home-corporate">Corporate &amp; Family Office</NavLink></li>
                        <li><NavLink to="/home-insurance">Succession &amp; Legacy</NavLink></li>
                      </ul>
                    </li>
                    <li className="has-mega-menu">
                      <a href="#">firm<span className="ht-menu-dot ht-menu-dot--champagne" aria-hidden="true"></span></a>
                      <MegaPanel
                        id="firm"
                        columns={FIRM_COLUMNS}
                        defaultPreview={FIRM_DEFAULT_PREVIEW}
                        ctaLabel="About the firm"
                        ctaTo="/about"
                        hovered={firmHover}
                        setHovered={setFirmHover}
                      />
                    </li>
                    <li className="has-mega-menu">
                      <a href="#">programs<span className="ht-menu-mark" aria-hidden="true">✦</span></a>
                      <MegaPanel
                        id="programs"
                        columns={PROGRAMS_COLUMNS}
                        defaultPreview={PROGRAMS_DEFAULT_PREVIEW}
                        ctaLabel="All programs & fees"
                        ctaTo="/pricing"
                        hovered={programsHover}
                        setHovered={setProgramsHover}
                      />
                    </li>
                    <li className="has-dropdown">
                      <a href="#">insights</a>
                      <ul className="sub-menu">
                        <li><NavLink to="/blog">Intelligence Briefs</NavLink></li>
                        <li><NavLink to="/faq">Client FAQ</NavLink></li>
                      </ul>
                    </li>
                    <li><NavLink to="/contact">contact</NavLink></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="ht-menu-right">
              <Link to="/contact" className="ht-nav-cta d-none d-lg-inline-flex">
                <span>Schedule Consultation</span>
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
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
