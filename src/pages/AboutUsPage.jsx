import { Helmet } from 'react-helmet-async';
import shareImage from '../assets/Images/ethiopian-green-coffee-farmers-8.webp';
import SecofetLogo from '../assets/Logos/Secofet-Logo-01.svg';
import AboutSecofetBanner from '../components/AboutSecofetBanner';
import AboutSecofetDetail from '../components/AboutSecofetDetail';
import CoreValues from '../components/CoreValues';
import MissionVision from '../components/MissionVision';
import SecofetTeam from '../components/SecofetTeam';
import WhatWeDo from '../components/WhatWeDo';
import WorkWithSecofet from '../components/WorkWithSecofet';
import SplitTextPage from '../SplitTextAnimation/SplitTextPage';
import { toSiteAssetUrl } from '../utils/siteAssetUrl';

const shareImageUrl = toSiteAssetUrl(shareImage);
const logoUrl = toSiteAssetUrl(SecofetLogo);

function AboutUsPage() {
  return (
    <>
      <Helmet>
        {/* Primary Title & Meta Description */}
        <title>
          About Secofet | Premier Ethiopian Coffee Export Company & Supplier
        </title>
        <meta
          name="description"
          content="Secofet is a leading Ethiopian coffee export company and reliable green coffee supplier. Learn about our green coffee quality control, origin sourcing, and export services for international coffee buyers."
        />
        <meta
          name="keywords"
          content="Ethiopian coffee export company, Ethiopian coffee exporter, Ethiopian green coffee supplier, Ethiopian coffee trading company, Green coffee sourcing company, Ethiopian Arabica coffee exporter, Coffee export company in Ethiopia, Ethiopian coffee sourcing, Green coffee quality control, Reliable green coffee supplier, Ethiopian coffee export services, International coffee buyers, Specialty coffee sourcing from Ethiopia"
        />
        <link rel="canonical" href="https://secofet.com/about/" />

        {/* Open Graph / Facebook & LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://secofet.com/about/" />
        <meta
          property="og:title"
          content="About Secofet | Ethiopian Coffee Export Company"
        />
        <meta
          property="og:description"
          content="Discover Secofet—a trusted coffee export company in Ethiopia offering specialty coffee sourcing, quality control, and export services for international coffee roasters and buyers."
        />
        <meta property="og:image" content={shareImageUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://secofet.com/about/" />
        <meta
          name="twitter:title"
          content="About Secofet | Ethiopian Coffee Export Company"
        />
        <meta
          name="twitter:description"
          content="Discover Secofet—a trusted coffee export company in Ethiopia offering specialty coffee sourcing, quality control, and export services for international coffee roasters and buyers."
        />
        <meta name="twitter:image" content={shareImageUrl} />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Secofet',
            url: 'https://secofet.com/about/',
            description:
              'Secofet is an established Ethiopian coffee export company specializing in green coffee sourcing, quality control, and international export services.',
            mainEntity: {
              '@type': 'Organization',
              name: 'Secofet',
              url: 'https://secofet.com',
              logo: logoUrl,
              knowsAbout: [
                'Ethiopian Coffee Export Services',
                'Green Coffee Quality Control',
                'Specialty Coffee Sourcing from Ethiopia',
                'Ethiopian Arabica Coffee Exporting',
              ],
            },
          })}
        </script>
      </Helmet>

      <SplitTextPage desktopOnly>
        <AboutSecofetBanner />
        <AboutSecofetDetail />
        <WhatWeDo />
        <MissionVision />
        <CoreValues />
        <SecofetTeam />
        <WorkWithSecofet />
      </SplitTextPage>
    </>
  );
}

export default AboutUsPage;
