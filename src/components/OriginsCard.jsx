import SplitTextReveal from '../SplitTextAnimation/SplitTextReveal';
import SelectionStateIcon from './SelectionStateIcon';
import { coffeeOrigins, coffeeOriginNames } from '../data/coffeeOrigins';
import '../styles/OriginsCard.css';

const OriginsCard = ({ selectedOrigin, onSelectOrigin }) => {
  const activeOrigin = coffeeOrigins[selectedOrigin] || coffeeOrigins.Yirgacheffe;

  return (
    <div className="origins-wrapper">
      <div className="origins-card">
        <div className="origins-left">
          <SplitTextReveal
            key={`${selectedOrigin}-subtitle`}
            as="span"
            className="origins-tag"
            text={activeOrigin.subtitle}
          />
          <SplitTextReveal
            key={`${selectedOrigin}-title`}
            as="h2"
            className="origins-title"
            text={selectedOrigin}
          />

          <div
            key={`${selectedOrigin}-description-panel`}
            className="origins-description origin-selection-enter"
          >
            <SplitTextReveal
              key={`${selectedOrigin}-description`}
              text={activeOrigin.description}
            />
            <SplitTextReveal
              key={`${selectedOrigin}-description-extra`}
              text={activeOrigin.descriptionExtra}
            />
          </div>

          <div
            className="origins-list"
            role="group"
            aria-label="Choose a coffee origin"
          >
            {coffeeOriginNames.map((name) => {
              const origin = coffeeOrigins[name];
              const isSelected = name === selectedOrigin;

              return (
                <button
                  key={name}
                  className={`origins-item ${isSelected ? 'active' : ''}`}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => onSelectOrigin(name)}
                >
                  <span className="origins-item-name">
                    {origin.id}. {name}
                  </span>
                  <span className="origins-item-icon" aria-hidden="true">
                    <SelectionStateIcon active={isSelected} />
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="origins-right">
          <div
            key={`${selectedOrigin}-spec-card`}
            className="spec-card origin-selection-enter"
            role="group"
            aria-label={`${selectedOrigin} coffee details`}
          >
            {activeOrigin.specs.map((spec) => (
              <div className="spec-group" key={spec.label}>
                <span className="spec-label">{spec.label}</span>
                <SplitTextReveal
                  key={`${selectedOrigin}-${spec.label}`}
                  className="spec-value"
                  text={spec.value}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OriginsCard;
