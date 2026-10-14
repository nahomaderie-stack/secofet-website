import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutUs.css';
import videoImage from '../assets/Images/ethiopian-green-coffee-drying-4-2.webp';

const AboutUs = () => {
  const [showVideoMessage, setShowVideoMessage] = useState(false);

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Section Tag */}
        <span className="about-tag">About Secofet</span>

        {/* Main Heading */}
        <h2 className="about-heading">
          Your Reliable <span className="serif-text">Partner </span> for
          {'  '}
          <br />
          Ethiopian Green Coffee
        </h2>

        {/* Paragraph Description */}
        <div className="about-description">
          <p>
            Secofet Trading PLC is an{' '}
            <strong>Ethiopian green coffee exporter</strong> specializing in
            premium Arabica and tailored commercial grades.
          </p>
          <p>
            Based in Addis Ababa, Secofet currently sources from established
            Ethiopian coffee origins including{' '}
            <strong>Yirgacheffe, Guji and Sidama</strong>, connecting
            international buyers to origin through meticulous sourcing, rigorous
            quality management, and reliable export services.
          </p>
        </div>

        {/* Highlight Banner with Buttons */}
        <div className="about-cta-banner">
          <p className="about-cta-text">
            From Ethiopian origin to global markets, we build reliable supply
            chains and lasting business partnerships.
          </p>
          <div className="about-cta-buttons">
            <Link to="/about" className="btn-discover">
              <span>Discover Secofet</span>
              <span className="pill-arrow">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </Link>
            <Link to="/our-coffees" className="btn-explore btn-secondary">
              <span>Explore Our Coffees</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="arrow-up-right"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </Link>
          </div>
        </div>

        {/* Video Card Showcase Container */}
        <div className="about-video-card">
          {/* Background Image / Plantation View */}
          <div className="video-background">
            <img
              src={videoImage}
              alt="Ethiopian Coffee Plantation Drying Beds"
              className="plantation-img"
            />

            {/* Center Play Button Overlay */}
            <button
              className="video-play-btn"
              onClick={() => setShowVideoMessage((visible) => !visible)}
              aria-label="Play video"
              aria-expanded={showVideoMessage}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
            {showVideoMessage && (
              <p className="video-message" role="status">
                Video coming soon. Explore our operations and our coffees.
              </p>
            )}

            {/* Inset Info Card (Bottom-Left) */}
            {/* Inset Info Card (Bottom-Left) */}
            <div className="video-inset-card">
              <ul className="inset-links">
                <li>
                  <Link to="/our-coffees">Explore Our Coffees ↗</Link>
                </li>
                <li>
                  <Link to="/origins">Explore Yirgacheffe's Coffee ↗</Link>
                </li>
                <li>
                  <Link to="/rfq">Request a Quote ↗</Link>
                </li>
                <li>
                  <Link to="/request-sample">Request a Sample ↗</Link>
                </li>
              </ul>

              <div className="inset-footer">
                <h3 className="inset-title">
                  Discover More about{' '}
                  <span className="serif-text">Secofet</span>.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
