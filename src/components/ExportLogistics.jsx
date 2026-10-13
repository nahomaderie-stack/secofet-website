import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ExportLogistics.css';
import exportImage from '../assets/Images/ethiopian-green-coffee-warehouse-1.webp';
import exportImage1 from '../assets/Images/ethiopian-green-coffee-loading.webp';
import exportImage2 from '../assets/Images/ethiopian-green-coffee-loading-5.webp';

const carouselImages = [
  {
    id: 1,
    src: exportImage,
    alt: 'Sacks of Ethiopian green coffee stored in a warehouse',
  },
  {
    id: 2,
    src: exportImage1,
    alt: 'Workers loading coffee sacks into an export container',
  },
  {
    id: 3,
    src: exportImage2,
    alt: 'Coffee export container secured on a transport truck',
  },
];

const ExportLogistics = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (isHovered || isFocused) return undefined;
    const prefersReducedMotion =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    if (prefersReducedMotion) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % carouselImages.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isHovered, isFocused]);

  return (
    /* Add id="export-logistics" here on the root section tag */
    <section className="export-logistics-section" id="export-logistics">
      <div className="export-logistics-container">
        {/* Left Dark Content Panel */}
        <div className="export-text-panel">
          <div className="text-panel-content">
            {/* Headline */}
            <h2 className="export-main-title">
              Export & <span className="serif-text">Logistics</span>
            </h2>

            {/* Sub-headline */}
            <h3 className="export-sub-title">
              Preparing Coffee for{' '}
              <span className="light-text">International Shipment</span>
            </h3>

            {/* Body Paragraphs */}
            <p className="export-desc-paragraph">
              Once coffee has been prepared and confirmed against the relevant
              requirements, it moves into the export stage.
            </p>

            <p className="export-desc-paragraph">
              Secofet coordinates the necessary export preparation and shipment
              activities according to the requirements of each transaction.
            </p>

            {/* Bottom Actions Row */}
            <div className="export-actions-row">
              <Link to="/rfq" className="btn-pill-white">
                Request Documentation
              </Link>

              <Link to="/request-sample" className="btn-link-underline">
                Request a Sample ↗
              </Link>
            </div>
          </div>
        </div>

        {/* Right Photo Carousel Panel */}
        <div
          className="export-media-panel"
          role="region"
          aria-label="Coffee export and logistics photos"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocusCapture={() => setIsFocused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsFocused(false);
            }
          }}
        >
          <img
            key={activeSlide}
            src={carouselImages[activeSlide].src}
            alt={carouselImages[activeSlide].alt || 'Export Logistics'}
            className="export-slide-img"
          />

          {/* Carousel Pagination Dots */}
          <div className="carousel-dots-wrapper">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`dot-btn ${activeSlide === index ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={activeSlide === index ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportLogistics;
