import SplitTextReveal from '../SplitTextAnimation/SplitTextReveal';
import { coffeeOrigins } from '../data/coffeeOrigins';
import '../styles/OriginsGrid.css';

const originCardIconShapes = {
  origin: (
    <>
      <path d="M32 55s17-15.2 17-30a17 17 0 1 0-34 0c0 14.8 17 30 17 30Z" />
      <circle cx="32" cy="25" r="5" />
    </>
  ),
  variety: (
    <>
      <path d="M44.5 12.8c8 6 8.2 19.1.5 29.2S24 55.7 16 49.6s-8.2-19.1-.5-29.2 21-13.6 29-7.6Z" />
      <path d="M18 47c13.7-4.6 18.2-25.3 28-30" />
    </>
  ),
  processing: (
    <path d="M32 10 54 21 32 32 10 21 32 10ZM10 32l22 11 22-11M10 43l22 11 22-11" />
  ),
  grade: (
    <>
      <circle cx="32" cy="25" r="14" />
      <path d="m32 17 2.5 5.1 5.6.8-4.1 4 .9 5.6-4.9-2.6-4.9 2.6.9-5.6-4.1-4 5.6-.8L32 17Z" />
      <path d="m23 37-3 17 12-6 12 6-3-17" />
    </>
  ),
  'cup-profile': (
    <>
      <path d="M14 25h31v12a15 15 0 0 1-15 15h-1a15 15 0 0 1-15-15V25Z" />
      <path d="M45 29h4a7 7 0 0 1 0 14h-6M19 59h28M24 18c-3-3 2-5 0-9M34 18c-3-3 2-5 0-9" />
    </>
  ),
  sourcing: (
    <>
      <rect x="17" y="13" width="30" height="42" rx="4" />
      <path d="M25 13v-4h14v4M25 27h15M25 36h15M25 45h10" />
    </>
  ),
};

const OriginCardIcon = ({ type }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {originCardIconShapes[type] || originCardIconShapes.origin}
  </svg>
);

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
              <div className="origin-card-icon">
                <OriginCardIcon type={item.id} />
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
