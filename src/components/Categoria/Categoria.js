import React from 'react';
import CategoriaCarousel from './CategoriaCarousel';
function Categoria (){
    
    return(
    <>
 <section className="categorias">
            
            <ul>
                <li>
                    <a href="#">
                        
                        <img src="/assets/imagem/guitarra.jpg" alt=""/>
                        <p>Guitarras</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/assets/imagem/microfone.jpg" alt=""/>
                        <p>microfones</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/assets/imagem/mesa de som.jpg" alt=""/>
                        <p>Mesas de som</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/assets/imagem/teclado.jpg" alt=""/>
                        <p>Teclados</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/assets/imagem/violao.jpg" alt=""/>
                        <p>Violão</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/assets/imagem/bateria.jpg" alt=""/>
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