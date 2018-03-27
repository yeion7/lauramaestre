import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Banner from '../components/Banner';
import FavIcon from '../components/FavIcon';
import BannerLanding from '../components/BannerLanding';
import Feautures from '../components/Feautures';
import Laura from '../assets/images/laura5.jpg';

class Gift extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Conferencia renacer gratis</title>
          <meta
            name="description"
            content="¿Te gustaría tener un nuevo comienzo para crear la vida que deseas?"
          />
        </Helmet>
        <FavIcon type="all" />
        <BannerLanding
          title="Conferencia renacer gratis"
          description="¿Te gustaría tener un nuevo comienzo para crear la vida que deseas?"
          image={Laura}
        />
        <div id="main">
          <Feautures
            achievements={[
              {
                icon: 'fa-star',
                text: `Recordaras y sanarás las emociones que viviste durante tu
                gestación.`,
              },
              {
                icon: 'fa-medkit',
                text: `Sanarás la forma como naciste ya que ella marca como te presentas y te desenvuelves en la vida.`,
              },
              {
                icon: 'fa-plane',
                text: `Crearás nuevos permisos y proyectos para crear la vida que deseas.`,
              },
            ]}
            color="violet"
          />
        </div>
      </div>
    );
  }
}

export default Gift;
