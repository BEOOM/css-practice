import React from 'react';
import './CardHover.css';

const CardHover = () => {
  return (
    <div className="cardHoverBody">
      <div className="productcard">
        <div className="cardCircle" style={{ '--clr': '#f40103' }}>
          <img
            src="./CoverImage/cocacolalogo.png"
            className="productlogo"
            alt="로고"
          />
        </div>
        <div className="cardContent">
          <h2>CocalCola</h2>
          <p>
            코카콜라 맛있어 맛있으면 또먹어 또먹으면 배탈나.코카콜라 맛있어
            맛있으면 또먹어 또먹으면 배탈나. 코카콜라 맛있어 맛있으면 또먹어
            또먹으면 배탈나.
          </p>
          <a href="/">Explore</a>
        </div>
        <img
          src="./CoverImage/cocacola.png"
          className="productimg"
          alt="콜라이미지"
        />
      </div>
      <div className="productcard">
        <div className="cardCircle" style={{ '--clr': '#02953a' }}>
          <img
            src="./CoverImage/spritelogo.png"
            className="productlogo"
            alt="로고"
          />
        </div>
        <div className="cardContent">
          <h2>Sprite</h2>
          <p>
            코카콜라 맛있어 맛있으면 또먹어 또먹으면 배탈나.코카콜라 맛있어
            맛있으면 또먹어 또먹으면 배탈나. 코카콜라 맛있어 맛있으면 또먹어
            또먹으면 배탈나.
          </p>
          <a href="/">Explore</a>
        </div>
        <img
          src="./CoverImage/sprite.png"
          className="productimg"
          alt="사이다이미지"
        />
      </div>
    </div>
  );
};

export default CardHover;
