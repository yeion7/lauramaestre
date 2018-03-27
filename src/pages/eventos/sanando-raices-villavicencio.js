import React from 'react';
import BannerLanding from '../../components/BannerLanding';
import FavIcon from '../../components/FavIcon';
import SEO from '../../components/SEO';
import Details from '../../components/Details';
import Faq from '../../components/Faq';
import Feautures from '../../components/Feautures';
import Testimonial from '../../components/Testimonial';
import Questions from '../../components/Questions';
import Image from '../../assets/images/landing.jpg';

class Landing extends React.Component {
  render() {
    const { location } = this.props;
    const color = 'blue';
    return (
      <div>
        <FavIcon type={color} />
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
          color={color}
        />

        <div id="main">
          <Feautures
            achievements={[
              {
                icon: 'fa-star',
                text: `Sanarás las memorias de su familia al  perdonar situaciones que han sido difíciles, como abandonos, abusos, rechazos, etc.`,
              },
              {
                icon: 'fa-medkit',
                text: `Cortarás las cargas que te entregaron tus antepasados  mediante un proceso de liberación y transmutación.`,
              },
              {
                icon: 'fa-plane',
                text: `Crearás nuevos permisos y proyectos para comenzar a construir la vida que deseas.`,
              },
            ]}
            color={color}
          />
          <Questions
            questions={[
              `¿Por más que deseas tener una pareja siempre te encuentras el mismo patrón de pareja que no te hace feliz?`,
              `¿Has sentido que hay historias de tu familia que se repiten?`,
              `¿Sientes que a lo que te dedicas en vida es realmente a algo que no amas o no te generas ingresos económicos?`,
              `¿Hay enfermedades que se repiten en tu familia?`,
              `Si alguna de las preguntas contestaste que sí…entonces en el Taller Sanando tus Raíces y a través de tu árbol genealógico y tu concepción encontrarás las respuestas.`,
            ]}
            color={color}
          />
          <Details
            place="Villavicencio, Meta."
            date="5 de Mayo"
            price="$130.000"
            color={color}
          />
          <Faq color={color} />
        </div>
      </div>
    );
  }
}

export default Landing;
