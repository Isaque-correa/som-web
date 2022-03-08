import React from 'react';

function Institucional() {
  return (
    <section className="institucional">
      <div className="institucional__lista">
        <p>
          <strong>Institucional</strong>
        </p>
        <ul>
          <li>
            <a href="#">Quem Somos</a>
          </li>
          <li>
            <a href="#">Nossas Lojas</a>
          </li>
        </ul>
      </div>
      <div className="institucional__atendimento">
        <p>
          <strong>Atendimento</strong>
        </p>
        <ul>
          <li>
            <a href="#">Fale conosco</a>
          </li>
          <li>
            <a href="#">vendas@ninjasom.com.br</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Institucional;
