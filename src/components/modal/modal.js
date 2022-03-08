
function Modal(props) {
  return (
    <>
      <div
        className={"modal__overlayer " + props.show}
        onClick={props.hiden}
      ></div>
      <div className={"modal__content " + props.show}>
        
      <div className="fechar">
          <a onClick={props.hiden}>X</a>
        </div>
        <div className="modal__itens">
          <div className="imagem">
            <img src={props.data.photo} />
          </div>
          <div className="descricao">
            <ul>
              <li>
                <h1>{props.data.productName}</h1>
              </li>
              <li className="preco">
                <p>
                  <strong>R${props.data.price}</strong>
                </p>
              </li>
              <li className="intro">
                <p>{props.data.descriptionShort}</p>
              </li>
              <li className="maisDetalhes">
                <a href="#"> Veja mais detalhes do produto</a>
              </li>
              <li className="adicionar">
                <a>Adicionar ao carrinho</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
