import React from 'react';
import './RainyCloudy.css';

const RainyCloudy = () => {
  return (
    <div className="RainyBody">
      <div className="RainyContainer">
        <div className="cloud"></div>
        <div className="rain">
          <span style={{ '--i': 11 }}></span>
          <span style={{ '--i': 12 }}></span>
          <span style={{ '--i': 10 }}></span>
          <span style={{ '--i': 14 }}></span>
          <span style={{ '--i': 18 }}></span>
          <span style={{ '--i': 16 }}></span>
          <span style={{ '--i': 19 }}></span>
          <span style={{ '--i': 20 }}></span>
          <span style={{ '--i': 19 }}></span>
          <span style={{ '--i': 16 }}></span>
          <span style={{ '--i': 18 }}></span>
          <span style={{ '--i': 14 }}></span>
          <span style={{ '--i': 11 }}></span>
          <span style={{ '--i': 13 }}></span>
          <span style={{ '--i': 15 }}></span>
          <span style={{ '--i': 11 }}></span>
          <span style={{ '--i': 8 }}></span>
          <span style={{ '--i': 22 }}></span>
          <span style={{ '--i': 12 }}></span>
        </div>
      </div>
    </div>
  );
};

export default RainyCloudy;
