import React from 'react';
import './IconHover.css';

const IconHover = () => {
  return (
    <div className="IconHoverBody">
      <ul className="IconHoverUl">
        <li
          className="IconHoverLi"
          style={{ '--i': '#a955ff', '--j': '#ea51ff' }}
        >
          <span className="IconHoverIcon">
            <ion-icon name="home-outline"></ion-icon>
          </span>
          <span className="IconHoverTitle">Home</span>
        </li>
        <li
          className="IconHoverLi"
          style={{ '--i': '#56CCF2', '--j': '#2F80ED' }}
        >
          <span className="IconHoverIcon">
            <ion-icon name="chatbubbles-outline"></ion-icon>
          </span>
          <span className="IconHoverTitle">Message</span>
        </li>
        <li
          className="IconHoverLi"
          style={{ '--i': '#FF9966', '--j': '#FF5E62' }}
        >
          <span className="IconHoverIcon">
            <ion-icon name="heart-circle-outline"></ion-icon>
          </span>
          <span className="IconHoverTitle">Favorite</span>
        </li>
        <li
          className="IconHoverLi"
          style={{ '--i': '#80FF72', '--j': '#7EE8FA' }}
        >
          <span className="IconHoverIcon">
            <ion-icon name="videocam-outline"></ion-icon>
          </span>
          <span className="IconHoverTitle">Video</span>
        </li>
        <li
          className="IconHoverLi"
          style={{ '--i': '#FFa9C6', '--j': '#F434E2' }}
        >
          <span className="IconHoverIcon">
            <ion-icon name="camera-outline"></ion-icon>
          </span>
          <span className="IconHoverTitle">Photos</span>
        </li>
      </ul>
    </div>
  );
};

export default IconHover;
