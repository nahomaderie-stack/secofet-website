import { coffeeOrigins } from '../data/coffeeOrigins';
import SplitTextReveal from '../SplitTextAnimation/SplitTextReveal';
import '../styles/MapSection.css';

const OriginsMap = ({ origin = 'Yirgacheffe' }) => {
  const activeOrigin = coffeeOrigins[origin] || coffeeOrigins.Yirgacheffe;
  const mapSearch = encodeURIComponent(activeOrigin.map.search);
  const mapUrl = `https://maps.google.com/maps?q=${mapSearch}&output=embed`;

  return (
    <section className="contact-map-section">
      <div className="contact-map-container">
        <div
          key={`${origin}-map-details`}
          className="map-header-card origin-selection-enter"
        >
          <span className="map-tag">Coffee origin location</span>
          <SplitTextReveal
            key={`${origin}-map-title`}
            as="h3"
            className="map-location-title"
            text={activeOrigin.map.label}
          />
          <SplitTextReveal
            key={`${origin}-map-description`}
            as="p"
            className="map-location-desc"
            text={activeOrigin.map.description}
          />
          <a
            href={`https://maps.google.com/?q=${mapSearch}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-open-maps"
          >
            Open in Google Maps
          </a>
        </div>

        <div
          key={`${origin}-map-frame`}
          className="map-frame-wrapper origin-selection-enter"
        >
          <iframe
            title={`${origin} coffee-growing area in Ethiopia`}
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="yirgacheffe-map-iframe"
          />
        </div>
      </div>
    </section>
  );
};

export default OriginsMap;
