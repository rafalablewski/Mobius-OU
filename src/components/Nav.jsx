import { useEffect, useState } from 'react';
import { IconMenu, IconClose, IconArrow } from './Icons.jsx';
import Logo from './Logo.jsx';

const LINKS = [
  { href: '#services',     label: 'Services' },
  { href: '#why',          label: 'Why Us' },
  { href: '#programs',     label: 'Programs' },
  { href: '#testimonials', label: 'Clients' },
  { href: '#about',        label: 'About' },
];

export default function Nav({ open, onOpen, onClose }) {
  const [stuck, setStuck] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const targets = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive('#' + visible.target.id);
      },
      { threshold: [0.25, 0.5], rootMargin: '-20% 0px -55% 0px' },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  const handleAnchor = (e, href) => {
    const el = document.querySelector(href);
    if (!el) return;
    e.preventDefault();
    onClose?.();
    const y = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: y, behavior: 'smooth' });
    history.replaceState(null, '', href);
  };

  return (
    <>
      <header className={`ap-nav${stuck ? ' is-stuck' : ''}`} role="banner">
        <div className="ap-container ap-nav__inner">
          <a href="#top" className="ap-nav__logo" onClick={(e) => handleAnchor(e, '#top')} aria-label="Ablewski &amp; Partners — home">
            <Logo />
          </a>
          <nav aria-label="Primary">
            <ul className="ap-nav__links">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={active === l.href ? 'is-active' : ''}
                    onClick={(e) => handleAnchor(e, l.href)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href="#contact" className="ap-btn ap-nav__cta" onClick={(e) => handleAnchor(e, '#contact')}>
            Schedule consultation <IconArrow />
          </a>
          <button className="ap-nav__toggle" type="button" aria-label="Open menu" aria-expanded={open} onClick={onOpen}>
            <IconMenu />
          </button>
        </div>
      </header>

      <div className={`ap-mobile${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <div className="ap-mobile__head">
          <a href="#top" className="ap-nav__logo" onClick={(e) => handleAnchor(e, '#top')} aria-label="Ablewski &amp; Partners — home">
            <Logo />
          </a>
          <button className="ap-nav__toggle" type="button" aria-label="Close menu" onClick={onClose}>
            <IconClose />
          </button>
        </div>
        <ul className="ap-mobile__links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => handleAnchor(e, l.href)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={(e) => handleAnchor(e, '#contact')}>Schedule consultation</a>
          </li>
        </ul>
        <div className="ap-mobile__foot">
          <p style={{ color: 'rgba(244,237,224,0.7)', fontSize: '0.85rem' }}>
            Ablewski &amp; Partners · Warsaw · <a href="mailto:office@passportbros.org" style={{ color: 'var(--ap-gold)' }}>office@passportbros.org</a>
          </p>
        </div>
      </div>
    </>
  );
}
