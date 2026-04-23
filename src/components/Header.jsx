import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const FIRM_COLUMNS = [
  {
    heading: 'Practice',
    items: [
      { to: '/about',           label: 'About the Firm',    img: '/assets/img/about/1.jpg',  blurb: 'Independent, partner-led — no junior handoffs, no in-house product to sell.' },
      { to: '/services',        label: 'Advisory Practice', img: '/assets/img/about/2.jpg',  blurb: 'Six practice areas, one partner accountable end-to-end.' },
      { to: '/service-details', label: 'Service Overview',  img: '/assets/img/about/3.jpg',  blurb: 'How a mandate unfolds — from first call to second passport.' },
    ],
  },
  {
    heading: 'People',
    items: [
      { to: '/team',         label: 'Our Advisors',   img: '/assets/img/team/1.jpg', blurb: 'A small bench of senior specialists — written opinions, on the record.' },
      { to: '/team-details', label: 'Advisor Profile', img: '/assets/img/team/2.jpg', blurb: 'Meet Rafał — fourteen years across NYSE capital markets and EU private client advisory.' },
    ],
  },
  {
    heading: 'Resources',
    items: [
      { to: '/pricing', label: 'Programs & Fees', img: '/assets/img/project/1.jpg', blurb: 'Comparison table of the programs we actively run.' },
      { to: '/faq',     label: 'Client FAQ',      img: '/assets/img/about/3.jpg',   blurb: 'Seven questions prospective clients ask before the first call.' },
    ],
  },
];

const FIRM_DEFAULT_PREVIEW = FIRM_COLUMNS[0].items[0];

const PROGRAMS_COLUMNS = [
  {
    heading: 'Europe',
    items: [
      { to: '/programs/portugal-golden-visa', label: 'Portugal Golden Visa',  img: '/assets/img/blog/29.jpg', blurb: 'Fund-route residency with a five-year path to EU citizenship.' },
      { to: '/programs/malta-mein',           label: 'Malta MEIN',            img: '/assets/img/blog/13.jpg', blurb: 'The last direct path to an EU passport — slower, heavier, still worth it.' },
      { to: '/programs/switzerland-lump-sum', label: 'Switzerland Lump-Sum',  img: '/assets/img/blog/17.jpg', blurb: 'Canton-level negotiated taxation for substantial foreign income.' },
      { to: '/programs/italy-flat-tax',       label: 'Italy Flat-Tax',        img: '/assets/img/blog/30.jpg', blurb: '€100,000 flat tax on foreign source income — one of Europe\'s strongest propositions.' },
    ],
  },
  {
    heading: 'Americas & Gulf',
    items: [
      { to: '/programs/caribbean-cbi',        label: 'Caribbean CBI',         img: '/assets/img/blog/2.jpg',  blurb: 'Passport portfolio planning after the US–EU pressure cycle.' },
      { to: '/programs/uae-golden-residence', label: 'UAE Golden Residence',  img: '/assets/img/blog/3.jpg',  blurb: 'Ten-year residency in Dubai — who still belongs there after corporate tax.' },
    ],
  },
  {
    heading: 'Practice areas',
    items: [
      { to: '/services', label: 'Tax Residency Planning', img: '/assets/img/blog/14.jpg', blurb: 'Lawful relocation sequencing — day-counts, exit tax, written advice.' },
      { to: '/services', label: 'Asset Protection',       img: '/assets/img/blog/15.jpg', blurb: 'Foundations and trusts — selected for legitimacy and longevity.' },
      { to: '/services', label: 'Family Relocation',      img: '/assets/img/blog/14.jpg', blurb: 'Schooling, banking, staff — so the family lands with utilities, not surprises.' },
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
              </NavLink>
            ))}
          </div>
        ))}
      </div>
      <aside className="mega-menu__preview" aria-hidden="true">
        <div className="mega-menu__preview-frame">
          {[...columns.flatMap((c) => c.items)].map((item) => (
            <img
              key={item.label}
              src={item.img}
              alt=""
              loading="lazy"
              className={preview === item ? 'is-active' : undefined}
            />
          ))}
        </div>
        <div className="mega-menu__preview-caption">
          <span className="mega-menu__preview-eyebrow">Featured</span>
          <h4>{preview.label}</h4>
          <p>{preview.blurb}</p>
          <Link to={preview.to} className="mega-menu__preview-cta">
            Explore <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
        <Link to={ctaTo} className="mega-menu__all">
          {ctaLabel} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </Link>
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
                      <a href="#">Home</a>
                      <ul className="sub-menu">
                        <li><NavLink to="/">Private Clients</NavLink></li>
                        <li><NavLink to="/home-corporate">Corporate &amp; Family Office</NavLink></li>
                        <li><NavLink to="/home-insurance">Succession &amp; Legacy</NavLink></li>
                      </ul>
                    </li>
                    <li className="has-mega-menu">
                      <a href="#">Firm</a>
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
                      <a href="#">Programs</a>
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
                      <a href="#">Case Studies</a>
                      <ul className="sub-menu">
                        <li><NavLink to="/project">Select Mandates</NavLink></li>
                        <li><NavLink to="/project-details">Mandate Detail</NavLink></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="#">Insights</a>
                      <ul className="sub-menu">
                        <li><NavLink to="/blog">Intelligence Briefs</NavLink></li>
                        <li><NavLink to="/blog-list">Brief Archive</NavLink></li>
                        <li><NavLink to="/blog-details">Brief Detail</NavLink></li>
                      </ul>
                    </li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
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
