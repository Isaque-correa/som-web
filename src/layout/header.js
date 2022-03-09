import React from "react";
function Header() {
  return (
    <header className="header">
      <div className="header__fexed">
        <div>
          <ul className="header__cabecalho">
            <li>
            <div className="phone">
              <a href="#">
                <img src="assets/imagem/icon/icon-telefone.png" />
                <p>Central de atendimento</p>
              </a>
            </div>
            </li>
            <li>
              <a href="#">
                <img src="assets/imagem/icon/icons-cadeado.png" alt="" />
                Comprar 100%
              </a>
            </li>
            <li>
              <a href="#">1 Trocar grátis</a>
            </li>
            <li>
              <a href="#">% 5X Sem Juros</a>
            </li>
            <li>
              <a href="#">
                <img src="assets/imagem/icon/icon-frete.png" alt="" />
                Entrega em todo o Brasil
              </a>
            </li>
          </ul>
        </div>
        <div className="header__contato">
          <div className="header__logo">
            <a href="">
              <img src="assets/imagem/logo.png" alt="" />
            </a>
            <input type="text" placeholder="Busque Aqui..." />
          </div>
          <div className="header__icons">
            <img src="assets/imagem/icon/icon-whatsapp.png" alt="" />
            <a href="#">(11)99999-9999</a>
          </div>
          <div className="header__usuario">
            <img src="assets/imagem/icon/icons-usuario.png" alt="" />
            <div>
              <p>
                <a href="#" className="apresentacao">
                  ola, visitante
                </a>
              </p>
              <p>
                <a href="#" className="login">
                  minha conta
                </a>
              </p>
            </div>
          </div>
          <div className="header__carrinho">
            <div className="icon">
              <img src="assets/imagem/icon/icons-carrinho.png" alt="" />
            </div>

            <div className="descricao">
              <p className="carrinho">Seu carrinho</p>
              <p className="item">0 item(s)</p>
            </div>
          </div>
        </div>

        <nav className="header__nav">
          <ul>
            <li>
              <select name="" id="">
                <option selected="selected">todas as categorias</option>
              </select>
            </li>
            <li>
              <select name="#" id="">
                <option selected="selected">Som profissional</option>
              </select>
            </li>
            <li>
              <a href="">instrumentos musicais</a>
            </li>
            <li>
              <a href="">Promoções</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
