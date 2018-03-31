import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Banner from '../components/Banner';
import FavIcon from '../components/FavIcon';
import Self from '../components/Self';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import graphql from 'graphql';

import pic01 from '../assets/images/pic01.jpg';
import pic02 from '../assets/images/pic02.jpg';
import pic03 from '../assets/images/pic03.jpg';
import pic04 from '../assets/images/pic04.jpg';
import pic05 from '../assets/images/pic05.jpg';
import pic06 from '../assets/images/pic06.jpg';

class HomeIndex extends React.Component {
  render() {
    const { title, description } = this.props.data.site.siteMetadata;

    return (
      <div>
        <SEO title={title} description={description} />
        <FavIcon type="all" />

        <Banner />

        <Self color="blue" />

        <div id="main">
          <div className="inner">
            <header className="major">
              <h2>Servicios</h2>
            </header>
          </div>
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Talleres experienciales</h3>
                <p>
                  “Transforma los pensamientos y emociones todos días para que
                  crear la vida de tus sueños”. Ver más..
                </p>
              </header>
              <Link to="/services" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Talleres experienciales</h3>
                <p>
                  “Transforma los pensamientos y emociones todos días para que
                  crear la vida de tus sueños”. Ver más..
                </p>
              </header>
              <Link to="/services" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Talleres experienciales</h3>
                <p>
                  “Transforma los pensamientos y emociones todos días para que
                  crear la vida de tus sueños”. Ver más..
                </p>
              </header>
              <Link to="/services" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Talleres experienciales</h3>
                <p>
                  “Transforma los pensamientos y emociones todos días para que
                  crear la vida de tus sueños”. Ver más..
                </p>
              </header>
              <Link to="/services" className="link primary" />
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Próximos eventos</h2>
              </header>
              <div className="events">
                <div className="box events-card">
                  <i className="fa fa-3x fa-calendar" />
                  <h4>Taller renacer</h4>
                  <strong>4/12/12</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sequi, suscipit!
                  </p>
                  <Link
                    to="/eventos/taller-renacer-cali"
                    className="button icon fa-check"
                  >
                    Ver más
                  </Link>
                </div>
                <div className="box events-card">
                  <i className="fa fa-3x fa-calendar" />
                  <h4>Taller renacer</h4>
                  <strong>4/12/12</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sequi, suscipit!
                  </p>
                  <Link
                    to="/eventos/taller-renacer-cali"
                    className="button icon fa-check"
                  >
                    Ver más
                  </Link>
                </div>
                <div className="box events-card">
                  <i className="fa fa-3x fa-calendar" />
                  <h4>Taller renacer</h4>
                  <strong>4/12/12</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sequi, suscipit!
                  </p>
                  <Link
                    to="/eventos/taller-renacer-cali"
                    className="button icon fa-check"
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section id="two" className="spotlights">
            <div className="inner">
              <header className="major">
                <h2>Blog</h2>
              </header>
            </div>
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
                    ¿Qué sentirías si en el 2018 cada uno de los sueños que
                    tienes se cumplen? Wow, creo que describir eso sería mágico;
                    así que te invito a que te salgas del molde, se si has
                    escuchado frases como: deja de soñar despierto o coloca los
                    pies en la tierra; yo estoy convencida que el mundo es de
                    los grandes soñadores, porque sólo aquellos que se atreven a
                    salir al mundo, cumplir sus sueños, vencer cada reto y
                    disfrutar cada aprendizaje, pueden tener la felicidad de su
                    sueño cumplido.
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
                    ¿Qué sentirías si en el 2018 cada uno de los sueños que
                    tienes se cumplen? Wow, creo que describir eso sería mágico;
                    así que te invito a que te salgas del molde, se si has
                    escuchado frases como: deja de soñar despierto o coloca los
                    pies en la tierra; yo estoy convencida que el mundo es de
                    los grandes soñadores, porque sólo aquellos que se atreven a
                    salir al mundo, cumplir sus sueños, vencer cada reto y
                    disfrutar cada aprendizaje, pueden tener la felicidad de su
                    sueño cumplido.
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
                    ¿Qué sentirías si en el 2018 cada uno de los sueños que
                    tienes se cumplen? Wow, creo que describir eso sería mágico;
                    así que te invito a que te salgas del molde, se si has
                    escuchado frases como: deja de soñar despierto o coloca los
                    pies en la tierra; yo estoy convencida que el mundo es de
                    los grandes soñadores, porque sólo aquellos que se atreven a
                    salir al mundo, cumplir sus sueños, vencer cada reto y
                    disfrutar cada aprendizaje, pueden tener la felicidad de su
                    sueño cumplido.
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
      </div>
    );
  }
}

export default HomeIndex;

export const query = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
