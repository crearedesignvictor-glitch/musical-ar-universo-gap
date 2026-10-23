import React from 'react';
import { HeroFlyer } from './HeroFlyer';

export const Hero: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section id="inicio" className="hero">
      <div className="hero-doodles new-doodles" aria-hidden="true">
        <img className="sketch-cloud hero-cloud-art" src="/cloud.webp" alt="" />
        <HeroFlyer />
      </div>

      <div className="hero-copy">
        <div className="eyebrow">
          <span className="dot"></span> PROJETO AR 2026
        </div>
        <img className="hero-logo" src="/hero-logo.svg" alt="Musical AR — Um sopro de vida" />
        <h1>
          Pequenas vozes.
          <br />
          <em>Um universo de esperança.</em>
        </h1>
        <p>
          Com música, movimento e imaginação, crianças sobem ao palco para compartilhar uma
          mensagem de esperança e paz.
        </p>
        <a className="button" href="#participar">
          <span className="hero-event-date">24 de Novembro</span>
          <span className="hero-event-location">Teatro Municipal Eduardo Abdelnor</span>
        </a>
      </div>

      <div className="hero-picture">
        <video
          ref={videoRef}
          className="hero-video"
          src="/assets/aistudio/Tre_s_crianc_as_cantando_no_palco_20261022230031_9f1448b7.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>

      <div className="hero-cloud"></div>

      <a className="button hero-mobile-cta" href="#participar">
        <span className="hero-event-date">24 de Novembro</span>
        <span className="hero-event-location">Teatro Municipal Eduardo Abdelnor</span>
      </a>
    </section>
  );
};
