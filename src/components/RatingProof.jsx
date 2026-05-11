/**
 * RatingProof — Google + Trustpilot rating widgets, side by side at locked
 * equal height. Used once, late in the funnel, at the conversion point
 * (Contact page above the form).
 *
 * The two widgets keep their native brand colours so they're instantly
 * recognisable as Google / Trustpilot — that's the whole point of social
 * proof: third-party verifiability. Each card links out to its live source
 * (swap the placeholder URLs for the real ones once Mobius's listings are
 * live) so the rating can be verified.
 */
const SOURCES = [
  {
    key: 'google',
    src: '/google.svg',
    alt: 'Google Rating — 4.8 out of 5 stars',
    href: 'https://maps.google.com/',  // TODO: swap for Mobius's Google Business Profile
  },
  {
    key: 'trustpilot',
    src: '/trustpilot.svg',
    alt: 'Trustpilot — rated 3.9 out of 5.0',
    href: 'https://trustpilot.com/',   // TODO: swap for Mobius's Trustpilot listing
  },
];

export default function RatingProof() {
  return (
    <div className="ht-rating-proof" role="group" aria-label="Independent ratings">
      {SOURCES.map(({ key, src, alt, href }) => (
        <a
          key={key}
          className={`ht-rating-proof__cell ht-rating-proof__cell--${key}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="ht-rating-proof__svg" src={src} alt={alt} />
        </a>
      ))}
    </div>
  );
}
