import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.jsx';
import CTABand from '../components/CTABand.jsx';

const MANDATES = [
  { img: '9.jpg',  title: 'Portugal Golden Visa — Founder Relocation',     tag: 'Residency by Investment' },
  { img: '10.jpg', title: 'Caribbean CBI — Family Passport Portfolio',     tag: 'Citizenship by Investment' },
  { img: '11.jpg', title: 'UAE Golden Residence — Operator Exit',          tag: 'Tax Residency' },
  { img: '12.jpg', title: 'Malta MEIN — Multi-Generational Citizenship',   tag: 'Citizenship by Investment' },
  { img: '13.jpg', title: 'Swiss Lump-Sum — Legacy Structuring',           tag: 'Asset Protection' },
  { img: '14.jpg', title: 'Singapore GIP — Principal + Family Relocation', tag: 'Family Relocation' },
];

export default function Project() {
  return (
    <>
      <Breadcrumb
        title="Select"
        emphasis="mandates."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Mandates' }]}
        tagline="Representative work · Anonymised"
      />
      <div className="ht-project-area section-padding">
        <div className="container">
          <div className="project-slide-wrapper inner-two">
            <div className="row gy-5">
              {MANDATES.map((m, i) => (
                <div
                  key={m.img}
                  className="col-lg-4 wow fadeInUp"
                  data-wow-delay={`${0.2 + i * 0.2}s`}
                >
                  <div className="single-item v2">
                    <div className="thumb">
                      <Link to="/project-details">
                        <img src={`/assets/img/project/${m.img}`} alt={m.title} />
                      </Link>
                      <div className="content">
                        <Link to="/project-details">
                          <h3>{m.title}</h3>
                        </Link>
                        <div className="bottom">
                          <p>{m.tag}</p>
                          <Link to="/project-details" aria-label="Open case study">
                            <img src="/assets/img/icon/arrow-up.svg" alt="" aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="page-nav-wrap text-center">
              <ul>
                <li className="active"><a className="page-numbers" href="#">01</a></li>
                <li><a className="page-numbers" href="#">02</a></li>
                <li><a className="page-numbers" href="#">03</a></li>
                <li><a className="page-numbers" href="#" aria-label="Next page"><i className="fa-solid fa-chevron-right"></i></a></li>
              </ul>
            </div>
            <p style={{ marginTop: '40px', fontSize: '13px', opacity: 0.65, textAlign: 'center' }}>
              Representative mandates, anonymised. Client names, photographs and identifying amounts are
              withheld as a matter of policy.
            </p>
          </div>
        </div>
      </div>
      <CTABand
        eyebrow="Discuss a mandate"
        title="Share the shape of your situation."
        body="Every mandate we publish began as a confidential enquiry. If your circumstance fits one of our practice areas, we will say so directly."
        primary={{ label: 'Schedule Consultation', to: '/contact' }}
        secondary={{ label: 'Programs & Fees', to: '/pricing' }}
        bg="ink"
      />
    </>
  );
}
