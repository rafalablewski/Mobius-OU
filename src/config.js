/**
 * Site-wide configuration for Ablewski & Partners.
 *
 * Values may be overridden at build time by Vite env vars (VITE_*) so Vercel
 * / Netlify environments can point to their own Calendly booking page,
 * support inbox, etc. without a code change.
 */

const env = import.meta.env ?? {};

export const config = {
  siteName: 'Ablewski & Partners',
  siteUrl:  env.VITE_SITE_URL  || 'https://passportbros.org',

  /* Contact */
  email:    env.VITE_SITE_EMAIL || 'office@passportbros.org',
  office:   'Warsaw · By appointment only',
  hours:    'Mon – Fri · 09:00 – 18:00 CET',

  /* Scheduling — swap for your real Calendly URL via VITE_CALENDLY_URL */
  calendlyUrl:
    env.VITE_CALENDLY_URL ||
    'https://calendly.com/ablewski-partners/consult',

  /* Contact submission endpoint. Empty string = fall back to mailto. */
  contactEndpoint: env.VITE_CONTACT_ENDPOINT || '/api/contact',
};

export default config;
