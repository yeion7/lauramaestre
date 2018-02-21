import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import BannerLanding from '../../components/BannerLanding';
import FavIcon from '../../components/FavIcon';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class Landing extends React.Component {
  render() {
    return (
      <div>
        <FavIcon type="purple" />
        <Helmet>
          <title>Laura Maestre | webinar renacer</title>
          <meta
            name="description"
            content="Conecta con tu esencia de mujer sanando las memorias de tu nacimiento"
          />
        </Helmet>

        <BannerLanding
          title="Webinar renacer femenino"
          description="Conecta con tu esencia de mujer sanando las memorias de tu nacimiento"
          time="March 8, 2018 12:00:00"
        />

        <div id="main">
          <section id="features">
            <div className="inner">
              <header className="major">
                <h2>Qué lograras</h2>
              </header>
              <div className="row">
                <div>
                  <p>
                    Recordaras y sanarás las emociones que viviste durante tu
                    gestación.
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
