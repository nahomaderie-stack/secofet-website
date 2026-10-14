import { Helmet } from 'react-helmet-async';
import shareImage from '../assets/Images/ethiopian-green-coffee-harvesting-2.webp';
import RFQSample from '../components/RFQSample';
import { toSiteAssetUrl } from '../utils/siteAssetUrl';

const shareImageUrl = toSiteAssetUrl(shareImage);

function RequestSamplePage() {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Request Ethiopian Green Coffee Samples for Roasters | Secofet</title>
        <meta
          name="description"
          content="Request green coffee samples for roasters from Secofet. Evaluate high-grade specialty Ethiopian Arabica coffee samples from Yirgacheffe, Guji, and Sidama origins before ordering."
        />
        <meta
          name="keywords"
          content="Ethiopian green coffee samples, Request Ethiopian coffee samples, Green coffee samples for roasters, Ethiopian Arabica coffee samples, Specialty green coffee samples, Green coffee sample request, Yirgacheffe coffee samples, Guji coffee samples, Sidama coffee samples"
        />
        <link rel="canonical" href="https://secofet.com/request-sample/" />

        {/* Open Graph / Facebook & LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://secofet.com/request-sample/" />
        <meta property="og:title" content="Request Ethiopian Green Coffee Samples | Secofet" />
        <meta
          property="og:description"
          content="Order green coffee samples for your roastery. Evaluate washed and natural Ethiopian specialty coffee beans from Yirgacheffe, Guji, and Sidama."
        />
        <meta property="og:image" content={shareImageUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://secofet.com/request-sample/" />
        <meta name="twitter:title" content="Request Ethiopian Green Coffee Samples | Secofet" />
        <meta
          name="twitter:description"
          content="Order green coffee samples for your roastery. Evaluate washed and natural Ethiopian specialty coffee beans from Yirgacheffe, Guji, and Sidama."
        />
        <meta name="twitter:image" content={shareImageUrl} />

        {/* Structured Data (JSON-LD) - ContactPage / Sample Request Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Request Ethiopian Green Coffee Samples",
            "url": "https://secofet.com/request-sample/",
            "description": "Form for commercial coffee roasters and importers to request evaluation samples of Ethiopian green coffee beans.",
            "mainEntity": {
              "@type": "Organization",
              "name": "Secofet",
              "url": "https://secofet.com",
              "knowsAbout": [
                "Yirgacheffe Coffee Samples",
                "Guji Coffee Samples",
                "Sidama Coffee Samples",
                "Specialty Green Coffee Evaluation"
              ]
            }
          })}
        </script>
      </Helmet>

      <RFQSample title="Sample." />
    </>
  );
}

export default RequestSamplePage;
