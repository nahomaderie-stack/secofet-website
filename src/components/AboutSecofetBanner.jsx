import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutSecofetBanner.css';

import heroImg from '../assets/Images/ethiopian-green-coffee-farmers-drying-3.webp';
import heroImg1 from '../assets/Images/ethiopian-green-coffee-drying-6.webp';
import heroImg2 from '../assets/Images/ethiopian-green-coffee-drying-19.webp';
import heroImg3 from '../assets/Images/ethiopian-green-coffee-drying-18.webp';

const slides = [
  {
    id: 1,
    image: heroImg,
    alt: 'Ethiopian Coffee Drying Beds in Yirgacheffe',
  },
  {
    id: 2,
    image: heroImg1,
    alt: 'Secofet Coffee Sourcing and Inspection',
  },
  {
    id: 3,
    image: heroImg2,
    alt: 'Coffee Processing and Quality Assurance',
  },
  {
    id: 4,
    image: heroImg3,
    alt: 'Export Logistics and Preparation',
  },
];

const AboutSecofetBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    );
  };

  return (
    <section className="about-secofet-section">
      <div className="about-secofet-container">
        {/* Section Heading */}
        <h1 className="about-secofet-title">
          About <span className="serif-text">Secofet.</span>
        </h1>

        {/* Carousel Card Box */}
        <div className="carousel-card">
          <div
            className="carousel-image-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <img
                key={slide.id}
                src={slide.image}
                alt={slide.alt}
                className="carousel-bg-img"
                aria-hidden={index !== currentIndex}
              />
            ))}
          </div>

          {/* Dark Overlay Gradient */}
          <div className="carousel-overlay"></div>

          {/* Controls & Actions Container */}
          <div className="carousel-controls-bar">
            {/* Left Actions */}
            <div className="carousel-actions">
              <Link
                to="/request-sample"
                className="btn-sample-underline btn-secondary"
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
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>
              <Link to="/rfq" className="btn-quote-white">
                Request a Quote
              </Link>
            </div>

            {/* Right Indicators & Arrows */}
            <div className="carousel-navigation">
              {/* Dots */}
              <div className="carousel-dots">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`dot ${currentIndex === index ? 'active' : ''}`}
                    aria-label={`Show slide ${index + 1}`}
                    aria-current={currentIndex === index ? 'true' : undefined}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>

              {/* Arrow Controls */}
              <div className="carousel-arrows">
                <button
                  className="arrow-btn"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                >
                  ◀
                </button>
                <button
                  className="arrow-btn"
                  onClick={nextSlide}
                  aria-label="Next slide"
                >
                  ▶
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSecofetBanner;
