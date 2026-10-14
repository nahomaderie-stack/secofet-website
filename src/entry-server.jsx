import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';

export function render(url) {
  const appMarkup = renderToString(
    <HelmetProvider>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
  );

  return { appMarkup };
}
