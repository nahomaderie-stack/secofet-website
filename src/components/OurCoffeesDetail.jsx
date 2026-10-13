import { Link } from 'react-router-dom';
import '../styles/OurCoffeesDetail.css';
import coffeeFeatureImage from '../assets/Images/ethiopian-green-coffee-farmer-drying-1.webp';

const OurCoffeesDetail = () => {
  return (
    <section className="coffees-detail-section">
      <div className="coffees-detail-container">
        {/* Left Column: Headline, Body, and Action CTAs */}
        <div className="coffees-detail-text-col">
          <h2 className="detail-main-title">
            Specialty{' '}
            <span className="serif-text">
              Grade <br /> Single{' '}
            </span>
            Farm <span className="bold-emphasis">lots.</span>
          </h2>

          <p className="detail-body-desc">
            Secofet sources distinctive Ethiopian Arabica single-farm lots,
            connecting specialty roasters and international importers with
            carefully selected coffees that showcase the unique character,
            traceability, and exceptional cup qualities of Ethiopia’s renowned
            growing regions.
          </p>

          <div className="detail-actions-row">
            <Link to="/request-sample" className="btn-pill-black">
              Request a Sample
            </Link>

            <Link to="/rfq" className="btn-secondary btn-underline-link">
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

        {/* Right Column: Dark Square Image Box */}
        <div className="coffees-detail-media-col">
          <div className="media-square-box">
            <img
              src={coffeeFeatureImage}
              alt="Naturally processed Ethiopian coffee drying on a raised bed"
              className="media-box-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCoffeesDetail;
