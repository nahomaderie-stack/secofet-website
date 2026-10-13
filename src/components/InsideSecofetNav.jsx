import React, { useState, useEffect } from 'react';
import '../styles/InsideSecofetNav.css';

const navItems = [
    { id: 'inside-hero', label: 'All' },
    { id: 'coffee-farms', label: 'Coffee & Farms' },
    { id: 'quality-control', label: 'Quality Control' },
    { id: 'export-logistics', label: 'Export & Logistics' }
];

const InsideSecofetNav = () => {
    const [activeTab, setActiveTab] = useState('inside-hero');

    // Smooth scroll handler
    const handleScrollTo = (id) => {
        setActiveTab(id);
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Offset for sticky header height
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }
    };

    // Track active section on scroll
    useEffect(() => {
        const handleObserver = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveTab(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: '-30% 0px -50% 0px', // Trigger when section is in middle viewport
            threshold: 0.1
        });

        navItems.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="inside-secofet-nav-bar">
            <div className="nav-bar-container">
                {navItems.map((item, idx) => (
                    <React.Fragment key={item.id}>
                        <button
                            className={`inside-nav-btn ${activeTab === item.id ? 'active' : ''}`}
                            onClick={() => handleScrollTo(item.id)}
                        >
                            {item.label}
                        </button>
                        {idx < navItems.length - 1 && <span className="nav-pipe">|</span>}
                    </React.Fragment>
                ))}
            </div>
        </nav>
    );
};

export default InsideSecofetNav;
