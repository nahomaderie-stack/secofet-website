import { Helmet } from 'react-helmet-async';
import shareImage from '../assets/Images/ethiopian-green-coffee-quality-inspection-1.webp';
import CoffeeFarmsGrid from '../components/CoffeeFarmsGrid';
import ExportLogistics from '../components/ExportLogistics';
import InsideSecofet from '../components/InsideSecofet';
import QualityControl from '../components/QualityControl';
import WorkWithSecofet from '../components/WorkWithSecofet';
import SplitTextPage from '../SplitTextAnimation/SplitTextPage';
import { toSiteAssetUrl } from '../utils/siteAssetUrl';

const shareImageUrl = toSiteAssetUrl(shareImage);

function OurOperations() {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          Ethiopian Coffee Processing & Export Process | Secofet Operations
        </title>
        <meta
          name="description"
          content="Learn about Secofet's Ethiopian coffee processing, strict grading, and export workflow. From washed vs. natural processing to green coffee quality control and export logistics in Ethiopia."
        />
        <meta
          name="keywords"
          content="Ethiopian coffee processing, Ethiopian coffee grading, Ethiopian coffee export process, Green coffee quality control, Ethiopian coffee processing methods, Green coffee sorting and grading, Coffee quality assessment, Washed vs. natural Ethiopian coffee, Green coffee processing, Ethiopian coffee quality standards, Coffee export preparation, Green coffee handling and storage, Ethiopian coffee traceability, Coffee export logistics in Ethiopia"
        />
        <link rel="canonical" href="https://secofet.com/operations/" />

        {/* Open Graph / Facebook & LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://secofet.com/operations/" />
        <meta
          property="og:title"
          content="Ethiopian Coffee Processing & Export Operations | Secofet"
        />
        <meta
          property="og:description"
          content="Explore Secofet's end-to-end coffee operations in Ethiopia: washing stations, sun-drying beds, Q-grader quality assessment, export preparation, and global shipping logistics."
        />
        <meta
          property="og:image"
          content={shareImageUrl}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://secofet.com/operations/" />
        <meta
          name="twitter:title"
          content="Ethiopian Coffee Processing & Export Operations | Secofet"
        />
        <meta
          name="twitter:description"
          content="Explore Secofet's end-to-end coffee operations in Ethiopia: washing stations, sun-drying beds, Q-grader quality assessment, export preparation, and global shipping logistics."
        />
        <meta
          name="twitter:image"
          content={shareImageUrl}
        />

        {/* Structured Data (JSON-LD) - HowTo Schema for Coffee Export Process */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'Ethiopian Green Coffee Processing & Export Preparation',
            description:
              'The complete operational workflow for processing, grading, sorting, and exporting high-grade Ethiopian Arabica coffee.',
            step: [
              {
                '@type': 'HowToStep',
                position: 1,
                name: 'Harvesting & Processing Methods',
                text: 'Selective hand-picking of ripe cherries processed through washed (wet mill) or natural (sun-dried on raised African beds) methods.',
              },
              {
                '@type': 'HowToStep',
                position: 2,
                name: 'Green Coffee Quality Assessment & Grading',
                text: 'Sorting, screening, defect analysis, and cupping evaluations by certified Q-graders according to official Ethiopian coffee quality standards.',
              },
              {
                '@type': 'HowToStep',
                position: 3,
                name: 'Handling, Storage & Export Logistics',
                text: 'GrainPro moisture-controlled packaging, climate-controlled warehousing in Addis Ababa, container stuffing, and customs clearance for international shipment.',
              },
            ],
          })}
        </script>
      </Helmet>

      <SplitTextPage desktopOnly>
        {/* <InsideSecofetNav /> */}
        <InsideSecofet />
        <CoffeeFarmsGrid />
        <QualityControl />
        <ExportLogistics />
        <WorkWithSecofet />
      </SplitTextPage>
    </>
  );
}

export default OurOperations;
