import React from 'react';
import './AnimatedProgress.css';

const AnimatedProgress = () => {
  return (
    <div className="ProgressBody">
      <div className="ProgressContainer">
        <div className="card">
          <div className="percent" style={{ '--clr': '#04fc43', '--num': 85 }}>
            <div className="dot"></div>
            <svg>
              <circle cx="70" cy="70" r="70" />
              <circle cx="70" cy="70" r="70" />
            </svg>
            <div className="number">
              <h2>
                85<span>%</span>
              </h2>
              <p>Html</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="percent" style={{ '--clr': '#fee800', '--num': 75 }}>
            <div className="dot"></div>
            <svg>
              <circle cx="70" cy="70" r="70" />
              <circle cx="70" cy="70" r="70" />
            </svg>
            <div className="number">
              <h2>
                75<span>%</span>
              </h2>
              <p>Html</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="percent" style={{ '--clr': '#ff00be', '--num': 35 }}>
            <div className="dot"></div>
            <svg>
              <circle cx="70" cy="70" r="70" />
              <circle cx="70" cy="70" r="70" />
            </svg>
            <div className="number">
              <h2>
                35<span>%</span>
              </h2>
              <p>Html</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="percent" style={{ '--clr': '#06ccff', '--num': 15 }}>
            <div className="dot"></div>
            <svg>
              <circle cx="70" cy="70" r="70" />
              <circle cx="70" cy="70" r="70" />
            </svg>
            <div className="number">
              <h2>
                15<span>%</span>
              </h2>
              <p>Html</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedProgress;
