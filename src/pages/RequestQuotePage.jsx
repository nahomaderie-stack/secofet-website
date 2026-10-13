import { Helmet } from 'react-helmet-async';
import shareImage from '../assets/Images/ethiopian-green-coffee-loading.webp';
import RFQQuote from '../components/RFQQuote';
import { toSiteAssetUrl } from '../utils/siteAssetUrl';

const shareImageUrl = toSiteAssetUrl(shareImage);

function RequestQuotePage() {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          Request Ethiopian Green Coffee Quote | Wholesale & Bulk Pricing |
          Secofet
        </title>
        <meta
          name="description"
          content="Request a wholesale Ethiopian green coffee quote from Secofet. Get competitive bulk pricing, export terms, and shipping quotes for premium specialty Arabica coffee beans."
        />
        <meta
          name="keywords"
          content="Ethiopian green coffee quote, Ethiopian green coffee pricing, Wholesale green coffee beans, Bulk green coffee supplier, Ethiopian coffee wholesale, Arabica coffee export pricing, Green coffee bulk order, Ethiopian coffee export quote"
        />
        <link rel="canonical" href="https://secofet.com/request-quote" />

        {/* Open Graph / Facebook & LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://secofet.com/request-quote" />
        <meta
          property="og:title"
          content="Request a Wholesale Ethiopian Green Coffee Quote | Secofet"
        />
        <meta
          property="og:description"
          content="Get direct-from-origin bulk pricing and shipping terms for wholesale Ethiopian Arabica coffee beans. Contact Secofet for custom green coffee export quotes."
        />
        <meta property="og:image" content={shareImageUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://secofet.com/request-quote" />
        <meta
          name="twitter:title"
          content="Request a Wholesale Ethiopian Green Coffee Quote | Secofet"
        />
        <meta
          name="twitter:description"
          content="Get direct-from-origin bulk pricing and shipping terms for wholesale Ethiopian Arabica coffee beans. Contact Secofet for custom green coffee export quotes."
        />
        <meta name="twitter:image" content={shareImageUrl} />

        {/* Structured Data (JSON-LD) - ContactPage & B2B Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Request Ethiopian Green Coffee Quote',
            url: 'https://secofet.com/request-quote',
            description:
              'Request direct bulk pricing and container shipment quotes for wholesale Ethiopian green coffee beans.',
            mainEntity: {
              '@type': 'Organization',
              name: 'Secofet',
              url: 'https://secofet.com',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                areaServed: 'Worldwide',
                availableLanguage: ['English', 'Amharic'],
              },
            },
          })}
        </script>
      </Helmet>

      <RFQQuote title="Quote." />
    </>
  );
}

export default RequestQuotePage;
