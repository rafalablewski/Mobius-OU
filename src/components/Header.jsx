import { Link, NavLink } from 'react-router-dom';

const FIRM = {
  cards: [
    { to: '/about',    label: 'About the Firm',    img: '/assets/img/about/1.jpg', actions: [{ label: 'Learn', to: '/about' }] },
    { to: '/services', label: 'Advisory Practice', img: '/assets/img/about/2.jpg', actions: [{ label: 'Learn', to: '/services' }] },
    { to: '/team',     label: 'Our Advisors',      img: '/assets/img/team/1.jpg',  actions: [{ label: 'Meet', to: '/team' }, { label: 'Profile', to: '/team-details' }] },
  ],
  rail: [
    { label: 'Service Overview',    to: '/service-details' },
    { label: 'Programs & Fees',     to: '/pricing' },
    { label: 'Client FAQ',          to: '/faq' },
    { label: 'Schedule Consultation', to: '/contact' },
  ],
};

const PROGRAMS = {
  cards: [
    { to: '/programs/portugal-golden-visa', label: 'Portugal Golden Visa',  img: '/assets/img/blog/29.jpg', actions: [{ label: 'Learn', to: '/programs/portugal-golden-visa' }] },
    { to: '/programs/malta-mein',           label: 'Malta MEIN',            img: '/assets/img/blog/13.jpg', actions: [{ label: 'Learn', to: '/programs/malta-mein' }] },
    { to: '/programs/caribbean-cbi',        label: 'Caribbean CBI',         img: '/assets/img/blog/2.jpg',  actions: [{ label: 'Learn', to: '/programs/caribbean-cbi' }] },
    { to: '/programs/uae-golden-residence', label: 'UAE Golden Residence',  img: '/assets/img/blog/3.jpg',  actions: [{ label: 'Learn', to: '/programs/uae-golden-residence' }] },
  ],
  rail: [
    { label: 'Switzerland Lump-Sum', to: '/programs/switzerland-lump-sum' },
    { label: 'Italy Flat-Tax',       to: '/programs/italy-flat-tax' },
    { label: 'Tax Residency Planning', to: '/services' },
    { label: 'Asset Protection',     to: '/services' },
    { label: 'Family Relocation',    to: '/services' },
    { label: 'All Programs & Fees',  to: '/pricing' },
  ],
};

function MegaPanel({ cards, rail }) {
  return (
    <div className="mega-menu">
      <div className="mega-menu__grid">
        {cards.map((card) => (
          <div className="mega-card" key={card.label}>
            <Link to={card.to} className="mega-card__thumb">
              <img src={card.img} alt="" loading="lazy" />
            </Link>
            <h5 className="mega-card__title">
              <Link to={card.to}>{card.label}</Link>
            </h5>
            <div className="mega-card__actions">
              {card.actions.map((a) => (
                <Link key={a.label} to={a.to}>{a.label}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <aside className="mega-menu__rail">
        {rail.map((item) => (
          <Link key={item.label} to={item.to}>{item.label}</Link>
        ))}
      </aside>
    </div>
  );
}

export default function Header({ onOffcanvasOpen }) {
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
                      <MegaPanel cards={FIRM.cards} rail={FIRM.rail} />
                    </li>
                    <li className="has-mega-menu">
                      <a href="#">Programs</a>
                      <MegaPanel cards={PROGRAMS.cards} rail={PROGRAMS.rail} />
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
