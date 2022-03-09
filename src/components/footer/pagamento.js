import React from 'react';

function Pagamento() {
  return (
    <section className="pagamento">
      <p>
        <strong>Forma De Pagamento</strong>
      </p>
      <div className="pagamento__card">
        <ul>
          <li>
            <a href="#">
              <img src="assets/imagem/iconCartao/visa.png"></img>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/imagem/iconCartao/masterCard.png"></img>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/imagem/iconCartao/americaExpress.png"></img>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/imagem/iconCartao/dinersClub.png"></img>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/imagem/iconCartao/boleto.png"></img>
            </a>
          </li>
        </ul>
      </div>
      <p>
        <strong>Segurança</strong>
      </p>
      <div className="pagamento__seguro">
        <ul>
          <li>
            <a href="#">
              <img src="assets/imagem/iconCartao/rapid.png"></img>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/imagem/iconCartao/vtex.png"></img>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Pagamento;
