import '../styles/CoreValues.css';

const valuesData = [
  {
    id: 'integrity',
    category: 'Integrity',
    headline: 'Honest relationships. Dependable business.',
    description:
      'We believe trust is built through honest communication, responsible decisions, and doing what we commit to do.',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 11 12 14 22 4" />
      </svg>
    ),
  },
  {
    id: 'quality',
    category: 'Quality',
    headline: 'Consistent coffee quality from sourcing to export.',
    description:
      'We remain focused on protecting coffee quality throughout the stages that influence the final product.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    id: 'partnership',
    category: 'Partnership',
    headline: 'Relationships built for the long term.',
    description:
      'We seek to build lasting relationships with farmers, suppliers, buyers, and partners based on trust, communication, and mutual value.',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'responsibility',
    category: 'Responsibility',
    headline:
      'Professional and responsible participation in the coffee value chain.',
    description:
      'We take responsibility for our commitments and aim to contribute positively to the coffee value chain through professional and sustainable business practices.',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'transparency',
    category: 'Transparency',
    headline: 'Clear information for informed decisions.',
    description:
      'We share available origin, processing, grade, and shipment details so buyers can assess each coffee offer with confidence.',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: 'traceability',
    category: 'Traceability',
    headline: 'Keep each lot connected to its origin.',
    description:
      'We keep available origin, processing, and quality details with each coffee offer from sourcing through export preparation.',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
];

const CoreValues = () => {
  return (
    <section className="core-values-section">
      <div className="core-values-container">
        {/* Header Grid */}
        <div className="core-values-header">
          <div className="header-left">
            <div className="badge-wrapper">
              <span className="pill-badge-outline">Core Values</span>
            </div>
            <h2 className="core-values-title">What We Stand For</h2>
          </div>

          <div className="header-right">
            <p className="core-values-lead">
              Our relationships with farmers, suppliers, buyers, and partners
              are built around a small set of principles that guide how we
              conduct business.
            </p>
          </div>
        </div>

        {/* 6-Card Values Grid */}
        <div className="values-grid">
          {valuesData.map((item) => (
            <div key={item.id} className="value-card">
              {/* Icon Badge */}
              <div className="value-icon-badge">{item.icon}</div>

              {/* Category Subtitle */}
              <span className="value-category">{item.category}</span>

              {/* Bold Main Headline */}
              <h3 className="value-headline">{item.headline}</h3>

              {/* Small Body Description */}
              <p className="value-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
