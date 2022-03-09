import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import options from "../../services/option";

function CarouselMarca() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(options.urlCarousselMarcasApi)
      .then((response) => response.json())
      .then(setData);
  }, []);
  return (
    <section className="marca">
      <div className="marca__descricao">
        <p className="titulo">
          as <strong>melhores</strong>marcas
        </p>
        <p className="intro">
          it is a long established fact that a reader will be distracted by the
          readable
        </p>
      </div>
      <Splide
        options={{
          perPage: 4,
          type: "loop",
          autoplay: true,
          pauseOnHover : false,
          resetProgress: false,
          arrows       : 'slider',
          breakpoints: {
            415: {
              perPage: 2             
              
            },
          },
        }}
      >
        {data.map((item) => {
          const { id, img } = item;
          return (
            <SplideSlide>
              <div className="slide">
                <ul>
                  <li>
                    <img src={img} />
                  </li>
                </ul>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
      <div className="marca__sobreNos">
        <div className="descricao">
          <p className="titulo">
            <strong>Sobre nós</strong>
          </p>
          <p className="intro">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here, content
            here’, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for ‘lorem ipsum’ will uncover many web
            sites still in their infancy. Lorem Ipsum as their default model
            text, and a search for ‘lorem ipsum’ will uncover many web sites
            still in their infancy. Lorem Ipsum as their default model text, and
            a search for ‘lorem ipsum’ will uncover many web sites still in
            their infancy.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default CarouselMarca;
