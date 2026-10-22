import React from 'react';

export const HeroFlyer: React.FC = () => {
  return (
    <div className="hero-flyer">
      <svg className="flapping-bird" viewBox="0 0 1280 1280" aria-hidden="true">
        <defs>
          <clipPath id="back-hero">
            <path d="M180 0H620L650 430L590 730L230 750Z" />
          </clipPath>
          <clipPath id="front-hero">
            <path d="M620 160H1020V610L750 640L620 440Z" />
          </clipPath>
          <clipPath id="body-hero">
            <path d="M0 760L470 760L535 505L675 585L800 608L935 493H1280V1280H0Z" />
          </clipPath>
        </defs>
        <g className="wing-back">
          <image href="/bird.webp" width="1280" height="1280" clipPath="url(#back-hero)" />
        </g>
        <image href="/bird.webp" width="1280" height="1280" clipPath="url(#body-hero)" />
        <g className="wing-front">
          <image href="/bird.webp" width="1280" height="1280" clipPath="url(#front-hero)" />
        </g>
      </svg>
    </div>
  );
};
