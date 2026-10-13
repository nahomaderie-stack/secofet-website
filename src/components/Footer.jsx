import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import Secofetlogo from '../assets/Logos/Secofet-logo-04.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (email.trim()) {
      window.open(
        `https://mail.google.com/mail/?view=cm&to=info@secofet.com&su=${encodeURIComponent(
          'Contact Secofet',
        )}&body=${encodeURIComponent(
          `Hello Secofet team,\n\nPlease contact me at ${email.trim()}.\n\nThank you.`,
        )}`,
        '_blank',
      );

      setSubscribeMessage('Gmail app is opening. Please send us your email.');
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-card">
        {/* Top Content Row: Brand + Navigation Columns */}
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Link to="/">
                <img src={Secofetlogo} alt="Secofet" />
              </Link>
            </div>
          </div>

          {/* Column 1: Main Pages */}
          <div className="footer-col">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/our-coffees">Our Coffees</Link>
            <Link to="/origins">Origins</Link>
            <Link to="/operations">Our Operations</Link>
            <Link to="/rfq">Request a Quote</Link>
            <Link to="/request-sample">Request a Sample</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          {/* Column 2: Social Links */}
          <div className="footer-col">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              X
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>

          {/* Column 3: Legal Links */}
          <div className="footer-col">
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/cookie">Cookie Policy</Link>
          </div>
        </div>

        {/* Bottom Content Row */}
        <div className="footer-bottom">
          {/* Back to top button */}
          <div className="footer-back-to-top">
            <button
              onClick={scrollToTop}
              className="btn-back-to-top"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <span className="arrow-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="19" x2="12" y2="5"></line>
                  <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
              </span>
            </button>
          </div>

          {/* Newsletter Input Form */}
          <div className="footer-newsletter">
            <h3 className="newsletter-heading">
              Secofet <br /> in your mailbox
            </h3>

            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />

              <button
                type="submit"
                className="newsletter-btn"
                aria-label="Subscribe"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>

            {subscribeMessage && <p role="status">{subscribeMessage}</p>}
          </div>

          {/* Contact Email & Copyright */}
          <div className="footer-meta">
            <a href="mailto:info@secofet.com" className="footer-email">
              info@secofet.com
            </a>

            <a href="tel:+251116683235" className="footer-email">
              Call us +251116683235
            </a>

            <a href="tel:+251979321414" className="footer-email">
              Call us +251979321414
            </a>

            <div className="footer-copyright">
              <p>Secofet trading</p>
              <p>2026 © All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
