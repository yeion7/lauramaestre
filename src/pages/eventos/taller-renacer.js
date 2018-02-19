import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import BannerLanding from '../../components/BannerLanding';
import FavIcon from '../../components/FavIcon';

import pic08 from '../../assets/images/pic08.jpg';
import pic09 from '../../assets/images/pic09.jpg';
import pic10 from '../../assets/images/pic10.jpg';

const Landing = props => (
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
          <div className="row 200%">
            <div
              className="4u 12u$(medium)"
              dangerouslySetInnerHTML={{
                __html: `<iframe
                    frameborder="0"
                    style="border:0"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBYCgpafLYqaUQbYQMTEPoHMSaOEVFlfh0
        &q=Finca+la+Dacha"
                    allowfullscreen
                  />`,
              }}
            />
            <div className="4u 12u$(medium)">
              <h2>Villavicencio</h2>
              <h3>24 - 25 - 26 de febrero</h3>
            </div>
            <div className="4u 12u$(medium)">
              <h2>Inversión</h2>
              <h3>$ 300.000</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Landing;
