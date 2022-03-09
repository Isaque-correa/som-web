import React from 'react';
import Formulario from "../components/footer/formulario";
import Institucional from "../components/footer/institucional";
import Pagamento from "../components/footer/pagamento";
import Suporte from "../components/footer/suporte";

function Footer() {
  return (
    <>
      <section className="footer">
        <Institucional />
        <Suporte />
        <Pagamento />
        <Formulario />
      </section>
      <div className="direitos">
        <div className="direitos__descricao">
          <p>
            NINJA SOM COMÉRCIO DE ELETRÔNICOS LTDA - 2012 - 2019, todos os
            direitos reservados. Rua Santa Ifigênia, 556 560/562/564 - Santa
            Efigênia - CEP: 01.207-000 - São Paulo / SP - CNPJ
            07.282.516/0001-15
          </p>
        </div>
        <a href="https://econverse.com.br/"><img src="assets/imagem/icon/econverse.png"/></a>
        <a href="https://vtex.com/br-pt/"><img src="assets/imagem/icon/vtex.png"/></a>
      </div>
    </>
  );
}
export default Footer;
