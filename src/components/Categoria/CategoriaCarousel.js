import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
function CategoriaCarousel() {
 
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
                <img src="assets/imagem/categorias/guitarra.jpg" alt="" />
                <p>Guitarras</p>
              </a>
            </li>
          </SplideSlide>
          <SplideSlide>
            <li>
              <a href="#">
                <img src="assets/imagem/categorias/microfone.jpg" alt="" />
                <p>microfones</p>
              </a>
            </li>
          </SplideSlide>
          <SplideSlide>
            <li>
              <a href="#">
                <img src="assets/imagem/categorias/mesa de som.jpg" alt="" />
                <p>Mesas de som</p>
              </a>
            </li>
          </SplideSlide>
          <SplideSlide>
            <li>
              <a href="#">
                <img src="assets/imagem/categorias/teclado.jpg" alt="" />
                <p>Teclados</p>
              </a>
            </li>
          </SplideSlide>
          <SplideSlide>
            <li>
              <a href="#">
                <img src="assets/imagem/categorias/violao.jpg" alt="" />
                <p>Violão</p>
              </a>
            </li>
          </SplideSlide>
          <SplideSlide>
            <li>
              <a href="#">
                <img src="assets/imagem/categorias/bateria.jpg" alt="" />
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
