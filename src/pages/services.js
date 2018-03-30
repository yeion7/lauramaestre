import React from 'react';
import BannerLanding from '../components/BannerLanding';
import FavIcon from '../components/FavIcon';
import SEO from '../components/SEO';
import Details from '../components/Details';
import Feautures from '../components/Feautures';
import Questions from '../components/Questions';
import Testimonial from '../components/Testimonial';
import Faq from '../components/Faq';

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
          color="violet"
        />

        <div id="main">
          <Feautures
            color="violet"
            achievements={[
              {
                icon: 'fa-star',
                text: `Recordaras y sanarás las emociones que viviste durante tu gestación`,
              },
              {
                icon: 'fa-medkit',
                text: `Sanarás la forma como naciste ya que ella marca como te presentas y  te desenvuelves en la vida.`,
              },
              {
                icon: 'fa-plane',
                text: `Crearás nuevos permisos y proyectos para crear la vida que deseas.`,
              },
            ]}
          />
          <Questions
            questions={[
              `¿Por más que deseas tener una pareja siempre te encuentras el mismo patrón de pareja que no te hace feliz?`,
              `¿Has sentido que hay historias de tu familia que se repiten?`,
              `¿Sientes que a lo que te dedicas en vida es realmente a algo que no amas o no te generas ingresos económicos?`,
              `¿Hay enfermedades que se repiten en tu familia?`,
              `Si alguna de las preguntas contestaste que sí…entonces en el Taller Sanando tus Raíces y a través de tu árbol genealógico y tu concepción encontrarás las respuestas.`,
            ]}
            color="violet"
          />
          <Details
            color="violet"
            place="Cali"
            date="6 de Abril"
            price="Gratis"
          />
          <Testimonial color="violet" />
        </div>
      </div>
    );
  }
}

export default Landing;
