import React from 'react';
import BannerLanding from '../../components/BannerLanding';
import FavIcon from '../../components/FavIcon';
import SEO from '../../components/SEO';
import Details from '../../components/Details';
import Faq from '../../components/Faq';
import Feautures from '../../components/Feautures';
import Testimonial from '../../components/Testimonial';

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
          time="April 7, 2018 09:00:00"
          color="violet"
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
          <Details
            color="violet"
            place="Cali"
            date="7 de Abril"
            price="$300.000"
          />
          <Faq color="violet" />
          <Testimonial color="violet" />
        </div>
      </div>
    );
  }
}

export default Landing;
