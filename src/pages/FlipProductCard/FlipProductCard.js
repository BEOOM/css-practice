import React from 'react';
import './FlipProductCard.css';

const FlipProductCard = () => {
  return (
    <div className="flipProductBody">
      <div className="flipProductCard">
        <div className="flipProductCardCover">
          <img
            className="flipProductAppleWatch1"
            src="./CoverImage/applewatch1.png"
            alt="애플워치"
            style={{ width: '300px', height: '300px' }}
          />
        </div>
        <div className="flipProductDetails">
          <div>
            <img
              src="./CoverImage/applewatch2.png"
              alt="애플워치"
              style={{ width: '300px', height: '250px', background: 'none' }}
            />
            <h3 className="flipProductH3">New Apple Watch</h3>
            <h2 className="flipProductH2">
              <sup>$</sup>450
            </h2>
            <a className="flipProductA" href="/">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipProductCard;
