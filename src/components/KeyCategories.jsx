import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/KeyCategories.css';

import yirgacheffeImg from '../assets/Images/ethiopian-green-coffee-farm-yirgacheffe.webp';
import yirgacheffeMobileImg from '../assets/Images/ethiopian-green-coffee-farm-yirgacheffe-mobile.webp';
import coffeeFarmImg from '../assets/Images/ethiopian-green-coffee-farmers-drying-7.webp';
import coffeeFarmMobileImg from '../assets/Images/ethiopian-green-coffee-farmers-drying-7-mobile.webp';
import coffeeDryingImg from '../assets/Images/ethiopian-green-coffee-drying-2.webp';
import coffeeDryingMobileImg from '../assets/Images/ethiopian-green-coffee-drying-2-mobile.webp';

const categories = [
  {
    id: 'yirgacheffe',
    title: 'Yirgacheffe',
    origin: 'Yirgacheffe',
    description:
      'Renowned globally for its intense floral aromas, delicate tea-like body, and crisp citrus acidity.',
    image: yirgacheffeImg,
    mobileImage: yirgacheffeMobileImg,
    link: '/origins',
  },
  {
    id: 'sidamo',
    title: 'Sidama',
    origin: 'Sidama',
    description:
      'Celebrated for its well-balanced cup profile, bright acidity, and complex lemon, berry, and herbal notes.',
    image: coffeeFarmImg,
    mobileImage: coffeeFarmMobileImg,
    link: '/origins',
  },
  {
    id: 'guji',
    title: 'Guji',
    origin: 'Guji',
    description:
      'Prized for its complex, fruit-forward flavors, elegant body, and distinct notes of stone fruit, jasmine, and dark berries.',
    image: coffeeDryingImg,
    mobileImage: coffeeDryingMobileImg,
    link: '/origins',
  },
];

const KeyCategories = () => {
  // First card is expanded by default (index 0)
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="categories-section">
      <div className="categories-container">
        {/* Section Header */}
        <div className="categories-header">
          <span className="categories-tag">Key Coffee Categories</span>
          <h2 className="categories-title">
            Our Key <span className="serif-text">Ethiopian Coffee</span>
            <br />
            Categories
          </h2>
          <p className="categories-description">
            Ethiopia’s diverse microclimates and high altitudes produce some of
            the most sought-after flavor profiles in the world. Each growing
            region carries its own signature cup character—from delicate florals
            to vibrant stone fruits and bright citrus. We source directly from
            the legendary terroirs of Yirgacheffe, Sidama, and Guji to bring you
            green coffee of exceptional quality and origin distinction.
          </p>
        </div>

        {/* Accordion Grid */}
        <div className="categories-grid">
          {categories.map((cat, index) => {
            const isExpanded = index === activeIndex;

            return (
              <div
                key={cat.id}
                className={`category-card ${isExpanded ? 'expanded' : 'collapsed'}`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                {/* Background Image & Overlay */}
                <picture className="category-card-picture">
                  <source
                    media="(max-width: 640px)"
                    srcSet={cat.mobileImage}
                    type="image/webp"
                  />
                  <img
                    src={cat.image}
                    alt={cat.title}
                    width="1200"
                    height="900"
                    loading="lazy"
                    decoding="async"
                    className="card-bg-img"
                  />
                </picture>
                <div className="card-overlay"></div>

                {/* Card Content */}
                <div className="card-content">
                  {/* Category Title & Badge (Always visible in both collapsed and expanded states) */}
                  <div className="card-header-info">
                    <span className="card-number">0{index + 1}</span>
                    <h3 className="card-title">
                      <button
                        type="button"
                        className="category-card-title"
                        aria-label={`Show details for ${cat.title}`}
                        aria-expanded={isExpanded}
                        onClick={(event) => {
                          event.stopPropagation();
                          setActiveIndex(index);
                        }}
                      >
                        {cat.title}
                      </button>
                    </h3>
                  </div>

                  {/* Expanded Body Details */}
                  <div className="expanded-info">
                    <p className="card-desc">{cat.description}</p>
                    <Link
                      to={cat.link}
                      state={{ origin: cat.origin }}
                      className="btn-card-cta"
                    >
                      View Origins
                    </Link>
                  </div>

                  {/* Collapsed Arrow Indicator */}
                  <span className="collapsed-arrow-btn" aria-hidden="true">
                    <svg
                      width="14"
                      height="14"
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyCategories;
