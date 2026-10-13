import { Link } from 'react-router-dom';
import '../styles/LegalPages.css';

const CookiePolicy = () => {
  return (
    <div className="legal-page-section">
      <div className="legal-page-container">
        <div className="legal-header">
          <div className="badge-wrapper">
            <span className="pill-badge-outline">Cookies & Analytics</span>
          </div>
          <h1 className="legal-title">
            Cookie <span className="serif-text">Policy.</span>
          </h1>
          <p className="legal-last-updated">Last Updated: September 2026</p>
        </div>

        <div className="legal-content">
          <section className="legal-block">
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device when visiting
              our website to help ensure smooth site performance, retain
              preferred sessions, and analyze traffic patterns.
            </p>
          </section>

          <section className="legal-block">
            <h2>2. Categories of Cookies We Use</h2>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> Required for site
                navigation, secure route handling, and modal form submission.
              </li>
              <li>
                <strong>Performance & Analytics Cookies:</strong> Help us
                understand aggregate user interaction across origin maps and
                coffee catalog pages to improve user experience.
              </li>
            </ul>
          </section>

          <section className="legal-block">
            <h2>3. Managing Cookie Preferences</h2>
            <p>
              You can review and change your cookie preferences at any time
              using the button below.
            </p>

            <button
              type="button"
              className="btn-legal-action"
              onClick={() => {
                window.dispatchEvent(new Event('open-cookie-preferences'));
              }}
            >
              Manage Cookie Preferences
            </button>
          </section>

          <div className="legal-footer-nav">
            <p>Questions regarding our website technical policies?</p>
            <Link to="/contact" className="btn-legal-action">
              Contact Web Support ↗
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
