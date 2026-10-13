import { useState } from 'react';
import '../styles/QualityControl.css';

const checkpointsData = [
    {
        id: 1,
        title: 'Physical Inspection',
        description: 'Coffee is inspected for visible physical condition and relevant quality characteristics.'
    },
    {
        id: 2,
        title: 'Sampling',
        description: 'Samples are taken where required to evaluate the coffee and confirm relevant characteristics.'
    },
    {
        id: 3,
        title: 'Moisture',
        description: 'Moisture is checked where applicable as part of assessing coffee condition and storage readiness.'
    },
    {
        id: 4,
        title: 'Defect Assessment',
        description: 'Coffee is assessed for relevant physical defects according to applicable quality requirements.'
    },
    {
        id: 5,
        title: 'Cupping',
        description: 'Where applicable, coffee is evaluated through cupping to assess its sensory characteristics and quality.'
    },
    {
        id: 6,
        title: 'Grading',
        description: 'Coffee is classified according to applicable grading requirements and specifications.'
    },
    {
        id: 7,
        title: 'Storage Inspection',
        description: 'Storage conditions and coffee conditions are monitored during handling and holding.'
    },
    {
        id: 8,
        title: 'Pre-Shipment Verification',
        description: 'Before shipment, relevant coffee specifications and conditions are checked against the agreed requirements.'
    }
];

const QualityControl = () => {
    // First item open by default (set to null if you want all closed initially)
    const [openId, setOpenId] = useState(1);

    const toggleCheckpoint = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="qc-section" id="quality-control">
            <div className="qc-container">

                {/* Top Header Block */}
                <div className="qc-header">
                    <h2 className="qc-main-title">
                        Quality <span className="serif-text">Control</span>
                    </h2>
                    <p className="qc-lead-text">
                        Relevant checks take place throughout coffee handling and preparation to help identify issues, confirm specifications, and maintain the condition of the coffee.
                    </p>
                    <p className="qc-goal-text">
                        The goal is simple: know the coffee before it reaches our Customers.
                    </p>
                </div>

                {/* 2-Column Split Content Area */}
                <div className="qc-split-grid">

                    {/* Left Subtitle Column */}
                    <div className="qc-left-col">
                        <h3 className="qc-subtitle">
                            Quality <span className="serif-text">Checkpoints</span>
                        </h3>
                    </div>

                    {/* Right Interactive Accordion List Column */}
                    <div className="qc-right-col">
                        <div className="qc-checkpoints-list">
                            {checkpointsData.map((item) => {
                                const isOpen = openId === item.id;

                                return (
                                    <div
                                        key={item.id}
                                        className={`qc-checkpoint-item ${isOpen ? 'open' : ''}`}
                                    >
                                        <button
                                            className="checkpoint-header-btn"
                                            onClick={() => toggleCheckpoint(item.id)}
                                            aria-expanded={isOpen}
                                        >
                                            <h4 className="checkpoint-title">{item.title}</h4>
                                            <span className="checkpoint-toggle-icon">
                                                {isOpen ? '−' : '+'}
                                            </span>
                                        </button>

                                        <div className="checkpoint-body">
                                            <p className="checkpoint-desc">{item.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default QualityControl;