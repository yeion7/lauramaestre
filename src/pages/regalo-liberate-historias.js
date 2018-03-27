import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Banner from '../components/Banner';
import FavIcon from '../components/FavIcon';
import BannerLanding from '../components/BannerLanding';
import Image from '../assets/images/landing.jpg';

class Gift extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Reclama tu entrenamiento virtual gratis</title>
          <meta
            name="description"
            content="Reclama tu entrenamiento virtual: liberate de tus historías
          familiares limitantes"
          />
        </Helmet>
        <FavIcon type="all" />
        <BannerLanding
          title="Reclama tu entrenamiento virtual gratis"
          description="Liberate de tus historías familiares limitantes"
          image={Image}
          cta="Registrarme"
        />
      </div>
    );
  }
}

export default Gift;
