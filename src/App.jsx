import { lazy, Suspense, useEffect } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import CookieConsent from './components/CookieConsent';
import InitialCurtainProvider from './SplitTextAnimation/InitialCurtainProvider';

const lazyPageComponents = import.meta.env.SSR
  ? {}
  : {
      AboutUsPage: lazy(() => import('./pages/AboutUsPage')),
      OurCoffeesPage: lazy(() => import('./pages/OurCoffeesPage')),
      OriginsPage: lazy(() => import('./pages/OriginsPage')),
      OurOperationsPage: lazy(() => import('./pages/OurOperationsPage')),
      ContactPage: lazy(() => import('./pages/ContactPage')),
      NotFoundPage: lazy(() => import('./pages/NotFoundPage')),
      RequestQuotePage: lazy(() => import('./pages/RequestQuotePage')),
      RequestSamplePage: lazy(() => import('./pages/RequestSamplePage')),
      TermsConditionsPage: lazy(() => import('./pages/TermsConditionsPage')),
      PrivacyPolicyPage: lazy(() => import('./pages/PrivacyPolicyPage')),
      CookiePolicyPage: lazy(() => import('./pages/CookiePolicyPage')),
    };

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function lazyPage(Page) {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
}

function App({ pageComponents = lazyPageComponents } = {}) {
  const {
    AboutUsPage,
    OurCoffeesPage,
    OriginsPage,
    OurOperationsPage,
    ContactPage,
    NotFoundPage,
    RequestQuotePage,
    RequestSamplePage,
    TermsConditionsPage,
    PrivacyPolicyPage,
    CookiePolicyPage,
  } = pageComponents;

  return (
    <InitialCurtainProvider>
      <div className="app-container">
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={lazyPage(AboutUsPage)} />
          <Route path="/our-coffees" element={lazyPage(OurCoffeesPage)} />
          <Route path="/origins" element={lazyPage(OriginsPage)} />
          <Route path="/operations" element={lazyPage(OurOperationsPage)} />
          <Route path="/contact" element={lazyPage(ContactPage)} />
          <Route path="/rfq" element={lazyPage(RequestQuotePage)} />
          <Route
            path="/request-sample"
            element={lazyPage(RequestSamplePage)}
          />
          <Route path="/terms" element={lazyPage(TermsConditionsPage)} />
          <Route path="/privacy" element={lazyPage(PrivacyPolicyPage)} />
          <Route path="/cookie" element={lazyPage(CookiePolicyPage)} />
          <Route path="*" element={lazyPage(NotFoundPage)} />
        </Routes>

        <Footer />
        <CookieConsent />
      </div>
    </InitialCurtainProvider>
  );
}

export default App;
