import React from 'react';
import BannerLanding from '../../components/BannerLanding';
import FavIcon from '../../components/FavIcon';
import SEO from '../../components/SEO';
import Details from '../../components/Details';
import Faq from '../../components/Faq';
import Feautures from '../../components/Feautures';
import Testimonial from '../../components/Testimonial';
import Image from '../../assets/images/landing.jpg';

class Landing extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <FavIcon type="blue" />
        <SEO
          title="Laura Maestre | Taller Sanando Tus Raíces"
          description="¿Te has preguntado porqué no tienes los resultados que quieres en tu vida? ¿Has sentido que hay historias de tu familia que se repiten?"
          url={location.pathname}
        />
        <BannerLanding
          title="Taller Sanando Tus Raíces"
          description="¿Te has preguntado porqué no tienes los resultados que quieres en tu vida? ¿Has sentido que hay historias de tu familia que se repiten?"
          time="May 5, 2018 09:00:00"
          image={Image}
        />

        <div id="main">
          <Feautures
            achievements={[
              {
                icon: 'fa-star',
                text: `Realizarás tu árbol genealógico para descubrir las historias y proyectos que has cargado de tus antepasados.`,
              },
              {
                icon: 'fa-medkit',
                text: `Cortarás las cargas que te entregaron tus antepasados mediante un proceso de liberación.`,
              },
              {
                icon: 'fa-plane',
                text: `Crearás nuevos permisos y proyectos para crear la vida que deseas.`,
              },
            ]}
          />
          <Details
            place="Villavicencio, Meta."
            date="5 de Mayo"
            price="$130.000"
          />
          <Faq />
          <Testimonial />
        </div>
      </div>
    );
  }
}

export default Landing;
