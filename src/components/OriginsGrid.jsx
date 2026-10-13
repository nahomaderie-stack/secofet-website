import SplitTextReveal from '../SplitTextAnimation/SplitTextReveal';
import { coffeeOrigins } from '../data/coffeeOrigins';
import '../styles/OriginsGrid.css';

const OriginsGrid = ({ origin = 'Yirgacheffe' }) => {
  const profile = coffeeOrigins[origin] || coffeeOrigins.Yirgacheffe;

  return (
    <section className="origins-grid-section">
      <div className="origins-grid-header">
        <h2 className="origins-grid-title">
          Understanding <br />
          <SplitTextReveal
            key={`${origin}-grid-title`}
            as="span"
            className="origins-grid-italic"
            text={origin}
          />{' '}
          Coffee.
        </h2>
        <SplitTextReveal
          key={`${origin}-grid-subtitle`}
          as="p"
          className="origins-grid-subtitle"
          text={profile.gridSubtitle}
        />
      </div>

      <div
        key={`${origin}-origin-grid`}
        className="origins-grid-container origin-selection-enter"
      >
        {profile.items.map((item) => (
          <article key={`${origin}-${item.id}`} className="origins-grid-card">
            <h3 className="card-title">{item.title}</h3>

            <div className="card-icon-container" aria-hidden="true">
              <div className="info-icon">
                <span>i</span>
              </div>
            </div>

            <SplitTextReveal
              key={`${origin}-${item.id}-text`}
              as="p"
              className="card-text"
              text={item.text}
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default OriginsGrid;
