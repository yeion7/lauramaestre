import React from 'react';
import BannerLanding from '../../components/BannerLanding';
import FavIcon from '../../components/FavIcon';
import SEO from '../../components/SEO';
import Details from '../../components/Details';
import Feautures from '../../components/Feautures';
import Testimonial from '../../components/Testimonial';

class Landing extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <FavIcon type="purple" />
        <SEO
          title="Laura Maestre | Conferencia renacer"
          description="¿Te gustaría tener un nuevo comienzo para crear la vida que deseas?"
          url={location.pathname}
        />
        <BannerLanding
          title="Conferencia Renacer"
          description="¿Te gustaría tener un nuevo comienzo para crear la vida que deseas?"
          time="April 6, 2018 09:00:00"
        />

        <div id="main">
          <Feautures />
          <Details place="Cali" date="6 de Abril" price="Gratis" />
          <Testimonial />
        </div>
      </div>
    );
  }
}

export default Landing;
