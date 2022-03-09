import React from 'react';

function Suporte() {
  return (
    <section className="suporte">
      <p>
        <strong>Ajuda e suporte</strong>
      </p>
      <div className="suporte__lista">
        <ul>
          <li>
            <a href="#">Politica de Privacidade</a>
          </li>
          <li>
            <a href="#">Politica de trocas</a>
          </li>
          <li>
            <a href="#">Prazo de entrega</a>
          </li>
          <li>
            <a href="#">Termos de uso</a>
          </li>
        </ul>
      </div>
      <div className="suporte__social">
        <ul>
          <li>
            <a href="#">
              <img src="assets/imagem/redeSocial/instagram.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/imagem/redeSocial/twitter.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/imagem/redeSocial/facebook.png" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Suporte;
