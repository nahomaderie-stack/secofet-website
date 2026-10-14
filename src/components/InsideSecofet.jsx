import React, { useEffect, useState } from 'react';
import '../styles/InsideSecofet.css';
import coffeeImage from '../assets/Images/ethiopian-green-coffee-loading-2.webp';

const categories = [
  { id: 'all', targetId: 'insidesecofet', label: 'All' },
  { id: 'coffee-farms', targetId: 'coffee-farms', label: 'Coffee & Farms' },
  {
    id: 'quality-control',
    targetId: 'quality-control',
    label: 'Quality Control',
  },
  {
    id: 'export-logistics',
    targetId: 'export-logistics',
    label: 'Export & Logistics',
  },
];

const InsideSecofet = () => {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabClick = (tab) => {
    setActiveTab(tab.id);
    const targetElement = document.getElementById(tab.targetId);
    if (targetElement) {
      const headerHeight =
        document.querySelector('.header')?.offsetHeight ?? 64;
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementPosition - headerHeight - 12,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    let frameId = null;

    const updateActiveTab = () => {
      const anchorY = window.innerHeight * 0.35;
      const activeCategory = [...categories].reverse().find(({ targetId }) => {
        const section = document.getElementById(targetId);
        if (!section) return false;

        const bounds = section.getBoundingClientRect();
        return bounds.top <= anchorY && bounds.bottom > anchorY;
      });

      if (activeCategory) setActiveTab(activeCategory.id);
    };

    const scheduleActiveTabUpdate = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        updateActiveTab();
      });
    };

    updateActiveTab();
    window.addEventListener('scroll', scheduleActiveTabUpdate, {
      passive: true,
    });
    window.addEventListener('resize', scheduleActiveTabUpdate);

    return () => {
      window.removeEventListener('scroll', scheduleActiveTabUpdate);
      window.removeEventListener('resize', scheduleActiveTabUpdate);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section className="inside-secofet-section" id="insidesecofet">
      <div className="inside-secofet-container">
        {/* Header Block */}
        <div className="inside-header">
          <h1 className="inside-title">
            Explore the <span className="serif-text">origins, </span>
            <span className="serif-text">
              {' '}
              <br />
              processes,
            </span>
            {' '}and export <span className="serif-text">journey</span>
            <br />
            behind Secofet.
          </h1>
          <p className="inside-subtitle">
            Go beyond the coffee and discover the origins, people, traditions,
            and careful processes that shape Secofet coffees from farm to global
            markets.
          </p>
        </div>

        {/* Filter Tabs Row */}
        <div className="inside-tabs">
          {categories.map((tab, idx) => (
            <React.Fragment key={tab.id}>
              <button
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab.label}
              </button>
              {idx < categories.length - 1 && (
                <span className="tab-divider">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Single Full-Bleed Photo Box */}
        <div className="inside-single-card">
          <img
            src={coffeeImage}
            alt="Inside Secofet Sourcing Operations"
            className="inside-card-bg"
          />
          <div className="inside-card-overlay">
            <h3 className="card-overlay-title">
              Our <span className="serif-text">Operations</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsideSecofet;
