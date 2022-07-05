import React from 'react';
import './ResponsiveSite.css';

const ResponsiveSite = () => {
  return (
    <div className="responsiveSiteBody">
      <div className="responsiveSiteBanner">
        <div className="responsiveSiteBox Content">
          <div className="responsiveSiteHeader">
            <a href="/" className="marvel">
              <img src="./CoverImage/marvel.png" alt="마블로고"></img>
            </a>
            <ul className="responsiveSiteUl">
              <li className="responsiveSiteLi">
                <a href="/" className="responsiveSiteA">
                  Disney+
                </a>
              </li>
              <li className="responsiveSiteLi">
                <a href="/" className="responsiveSiteA">
                  More
                </a>
              </li>
            </ul>
          </div>
          <div className="responsiveSiteContentBox">
            <img src="./CoverImage/eternals.png" className="eternals" />
            <p className="responsiveSiteP">
              When you love something, you fight for it.
            </p>
            <a href="/" className="responsiveSiteBtn">
              Stream Now
            </a>
          </div>
          <ul className="responsiveSiteSci">
            <h3 className="responsiveSiteH3">Follow us on</h3>
            <li className="responsiveSiteLi2">
              <a href="/">
                <img src="./CoverImage/twitter.png" className="sns"></img>
              </a>
            </li>
            <li className="responsiveSiteLi2">
              <a href="/">
                <img src="./CoverImage/instagram.png" className="sns"></img>
              </a>
            </li>
          </ul>
        </div>
        <div className="responsiveSiteBox images">
          <div className="responsiveSiteImgBox">
            <img src="./CoverImage/thena.jpg" className="eternals2" />
          </div>
          <div className="responsiveSiteImgBox">
            <img src="./CoverImage/ikaris.jpg" className="eternals2" />
          </div>
          <div className="responsiveSiteImgBox">
            <img src="./CoverImage/eternals2.jpg" className="eternals2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSite;
