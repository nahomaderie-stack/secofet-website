import { Link } from 'react-router-dom';
import SplitTextReveal from '../SplitTextAnimation/SplitTextReveal';
import '../styles/OurCoffeesExplore.css';

// Import your drying beds hero image asset
import coffeeDryingBeds from '../assets/Images/ethiopian-green-coffee-drying-16.webp';

const OurCoffeesExplore = () => {
  return (
    <section className="our-coffees-hero" id="ourcoffees">
      {/* Background Image with Dark Vignette Overlay */}
      <img
        src={coffeeDryingBeds}
        alt="Ethiopian Coffee Cherries on Raised African Drying Beds"
        className="hero-bg-img"
      />
      <div className="hero-dark-overlay"></div>

      <div className="hero-content-container">
        {/* Main Headline */}
        <h1 className="hero-main-title">
          <SplitTextReveal
            as="span"
            className="coffee-hero-title-line"
            text="Explore our carefully"
          />
          {' '}
          <span className="coffee-hero-title-line coffee-hero-title-line--mixed">
            <SplitTextReveal as="span" text="sourced" />{' '}
            <SplitTextReveal
              as="span"
              className="serif-text"
              text="Ethiopian Arabica"
            />
          </span>
          {' '}
          <SplitTextReveal as="span" className="coffee-hero-title-line" text="coffees." />
        </h1>

        {/* Subtitle Description */}
        <SplitTextReveal
          className="hero-subtitle"
          text="From the highlands of Yirgacheffe, Guji, and Sidama, discover coffees shaped by unique origins, careful cultivation, and generations of expertise."
        />

        {/* Quick CTA Actions */}
        <div className="hero-actions">
          <Link to="/origins" className="btn-hero-white">
            View Origins
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
    </section>
  );
};

export default OurCoffeesExplore;
