import { useEffect, useState } from 'react';

const AUTOPLAY_MS = 6000;

export default function HeroPitchCard({ slides }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!slides || slides.length <= 1) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % slides.length),
      AUTOPLAY_MS,
    );
    return () => clearInterval(id);
  }, [slides]);

  if (!slides || slides.length === 0) return null;

  return (
    <aside className="ht-pitch-card float-bob-y" aria-label="Why our advisory">
      <div className="ht-pitch-card__viewport">
        {slides.map((s, i) => (
          <article
            key={s.title}
            className={`ht-pitch-card__slide${i === active ? ' is-active' : ''}`}
            aria-hidden={i !== active}
          >
            <span className="ht-pitch-card__icon" aria-hidden="true">
              {s.icon}
            </span>
            <span className="ht-pitch-card__rule" aria-hidden="true" />
            <div className="ht-pitch-card__body">
              <h3 className="ht-pitch-card__title">{s.title}</h3>
              <p className="ht-pitch-card__copy">{s.body}</p>
            </div>
          </article>
        ))}
      </div>
      {slides.length > 1 && (
        <div className="ht-pitch-card__dots" role="tablist" aria-label="Slide controls">
          {slides.map((s, i) => (
            <button
              key={s.title}
              type="button"
              className={`ht-pitch-card__dot${i === active ? ' is-active' : ''}`}
              role="tab"
              aria-selected={i === active}
              aria-label={s.title}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      )}
    </aside>
  );
}
