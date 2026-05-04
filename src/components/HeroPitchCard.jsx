import { useEffect, useState } from 'react';

const AUTOPLAY_MS = 6000;

export default function HeroPitchCard({ slides }) {
  const [active, setActive] = useState(0);
  const total = slides?.length ?? 0;

  const goTo = (i) => setActive(((i % total) + total) % total);
  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  useEffect(() => {
    if (total <= 1) return;
    const id = setTimeout(() => goTo(active + 1), AUTOPLAY_MS);
    return () => clearTimeout(id);
    // goTo is stable enough for this self-contained card; we want the
    // timer to reset on every active change, including manual nav clicks.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, total]);

  if (total === 0) return null;

  const chapter = (i) =>
    `${String(i + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;

  return (
    <aside
      className="ht-pitch-card"
      aria-roledescription="carousel"
      aria-label="Why our advisory"
    >
      <div className="ht-pitch-card__viewport">
        {slides.map((s, i) => (
          <article
            key={s.title}
            className={`ht-pitch-card__slide${i === active ? ' is-active' : ''}`}
            aria-hidden={i !== active}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${total}: ${s.title}`}
          >
            <header className="ht-pitch-card__head">
              <span className="ht-pitch-card__eyebrow">
                <span className="ht-pitch-card__chapter">{chapter(i)}</span>
                <span className="ht-pitch-card__sep" aria-hidden="true">/</span>
                <span className="ht-pitch-card__kicker">{s.kicker ?? s.title}</span>
              </span>
              <span className="ht-pitch-card__icon" aria-hidden="true">
                {s.icon}
              </span>
            </header>
            <h3 className="ht-pitch-card__title">{s.title}</h3>
            <span className="ht-pitch-card__rule" aria-hidden="true" />
            <p className="ht-pitch-card__copy">{s.body}</p>
          </article>
        ))}
      </div>
      <footer className="ht-pitch-card__controls">
        <button
          type="button"
          className="ht-pitch-card__nav"
          onClick={prev}
          aria-label="Previous pillar"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M14 6l-6 6 6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <ol className="ht-pitch-card__progress" aria-hidden="true">
          {slides.map((s, i) => (
            <li
              key={s.title}
              className={`ht-pitch-card__segment${
                i === active ? ' is-active' : ''
              }${i < active ? ' is-done' : ''}`}
            >
              {i === active && (
                <span
                  key={active}
                  className="ht-pitch-card__segment-fill"
                  style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                />
              )}
            </li>
          ))}
        </ol>
        <button
          type="button"
          className="ht-pitch-card__nav"
          onClick={next}
          aria-label="Next pillar"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M10 6l6 6-6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </footer>
    </aside>
  );
}
