import { Link } from 'react-router-dom';
import '../styles/WorkWithSecofet.css';

const WorkWithSecofet = () => {
  return (
    <section className="work-section">
      <div className="work-container">
        {/* Outlined Pill Badge Header */}
        <div className="work-badge-wrapper">
          <span className="work-badge">Work With Secofet</span>
        </div>

        {/* Large Call-To-Action Heading Statement */}
        <h2 className="work-title">
          Whether you are sourcing specialty coffee, commercial volumes, or
          exploring Ethiopian origins for your market, Secofet is ready to
          discuss your requirements.
        </h2>

        {/* Action Button Group */}
        <div className="work-cta-group">
          <Link to="/request-sample" className="btn-pill-dark">
            <span>Request a Sample</span>
            <span className="pill-arrow-icon">
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

          <Link to="/rfq" className="btn-pill-dark">
            <span>Request a Quote</span>
            <span className="pill-arrow-icon">
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

          <Link to="/our-coffees" className="btn-link-underline btn-secondary">
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
    </section>
  );
};

export default WorkWithSecofet;
