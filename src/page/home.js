import React from "react";
import CarouselComentario from "../components/CarouselComentarios/CarouselComentarios";
import CarouselDestaque from "../components/CarouselDestaque/CarouselDestaque";
import CarouselMarca from "../components/CarouselMarca/CarouselMarca";
import Categoria from "../components/Categoria/Categoria";
import Loja from "../components/loja/loja";
import Novidades from "../components/Novidades/Novidades";
import Footer from "../layout/footer";
import Header from "../layout/header";

function Home() {
    return (
    <>
    <Header/>
    <CarouselDestaque/>
    <Categoria/>
    <Novidades/>
    <Loja/>
    <CarouselMarca/>
    <CarouselComentario/>
    <Footer/>
    </>
    );
  }
  
  export default Home;
  