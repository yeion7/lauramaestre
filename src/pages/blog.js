import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Banner from '../components/Banner';
import FavIcon from '../components/FavIcon';
import Self from '../components/Self';
import SEO from '../components/SEO';

import pic01 from '../assets/images/pic01.jpg';

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <SEO title="Laura Maestre | Sobre mi" description="" />
        <FavIcon type="all" />

        <Banner title="Blog" />

        <section id="two" className="spotlights">
          <section>
            <Link to="/making-sense" className="image">
              <img src={pic01} alt="" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>5 Pasos para proyectar y manifestar tus sueños.</h3>
                </header>
                <p>
                  ¿Qué sentirías si en el 2018 cada uno de los sueños que tienes
                  se cumplen? Wow, creo que describir eso sería mágico; así que
                  te invito a que te salgas del molde, se si has escuchado
                  frases como: deja de soñar despierto o coloca los pies en la
                  tierra; yo estoy convencida que el mundo es de los grandes
                  soñadores, porque sólo aquellos que se atreven a salir al
                  mundo, cumplir sus sueños, vencer cada reto y disfrutar cada
                  aprendizaje, pueden tener la felicidad de su sueño cumplido.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/making-sense" className="button">
                      Leer más
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <Link to="/making-sense" className="image">
              <img src={pic01} alt="" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>5 Pasos para proyectar y manifestar tus sueños.</h3>
                </header>
                <p>
                  ¿Qué sentirías si en el 2018 cada uno de los sueños que tienes
                  se cumplen? Wow, creo que describir eso sería mágico; así que
                  te invito a que te salgas del molde, se si has escuchado
                  frases como: deja de soñar despierto o coloca los pies en la
                  tierra; yo estoy convencida que el mundo es de los grandes
                  soñadores, porque sólo aquellos que se atreven a salir al
                  mundo, cumplir sus sueños, vencer cada reto y disfrutar cada
                  aprendizaje, pueden tener la felicidad de su sueño cumplido.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/making-sense" className="button">
                      Leer más
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <Link to="/making-sense" className="image">
              <img src={pic01} alt="" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>5 Pasos para proyectar y manifestar tus sueños.</h3>
                </header>
                <p>
                  ¿Qué sentirías si en el 2018 cada uno de los sueños que tienes
                  se cumplen? Wow, creo que describir eso sería mágico; así que
                  te invito a que te salgas del molde, se si has escuchado
                  frases como: deja de soñar despierto o coloca los pies en la
                  tierra; yo estoy convencida que el mundo es de los grandes
                  soñadores, porque sólo aquellos que se atreven a salir al
                  mundo, cumplir sus sueños, vencer cada reto y disfrutar cada
                  aprendizaje, pueden tener la felicidad de su sueño cumplido.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/making-sense" className="button">
                      Leer más
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default AboutMe;
