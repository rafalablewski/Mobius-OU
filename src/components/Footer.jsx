import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="ht-footer-area fix">
      <div className="container">
        <div className="ht-footer-top-wrapper">
          <div className="ht-footer-top-left wow fadeInUp" data-wow-delay=".2s">
            <Link to="/">
              <img src="/assets/img/logo/logo-white.svg" alt="Mobius" />
            </Link>
            <p className="desc">
              At the core of our ethos lies a dedication to our clients. Your <br /> success is our
              shared triumph, and we're.
            </p>
          </div>
          <div className="ht-footer-top-right wow fadeInUp" data-wow-delay=".4s">
            <ul className="footer-social">
              <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
            </ul>
          </div>
        </div>

        <div className="ht-footer-widget-wrapper">
          <div className="ht-footer-widget">
            <div className="ht-footer-widget-items wow fadeInUp" data-wow-delay=".3s">
              <h5 className="head">Features</h5>
              <ul className="link-list">
                <li><a href="#">Advanced Analytics</a></li>
                <li><a href="#">Data Exploration</a></li>
                <li><a href="#">Auto Track</a></li>
                <li><a href="#">Data Insights</a></li>
              </ul>
            </div>
            <div className="ht-footer-widget-items wow fadeInUp" data-wow-delay=".6s">
              <h5 className="head">Menu</h5>
              <ul className="link-list">
                <li><a href="#">Article & Blog</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Learn Mobius</a></li>
                <li><a href="#">Tutorials</a></li>
              </ul>
            </div>
            <div className="ht-footer-widget-items wow fadeInUp" data-wow-delay=".9s">
              <h5 className="head">Company</h5>
              <ul className="link-list">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/team">Our Team</Link></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>
            <div className="ht-footer-widget-items wow fadeInUp" data-wow-delay="1.2s">
              <h5 className="head">Resources</h5>
              <ul className="link-list">
                <li><a href="#">Blog and Article</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Tutorials</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ht-footer-copyright wow fadeInUp" data-wow-delay=".2s">
          <p>©{new Date().getFullYear()} <span>Mobius</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
