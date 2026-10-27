import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import shareImage from '../assets/Images/ethiopian-green-coffee-farm-yirgacheffe.webp';
import { coffeeOrigins } from '../data/coffeeOrigins';
import OriginsHero from '../components/OriginsHero';
import OriginsCard from '../components/OriginsCard';
import OriginsGrid from '../components/OriginsGrid';
import WorkWithSecofet from '../components/WorkWithSecofet';
import OriginsMap from '../components/OriginsMap';
import SplitTextPage from '../SplitTextAnimation/SplitTextPage';
import { toSiteAssetUrl } from '../utils/siteAssetUrl';

const shareImageUrl = toSiteAssetUrl(shareImage);

function OriginsPage() {
  const location = useLocation();
  const [selectedOrigin, setSelectedOrigin] = useState(() =>
    coffeeOrigins[location.state?.origin] ? location.state.origin : 'Yirgacheffe',
  );

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          Ethiopian Coffee Origins | Yirgacheffe, Guji & Sidama Specialty Beans
        </title>
        <meta
          name="description"
          content="Explore famous Ethiopian coffee origins with Secofet. Direct sourcing for Ethiopian single origin coffee, including Yirgacheffe green coffee beans, Guji green coffee, and Sidama specialty coffee beans with complete traceability."
        />
        <meta
          name="keywords"
          content="Ethiopian coffee origins, Yirgacheffe coffee, Guji coffee Ethiopia, Sidama coffee, Ethiopian single origin coffee, Ethiopian coffee regions, Ethiopian specialty coffee origins, Yirgacheffe green coffee beans, Guji green coffee beans, Sidama green coffee beans, Ethiopian Arabica coffee origins, Coffee-growing regions of Ethiopia, Ethiopian coffee flavor profiles, Coffee sourcing by origin, Washed Ethiopian coffee, Natural Ethiopian coffee, Ethiopian coffee traceability"
        />
        <link rel="canonical" href="https://secofet.com/origins/" />

        {/* Open Graph / Facebook & LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://secofet.com/origins/" />
        <meta
          property="og:title"
          content="Ethiopian Coffee Origins & Regions | Secofet Sourcing"
        />
        <meta
          property="og:description"
          content="Discover the rich coffee-growing regions of Ethiopia. Learn about distinct flavor profiles, washed vs. natural processing, and direct green coffee sourcing from Yirgacheffe, Guji, and Sidama."
        />
        <meta
          property="og:image"
          content={shareImageUrl}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://secofet.com/origins/" />
        <meta
          name="twitter:title"
          content="Ethiopian Coffee Origins & Regions | Secofet Sourcing"
        />
        <meta
          name="twitter:description"
          content="Discover the rich coffee-growing regions of Ethiopia. Learn about distinct flavor profiles, washed vs. natural processing, and direct green coffee sourcing from Yirgacheffe, Guji, and Sidama."
        />
        <meta
          name="twitter:image"
          content={shareImageUrl}
        />

        {/* Structured Data (JSON-LD) - ItemList & Place Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Ethiopian Specialty Coffee Origins',
            description:
              'A guide to famous coffee-growing regions of Ethiopia providing single-origin washed and natural Arabica beans.',
            url: 'https://secofet.com/origins/',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Yirgacheffe Coffee Region',
                description:
                  'Renowned for delicate floral, jasmine, and bright citrus flavor profiles in washed and natural processed green beans.',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Guji Coffee Region',
                description:
                  'Famous for complex stone fruit, sweet berry, and vibrant floral notes at high elevation micro-climates.',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Sidama Coffee Region',
                description:
                  'Balanced single-origin Arabica coffee known for rich body, bright acidity, and complex lemon-cane sugar nuances.',
              },
            ],
          })}
        </script>
      </Helmet>

      <SplitTextPage desktopOnly>
        <OriginsHero />
        <OriginsCard
          selectedOrigin={selectedOrigin}
          onSelectOrigin={setSelectedOrigin}
        />
        <OriginsMap origin={selectedOrigin} />
        <OriginsGrid origin={selectedOrigin} />
        <WorkWithSecofet />
      </SplitTextPage>
    </>
  );
}

export default OriginsPage;
