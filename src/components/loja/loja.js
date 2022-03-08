import React from "react";
import { useEffect, useState } from "react";
import infoLoja from "../../services/infoLoja";
import Modal from "../modal/modal";
import LojaCarousel from "./LojaCarousel";

function Loja() {
  const [userData, setData] = useState();
  const [useModal, setModal] = useState("");
  const [productModal, setProductModal] = useState("");
  const showModal = (p) => {
    setModal("show");
    setProductModal(p);
  };
  const hidenModal = () => {
    setModal("");
    setProductModal("");
  };
  useEffect(() => {
    infoLoja
      .get("/produtos.json")
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  return (
    <>
      <section className="loja">
        <div className="loja__header">
          <p className="titulo">
            Instrumentos <strong>Destaques</strong>
          </p>
          <p className="intro">
            it is a long established fact that a reader will be distracted by
            the readable
          </p>
        </div>
        <div className="card">
          {userData?.products.map((product, index) => (
            <div
              className="item"
              onClick={() => {
                showModal(product);
              }}
            >
              <img src={product?.photo} />
              <p className="produto">{product?.productName}</p>
              <p className="descricao">{product?.descriptionShort}</p>
              <p className="preco">R${product?.price}</p>
            </div>
          ))}
        </div>
        <a className="verMais">ver mais</a>
        <Modal show={useModal} hiden={hidenModal} data={productModal} />
      </section>
      <LojaCarousel />
    </>
  );
}

export default Loja;
