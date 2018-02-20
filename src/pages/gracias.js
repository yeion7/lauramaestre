import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Banner from '../components/Banner';
import FavIcon from '../components/FavIcon';

class ThanksPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Laura Maestre</title>
          <meta name="description" content="Suscripción exitosa" />
        </Helmet>
        <FavIcon type="all" />

        <Banner />

        <div id="main">
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Gracias por registrarte</h2>
              </header>
              <p>
                En unos minutos estare comunicandome contigo para darte más
                detalles
              </p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ThanksPage;
