import { Link } from 'react-router-dom';

const DEFAULT_ITEMS = [
  { label: 'Citizenship by Investment', to: '/service-details' },
  { label: 'Residency by Investment',   to: '/service-details' },
  { label: 'Tax Residency Planning',    to: '/service-details' },
  { label: 'Asset Protection',          to: '/service-details' },
  { label: 'Family Relocation',         to: '/service-details' },
  { label: 'Investment Strategy',       to: '/service-details' },
];

export default function PracticeIndex({ eyebrow = 'Advisory Practice', items = DEFAULT_ITEMS }) {
  return (
    <nav className="ht-practice-index" aria-label={`${eyebrow} navigation`}>
      <p className="ht-practice-index__eyebrow">{eyebrow}</p>
      <ol className="ht-practice-index__list">
        {items.map((item) => (
          <li key={item.label} className="ht-practice-index__item">
            <Link to={item.to} className="ht-practice-index__link">
              <span className="ht-practice-index__num" aria-hidden="true" />
              <span className="ht-practice-index__label">{item.label}</span>
              <span className="ht-practice-index__chev" aria-hidden="true">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
