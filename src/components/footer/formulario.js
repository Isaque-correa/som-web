import React from 'react';

function Formulario() {
  return (
    <section className="formulario">
      <div className="formulario__conteudo">
        <p className="titulo">
          Assine nosso <strong>newsletter</strong>
        </p>
        <p className="subtitulo">E receba novidades e promoções</p>
        <input placeholder="Seu nome" />
        <input placeholder="Seu e-mail" />
      </div>
      <div className="botao">
        <button>enviar</button>
      </div>
    </section>
  );
}
export default Formulario;
