import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import React from "react";
import { useEffect, useState } from "react";
import infoLoja from "../../services/infoLoja";
import Modal from "../modal/modal";

function LojaCarousel() {
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
    <section className="lojaCarousel">
      <div className="card">
        <Splide
          options={{
            type: "loop",
            gap: "1rem",
            autoplay: true,
            pauseOnHover: false,
            resetProgress: false,
            arrows: "slider",
            height: "15rem",
            width: 280,
          }}
        >
          {userData?.products.map((product, index) => (
            <SplideSlide>
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
                <div className="margin">
                <a href="#" className="buy">Comprar</a>
              </div>
              </div>
              
                
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <Modal show={useModal} hiden={hidenModal} data={productModal} />
    </section>
  );
}

export default LojaCarousel;
