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
        </div>
      </div>
    );
  }
}

export default Landing;
