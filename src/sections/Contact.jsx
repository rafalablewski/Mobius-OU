import { useState } from 'react';
import { IconArrow } from '../components/Icons.jsx';
import config from '../config.js';

const GOALS = [
  'Citizenship by Investment',
  'Residency by Investment',
  'Tax residency planning',
  'Asset protection structuring',
  'Family relocation',
  'Cross-border investment strategy',
  'Other — I will explain',
];

const initial = { name: '', email: '', country: '', goal: GOALS[0], brief: '', consent: false };

function validate(v) {
  const e = {};
  if (!v.name.trim() || v.name.trim().length < 2) e.name = 'Please enter your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'A valid email is required for our response.';
  if (!v.brief.trim() || v.brief.trim().length < 24) e.brief = 'Please share a sentence or two about the outcome you have in mind.';
  if (!v.consent) e.consent = 'We can only respond if you accept the privacy notice.';
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'sending' | 'sent' | 'error'

  const set = (k) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setValues((s) => ({ ...s, [k]: val }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus('sending');
    // No backend yet: fall back to a formatted mailto so the brief always reaches
    // us. Replace with fetch('/api/contact', ...) once the serverless endpoint is
    // wired.
    const subject = encodeURIComponent(`Consultation brief · ${values.goal}`);
    const body = encodeURIComponent(
      [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Jurisdiction of origin: ${values.country || '—'}`,
        `Primary goal: ${values.goal}`,
        '',
        'Brief:',
        values.brief,
      ].join('\n'),
    );
    const mailtoFallback = () => {
      window.location.href = `mailto:${config.email}?subject=${subject}&body=${body}`;
      setTimeout(() => setStatus('sent'), 300);
    };

    if (!config.contactEndpoint) {
      mailtoFallback();
      return;
    }

    fetch(config.contactEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then((r) => {
        if (!r.ok) throw new Error(`Submission failed (${r.status})`);
        return r.json().catch(() => ({}));
      })
      .then(() => {
        setStatus('sent');
        setValues(initial);
      })
      .catch((err) => {
        // Graceful fallback: surface a soft error and open mailto so the
        // brief is never lost.
        console.warn('[ap] contact endpoint failed', err);
        mailtoFallback();
      });
  };

  return (
    <section className="ap-section ap-section--ink" id="contact">
      <div className="ap-container">
        <div className="ap-section-head ap-reveal">
          <span className="ap-eyebrow">06 · Consultation</span>
          <h2 className="ap-display">
            A brief conversation<br /><em>before</em> anything begins.
          </h2>
          <p className="ap-lede">
            Share a short brief below or book a 30-minute private call. We respond
            within two working days, always from a named partner.
          </p>
        </div>

        <div className="ap-contact ap-reveal">
          <form className="ap-form" onSubmit={onSubmit} noValidate aria-describedby="ap-form-note">
            <div className="ap-field" data-invalid={!!errors.name}>
              <label htmlFor="ap-name">Full name</label>
              <input
                id="ap-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={values.name}
                onChange={set('name')}
                aria-invalid={!!errors.name}
              />
              {errors.name && <div className="ap-field__error">{errors.name}</div>}
            </div>

            <div className="ap-field" data-invalid={!!errors.email}>
              <label htmlFor="ap-email">Email</label>
              <input
                id="ap-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={values.email}
                onChange={set('email')}
                aria-invalid={!!errors.email}
              />
              {errors.email && <div className="ap-field__error">{errors.email}</div>}
            </div>

            <div className="ap-field">
              <label htmlFor="ap-country">Jurisdiction of origin (optional)</label>
              <input
                id="ap-country"
                name="country"
                type="text"
                autoComplete="country-name"
                placeholder="e.g. Poland · UAE · Switzerland"
                value={values.country}
                onChange={set('country')}
              />
            </div>

            <div className="ap-field">
              <label htmlFor="ap-goal">Primary goal</label>
              <select id="ap-goal" name="goal" value={values.goal} onChange={set('goal')}>
                {GOALS.map((g) => <option key={g}>{g}</option>)}
              </select>
            </div>

            <div className="ap-field" data-invalid={!!errors.brief}>
              <label htmlFor="ap-brief">Brief</label>
              <textarea
                id="ap-brief"
                name="brief"
                rows="5"
                required
                placeholder="In a sentence or two, the outcome you have in mind. Names and figures are not required at this stage."
                value={values.brief}
                onChange={set('brief')}
                aria-invalid={!!errors.brief}
              />
              {errors.brief && <div className="ap-field__error">{errors.brief}</div>}
            </div>

            <label className="ap-form__consent">
              <input type="checkbox" checked={values.consent} onChange={set('consent')} />
              <span>
                I agree to Ablewski &amp; Partners contacting me about this enquiry and
                have read the <a href="#privacy" style={{ color: 'var(--ap-gold)', borderBottom: '1px solid currentColor' }}>privacy notice</a>.
              </span>
            </label>
            {errors.consent && <div className="ap-field__error">{errors.consent}</div>}

            <div id="ap-form-note" style={{ color: 'rgba(244,237,224,0.55)', fontSize: '0.78rem' }}>
              All enquiries are handled under NDA. Information shared is not retained
              unless an engagement follows.
            </div>

            <button className="ap-btn" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Preparing your brief…' : 'Send brief'} <IconArrow />
            </button>

            {status === 'sent' && (
              <div className="ap-form__status">
                Brief received — a named partner will respond within two working days.
                For anything urgent, write to{' '}
                <a href={`mailto:${config.email}`} style={{ color: 'var(--ap-gold)' }}>{config.email}</a>.
              </div>
            )}
          </form>

          <aside className="ap-contact__panel">
            <h3>Private call</h3>
            <p style={{ color: 'rgba(244,237,224,0.78)' }}>
              Thirty minutes, conducted by the founder, under NDA on request.
              Reserved for prospective clients with a live structuring question.
            </p>

            <a
              className="ap-btn ap-btn--ghost-ivory"
              href={config.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: '0.5rem' }}
            >
              Book via Calendly <IconArrow />
            </a>

            <hr style={{ borderColor: 'var(--ap-line-dark)', margin: '2rem 0' }} />

            <ul className="ap-contact__list">
              <li>
                <span className="lbl">Correspondence</span>
                <a className="val" href={`mailto:${config.email}`}>{config.email}</a>
              </li>
              <li>
                <span className="lbl">Office</span>
                <span className="val">{config.office}</span>
              </li>
              <li>
                <span className="lbl">Hours</span>
                <span className="val">{config.hours}</span>
              </li>
            </ul>
          </aside>
        </div>

        <div className="ap-disclaimer ap-reveal" style={{ marginTop: '3rem' }}>
          Information on this site is educational in nature. It is not legal, tax or
          investment advice, and nothing here constitutes a solicitation or offer.
        </div>
      </div>
    </section>
  );
}
