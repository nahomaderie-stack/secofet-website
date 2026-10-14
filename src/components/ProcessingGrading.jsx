import { useState } from 'react';
import SplitTextReveal from '../SplitTextAnimation/SplitTextReveal';
import SelectionStateIcon from './SelectionStateIcon';
import '../styles/ProcessingGrading.css';
import washedCoffeeImage from '../assets/Images/ethiopian-green-coffee-drying-19.webp';
import naturalCoffeeImage from '../assets/Images/ethiopian-green-coffee-drying-20.webp';

const processesData = [
  {
    id: 1,
    number: '01',
    title: 'Washed Coffee',
    tagline: 'Processing & Grading',
    description:
      'For washed lots, coffee cherries are depulped and fermented before the beans are washed and dried as parchment. This process can highlight a clean, bright cup; station and lot details vary.',
    image: washedCoffeeImage,
    altText: 'Washed Ethiopian coffee parchment drying on raised beds',
  },
  {
    id: 2,
    number: '02',
    title: 'Natural (Sun-Dried) Coffee',
    tagline: 'Processing & Grading',
    description:
      'Natural lots are dried with the whole cherry intact before hulling. The method can develop expressive fruit sweetness, while the cup profile depends on the origin, harvest, and station practices.',
    image: naturalCoffeeImage,
    altText: 'Naturally processed coffee cherries drying on raised beds',
  },
];

const ProcessingGrading = () => {
  const [activeProcessId, setActiveProcessId] = useState(2);
  const activeProcess =
    processesData.find((process) => process.id === activeProcessId) ??
    processesData[0];

  return (
    <section className="processing-grading-section" id="processing-grading">
      <div className="processing-header-area">
        <div className="processing-header-container">
          <h2 className="processing-main-title">
            Post Harvest <span className="serif-text">Processing</span>
          </h2>
          <p className="processing-header-desc">
            Explore washed and natural processing methods, raised-bed drying,
            and the quality checks used to assess export lots.
          </p>
        </div>
      </div>

      <div className="processing-dark-area">
        <div className="processing-dark-container">
          <div className="processing-left-col">
            <div className="active-process-details" aria-live="polite">
              <span className="process-kicker">{activeProcess.tagline}</span>
              <SplitTextReveal
                key={`${activeProcess.id}-title`}
                as="h3"
                className="process-display-title"
                text={activeProcess.title}
              />
              <SplitTextReveal
                key={`${activeProcess.id}-description`}
                as="p"
                className="process-description"
                text={activeProcess.description}
              />
            </div>

            <div className="process-tabs-list" aria-label="Processing stages">
              {processesData.map((process) => {
                const isActive = process.id === activeProcess.id;

                return (
                  <button
                    key={process.id}
                    type="button"
                    className={`process-tab-row ${isActive ? 'active' : ''}`}
                    aria-pressed={isActive}
                    onClick={() => setActiveProcessId(process.id)}
                  >
                    <span className="tab-title-text">
                      {process.number}. {process.title}
                    </span>
                    <span className="tab-status-icon" aria-hidden="true">
                      <SelectionStateIcon active={isActive} />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="processing-right-col">
            <div className="image-frame-border">
              <img
                key={activeProcess.id}
                src={activeProcess.image}
                alt={activeProcess.altText}
                className="framed-process-img fade-in-animation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessingGrading;
