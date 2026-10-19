import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';
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

const serverPageComponents = {
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
};

export function render(url) {
  const appMarkup = renderToString(
    <HelmetProvider>
      <StaticRouter location={url}>
        <App pageComponents={serverPageComponents} />
      </StaticRouter>
    </HelmetProvider>,
  );

  return { appMarkup };
}
