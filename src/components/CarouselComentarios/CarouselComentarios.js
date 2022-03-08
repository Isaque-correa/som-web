import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";

function CarouselComentario() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/data/static/carouselComentarios.json")
      .then((response) => response.json())
      .then(setData);
  }, []);
  return (
    <section className="carousel">
      <Splide
        options={{
          perPage: 1,
          type: "loop",
          width: " 80vw",
        }}
      >
        {data.map((item) => {
          const { img, nome, profissao, comentario } = item;
          return (
            <SplideSlide>
              <div className="carousel__comentarios">
                <div className="usuario">
                  <img src={img} />
                  <div className="info">
                    <p className="nome">
                      <strong>{nome}</strong>
                    </p>
                    <p className="profissao">{profissao}</p>
                  </div>
                  <div className="balao">
                    <p className="comentario">{comentario}</p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
}
export default CarouselComentario;
