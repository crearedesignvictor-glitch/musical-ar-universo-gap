import React from 'react';
import { HeroFlyer } from './HeroFlyer';

export const Hero: React.FC = () => {
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
        <a
          className="button"
          href="#participar"
          style={{ textAlign: 'center', justifyContent: 'center' }}
        >
          24 de Novembro — Teatro Municipal Eduardo Abdelnor, Marabá–PA
        </a>
      </div>

      <div className="hero-picture">
        <img
          src="/hero-stage.webp"
          alt="Imagem ilustrativa de crianças cantando em um palco iluminado em azul"
          fetchPriority="high"
        />
        <span className="photo-note">Imagem ilustrativa do universo do espetáculo</span>
      </div>

      <div className="hero-cloud"></div>

      <a
        className="button hero-mobile-cta"
        href="#participar"
        style={{ textAlign: 'center', justifyContent: 'center' }}
      >
        24 de Novembro — Teatro Municipal Eduardo Abdelnor, Marabá–PA
      </a>
    </section>
  );
};
