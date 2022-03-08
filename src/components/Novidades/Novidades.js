import React from 'react';

function Novidades() {
  return (
    <section className="novidades">
      <div className="novidades__item">
        <img src="/assets/imagem/novidade-audio.png" alt="" />
        <div className="novidades__caption">
          <p className="novi">Novidades</p>
          <h2>
            <strong>Áudio</strong>
            <br />
          </h2>
          <p className="subtitulo">Profissional</p>
          <a href="#" className="Button">
            Confira
          </a>
        </div>
      </div>
      <div className="novidades__item">
        <img src="/assets/imagem/novidade-instrumentos.png" alt="" />
        <div className="novidades__caption">
          <p className="novi">Novidades</p>
          <h2>
            <strong>Instrumentos</strong>
            <br />
          </h2>
          <p className="subtitulo">Musicais</p>
          <a href="#" className="Button">
            Confira
          </a>
        </div>
      </div>
    </section>
  );
}
export default Novidades;
