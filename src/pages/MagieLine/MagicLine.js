import React from 'react';
import './MagicLine.css';

const MagicLine = () => {
  return (
    <div className="magicLineBody">
      <ul className="magicLineUl">
        <li style={{ '--clr': '#1da1f2' }} className="magicLineLi">
          <i class="fa fa-twitter" aria-hidden="true" />
        </li>
        <li style={{ '--clr': '#dd2a7b' }} className="magicLineLi">
          <i class="fa fa-instagram" aria-hidden="true" />
        </li>
        <li style={{ '--clr': '#25d366' }} className="magicLineLi">
          <i class="fa fa-whatsapp" aria-hidden="true" />
        </li>
        <li style={{ '--clr': '#ff0000' }} className="magicLineLi">
          <i class="fa fa-youtube-play" aria-hidden="true" />
        </li>
      </ul>
    </div>
  );
};

export default MagicLine;
