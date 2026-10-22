import React from 'react';

export const Patrocinadores: React.FC = () => {
  return (
    <section id="patrocinadores" className="support-section" aria-labelledby="support-title">
      <div className="support-heading">
        <h2 id="support-title">PESSOAS QUE ACREDITAM NO FUTURO</h2>
        <p>Juntos, apoiamos a infância e transformamos sonhos em experiências por meio da arte.</p>
      </div>
      <div className="support-grid" aria-label="Espaços reservados para logomarcas dos patrocinadores">
        <div className="support-card" aria-label="Espaço reservado para logomarca">
          <span>Logomarca do patrocinador</span>
        </div>
        <div className="support-card" aria-label="Espaço reservado para logomarca">
          <span>Logomarca do patrocinador</span>
        </div>
        <div className="support-card" aria-label="Espaço reservado para logomarca">
          <span>Logomarca do patrocinador</span>
        </div>
        <div className="support-card" aria-label="Espaço reservado para logomarca">
          <span>Logomarca do patrocinador</span>
        </div>
        <div className="support-card" aria-label="Espaço reservado para logomarca">
          <span>Logomarca do patrocinador</span>
        </div>
        <div className="support-card" aria-label="Espaço reservado para logomarca">
          <span>Logomarca do patrocinador</span>
        </div>
      </div>
    </section>
  );
};
