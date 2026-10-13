import { Helmet } from 'react-helmet-async';
import shareImage from '../assets/Images/ethiopian-green-coffee-drying-16.webp';
import OurCoffeesDetail from '../components/OurCoffeesDetail';

import OurCoffeesExplore from '../components/OurCoffeesExplore';
import OurCoffeesGrid from '../components/OurCoffeesGrid';
import ProcessingGrading from '../components/ProcessingGrading';
import WorkWithSecofet from '../components/WorkWithSecofet';
import SplitTextPage from '../SplitTextAnimation/SplitTextPage';
import { toSiteAssetUrl } from '../utils/siteAssetUrl';
import KeyCategoriesCoffees from '../components/KeyCategoriesCoffees.jsx';

const shareImageUrl = toSiteAssetUrl(shareImage);

function OurCoffeesPage() {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          Ethiopian Green Coffee Beans Wholesale | Secofet Specialty &
          Commercial
        </title>
        <meta
          name="description"
          content="Source premium Ethiopian green coffee beans direct from origin. We supply bulk unroasted Ethiopian Arabica coffee beans, specialty grades, and commercial coffee from Yirgacheffe, Guji, and Sidama for global roasters and importers."
        />
        <meta
          name="keywords"
          content="Ethiopian green coffee beans, Ethiopian Arabica coffee, Green coffee beans wholesale, Ethiopian green coffee supplier, Bulk green coffee beans, Wholesale Arabica coffee beans, Specialty green coffee beans, Unroasted Ethiopian coffee beans, Green coffee beans for roasters, Ethiopian coffee for importers, Commercial grade green coffee beans, Ethiopian coffee grades, Yirgacheffe green coffee beans, Guji green coffee beans, Sidama green coffee beans"
        />
        <link rel="canonical" href="https://secofet.com/our-coffees" />

        {/* Open Graph / Facebook & LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://secofet.com/our-coffees" />
        <meta
          property="og:title"
          content="Wholesale Ethiopian Green Coffee Beans | Secofet"
        />
        <meta
          property="og:description"
          content="Discover Secofet's catalog of Ethiopian green coffee beans. Specialty and commercial grade unroasted Arabica beans available in bulk for roasters and importers worldwide."
        />
        <meta property="og:image" content={shareImageUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://secofet.com/our-coffees" />
        <meta
          name="twitter:title"
          content="Wholesale Ethiopian Green Coffee Beans | Secofet"
        />
        <meta
          name="twitter:description"
          content="Discover Secofet's catalog of Ethiopian green coffee beans. Specialty and commercial grade unroasted Arabica beans available in bulk for roasters and importers worldwide."
        />
        <meta name="twitter:image" content={shareImageUrl} />

        {/* Structured Data (JSON-LD) - ItemList & Product Catalog Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Ethiopian Green Coffee Beans Catalog',
            description:
              'Wholesale unroasted Ethiopian Arabica green coffee beans from premier origin regions including Yirgacheffe, Guji, and Sidama.',
            url: 'https://secofet.com/our-coffees',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Yirgacheffe Green Coffee Beans',
                description:
                  'Specialty grade unroasted Ethiopian Arabica coffee with delicate floral and citrus notes.',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Guji Green Coffee Beans',
                description:
                  'High-grade Ethiopian green coffee featuring intense stone fruit and sweet berry profiles.',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Sidama Green Coffee Beans',
                description:
                  'Balanced, full-bodied Ethiopian green coffee beans suitable for specialty and commercial roasters.',
              },
            ],
          })}
        </script>
      </Helmet>

      <SplitTextPage>
        <OurCoffeesExplore />
        <KeyCategoriesCoffees />
        <OurCoffeesGrid />
        <OurCoffeesDetail />
        <ProcessingGrading />
        <WorkWithSecofet />
      </SplitTextPage>
    </>
  );
}

export default OurCoffeesPage;
