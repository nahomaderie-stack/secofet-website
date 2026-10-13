import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
    return (
        <section className="notfound-section">
            <div className="notfound-container">

                {/* Outlined Pill Badge */}
                <div className="badge-wrapper">
                    <span className="pill-badge-outline">404 Error</span>
                </div>

                {/* Headline with Serif Accent */}
                <h1 className="notfound-title">
                    Page Not <span className="serif-text">Found.</span>
                </h1>

                {/* Lead Subtitle */}
                <p className="notfound-desc">
                    The page or resource you are looking for doesn't exist or has been moved. Let's get you back on track to explore our Ethiopian origin offerings.
                </p>

                {/* Action Buttons */}
                <div className="notfound-actions">
                    <Link to="/" className="btn-primary-green">
                        Return Home
                    </Link>
                    <Link to="/contact" className="btn-secondary-outline">
                        Contact Us
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default NotFound;