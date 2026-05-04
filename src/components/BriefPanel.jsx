import { Link } from 'react-router-dom';

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

export default function BriefPanel({ program }) {
  const slots = getNextSlots(3);
  const primary = slots[0];
  const [primaryHH, primaryMM] = primary.time.split(':');
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
      <div className="ht-brief-panel__top">
        <span className="ht-brief-panel__eyebrow">Next private call · Filip Z.</span>
        <span className="ht-brief-panel__status">Available</span>
      </div>

      <div className="ht-brief-panel__bigtime" aria-hidden="true">
        {primaryHH}<span>:</span>{primaryMM}
      </div>
      <div className="ht-brief-panel__bigmeta">
        <strong>{primary.dayLong} · {primary.date} {primary.month}</strong> · CET · 30 min
      </div>

      <ul className="ht-brief-panel__slots">
        {slots.map((slot, i) => (
          <li key={slot.iso}>
            <Link
              to={slotHref(slot)}
              className={`ht-brief-panel__slot${i === 0 ? ' is-active' : ''}`}
              aria-current={i === 0 ? 'true' : undefined}
            >
              <span className="ht-brief-panel__slot-day">
                {slot.day.toUpperCase()} · {slot.date} {slot.month.toUpperCase()}
              </span>
              <span className="ht-brief-panel__slot-time">{slot.time}</span>
            </Link>
          </li>
        ))}
      </ul>

      <Link to={slotHref(primary)} className="ht-brief-panel__cta">
        Reserve · {primary.time} CET
      </Link>

      <div className="ht-brief-panel__foot">
        <p className="ht-brief-panel__microcopy">NDA-first · No marketing</p>
        <Link to={altHref} className="ht-brief-panel__alt">
          Pick another time →
        </Link>
      </div>
    </aside>
  );
}
