import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.jsx';
import CTABand from '../components/CTABand.jsx';

const ADVISORS = [
  { img: '1.jpg',  name: 'Rafał Ablewski',  role: 'Managing Partner, CFA' },
  { img: '2.jpg',  name: 'M. Kowalska',     role: 'Head of Residency Programs' },
  { img: '3.jpg',  name: 'A. Nowak',        role: 'Head of Citizenship Programs' },
  { img: '4.jpg',  name: 'J. Wiśniewski',   role: 'Senior Tax Counsel' },
  { img: '9.jpg',  name: 'P. Zieliński',    role: 'Head of Family Relocation' },
  { img: '10.jpg', name: 'T. Schneider',    role: 'Senior Advisor — DACH' },
  { img: '11.jpg', name: 'L. Rahimi',       role: 'Senior Advisor — MENA' },
  { img: '12.jpg', name: 'E. Costa',        role: 'Head of Iberia Desk' },
];

export default function Team() {
  return (
    <>
      <Breadcrumb
        title="Our"
        emphasis="advisors."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Advisors' }]}
        tagline="A small roster · One point of accountability"
      />
      <section className="ht-team-area section-padding fix">
        <div className="container">
          <div className="ht-team-wrapper">
            <div className="row">
              {ADVISORS.map((a, i) => (
                <div
                  key={a.name}
                  className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
                  data-wow-delay={`${0.2 + i * 0.2}s`}
                >
                  <div className="ht-team-items">
                    <div className="ht-team-thumb">
                      <Link to="/team-details">
                        <img src={`/assets/img/team/${a.img}`} alt={a.name} />
                      </Link>
                      <div className="social">
                        <a href="#" aria-label={`${a.name} on LinkedIn`}>
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="#" aria-label={`${a.name} on X`}>
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ht-team-content">
                      <Link to="/team-details">
                        <h4 className="name">{a.name}</h4>
                      </Link>
                      <p className="role">{a.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTABand
        eyebrow="Engage the bench"
        title="Start with the advisor who fits the situation."
        body="We match each file to the advisor closest to its facts. First call is with the partner, not an intake team."
        primary={{ label: 'Schedule Consultation', to: '/contact' }}
        secondary={{ label: 'About the Firm', to: '/about' }}
        bg="ink"
      />
    </>
  );
}
