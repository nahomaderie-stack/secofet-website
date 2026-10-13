import '../styles/OurCoffeesGrid.css';

const coffeeGrades = [
  {
    grade: 'Grade 1',
    level: 'Highest grade',
    description:
      'The highest grade in the 1–5 export scale, based on physical bean quality and cup evaluation.',
  },
  {
    grade: 'Grade 2',
    level: 'High grade',
    description:
      "A high export grade assessed against the lot's bean condition and cup profile.",
  },
  {
    grade: 'Grade 3',
    level: 'Mid-range grade',
    description:
      'A middle export grade; physical condition and cup results vary by lot and origin.',
  },
  {
    grade: 'Grade 4',
    level: 'Commercial grade',
    description:
      "A commercial export grade. Review the lot's specifications and cup details before purchase.",
  },
  {
    grade: 'Grade 5',
    level: 'Commercial grade',
    description:
      'The lowest numbered grade in the 1–5 range; lot specifications help buyers assess its suitability.',
  },
];

const OurCoffeesGrid = () => (
  <section className="our-coffees-grid-section" id="coffee-categories">
    <div className="coffees-grid-container">
      <div className="coffees-header">
        <span className="category-kicker">Our Coffee Grades</span>
        <h2 className="coffees-title">
          Ethiopian Green <span className="serif-text">Coffee Grades</span>
        </h2>
        <p className="coffees-subtitle">
          We export a comprehensive range of specialty and commercial grade
          Arabica beans sourced directly from washing and drying stations across
          Ethiopia.
        </p>
      </div>

      <div className="category-cards-grid">
        {coffeeGrades.map((item, index) => (
          <article className="coffee-grade-card" key={item.grade}>
            <div className="grade-icon-badge" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </div>
            <span className="grade-category">{item.level}</span>
            <h3 className="grade-headline">{item.grade}</h3>
            <p className="grade-description">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default OurCoffeesGrid;
