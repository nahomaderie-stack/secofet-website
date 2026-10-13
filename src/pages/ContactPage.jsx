import { Helmet } from 'react-helmet-async';
import shareImage from '../assets/Images/ethiopian-green-coffee-farmers-6-2.webp';
import SecofetLogo from '../assets/Logos/Secofet-Logo-01.svg';
import ContactFAQ from '../components/ContactFAQ';
import ContactMap from '../components/ContactMap';
import ContactTeam from '../components/ContactTeam';
import WorkWithSecofet from '../components/WorkWithSecofet';
import SplitTextPage from '../SplitTextAnimation/SplitTextPage';
import { toSiteAssetUrl } from '../utils/siteAssetUrl';

const shareImageUrl = toSiteAssetUrl(shareImage);
const logoUrl = toSiteAssetUrl(SecofetLogo);

function ContactPage() {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          Contact Ethiopian Coffee Exporter | Secofet Trading PLC Addis Ababa
        </title>
        <meta
          name="description"
          content="Contact Secofet Trading PLC, a premier Ethiopian coffee export company in Addis Ababa. Get in touch for wholesale green coffee inquiries, sourcing partnerships, and export quotes."
        />
        <meta
          name="keywords"
          content="Contact Ethiopian coffee exporter, Ethiopian coffee supplier contact, Ethiopian coffee export company, Green coffee supplier Ethiopia, Ethiopian coffee wholesale inquiries, Ethiopian green coffee sourcing, Coffee exporter Addis Ababa, Ethiopian Arabica coffee supplier, Coffee export inquiries, Green coffee business inquiries, Ethiopian coffee trading company, Secofet Trading PLC contact"
        />
        <link rel="canonical" href="https://secofet.com/contact" />

        {/* Open Graph / Facebook & LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://secofet.com/contact" />
        <meta
          property="og:title"
          content="Contact Secofet Trading PLC | Ethiopian Coffee Exporter"
        />
        <meta
          property="og:description"
          content="Get in touch with Secofet Trading PLC in Addis Ababa, Ethiopia. Submit green coffee wholesale inquiries, request sample shipments, or discuss direct coffee export partnerships."
        />
        <meta
          property="og:image"
          content={shareImageUrl}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://secofet.com/contact" />
        <meta
          name="twitter:title"
          content="Contact Secofet Trading PLC | Ethiopian Coffee Exporter"
        />
        <meta
          name="twitter:description"
          content="Get in touch with Secofet Trading PLC in Addis Ababa, Ethiopia. Submit green coffee wholesale inquiries, request sample shipments, or discuss direct coffee export partnerships."
        />
        <meta
          name="twitter:image"
          content={shareImageUrl}
        />

        {/* Structured Data (JSON-LD) - LocalBusiness & ContactPoint Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Secofet Trading PLC',
            image: logoUrl,
            url: 'https://secofet.com/contact',
            telephone: '+251-11-XXXXXXX',
            email: 'info@secofet.com',
            priceRange: '$$$',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Bole Sub-City',
              addressLocality: 'Addis Ababa',
              addressCountry: 'ET',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 8.9806,
              longitude: 38.7578,
            },
            knowsAbout: [
              'Ethiopian Green Coffee Sourcing',
              'Specialty Coffee Exporting',
              'Wholesale Arabica Beans',
              'Coffee Processing & Logistics',
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'sales',
              email: 'export@secofet.com',
              availableLanguage: ['English', 'Amharic'],
            },
          })}
        </script>
      </Helmet>

      <SplitTextPage>
        <ContactTeam />
        <ContactMap />
        <ContactFAQ />
        <WorkWithSecofet />
      </SplitTextPage>
    </>
  );
}

export default ContactPage;
