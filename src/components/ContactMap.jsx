import '../styles/MapSection.css';

const ContactMap = () => {
  return (
    <section className="contact-map-section">
      <div className="contact-map-container">
        
        {/* Header Overlay Card */}
        <div className="map-header-card">
          <span className="map-tag">Visit Us</span>
          <h3 className="map-location-title">Secofet Trading PLC</h3>
          <p className="map-location-desc">
            Headquarters, Bole Sub-City, Addis Ababa, Ethiopia
          </p>
          <a 
            href="https://maps.app.goo.gl/ccUDtpHsmyaYpWcG8" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-open-maps"
          >
            Open in Google Maps ↗
          </a>
        </div>

        {/* Full Interactive Google Map Frame */}
        <div className="map-frame-wrapper">
          <iframe
            title="Secofet Trading PLC Headquarters Map"
            src="https://maps.google.com/maps?q=Secofet+Trading+PLC+Headquarters,+Bole+Sub-City,+Addis+Ababa,+Ethiopia&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="yirgacheffe-map-iframe"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default ContactMap;
