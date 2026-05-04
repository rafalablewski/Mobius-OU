import { Link } from 'react-router-dom';

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
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
  const programParam = program?.slug
    ? `&program=${encodeURIComponent(program.slug)}`
    : '';
  const altHref = program?.slug
    ? `/contact?program=${encodeURIComponent(program.slug)}`
    : '/contact';

  return (
    <aside className="ht-brief-panel" aria-label="Schedule a private call">
      <span className="ht-brief-panel__eyebrow">Next available with Filip</span>
      <h2 className="ht-brief-panel__title">Pick a 30-minute slot.</h2>
      <ul className="ht-brief-panel__slots">
        {slots.map((slot) => (
          <li key={slot.iso}>
            <Link
              to={`/contact?slot=${encodeURIComponent(slot.iso)}${programParam}`}
              className="ht-brief-panel__slot"
            >
              <span className="ht-brief-panel__slot-day">
                {slot.day.toUpperCase()} · {slot.date} {slot.month.toUpperCase()}
              </span>
              <span className="ht-brief-panel__slot-time">{slot.time} CET</span>
              <span className="ht-brief-panel__slot-arrow" aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link to={altHref} className="ht-brief-panel__alt">
        Or pick another time →
      </Link>
      <p className="ht-brief-panel__microcopy">
        NDA-first · 30-min private call · No marketing
      </p>
    </aside>
  );
}
