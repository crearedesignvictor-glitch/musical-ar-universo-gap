import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="project-footer">
      <div className="project-footer-grid">
        <div>
          <h3>Viva a Experiência</h3>
          <nav aria-label="Links do rodapé">
            <a href="#historia">Conheça o projeto</a>
            <a href="#inspiracao">Espetáculos Inspiração</a>
            <a href="#participar">Agenda de Novembro</a>
            <a href="#solidario">Como garantir seu ingresso</a>
          </nav>
        </div>
        <div className="project-footer-contact">
          <h3>Atendimento</h3>
          <span>Falar com a Dai</span>
          <a className="project-phone" href="tel:+5594992857513">
            (94) 99285-7513
          </a>
          <p>
            Os ingressos são trocados por materiais escolares específicos, conforme as regras oficiais
            do projeto. Confira os itens aceitos e realize a troca no Universo GAP, até o
            esgotamento da lotação de cada espetáculo.
          </p>
          <a
            className="project-contact-button"
            href="https://wa.me/5594992857513?text=Ol%C3%A1%2C%20Dai%21%20Gostaria%20de%20saber%20quais%20sess%C3%B5es%20est%C3%A3o%20dispon%C3%ADveis%20e%20como%20trocar%20um%20dos%20materiais%20escolares%20previstos%20nas%20regras%20do%20projeto%20pelo%20meu%20ingresso%20no%20Universo%20GAP."
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com a Dai no WhatsApp ↗
          </a>
        </div>
      </div>
      <div className="project-footer-bottom">
        <span>
          © 2026 Universo GAP · Projeto AR 2026
          <br />
          Uma realização da Universo GAP.
        </span>
        <a href="#inicio">Voltar ao início ↑</a>
      </div>
    </footer>
  );
};
