import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="ht-error-area section-padding fix">
      <div className="container">
        <div className="ht-error-wrapper text-center">
          <div className="ht-error-img wow fadeInUp" data-wow-delay=".2s">
            <img src="/assets/img/error/error.svg" alt="404" />
          </div>
          <div className="ht-error-content">
            <h2 className="ht-error-title wow fadeInUp" data-wow-delay=".4s">
              Oops! Page not found
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".6s">
              The page you are looking for doesn't exist. It may have been moved or removed.
            </p>
            <Link to="/" className="ht-btn style-2 wow fadeInUp" data-wow-delay=".8s">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
