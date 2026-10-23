import React, { useState } from 'react';
import { FilterDate, ShowCardData } from '../types';
import { SHOWS_DATA } from '../data/shows';

interface InspiracaoProps {
  onSelectShow: (show: ShowCardData) => void;
}

export const Inspiracao: React.FC<InspiracaoProps> = ({ onSelectShow }) => {
  const [filter, setFilter] = useState<FilterDate>('all');

  React.useEffect(() => {
    // Pre-warm show poster images for immediate rendering without delays
    SHOWS_DATA.forEach((show) => {
      const img = new Image();
      img.src = show.image;
    });
  }, []);

  return (
    <section className="insp-program" id="inspiracao">
      <div className="insp-intro">
        <img
          alt="Inspiração — Histórias que inspiram futuros"
          className="insp-logo"
          height="682"
          src="/assets/inspiracao-logo.png"
          width="2048"
        />
        <p>
          Um movimento artístico, cultural e educativo dedicado a compartilhar trajetórias humanas
          que inspiram gerações.
        </p>
      </div>

      <div className="insp-section-head">
        <div>
          <span className="insp-eyebrow">Escolha sua inspiração</span>
          <h2>Grandes histórias começam na infância</h2>
        </div>
        <p>Quatro trajetórias que atravessam o tempo e ganham vida no palco pelas nossas crianças.</p>
      </div>

      <div aria-label="Filtrar por data" className="insp-filters" role="group">
        <button
          aria-pressed={filter === 'all'}
          className={`insp-filter ${filter === 'all' ? 'active' : ''}`}
          data-filter="all"
          type="button"
          onClick={() => setFilter('all')}
        >
          Todas as sessões
        </button>
        <button
          aria-pressed={filter === '14'}
          className={`insp-filter ${filter === '14' ? 'active' : ''}`}
          data-filter="14"
          type="button"
          onClick={() => setFilter('14')}
        >
          14 de Novembro
        </button>
        <button
          aria-pressed={filter === '27'}
          className={`insp-filter ${filter === '27' ? 'active' : ''}`}
          data-filter="27"
          type="button"
          onClick={() => setFilter('27')}
        >
          27 de Novembro
        </button>
      </div>

      <div className="insp-grid">
        {SHOWS_DATA.map((show) => {
          const isHidden = filter !== 'all' && show.dateCode !== filter;

          return (
            <article
              key={show.id}
              className="insp-show-card"
              data-date={show.dateCode}
              hidden={isHidden}
            >
              <button
                aria-label={`Conhecer ${show.name}`}
                className={`insp-poster insp-${show.id}`}
                data-event={show.id}
                type="button"
                onClick={() => onSelectShow(show)}
              >
                <div className="insp-poster-top">
                  <span>
                    UNIVERSO GAP
                    <br />
                    APRESENTA
                  </span>
                  <span>
                    TEATRO
                    <br />
                    2026
                  </span>
                </div>
                <div className="insp-poster-name">{show.name}</div>
                <h3>
                  {show.titlePrefix}
                  <span>{show.titleHighlight}</span>
                </h3>
                <img
                  alt={show.alt}
                  className="insp-poster-photo"
                  height="1500"
                  loading="eager"
                  decoding="async"
                  src={show.image}
                  width="1000"
                />
                <div className="insp-poster-foot">
                  <span>InspirAÇÃO</span>
                  <span>
                    {show.dateCode} NOV ↗
                    <br />
                    {show.dateTime.split(' • ')[1]}
                  </span>
                </div>
              </button>

              <div className="insp-show-info">
                <div className="insp-date-line">
                  <span>
                    {show.dateTime.split(' • ')[0]} <i>•</i> {show.dateTime.split(' • ')[1]}
                  </span>
                  <span>{show.location}</span>
                </div>
                <h3>
                  {show.headline.includes('\n')
                    ? show.headline.split('\n').map((line, idx) => (
                        <React.Fragment key={idx}>
                          {idx > 0 && <br />}
                          {line}
                        </React.Fragment>
                      ))
                    : show.headline}
                </h3>
                <p className="insp-show-venue">{show.venue}</p>
                <p className="insp-show-blurb">{show.blurb}</p>
                <button
                  className="insp-text-link"
                  data-event={show.id}
                  type="button"
                  onClick={() => onSelectShow(show)}
                >
                  Sobre o espetáculo <span>↗</span>
                </button>
                <a className="insp-buy-ticket" href="#solidario">
                  Adquirir ingresso ↗
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
