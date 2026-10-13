import { Link } from 'react-router-dom';
import '../styles/LegalPages.css';

const TermsConditions = () => {
    return (
        <div className="legal-page-section">
            <div className="legal-page-container">

                <div className="legal-header">
                    <div className="badge-wrapper">
                        <span className="pill-badge-outline">
                            Legal & Governance
                        </span>
                    </div>

                    <h1 className="legal-title">
                        Terms & <span className="serif-text">Conditions.</span>
                    </h1>

                    <p className="legal-last-updated">
                        Last Updated: September 2026
                    </p>
                </div>

                <div className="legal-content">

                    {/* 1. Agreement & Business Scope */}
                    <section className="legal-block">
                        <h2>1. Agreement & Business Scope</h2>

                        <p>
                            These Terms and Conditions govern all green coffee supply,
                            export quotes, sample requests, and trade agreements facilitated
                            by <strong>Secofet Trading PLC</strong> ("Secofet," "we,"
                            "us," or "our"), an Ethiopian coffee exporter based in
                            Addis Ababa, Ethiopia.
                        </p>
                    </section>

                    {/* 2. Coffee Specifications & Sample Approval */}
                    <section className="legal-block">
                        <h2>2. Coffee Specifications & Sample Approval</h2>

                        <p>
                            All coffee offerings—including specialty Arabica and commercial
                            grades—are subject to physical sample approval and cupping score
                            verification prior to final contract execution.
                        </p>

                        <ul>
                            <li>
                                <strong>Pre-Shipment Samples (PSS):</strong> Representative
                                samples are sent via international courier upon buyer request.
                            </li>

                            <li>
                                <strong>Cupping Benchmarks:</strong> Specialty lots are
                                evaluated under standard Specialty Coffee Association (SCA)
                                protocol.
                            </li>
                        </ul>
                    </section>

                    {/* 3. Export Compliance & Incoterms */}
                    <section className="legal-block">
                        <h2>3. Export Compliance & Incoterms</h2>

                        <p>
                            All shipments conform to regulations established by the
                            Ethiopian Coffee and Tea Authority and Ethiopian Customs
                            Commission. Trade terms follow standard ICC Incoterms 2020
                            guidelines (typically FOB Djibouti, CFR, or CIF destination
                            port).
                        </p>
                    </section>

                    {/* 4. Payment Terms & Security */}
                    <section className="legal-block">
                        <h2>4. Payment Terms & Security</h2>

                        <p>
                            Export orders are secured via irrevocable Letters of Credit
                            (LC at Sight) issued by premier international banks or
                            Telegraphic Transfers (TT) according to agreed trade contracts.
                        </p>
                    </section>

                    {/* Footer Navigation */}
                    <div className="legal-footer-nav">
                        <p>Have specific export agreement questions?</p>

                        <Link
                            to="/contact"
                            className="btn-legal-action"
                        >
                            Contact Export Compliance ↗
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TermsConditions;