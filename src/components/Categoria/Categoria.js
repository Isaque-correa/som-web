import React from 'react';
import CategoriaCarousel from './CategoriaCarousel';
function Categoria (){
    
    return(
    <>
 <section className="categorias">
            
            <ul>
                <li>
                    <a href="#">
                        
                        <img src="/assets/imagem/categorias/guitarra.jpg" alt=""/>
                        <p>Guitarras</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/assets/imagem/categorias/microfone.jpg" alt=""/>
                        <p>microfones</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/assets/imagem/categorias/mesa de som.jpg" alt=""/>
                        <p>Mesas de som</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/assets/imagem/categorias/teclado.jpg" alt=""/>
                        <p>Teclados</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/assets/imagem/categorias/violao.jpg" alt=""/>
                        <p>Violão</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/assets/imagem/categorias/bateria.jpg" alt=""/>
                        <p>Baterias</p>
                    </a>
                </li>
            </ul>
            
        </section>
        <CategoriaCarousel/>
    </>
       )
}

export default Categoria;