import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { Carousel } from 'react-responsive-carousel';
import BannerLanding from '../../components/BannerLanding';
import FavIcon from '../../components/FavIcon';
import SEO from '../../components/SEO';
import User1 from '../../assets/images/user1.jpg';
import User2 from '../../assets/images/user2.jpg';
import User3 from '../../assets/images/user3.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class Landing extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <FavIcon type="purple" />
        <SEO
          title="Laura Maestre | Taller renacer"
          description="¿Te gustaría tener un nuevo comienzo para crear la vida que deseas?"
          url={location.pathname}
        />
        <BannerLanding
          title="Taller Renacer"
          description="¿Te gustaría tener un nuevo comienzo para crear la vida que deseas?"
          time="March 24, 2018 09:00:00"
        />

        <div id="main">
          <section id="features">
            <div className="inner">
              <header>
                <h2>Qué lograras</h2>
              </header>
              <div className="row">
                <div className="feature">
                  <i class="fa fa-star fa-4x" style={{ color: 'white' }} />
                  <p>
                    Recordaras y sanarás las emociones que viviste durante tu
                    gestación.
                  </p>
                </div>
                <div className="feature">
                  <i class="fa fa-medkit fa-4x" style={{ color: 'white' }} />

                  <p>
                    Sanarás la forma como naciste ya que ella marca como te
                    presentas y te desenvuelves en la vida.
                  </p>
                </div>
                <div className="feature">
                  <i class="fa fa-plane fa-4x" style={{ color: 'white' }} />
                  <p>
                    Crearás nuevos permisos y proyectos para crear la vida que
                    deseas.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="details">
            <div className="inner">
              <header>
                <h2>Cuándo</h2>
              </header>
              <div className="row">
                <div className="feature">
                  <div className="card">
                    <i
                      class="fa fa-map-marker fa-4x"
                      style={{ color: 'cadetblue' }}
                    />
                    <h3>Bogotá</h3>
                  </div>
                </div>
                <div className="feature">
                  <div className="card">
                    <i
                      class="fa fa-calendar-check-o fa-4x"
                      style={{ color: 'cadetblue' }}
                    />
                    <h3>24 de Marzo</h3>
                  </div>
                </div>
                <div className="feature">
                  <div className="card" style={{ color: 'cadetblue' }}>
                    <i class="fa fa-money fa-4x" />
                    <h3>$ 300.000</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="faq">
            <div className="inner">
              <header>
                <h2>Preguntas frecuentes</h2>
              </header>
              <ul className="alt row">
                <li>
                  <h3>Cuál es la metodología utilizada en el taller?</h3>
                  <p>
                    El taller es terapeútico y casi personalizado. Sólo tiene 6
                    cupos. Cada persona recibe terapia y se hace el
                    correspondiente nacimiento a cada uno.
                  </p>
                </li>
                <li>
                  <h3>¿Qué es una terapia?</h3>
                  <p>
                    Una terapia es un proceso que utiliza la relajación y las
                    emociones para ir a momentos de etapas tempranas como
                    concepción, gestación y nacimiento; resentir la emoción,
                    colocar una nueva y reconstruir una nueva historia.
                  </p>
                </li>
                <li>
                  <h3>¿Qué duración tiene el taller?</h3>
                  <p>El taller dura un día de 8am -6pm.</p>
                </li>
                <li>
                  <h3>¿Debo llevar comidas?</h3>
                  <p>El taller incluye refrigerio mañana y tarde y almuerzo.</p>
                </li>
                <li>
                  <h3>¿Cuál es la fecha de los talleres?</h3>
                  <p>
                    Se puede elegir entre tres fechas: sábado 24 de febrero,
                    domingo 25 de febrero o domingo 26 de febrero.
                  </p>
                </li>
                <li>
                  <h3>¿En qué lugar se realiza el taller?</h3>
                  <p>
                    En la Finca Casa Campestre San Miguel, vía de Villavicencio
                    a Acacías después de la Nohora. Se estableció un punto de
                    Encuentro en el Centro comercial Viva. Si necesita
                    transporte nos informa.
                  </p>
                </li>
                <li>
                  <h3>¿Qué Incluye la inversión del taller?</h3>
                  <p>
                    Incluye Refrigerios, almuerzo, certificado de nacimiento.
                  </p>
                </li>
                <li>
                  <h3>¿En qué ropa debo llevar al taller?</h3>
                  <p>
                    Ropa cómoda. Al final de taller se pide una prenda blanca
                    puede ser completa (vestido) o camisa o pantalón; pero esta
                    es al final.
                  </p>
                </li>
                <li>
                  <h3>¿Debo tener una preparación anterior al taller?</h3>
                  <p>
                    La única preparación es que una semana antes, se envían una
                    ficha para llenar respecto a tu nacimiento y así empezar a
                    abrir el inconsciente.
                  </p>
                </li>
                <li>
                  <h3>¿Debe ser mayor de edad para hacer el taller?</h3>
                  <p>
                    Se recomienda mayor de 8 años, porque antes de esta edad se
                    debe hacer la terapia a los papás
                  </p>
                </li>
                <li>
                  <h3>¿El taller es presencial o virtual?</h3>
                  <p>
                    El taller Renacer es presencial, aunque virtual por Skype
                    puede hacerse el mismo ejercicio personalizado
                  </p>
                </li>
                <li>
                  <h3>¿Qué métodos de pago existen?</h3>
                  <p>Por PayU o consignación directa</p>
                </li>
              </ul>
            </div>
          </section>
          <section id="testimonial">
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
                        "Hace un buen tiempo venían pasando situaciones en mi
                        vida, que no lograba explicarme el porque de ello,
                        gracias al Taller Renacer, me dio las pautas para
                        reconocer los Proyectos inconscientes que me delegaron
                        mis padres, para reconocer mi misión de Vida y una vez
                        hago conciencia de estos temas, me es más fácil poder
                        soltar, lo que debo soltar desde el amor y lo más
                        apasionante es poder centrarme en mis propios proyectos,
                        en mis propios objetivos de vida"
                      </p>
                      <img
                        src={User3}
                        alt="foto persona"
                        className="picture__testimonial"
                      />
                    </div>
                    <div>
                      <p>
                        "Realmente mi experiencia con el seminario Renacer de
                        Laura Maestre fue maravillosa. Tener la oportunidad de
                        ir al momento de mi concepción y nacimiento y también
                        con su guía aceptar o descartar cada proyecto que tanto
                        mi madre como mi padre me entregaron al momento de
                        llegar a esta tierra fue primero que todo liberador."
                      </p>
                      <img
                        src={User1}
                        alt="foto persona"
                        className="picture__testimonial"
                      />
                    </div>
                    <div>
                      <p>
                        "Gracias al taller Renacer aprendí a entender las
                        historias de mis padres, para sanar las heridas y
                        Rencores. Hoy tengo conocimiento del ¿Por qué? de las
                        experiencias de mi vida. Doy Gracias a Dios y a las
                        personas como tú, Laura Maestre, que han llegado a mi
                        vida para transformar mi proceso terrenal"
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
        </div>
      </div>
    );
  }
}

export default Landing;
