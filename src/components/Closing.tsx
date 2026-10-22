import React from 'react';

export const Closing: React.FC = () => {
  return (
    <section className="closing">
      <img className="closing-bird" src="/bird.webp" alt="" aria-hidden="true" loading="lazy" />
      <img className="closing-cloud" src="/cloud.webp" alt="" aria-hidden="true" loading="lazy" />
      <div className="support-brands">
        <img
          alt="Universo GAP"
          className="gap-footer-logo"
          decoding="async"
          height="258"
          loading="eager"
          src="/assets/gap-footer-logo.png"
          width="265"
        />
        <img
          alt="Samaúmas — Bibliotecas Comunitárias"
          className="biblioteca-footer-logo"
          decoding="async"
          height="400"
          loading="lazy"
          src="/samaumas-logo.png"
          width="400"
        />
      </div>
      <h2>
        A gente se encontra
        <br />
        <em>onde a esperança canta.</em>
      </h2>
      <a
        className="button whatsapp-cta"
        href="https://wa.me/5594992857513?text=Ol%C3%A1%2C%20Dai%21%20Quero%20apoiar%20o%20projeto%20com%20uma%20doa%C3%A7%C3%A3o%20maior%20de%20materiais%20escolares%2C%20conforme%20os%20itens%20aceitos.%20Como%20posso%20contribuir%20e%20onde%20devo%20entregar%3F"
        target="_blank"
        rel="noopener noreferrer"
      >
        Quero doar mais <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
};
