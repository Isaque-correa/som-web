import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
function CategoriaCarousel() {
  //   const [size, setSize] = useState([window.innerWidth]);
  //   if (size < 912) {
  //     <h1>Ola mundo</h1>;
  //   }
  return (
    <section className="categoriaCarousel">
      <ul>
        <Splide
          options={{
            perPage: 2,
            type: "loop",
            gap: "1rem",
            autoplay: true,
            pauseOnHover: false,
            resetProgress: false,
            arrows: "slider",
            height: "15rem",
            width: 270,
          }}
        >
          <SplideSlide>
            <li>
              <a href="#">
                <img src="/assets/imagem/guitarra.jpg" alt="" />
                <p>Guitarras</p>
              </a>
            </li>
          </SplideSlide>
          <SplideSlide>
            <li>
              <a href="#">
                <img src="/assets/imagem/microfone.jpg" alt="" />
                <p>microfones</p>
              </a>
            </li>
          </SplideSlide>
          <SplideSlide>
            <li>
              <a href="#">
                <img src="/assets/imagem/mesa de som.jpg" alt="" />
                <p>Mesas de som</p>
              </a>
            </li>
          </SplideSlide>
          <SplideSlide>
            <li>
              <a href="#">
                <img src="/assets/imagem/teclado.jpg" alt="" />
                <p>Teclados</p>
              </a>
            </li>
          </SplideSlide>
          <SplideSlide>
            <li>
              <a href="#">
                <img src="/assets/imagem/violao.jpg" alt="" />
                <p>Violão</p>
              </a>
            </li>
          </SplideSlide>
          <SplideSlide>
            <li>
              <a href="#">
                <img src="/assets/imagem/bateria.jpg" alt="" />
                <p>Baterias</p>
              </a>
            </li>
          </SplideSlide>
        </Splide>
      </ul>
    </section>
  );
}

export default CategoriaCarousel;
