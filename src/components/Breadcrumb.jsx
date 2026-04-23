import { Link } from 'react-router-dom';

export default function Breadcrumb({ title, current }) {
  return (
    <section className="ht-breadcrumb-area">
      <div className="container">
        <div className="ht-breadcrumb-heading">
          <h2 className="ht-breadcrumb-title">{title}</h2>
          <ul className="ht-breadcrumb-list">
            <li><Link to="/">Home</Link></li>
            <li><i className="fa-solid fa-chevron-right"></i></li>
            <li className="active">{current || title}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
