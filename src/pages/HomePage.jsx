import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import KeyCategories from '../components/KeyCategories';
import OurOrigins from '../components/OurOrigins';
import WhySecofet from '../components/WhySecofet';
import WorkWithSecofet from '../components/WorkWithSecofet';
import SplitTextPage from '../SplitTextAnimation/SplitTextPage';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>
          Secofet | Premium Ethiopian Green Coffee Beans Exporter & Supplier
        </title>
        <meta
          name="description"
          content="Secofet is a premier Ethiopian green coffee bean exporter. Direct sourcing for high-grade wholesale Ethiopian Arabica coffee, including Yirgacheffe, Guji, and Sidama specialty coffee beans."
        />
        <link rel="canonical" href="https://secofet.com/" />
      </Helmet>

      <SplitTextPage desktopOnly>
        <Hero />
        <AboutUs />
        <KeyCategories />
        <OurOrigins />
        <WhySecofet />
        <WorkWithSecofet />
      </SplitTextPage>
    </>
  );
}

export default HomePage;
