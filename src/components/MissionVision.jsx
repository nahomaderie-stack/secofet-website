import '../styles/MissionVision.css';

import coffeeCherriesImg from '../assets/Images/ethiopian-green-coffee-harvesting-2.webp';
import exportTruckImg from '../assets/Images/ethiopian-green-coffee-5.webp';

const MissionVision = () => {
  return (
    <section className="mission-vision-section">
      <div className="mission-vision-container">
        {/* --- Block 1: Our Mission --- */}
        <div className="mission-block">
          <div className="badge-wrapper">
            <span className="pill-badge-outline">Our Mission</span>
          </div>

          <h2 className="mission-title">
            Delivering Quality{' '}
            <span className="serif-text">Ethiopian Arabica</span> to
            International Buyers
          </h2>

          <p className="mission-description">
            Our mission is to deliver quality Ethiopian Arabica coffee to
            international buyers through reliable sourcing, professional export
            services, and transparent business practices.
          </p>

          {/* Dual Showcase Cards */}
          <div className="mission-cards-grid">
            <div className="mission-card">
              <img
                src={coffeeCherriesImg}
                alt="Hands holding red coffee cherries"
                className="mission-card-img"
              />
            </div>
            <div className="mission-card">
              <img
                src={exportTruckImg}
                alt="Coffee export logistics container truck loading"
                className="mission-card-img"
              />
            </div>
          </div>
        </div>

        {/* --- Block 2: Our Vision (Side-by-Side Grid) --- */}
        <div className="vision-block">
          <div className="vision-grid">
            {/* Left Column: Pill Badge */}
            <div className="vision-badge-col">
              <span className="pill-badge-outline">Our Vision</span>
            </div>

            {/* Right Column: Title & Description */}
            <div className="vision-content-col">
              <h2 className="vision-title">
                A Trusted Global Partner for{' '}
                <span className="serif-text">Ethiopian Coffee</span>
              </h2>

              <p className="vision-description">
                To become a trusted global partner for Ethiopian specialty and
                commercial coffee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
