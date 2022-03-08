import React from 'react';
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function CarouselDestaque() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/data/static/carousel.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  return (
    <section className="banner">
      
      <Splide
      options={ {
        perPage: 1,
            type: "loop",
            autoplay: true,
            pauseOnHover: false,
            resetProgress: false,
            arrows: "slider",
           
        
      } }
      >
        {data.map((item) => {
          const { id, descricaoNegrito, descricao, titulo, image } = item;
          return (
            <SplideSlide>
              <div className="item ">
                <div className="banner__carousel">
                  <img src={image} alt="" />
                </div>
                <div className="banner__descricao">
                  <p className="titulo">{titulo}</p>
                  <h1 className="descricao">
                    <strong>{descricaoNegrito}</strong>
                    <br /> 
                  </h1>
                  <p>{descricao}</p>
                  <a href='#'>Confira</a>
                  <div className="bottom"></div>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
}

export default CarouselDestaque;
