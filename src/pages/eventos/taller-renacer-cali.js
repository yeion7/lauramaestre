import React from 'react';
import BannerLanding from '../../components/BannerLanding';
import FavIcon from '../../components/FavIcon';
import SEO from '../../components/SEO';
import Details from '../../components/Details';
import Faq from '../../components/Faq';
import Feautures from '../../components/Feautures';
import Testimonial from '../../components/Testimonial';
import Questions from '../../components/Questions';
import Self from '../../components/Self';
import Link from 'gatsby-link';

class Landing extends React.Component {
  render() {
    const { location } = this.props;
    const color = 'violet';
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
          color={color}
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
            color={color}
          />
          <Questions
            questions={[
              `¿Tienes miedos que no te dejan avanzar en el camino de cumplir tus sueños?`,
              `¿Has tenido dificultad en tener una  relación de pareja que quieres?`,
              `¿Pierdes el control muy fácil de tus emociones y actúas bajo el miedo, rabia o tristeza?`,
              `¿Sientes que tu vida no tiene sentido?`,
              `¿No te dedicas a lo que te gusta o en lo que te dedicas no generas los resultados económicos que quieres?`,
              `¿Actualmente no tienes las condiciones ideales de salud?`,

              `Si alguna de las preguntas contestaste que sí…entonces en el Taller Renacer encontrarás aquello que te ha limitado para lograr lo que quieres`,
            ]}
            color={color}
          />
          <div className="inner">
            <h2>También tenemos recursos GRATIS para ti</h2>
            <div className="row">
              <div className="12u$(small) box align-center ">
                <i className="fa fa-3x fa-calendar" />
                <h3>Agenda un sesión gratuita de 30 minutos</h3>
                <a
                  target="_blank"
                  href="https://calendly.com/hablame"
                  className="button icon fa-check"
                >
                  Inscribirme
                </a>
              </div>
              <div className="12u$(small) box align-center ">
                <i className="fa fa-3x fa-child" />
                <h3>Asiste a nuestra conferencia gratuita</h3>
                <Link to="/conferencia-gratis" className="button icon fa-check">
                  Asistir
                </Link>
              </div>
            </div>
          </div>
          <Self color={color} />

          <Details
            color={color}
            place="Cali"
            date="7 de Abril"
            price="$350.000"
          />
          <Faq
            questions={[
              {
                question: `¿Cuál es la metodología utilizada en el taller?`,
                answer: `El taller es terapeútico y casi personalizado. Sólo tiene 6 cupos. Cada persona recibe terapia y se hace el correspondiente nacimiento a cada uno.`,
              },
              {
                question: `¿Qué es una terapia?`,
                answer: `Una terapia es un proceso que utiliza la relajación y las emociones para ir a momentos de etapas tempranas como concepción, gestación y nacimiento; resentir la emoción, colocar una nueva y reconstruir una nueva historia.`,
              },
              {
                question: `¿Qué duración tiene el taller?`,
                answer: `El taller dura un día de 8am-6pm.`,
              },
              {
                question: `¿Debo llevar comidas?`,
                answer: `El taller incluye refrigerio mañana y tarde y almuerzo.`,
              },
              {
                question: `¿Qué Incluye la inversión del taller?`,
                answer: `Incluye Refrigerios, almuerzo, certificado de nacimiento.`,
              },
              {
                question: `¿En qué ropa debo llevar al taller?`,
                answer: `Ropa cómoda. Al final de taller se pide una prenda blanca puede ser completa (vestido) o camisa o pantalón; pero esta es al final.`,
              },
              {
                question: `¿Debo tener una preparación anterior al taller?`,
                answer: `La única preparación es que una semana antes, se envían una ficha para llenar respecto a tu nacimiento y así empezar a abrir el inconsciente.`,
              },
              {
                question: `¿Debe ser mayor de edad para hacer el taller?`,
                answer: `Se recomienda mayor de 8 años, porque antes de esta edad se debe hacer la terapia a los papás`,
              },
              {
                question: `¿El taller es presencial o virtual?`,
                answer: `El evento es presencial`,
              },
              {
                question: `¿Qué métodos de pago existen?`,
                answer: `Por PayU o consignación directa`,
              },
            ]}
            color={color}
          />
          <Testimonial color="violet" />
        </div>
      </div>
    );
  }
}

export default Landing;
