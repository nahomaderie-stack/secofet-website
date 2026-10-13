import { useState, useEffect, useRef } from 'react';
import '../styles/AboutSecofetDetail.css';

const statsData = [
  {
    id: 1,
    targetValue: 300,
    unit: '',
    suffix: '+',
    label: 'Smallholder farmers',
  },
  {
    id: 2,
    targetValue: 5,
    unit: '',
    suffix: '+',
    label: 'Years of dedicated origin sourcing and export experience',
  },
  {
    id: 3,
    targetValue: 115,
    unit: 'MT',
    suffix: '+',
    label: 'annual export volume',
  },
];

// Helper component for smooth number counter
const AnimatedCounter = ({ target, duration = 2000, trigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTime = null;
    let animationFrameId;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Ease-out quad formula for smooth deceleration
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutProgress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [trigger, target, duration]);

  return <>{count}</>;
};

const AboutSecofetDetail = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    let observer;
    let hasTriggered = false;

    const observeSection = () => {
      if (hasTriggered) return;

      observer?.disconnect();

      const viewportHeight = window.innerHeight;
      const sectionHeight = section.getBoundingClientRect().height;
      const requiredVisibleHeight =
        sectionHeight >= viewportHeight * 0.6
          ? viewportHeight * 0.6
          : sectionHeight * 0.6;
      const threshold = requiredVisibleHeight / sectionHeight;

      observer = new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting &&
            entry.intersectionRect.height >= requiredVisibleHeight - 1
          ) {
            hasTriggered = true;
            setHasAnimated(true);
            observer.disconnect();
            window.removeEventListener('resize', observeSection);
          }
        },
        { threshold },
      );

      observer.observe(section);
    };

    observeSection();
    window.addEventListener('resize', observeSection);

    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', observeSection);
    };
  }, []);

  return (
    <section className="secofet-detail-section" ref={sectionRef}>
      <div className="secofet-detail-container">
        {/* Top Split Layout: Tag vs Headings */}
        <div className="secofet-detail-header">
          <div className="detail-tag-col">
            <span className="detail-tag">
              <span className="tag-dot">•</span> About Secofet
            </span>
          </div>

          <div className="detail-content-col">
            <h2 className="detail-title">
              Connecting <span className="serif-text">Ethiopian Coffee</span>
              <br />
              With Global Markets
            </h2>

            <p className="detail-lead-text">
              Secofet Trading PLC is an Ethiopian green coffee exporter based in
              Addis Ababa, Ethiopia. Founded in 2020, the company focuses
              primarily on Ethiopian Arabica specialty coffee—highlighting
              exceptional lots from renowned origins like Yirgacheffe, Guji, and
              Sidama—while also supplying commercial and processed coffee
              according to buyer demand.
            </p>

            <p className="detail-sub-text">
              We work closely with numerous smallholder farmers across these
              premier growing regions to champion ethical sourcing and superior
              cherry selection. By maintaining rigorous quality-focused
              preparation and complete supply chain transparency, we ensure full
              traceability from origin to port, seamlessly connecting authentic
              Ethiopian coffee heritage with international buyers through
              professional export services.
            </p>
          </div>
        </div>

        {/* Bottom Key Statistics Counter Grid */}
        <div className="secofet-stats-grid">
          {statsData.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-value-wrap">
                <span className="stat-value">
                  <AnimatedCounter
                    target={stat.targetValue}
                    duration={1800}
                    trigger={hasAnimated}
                  />
                </span>
                {stat.unit && <span className="stat-unit">{stat.unit}</span>}
                {stat.suffix && (
                  <span className="stat-suffix">{stat.suffix}</span>
                )}
              </div>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSecofetDetail;
