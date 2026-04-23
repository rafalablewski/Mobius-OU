/**
 * Line-art iconography for Ablewski & Partners.
 * Inherits currentColor. 1.4 stroke weight to match the wordmark.
 */

const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export function IconGlobe(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="24" cy="24" r="18" />
      <path d="M6 24h36" />
      <path d="M24 6c5 5 7.5 11 7.5 18s-2.5 13-7.5 18" />
      <path d="M24 6c-5 5-7.5 11-7.5 18s2.5 13 7.5 18" />
      <path d="M9 14c4 3 9.5 4.5 15 4.5S34.5 17 39 14" />
      <path d="M9 34c4-3 9.5-4.5 15-4.5S34.5 31 39 34" />
    </svg>
  );
}

export function IconShield(props) {
  return (
    <svg {...base} {...props}>
      <path d="M24 6l14 5v11c0 9-6 15-14 20-8-5-14-11-14-20V11l14-5z" />
      <path d="M18 24l4 4 8-9" />
    </svg>
  );
}

export function IconPassport(props) {
  return (
    <svg {...base} {...props}>
      <rect x="10" y="6" width="28" height="36" rx="2" />
      <circle cx="24" cy="20" r="5.5" />
      <path d="M16 32h16" />
      <path d="M19 36h10" />
      <path d="M21.5 14.5c2 3 2 8 0 11M26.5 14.5c-2 3-2 8 0 11" />
    </svg>
  );
}

export function IconVault(props) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="9" width="36" height="30" rx="2" />
      <circle cx="22" cy="24" r="8" />
      <circle cx="22" cy="24" r="1" fill="currentColor" />
      <path d="M22 16v-2M22 34v-2M30 24h2M12 24h2M27.5 18.5l1.5-1.5M14.5 29.5l1.5-1.5M27.5 29.5l1.5 1.5M14.5 18.5l1.5 1.5" />
      <path d="M36 30v4M36 14v4" />
    </svg>
  );
}

export function IconFamily(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="16" cy="15" r="4.5" />
      <circle cx="32" cy="15" r="4.5" />
      <circle cx="24" cy="30" r="3.5" />
      <path d="M8 28c0-5 3.5-8 8-8s8 3 8 8" />
      <path d="M24 28c0-5 3.5-8 8-8s8 3 8 8" />
      <path d="M18 42c0-4 2.5-6 6-6s6 2 6 6" />
    </svg>
  );
}

export function IconGraph(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 40h36" />
      <path d="M6 6v34" />
      <path d="M10 32l8-10 6 6 12-16" />
      <path d="M36 12h4v4" />
      <circle cx="10" cy="32" r="1.2" fill="currentColor" />
      <circle cx="18" cy="22" r="1.2" fill="currentColor" />
      <circle cx="24" cy="28" r="1.2" fill="currentColor" />
      <circle cx="36" cy="12" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function IconCompass(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="24" cy="24" r="18" />
      <path d="M28 20l-2 10-10 2 2-10 10-2z" />
      <circle cx="24" cy="24" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function IconArrow(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" fill="none"
         stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
         className="ap-arrow" aria-hidden {...props}>
      <path d="M1 8h22M16 1l7 7-7 7" />
    </svg>
  );
}

export function IconDiamond(props) {
  return (
    <svg {...base} {...props}>
      <path d="M24 6l12 10-12 26L12 16z" />
      <path d="M12 16h24M18 16l6 26M30 16l-6 26" />
    </svg>
  );
}

export function IconMenu(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
         aria-hidden {...props}>
      <path d="M3 7h18M3 12h18M3 17h18" />
    </svg>
  );
}

export function IconClose(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
         aria-hidden {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
