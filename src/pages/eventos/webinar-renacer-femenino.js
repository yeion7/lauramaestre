import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import BannerLanding from '../../components/BannerLanding';
import FavIcon from '../../components/FavIcon';
import SEO from '../../components/SEO';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class Landing extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <div>
        <FavIcon type="purple" />
        <SEO
          title="Laura Maestre | webinar renacer"
          description="Conecta con tu esencia de mujer sanando las memorias de tu nacimiento"
          url={location.pathname}
        />

        <BannerLanding
          title="5 claves para conectar con tu esencia de mujer"
          time="March 7, 2018 19:00:00"
        />

        <div id="main">
          <section id="features">
            <div className="inner">
              <header>
                <h2>Qué lograras</h2>
              </header>
              <div className="row">
                <div>
                  <p>
                    Reconocerás la influencia que han tenido las historias
                    alrededor de tu nacimiento en los roles que desempeñas como
                    la hermosa mujer que eres
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Landing;
