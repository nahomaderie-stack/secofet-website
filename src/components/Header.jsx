import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import Secofetlogo from '../assets/Logos/Secofet-Logo-01.svg';

const Header = () => {
  const navbarRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/our-coffees', label: 'Our Coffees' },
    { to: '/origins', label: 'Origins' },
    { to: '/operations', label: 'Our Operations' },
    { to: '/contact', label: 'Contact Us' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header ref={navbarRef} className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <Link to="/">
            <img src={Secofetlogo} alt="Secofet" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="header-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={isActive(link.to) ? 'nav-link active' : 'nav-link'}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Right Action Area */}
        <div className="header-actions">
          {/* Request a Quote Route Link */}
          <Link to="/rfq" className="btn-quote">
            Request a Quote
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-menu-toggle"
            type="button"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      <div
        id="mobile-navigation"
        className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={isActive(link.to) ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mobile-actions mobile-RFQ-btn">
          <Link
            to="/rfq"
            className="btn-quote btn-mobile-quote"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
