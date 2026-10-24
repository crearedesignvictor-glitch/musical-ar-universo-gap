import React from 'react';

// O usuário pode substituir os nomes abaixo por tags <img src="..." alt="..." /> com as logomarcas dos patrocinadores
const SPONSORS = [
  'Logomarca do Patrocinador',
  'Logomarca do Patrocinador',
  'Logomarca do Patrocinador',
  'Logomarca do Patrocinador',
  'Logomarca do Patrocinador',
  'Logomarca do Patrocinador',
  'Logomarca do Patrocinador',
  'Logomarca do Patrocinador',
];

export const SponsorTicker: React.FC = () => {
  return (
    <div className="sponsor-ticker" aria-label="Patrocinadores do evento">
      <div className="sponsor-ticker-track" aria-hidden="true">
        {[0, 1, 2].map((loopIdx) => (
          <div key={loopIdx} className="sponsor-ticker-group">
            {SPONSORS.map((name, i) => (
              <span key={`${loopIdx}-${i}`} className="sponsor-ticker-item">
                <span className="sponsor-ticker-text">{name}</span>
                <span className="sponsor-ticker-dot">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
