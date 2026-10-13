import { useState } from 'react';
import '../styles/WhySecofet.css';

import heroImg from '../assets/Images/ethiopian-green-coffee-farmers-hero.webp';

const accordionData = [
  {
    id: '01',
    title: 'Ethiopian Origin Expertise',
    content:
  'Our sourcing is rooted in Ethiopia, with current relationships and sourcing activity focused on established origins in Yirgacheffe, Guji and Sidama.',
    image: heroImg,
  },
  {
    id: '02',
    title: 'Quality-Focused Sourcing',
    content:
      'We apply rigorous cupping, physical inspection, and moisture analysis across all specialty and commercial Arabica lots prior to export.',
    image: heroImg,
  },
  {
    id: '03',
    title: 'Reliable Preparation',
    content:
      'Working closely with local washing stations and dry mills ensures proper hulling, grading, and defect removal tailored to buyer specifications.',
    image: heroImg,
  },
  {
    id: '04',
    title: 'Traceability',
    content:
      'Full visibility from station level to shipment, allowing buyers to trace lot origins, altitude, processing method, and harvest year.',
    image: heroImg,
  },
  {
    id: '05',
    title: 'Export Capability',
    content:
      'Seamless logistics handling, including Ethiopian coffee export compliance, customs clearance, and container shipping management.',
    image: heroImg,
  },
  {
    id: '06',
    title: 'Long-Term Partnerships',
    content:
      'We build transparent, sustainable business relationships connecting Ethiopian origin producers directly with international roasters and importers.',
    image: heroImg,
  },
];

const WhySecofet = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="why-section">
      <div className="why-container">
        {/* Left Content Column */}
        <div className="why-left-content">
          <h2 className="why-heading">
            Why <span className="serif-text">Secofet</span>
          </h2>

          <h3 className="why-subheading">
            Ethiopian Origins. Global Standards.
          </h3>

          <p className="why-description">
            Ethiopian coffee carries a distinct origin, character, and heritage.
            And Secofet is rooted in Ethiopia's rich coffee-producing regions,
            working to source carefully selected Arabica coffees with a strong
            understanding of local producers, processing methods, and quality.
            From origin to export, we apply consistent standards and traceable
            practices to bring distinctive Ethiopian Arabica coffees to
            international markets with confidence.
          </p>

          <h4 className="why-list-heading">
            <span className="serif-text">Secofet's</span> is built around these
            standards.
          </h4>

          {/* Accordion List */}
          <div className="why-accordion-list">
            {accordionData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                  <div key={item.id} className="accordion-item">
                    <button
                      className={`accordion-header ${isOpen ? 'active' : ''}`}
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="accordion-title">{item.title}</span>
                      <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
                    </button>

                    <div className={`accordion-body ${isOpen ? 'open' : ''}`}>
                      <p>{item.content}</p>
                    </div>
                  </div>
              );
            })}
          </div>
        </div>

        {/* Right Gallery Stack Column */}
        {/* <div className="why-right-gallery">
          <div className="gallery-stack">
            {accordionData.slice(0, 3).map((item, index) => (
              <div
                key={item.id}
                className={`gallery-card ${openIndex === index ? 'highlighted' : ''}`}
              >
                <img
                  src={
                    accordionData[openIndex !== null ? openIndex : index]
                      ?.image || item.image
                  }
                  alt={item.title}
                  className="gallery-img"
                />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhySecofet;
