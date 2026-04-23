import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="ht-error-area section-padding fix">
      <div className="container">
        <div className="ht-error-wrapper text-center">
          <div className="ht-error-img wow fadeInUp" data-wow-delay=".2s">
            <img src="/assets/img/error/error.svg" alt="404 — page not found" />
          </div>
          <div className="ht-error-content">
            <h2 className="ht-error-title wow fadeInUp" data-wow-delay=".4s">
              This page is no longer in circulation
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".6s">
              The link you followed may have moved, been renamed, or never existed.
              If you were reading an intelligence brief or a program memo, try the
              archive — otherwise, the front desk is the fastest way back.
            </p>
            <div className="wow fadeInUp" data-wow-delay=".8s" style={{ display: 'inline-flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link to="/" className="ht-btn style-2">Return Home</Link>
              <Link to="/blog" className="ht-btn style-3">Brief Archive</Link>
              <Link to="/contact" className="ht-btn style-3">Contact the Firm</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
