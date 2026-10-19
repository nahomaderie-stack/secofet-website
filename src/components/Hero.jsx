import { Link } from 'react-router-dom';
import '../styles/Hero.css';
import heroDesktopImage from '../assets/Images/ethiopian-green-coffee-farmers-hero-1.jpg';
import heroMobileImage from '../assets/Images/ethiopian-green-coffee-farmers-hero-mobile.webp';

const Hero = () => {
  return (
    <section className="hero-section">
      <img
        className="hero-background"
        src={heroDesktopImage}
        srcSet={`${heroMobileImage} 960w, ${heroDesktopImage} 1500w`}
        sizes="(max-width: 640px) 100vw, 1500px"
        width="1500"
        height="837"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
      />

      {/* Background Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content Container */}
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-line">
              The World’s Most Sought-After
            </span>
            <span className="hero-title-line">
              Ethiopian <span className="serif-text">Coffee</span> Carefully
            </span>
            <span className="hero-title-line">
              Sourced, <span className="serif-text">Reliably</span> Exported.
            </span>
          </h1>

          <p className="hero-subtitle">
            Supplying international importers and specialty roasters with
            meticulously selected green coffee from Ethiopia’s premier growing
            regions.
          </p>

          <div className="hero-cta-group">
            <Link to="/our-coffees" className="btn-primary ">
              Explore Our Coffees
            </Link>
            <Link to="/rfq" className="btn-secondary">
              <span>Request a Quote</span>
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
      </div>

      {/* <aside className="hero-highlights" aria-label="Ethiopian coffee highlights">
        <article className="hero-highlight-card">
          <span className="hero-highlight-eyebrow">Ethiopian origins</span>
          <h2 className="hero-highlight-title">Yirgacheffe</h2>
          <p className="hero-highlight-description">Sidamo · Guji</p>
        </article>

        <article className="hero-highlight-card">
          <span className="hero-highlight-eyebrow">Cup character</span>
          <h2 className="hero-highlight-title">Floral &amp; bright</h2>
          <p className="hero-highlight-description">
            Citrus · stone fruit · berries
          </p>
        </article>

        <article className="hero-highlight-card hero-highlight-card-image">
          <img src={coffeeDryingImg} alt="" aria-hidden="true" />
          <div className="hero-highlight-image-content">
            <span className="hero-highlight-eyebrow">Ethiopian coffee</span>
            <h2 className="hero-highlight-title">From origin to export</h2>
            <p className="hero-highlight-description">
              Carefully selected for global market.
            </p>
          </div>
        </article>
      </aside> */}
    </section>
  );
};

export default Hero;
