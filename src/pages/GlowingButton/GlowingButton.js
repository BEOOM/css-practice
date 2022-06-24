import React from 'react';
import './GlowingButton.css';

const GlowingButton = () => {
  return (
    <div className="GlowingButtonContainer">
      <a className="GlowingA" href="/" style={{ '--clr': '#1e9bff' }}>
        <span>Button</span>
        <i></i>
      </a>
      <a className="GlowingA" href="/" style={{ '--clr': '#ff1867' }}>
        <span>Button</span>
        <i></i>
      </a>
      <a className="GlowingA" href="/" style={{ '--clr': '#6eff3e' }}>
        <span>Button</span>
        <i></i>
      </a>
    </div>
  );
};

export default GlowingButton;
