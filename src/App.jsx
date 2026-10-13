import { useEffect } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import OurCoffeesPage from './pages/OurCoffeesPage';
import OriginsPage from './pages/OriginsPage';
import OurOperationsPage from './pages/OurOperationsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import RequestQuotePage from './pages/RequestQuotePage';
import RequestSamplePage from './pages/RequestSamplePage';

import TermsConditionsPage from './pages/TermsConditionsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import CookieConsent from './components/CookieConsent';
import InitialCurtainProvider from './SplitTextAnimation/InitialCurtainProvider';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <InitialCurtainProvider>
      <div className="app-container">
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/our-coffees" element={<OurCoffeesPage />} />
          <Route path="/origins" element={<OriginsPage />} />
          <Route path="/operations" element={<OurOperationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/rfq" element={<RequestQuotePage />} />
          <Route path="/request-sample" element={<RequestSamplePage />} />
          <Route path="/terms" element={<TermsConditionsPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/cookie" element={<CookiePolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer />
        <CookieConsent />
      </div>
    </InitialCurtainProvider>
  );
}

export default App;
