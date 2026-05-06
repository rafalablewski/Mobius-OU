import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const DAY_NAMES_LONG = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
];
const MONTH_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];
// Three plausible weekday times in CET. Cycles so each slot reads differently.
const TIMES_CET = ['14:00', '09:30', '11:00'];

// Pick the next `count` weekday slots starting tomorrow. Dates are computed
// from the visitor's local clock — that's fine for "next 3 weekdays" since
// the calendar day flips at the same wall-clock hour everywhere give-or-take
// the international date line. Times are labelled as CET (Warsaw).
function getNextSlots(count = 3, now = new Date()) {
  const slots = [];
  const cursor = new Date(now);
  cursor.setDate(cursor.getDate() + 1);
  let i = 0;

  while (slots.length < count) {
    const dow = cursor.getDay();
    if (dow !== 0 && dow !== 6) {
      const time = TIMES_CET[i % TIMES_CET.length];
      const yyyy = cursor.getFullYear();
      const mm = String(cursor.getMonth() + 1).padStart(2, '0');
      const dd = String(cursor.getDate()).padStart(2, '0');
      slots.push({
        day: DAY_NAMES[dow],
        dayLong: DAY_NAMES_LONG[dow],
        date: cursor.getDate(),
        month: MONTH_NAMES[cursor.getMonth()],
        time,
        iso: `${yyyy}-${mm}-${dd}T${time}`,
      });
      i++;
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return slots;
}

// Booking-window deadline used by the Closes cell. Targets Friday 18:00 in
// the visitor's local clock — close enough for a sketch since the times are
// labelled CET. Rolls forward to next Friday once the deadline passes.
function getWindowClose(now = new Date()) {
  const result = new Date(now);
  const dayOfWeek = result.getDay(); // 0=Sun, 5=Fri, 6=Sat
  const daysUntilFriday = (5 - dayOfWeek + 7) % 7;
  result.setDate(result.getDate() + daysUntilFriday);
  result.setHours(18, 0, 0, 0);
  if (result.getTime() <= now.getTime()) {
    result.setDate(result.getDate() + 7);
  }
  return result;
}

function pad(n) { return String(n).padStart(2, '0'); }

function formatHMS(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

export default function BriefPanel({ program }) {
  const slots = getNextSlots(3);
  const primary = slots[0];
  const [primaryHH, primaryMM] = primary.time.split(':');

  // Live countdown to end-of-week booking cut-off. Tick once a second.
  const closeTime = useMemo(() => getWindowClose(), []);
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const countdown = formatHMS(closeTime.getTime() - now.getTime());

  // The last slot is shown as booked so the "Open · N / 12" copy stays
  // honest. When the panel is wired to a real calendar source, the booked
  // flag and the open count both come from there.
  const slotsWithStatus = slots.map((s, i) => ({
    ...s,
    booked: i === slots.length - 1,
  }));
  const leftThisWeek = slotsWithStatus.filter((s) => !s.booked).length;

  const programParam = program?.slug
    ? `&program=${encodeURIComponent(program.slug)}`
    : '';
  const altHref = program?.slug
    ? `/contact?program=${encodeURIComponent(program.slug)}`
    : '/contact';
  const slotHref = (slot) =>
    `/contact?slot=${encodeURIComponent(slot.iso)}${programParam}`;

  return (
    <aside className="ht-brief-panel" aria-label="Schedule a private call">
      <div className="ht-brief-panel__doc">
        <div className="ht-brief-panel__doc-tag">
          <span>Call</span>
        </div>
        <div className="ht-brief-panel__doc-cell">
          <span className="ht-brief-panel__doc-key">Host</span>
          <span className="ht-brief-panel__doc-val">Rafał A.</span>
        </div>
        <div className="ht-brief-panel__doc-cell">
          <span className="ht-brief-panel__doc-key">Status</span>
          <span className="ht-brief-panel__doc-val ht-brief-panel__doc-val--avail">
            Available
          </span>
        </div>
      </div>

      <div className="ht-brief-panel__body">
        <div className="ht-brief-panel__bigtime" aria-hidden="true">
          {primaryHH}<span>:</span>{primaryMM}
        </div>
        <div className="ht-brief-panel__bigmeta">
          <strong>{primary.dayLong} · {primary.date} {primary.month}</strong> · CET · 30 min
        </div>

        <div className="ht-brief-panel__doc-row" aria-live="polite">
          <div className="ht-brief-panel__doc-row-cell">
            <span className="ht-brief-panel__doc-row-key">Open</span>
            <span className="ht-brief-panel__doc-row-val">{leftThisWeek} / 12</span>
          </div>
          <div className="ht-brief-panel__doc-row-cell">
            <span className="ht-brief-panel__doc-row-key">Closes</span>
            <span className="ht-brief-panel__doc-row-val">{countdown}</span>
          </div>
        </div>

        <ul className="ht-brief-panel__slots">
          {slotsWithStatus.map((slot, i) => {
            const dayLabel = `${slot.day.toUpperCase()} · ${slot.date} ${slot.month.toUpperCase()}`;
            if (slot.booked) {
              return (
                <li key={slot.iso}>
                  <span
                    className="ht-brief-panel__slot ht-brief-panel__slot--booked"
                    aria-disabled="true"
                    title="Booked"
                  >
                    <span className="ht-brief-panel__slot-day">{dayLabel}</span>
                    <span className="ht-brief-panel__slot-time">{slot.time}</span>
                  </span>
                </li>
              );
            }
            return (
              <li key={slot.iso}>
                <Link
                  to={slotHref(slot)}
                  className={`ht-brief-panel__slot${i === 0 ? ' is-active' : ''}`}
                  aria-current={i === 0 ? 'true' : undefined}
                >
                  <span className="ht-brief-panel__slot-day">{dayLabel}</span>
                  <span className="ht-brief-panel__slot-time">{slot.time}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <Link to={slotHref(primary)} className="ht-brief-panel__cta">
          Reserve · {primary.time} CET
        </Link>

        <div className="ht-brief-panel__foot">
          <p className="ht-brief-panel__microcopy">
            NDA-first · No marketing · Private call
          </p>
          <Link to={altHref} className="ht-brief-panel__alt">
            Pick another time →
          </Link>
        </div>
      </div>
    </aside>
  );
}
