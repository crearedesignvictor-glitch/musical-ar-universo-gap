import React from 'react';
import { CloudChoir } from './CloudChoir';

export const Historia: React.FC = () => {
  return (
    <section id="historia" className="story section">
      <div className="reveal">
        <span className="eyebrow">AR</span>
        <h2>
          Respire e
          <br />
          <em>inspire.</em>
        </h2>
        <p>
          Em 2026, o Universo GAP transformou o AR em território de investigação, arte e
          experiência.
        </p>
        <div className="story-pillars">
          <div className="pillar-card">
            <strong className="pillar-title">RESPIRAR</strong>
            <p className="pillar-items">Natureza • atmosfera • clima • qualidade do ar • vida.</p>
          </div>
          <div className="pillar-card">
            <strong className="pillar-title">INSPIRAR</strong>
            <p className="pillar-items">Ideias • sonhos • escolhas • pessoas • futuros.</p>
          </div>
        </div>
        <p>
          Durante o ano, nossas crianças investigaram o mundo que respiram e conheceram pessoas e
          ideias capazes de inspirar novos caminhos.
        </p>
        <p>
          Agora, esse percurso ganha o palco celebrando a vida, a família e os sonhos que nos
          movem.
        </p>
      </div>

      <div className="air-scene reveal new-air-scene" aria-hidden="true">
        <img className="scene-cloud cloud-one" src="/cloud.webp" alt="" loading="lazy" />
        <img className="scene-cloud cloud-two" src="/cloud.webp" alt="" loading="lazy" />
        <CloudChoir />
      </div>
    </section>
  );
};
