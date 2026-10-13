import { Link } from 'react-router-dom';
import '../styles/OriginsHero.css';

const OriginsHero = () => {
  return (
    <section className="origins-hero">
      {/* Background Image Layer */}
      <div className="origins-hero-bg"></div>

      {/* Overlay for Darkening/Gradient */}
      <div className="origins-hero-overlay"></div>

      {/* Content Container */}
      <div className="origins-hero-content">
        <h1 className="origins-hero-title">
          From the Origins <br />
          <span className="origins-hero-italic">of Ethiopian Coffee</span>
        </h1>

        <p className="origins-hero-description">
            Secofet currently sources from Yirgacheffe, Guji and Sidama,
          connecting buyers with coffees from established Ethiopian Arabica
          origins.
        </p>

        <div className="origins-hero-actions">
          <Link to="/our-coffees" className="btn btn-primary">
            Explore Our Coffees
          </Link>

          <Link to="/rfq" className="btn-link">
            <span>Request a Quote</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
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
    </section>
  );
};

export default OriginsHero;
