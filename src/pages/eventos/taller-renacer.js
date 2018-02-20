import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import BannerLanding from '../../components/BannerLanding';
import FavIcon from '../../components/FavIcon';

import pic08 from '../../assets/images/pic08.jpg';
import pic09 from '../../assets/images/pic09.jpg';
import pic10 from '../../assets/images/pic10.jpg';

class Landing extends React.Component {
  render() {
    return (
      <div>
        <FavIcon type="purple" />
        <Helmet>
          <title>Laura Maestre | Taller renacer</title>
          <meta
            name="description"
            content="¿Te gustaría tener un nuevo comienzo para crear la vida que deseas?"
          />
        </Helmet>

        <BannerLanding
          title="Taller Renacer"
          description="¿Te gustaría tener un nuevo comienzo para crear la vida que deseas?"
        />

        <div id="main">
          <section id="features">
            <div className="inner">
              <header className="major">
                <h2>Qué lograras</h2>
              </header>
              <div className="row">
                <div className="feature">
                  <p>
                    Recordaras y sanarás las emociones que viviste durante tu
                    gestación.
                  </p>
                </div>
                <div className="feature">
                  <p>
                    Sanarás la forma como naciste ya que ella marca como te
                    presentas y te desenvuelves en la vida.
                  </p>
                </div>
                <div className="feature">
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
              <header className="major">
                <h2>Cuándo</h2>
              </header>
              <div className="row">
                <div className="feature" />
                <div className="feature">
                  <h2>Villavicencio</h2>
                  <h3>24 - 25 - 26 de febrero</h3>
                </div>
                <div className="feature">
                  <h2>Inversión</h2>
                  <h3>$ 300.000</h3>
                </div>
              </div>
            </div>
          </section>
          <section id="faq">
            <div className="inner">
              <header className="major">
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
        </div>
      </div>
    );
  }
}

export default Landing;
