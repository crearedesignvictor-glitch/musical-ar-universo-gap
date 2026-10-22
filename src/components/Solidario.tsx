import React from 'react';
import toyDonationImg from '../assets/images/regenerated_image_1792680570571.png';

export const Solidario: React.FC = () => {
  return (
    <section id="solidario" className="solidarity">
      <div className="section solidarity-inner">
        <div className="reveal">
          <span className="eyebrow light">O BEM EM CENA</span>
          <h2>
            DOE UM MATERIAL ESCOLAR
            <br />
            <em>GARANTA SEU INGRESSO.</em>
          </h2>
          <p>
            Para participar dos espetáculos, escolha um dos materiais escolares abaixo e realize a
            troca por seu ingresso no Universo GAP:
          </p>
          <ul className="school-materials">
            <li>1 caderno grande, brochura, de 90 páginas;</li>
            <li>1 caixa de lápis de cor, com 12 cores;</li>
            <li>1 caixa de massa de modelar, com 12 cores.</li>
          </ul>
          <p className="material-equivalence">
            <strong>1 material escolar = 1 ingresso.</strong>
          </p>
          <a
            className="button white"
            href="https://wa.me/5594992857513?text=Ol%C3%A1%2C%20Dai%21%20Quero%20apoiar%20ainda%20mais%20o%20Musical%20AR%20%E2%80%94%20Um%20sopro%20de%20vida%20com%20uma%20doa%C3%A7%C3%A3o%20maior%20de%20materiais%20escolares.%20Como%20posso%20contribuir%20e%20onde%20posso%20entregar%20as%20doa%C3%A7%C3%B5es%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero doar mais <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="giving-steps reveal">
          <figure className="toy-donation">
            <img
              src={toyDonationImg}
              alt="Caixa de doações em rabisco azul com ursinho, avião, bola, carrinho e robô"
              width="1280"
              height="1280"
              loading="eager"
              decoding="async"
            />
            <span className="toy-spark toy-spark-one" aria-hidden="true">
              ✧
            </span>
            <span className="toy-spark toy-spark-two" aria-hidden="true">
              ♡
            </span>
          </figure>
          <article>
            <span>01</span>
            <div>
              <h3>ESCOLHA SEU MATERIAL</h3>
              <p>Escolha um dos materiais escolares da lista para realizar a troca.</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>RETIRE SEU INGRESSO</h3>
              <p>
                Os ingressos serão disponibilizados exclusivamente mediante a entrega dos
                materiais escolares no Universo GAP, até o esgotamento da lotação de cada
                espetáculo.
              </p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>BONS ARES</h3>
              <p>
                Toda a arrecadação será destinada a ações solidárias que ampliam as oportunidades de
                aprendizagem, criatividade e desenvolvimento de outras crianças.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
