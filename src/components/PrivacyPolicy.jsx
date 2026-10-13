import { Link } from 'react-router-dom';
import '../styles/LegalPages.css';

const PrivacyPolicy = () => {
    return (
        <div className="legal-page-section">
            <div className="legal-page-container">

                <div className="legal-header">
                    <div className="badge-wrapper">
                        <span className="pill-badge-outline">Data Protection</span>
                    </div>
                    <h1 className="legal-title">
                        Privacy <span className="serif-text">Policy.</span>
                    </h1>
                    <p className="legal-last-updated">Last Updated: September 2026</p>
                </div>

                <div className="legal-content">
                    <section className="legal-block">
                        <h2>1. Information We Collect</h2>
                        <p>
                            Secofet Trading PLC collects business information necessary to fulfill B2B green coffee inquiries, sample delivery, and commercial contracts. This includes:
                        </p>
                        <ul>
                            <li>Company name, contact person name, and official role.</li>
                            <li>Business email addresses, direct phone numbers, and physical delivery addresses.</li>
                            <li>Coffee purchasing preferences (volume, origin, processing, destination port).</li>
                        </ul>
                    </section>

                    <section className="legal-block">
                        <h2>2. How We Use Your Data</h2>
                        <p>
                            Your information is exclusively used for trade operations, such as sending requested sample lots, providing tailored FOB/CIF price quotes, and processing shipping documentation. We never sell, lease, or distribute your commercial data to third-party marketers.
                        </p>
                    </section>

                    <section className="legal-block">
                        <h2>3. International Trade & Service Partners</h2>
                        <p>
                            To process sample dispatches and export orders, relevant shipping details may be shared with trusted partners, including international courier services, freight forwarders, and phytosanitary inspection authorities.
                        </p>
                    </section>

                    <div className="legal-footer-nav">
                        <p>Need to update your company contact records?</p>
                        <Link to="/contact" className="btn-legal-action">Contact Data Compliance ↗</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PrivacyPolicy;