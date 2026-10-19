import { useState } from 'react';
import SplitTextReveal from '../SplitTextAnimation/SplitTextReveal';
import { Link } from 'react-router-dom';
import SelectionStateIcon from './SelectionStateIcon';
import '../styles/OurOrigins.css';

import yirgacheffeImg from '../assets/Images/ethiopian-green-coffee-quality-inspection-1.webp';
import coffeeFarmImg from '../assets/Images/ethiopian-green-coffee-3.webp';
import coffeeFarmMobileImg from '../assets/Images/ethiopian-green-coffee-3-mobile.webp';
import coffeeDryingImg from '../assets/Images/ethiopian-green-coffee-warehouse-1.webp';
import coffeeDryingMobileImg from '../assets/Images/ethiopian-green-coffee-warehouse-1-mobile.webp';
import yirgacheffeMobileImg from '../assets/Images/ethiopian-green-coffee-quality-inspection-1-mobile.webp';

const operationsData = [
  {
    id: '01',
    name: 'Careful Sourcing',
    description:
      'We connect international buyers with Ethiopian green coffee sourced from established growing regions, including Yirgacheffe, with a focus on origin, buyer requirements, and lot selection.',
    image: coffeeFarmImg,
    mobileImage: coffeeFarmMobileImg,
  },
  {
    id: '02',
    name: 'Quality Management',
    description:
      'Every coffee selection begins with understanding the buyer’s needs. We consider coffee grade, processing method, origin, and lot characteristics to help match each order with the right specifications.',
    image: yirgacheffeImg,
    mobileImage: yirgacheffeMobileImg,
  },
  {
    id: '03',
    name: 'Reliable Export',
    description:
      'We coordinate export requirements and shipment arrangements to connect Ethiopian coffee with international markets, prioritizing clear communication, dependable service, and lasting business relationships.',
    image: coffeeDryingImg,
    mobileImage: coffeeDryingMobileImg,
  },
];

const OurOperations = () => {
  const [activeOperation, setActiveOperation] = useState('02');

  const currentOperation =
    operationsData.find((item) => item.id === activeOperation) ||
    operationsData[1];

  return (
    <section className="origins-section">
      <div className="origins-container">
        {/* Top Text Header */}
        <div className="origins-header">
          <span className="origins-tag">Our Operations</span>

          <h2 className="origins-title">
            Connecting <span className="serif-text">Ethiopian</span>
            <br /> Coffee to the World
          </h2>

          <div className="origins-lead-text">
            <p className="lead-paragraph">
              We connect international importers and specialty roasters with
              Exceptional Ethiopian green coffee, bringing together
              origin-focused sourcing, carefully selected coffees, and export
              expertise.
            </p>

            <p className="sub-paragraph">
              From selecting coffees to coordinating export orders, we focus on
              buyer requirements, quality specifications, and reliable service
              to help build lasting partnerships across global markets.
            </p>
          </div>

          <div className="origins-actions">
            <Link to="/operations" className="btn-visit-origins">
              <span>Explore Our Operations</span>

              <span className="pill-icon">
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
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </Link>

            <Link
              to="/request-sample"
              className="btn-request-sample btn-secondary"
            >
              <span>Request a Sample</span>

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
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Interactive Operations Card */}
        <div className="origins-card">
          {/* Left Content Column */}
          <div className="origins-card-left">
            <SplitTextReveal
              key={activeOperation}
              className="origin-dynamic-desc"
              text={currentOperation.description}
            />

            {/* Operation Selector */}
            <div className="origin-selector-list">
              {operationsData.map((item) => {
                const isActive = item.id === activeOperation;

                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`origin-item-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveOperation(item.id)}
                    aria-pressed={isActive}
                  >
                    <span className="origin-item-name">
                      {item.id}. {item.name}
                    </span>

                    <span className="origin-item-symbol">
                      <SelectionStateIcon active={isActive} />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Image Display */}
          <div className="origins-card-right">
            <picture className="origins-image-picture">
              <source
                media="(max-width: 640px)"
                srcSet={currentOperation.mobileImage}
                type="image/webp"
              />
              <img
                key={activeOperation}
                src={currentOperation.image}
                alt={currentOperation.name}
                width="1200"
                height="900"
                loading="lazy"
                decoding="async"
                className="origin-hero-img"
              />
            </picture>

            {/* Carousel Indicators */}
            <div className="origin-dots">
              {operationsData.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`dot ${
                    item.id === activeOperation ? 'active' : ''
                  }`}
                  aria-label={`Show ${item.name}`}
                  aria-pressed={item.id === activeOperation}
                  onClick={() => setActiveOperation(item.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOperations;
