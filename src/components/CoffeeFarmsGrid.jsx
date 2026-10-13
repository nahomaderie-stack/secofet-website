import '../styles/CoffeeFarmsGrid.css';
import highlandFarm from '../assets/Images/ethiopian-green-coffee-farm-yirgacheffe.webp';
import coffeeCherries from '../assets/Images/ethiopian-green-coffee-3.webp';
import highlandDryingBeds from '../assets/Images/ethiopian-green-coffee-drying-16.webp';
import coffeeSorting from '../assets/Images/ethiopian-green-coffee-quality-inspection-1.webp';
import dryingCoffee from '../assets/Images/ethiopian-green-coffee-drying-26.webp';
import farmersAtWork from '../assets/Images/ethiopian-green-coffee-farm.webp';

const CoffeeFarmsGrid = () => {
  return (
    <section className="farms-grid-section" id="coffee-farms">
      <div className="farms-grid-container">
        {/* Main Flex/Grid Split Wrapper */}
        <div className="farms-layout-wrapper">
          {/* Left Column: Fixed Text Content */}
          <div className="farms-text-col">
            <h2 className="farms-title">
              Coffee & <span className="serif-text">Farms</span>
            </h2>
            <p className="farms-description">
              A closer look at the farms, growing regions, farming communities,
              and cultivation practices that shape the character and quality of
              Secofet's coffees.
            </p>
          </div>

          {/* Right Column: Pixel-Accurate Staggered Image Grid */}
          <div className="farms-mosaic-grid">
            {/* Box 1: Left Medium-Tall (Starts aligned under text) */}
            <div className="mosaic-card card-1">
              <img
                src={highlandFarm}
                alt="Coffee farm among Ethiopia's highland forests"
              />
            </div>

            {/* Box 2: Middle Top Square */}
            <div className="mosaic-card card-2">
              <img
                src={coffeeCherries}
                alt="Ripe coffee cherries growing on a branch"
              />
            </div>

            {/* Box 3: Center Hero Tall (Pushes up above the rest) */}
            <div className="mosaic-card card-3">
              <img
                src={highlandDryingBeds}
                alt="Coffee drying beds in an Ethiopian highland landscape"
              />
            </div>

            {/* Box 4: Far Right Medium Square */}
            <div className="mosaic-card card-4">
              <img src={coffeeSorting} alt="Hands sorting green coffee beans" />
            </div>

            {/* Box 5: Middle Bottom Wide Block */}
            <div className="mosaic-card card-5">
              <img
                src={dryingCoffee}
                alt="Green coffee drying on raised beds"
              />
            </div>

            {/* Box 6: Bottom Right Square Block */}
            <div className="mosaic-card card-6">
              <img
                src={farmersAtWork}
                alt="Farmers working together at a coffee drying station"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeFarmsGrid;
