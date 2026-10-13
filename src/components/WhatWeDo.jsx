import '../styles/WhatWeDo.css';

import coffeeCherriesImg from '../assets/Images/ethiopian-green-coffee-8.webp'; // Update path if needed

const WhatWeDo = () => {
  return (
    <section className="what-we-do-section">
      <div className="what-we-do-container">
        {/* Left Side: Image */}
        <div className="what-we-do-image-col">
          <img
            src={coffeeCherriesImg}
            alt="Hands holding freshly harvested red coffee cherries"
            className="what-we-do-img"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="what-we-do-content-col">
          <span className="what-we-do-tag">What We do</span>

          <h2 className="what-we-do-title">
            From Ethiopian Origin to
            <br />
            International Market
          </h2>

          <div className="what-we-do-text-body">
            <p>
              Secofet operates within the Ethiopian coffee value chain, sourcing
              and supplying green coffee for international markets.
            </p>
            <p>
              Our role is to connect coffee from Ethiopian origins with buyers
              who require dependable supply, relevant quality specifications,
              and professional export coordination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
