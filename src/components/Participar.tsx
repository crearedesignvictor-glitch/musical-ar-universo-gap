import React from 'react';

export const Participar: React.FC = () => {
  return (
    <section className="nov-agenda" id="participar">
      <span className="eyebrow">NOSSA AGENDA DE NOVEMBRO</span>
      <h2>
        Nosso próximo encontro
        <br />
        é no teatro.
      </h2>

      <div className="nov-agenda-row reveal">
        <div className="nov-big-date">
          14<span>NOVEMBRO</span>
        </div>
        <div>
          <h3>Teatro Usina da Paz</h3>
          <p>Marabá, Pará</p>
        </div>
        <div>
          <h3>Tatiana Sampaio &amp; Steve Jobs</h3>
          <p>Tatiana Sampaio às 17h · Steve Jobs às 19h30</p>
        </div>
      </div>

      <div className="nov-agenda-row reveal">
        <div className="nov-big-date">
          24<span>NOVEMBRO</span>
        </div>
        <div>
          <h3>Teatro Municipal Eduardo Abdelnor</h3>
          <p>Marabá, Pará</p>
        </div>
        <div>
          <h3>Musical A 2026</h3>
          <p>Sessões às 17h e 19h30</p>
        </div>
      </div>

      <div className="nov-agenda-row reveal">
        <div className="nov-big-date">
          27<span>NOVEMBRO</span>
        </div>
        <div>
          <h3>Teatro Municipal Eduardo Abdelnor</h3>
          <p>Marabá, Pará</p>
        </div>
        <div>
          <h3>Marie Curie &amp; Leonildo Borges Rocha</h3>
          <p>Marie Curie às 17h · Leonildo Borges Rocha às 19h30</p>
        </div>
      </div>
    </section>
  );
};
