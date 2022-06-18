import React from 'react';
import './IsometricMenu.css';

const IsometricMenu = () => {
  return (
    <div className="IsomerticContainer">
      <ul>
        <li style={{ '--i': 6 }}>
          <a href="/">Home</a>
        </li>
        <li style={{ '--i': 5 }}>
          <a href="/">About</a>
        </li>
        <li style={{ '--i': 4 }}>
          <a href="/">Services</a>
        </li>
        <li style={{ '--i': 3 }}>
          <a href="/">Portfolio</a>
        </li>
        <li style={{ '--i': 2 }}>
          <a href="/">Our Team</a>
        </li>
        <li style={{ '--i': 1 }}>
          <a href="/">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default IsometricMenu;
