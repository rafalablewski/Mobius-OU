import Logo from './Logo.jsx';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="ap-footer" id="privacy">
      <div className="ap-container">
        <div className="ap-footer__grid">
          <div className="ap-footer__brand">
            <Logo tagline />
            <p style={{ maxWidth: '38ch', marginTop: '1.5rem' }}>
              Independent strategic advisory on Citizenship and Residency by
              Investment, tax residency and family legacy — for clients who value
              discretion over visibility.
            </p>
          </div>

          <nav aria-label="Practice">
            <h4>Practice</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#why">Why us</a></li>
              <li><a href="#about">House &amp; principal</a></li>
              <li><a href="#contact">Schedule consultation</a></li>
            </ul>
          </nav>

          <nav aria-label="Contact">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:office@passportbros.org">office@passportbros.org</a></li>
              <li>Warsaw · By appointment</li>
              <li>Mon – Fri · 09:00 – 18:00 CET</li>
              <li>
                <a
                  href="https://calendly.com/ablewski-partners/consult"
                  target="_blank"
                  rel="noopener noreferrer"
                >Book a private call</a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Compliance">
            <h4>Compliance</h4>
            <ul>
              <li><a href="#disclaimer">Disclaimers</a></li>
              <li><a href="#privacy">Privacy notice</a></li>
              <li><a href="#aml">AML &amp; onboarding</a></li>
              <li><a href="#terms">Terms of engagement</a></li>
            </ul>
          </nav>
        </div>

        <div className="ap-footer__disclaim" id="disclaimer">
          <p>
            <strong style={{ color: 'var(--ap-ivory)' }}>Educational only. Not legal, tax or investment advice.</strong><br />
            Ablewski &amp; Partners provides strategic advisory; program applications
            and opinions are delivered by licensed counsel and agents within our
            panel. Nothing on this site is a solicitation to acquire citizenship or
            residency in any jurisdiction. Program parameters change — confirm with
            us before acting.
          </p>
          <ul className="ap-footer__legal">
            <li>© {year} Ablewski &amp; Partners</li>
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#terms">Terms</a></li>
            <li><a href="#cookies">Cookies</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
