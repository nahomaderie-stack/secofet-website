import { useState } from 'react';
import '../styles/ContactFAQ.css';

const faqData = [
  {
    id: 1,
    question: 'Ethiopian Origin Expertise',
    answer:
  'Our sourcing is rooted in Ethiopia, with current relationships and sourcing activity focused on established origins in Yirgacheffe, Guji and Sidama.',
  },
  {
    id: 2,
    question: 'Quality-Focused Sourcing',
    answer:
      'We maintain strict cupping standards and physical quality checks across specialty lots and commercial grade Arabica before export preparation.',
  },
  {
    id: 3,
    question: 'Reliable Preparation',
    answer:
      'From sun-drying on raised African beds to mechanical grading and hand-sorting, our processing partners prepare every shipment to exact buyer contracts.',
  },
  {
    id: 4,
    question: 'Traceability',
    answer:
      'We provide clear origin data, washing station tracking, and lot identification numbers for complete transparency from origin to destination port.',
  },
  {
    id: 5,
    question: 'Export Capability',
    answer:
      'Our team handles all Ethiopian Coffee & Tea Authority compliance, customs documentation, phytosanitary certificates, and container shipping logistics.',
  },
  {
    id: 6,
    question: 'Long-Term Partnerships',
    answer:
      'We focus on sustainable multi-harvest relationships with roasters, importers, and distributors globally, offering dependable supply year after year.',
  },
];

const ContactFAQ = () => {
  // Set the first item (id: 1) open by default to match the design screenshot
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Left Title Column */}
        <div className="faq-title-col">
          <h2 className="faq-main-title">
            Frequently asked
            <br />
            <span className="serif-text">questions.</span>
          </h2>
        </div>

        {/* Right Accordion Column */}
        <div className="faq-accordion-col">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`faq-item ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
                </button>

                <div className="faq-answer-wrapper">
                  <p className="faq-answer-text">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
