import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import User1 from '../assets/images/user1.jpg';
import User2 from '../assets/images/user2.jpg';
import User3 from '../assets/images/user3.jpg';

const Testimonial = ({ color }) => (
  <section id="testimonial" className={color}>
    <div className="inner">
      <header>
        <h2>Testimoniales</h2>
        <div className="inner">
          <Carousel
            showArrows={false}
            showStatus={false}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            interval={10000}
          >
            <div>
              <p>
                "Hace un buen tiempo venían pasando situaciones en mi vida, que
                no lograba explicarme el porque de ello, gracias al Taller
                Renacer, me dio las pautas para reconocer los Proyectos
                inconscientes que me delegaron mis padres, para reconocer mi
                misión de Vida y una vez hago conciencia de estos temas, me es
                más fácil poder soltar, lo que debo soltar desde el amor y lo
                más apasionante es poder centrarme en mis propios proyectos, en
                mis propios objetivos de vida"
              </p>
              <img
                src={User3}
                alt="foto persona"
                className="picture__testimonial"
              />
            </div>
            <div>
              <p>
                "Realmente mi experiencia con el seminario Renacer de Laura
                Maestre fue maravillosa. Tener la oportunidad de ir al momento
                de mi concepción y nacimiento y también con su guía aceptar o
                descartar cada proyecto que tanto mi madre como mi padre me
                entregaron al momento de llegar a esta tierra fue primero que
                todo liberador."
              </p>
              <img
                src={User1}
                alt="foto persona"
                className="picture__testimonial"
              />
            </div>
            <div>
              <p>
                "Gracias al taller Renacer aprendí a entender las historias de
                mis padres, para sanar las heridas y Rencores. Hoy tengo
                conocimiento del ¿Por qué? de las experiencias de mi vida. Doy
                Gracias a Dios y a las personas como tú, Laura Maestre, que han
                llegado a mi vida para transformar mi proceso terrenal"
              </p>
              <img
                src={User2}
                alt="foto persona"
                className="picture__testimonial"
              />
            </div>
          </Carousel>
        </div>
      </header>
    </div>
  </section>
);

export default Testimonial;
