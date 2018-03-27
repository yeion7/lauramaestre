import React from 'react';
import BannerLanding from '../../components/BannerLanding';
import FavIcon from '../../components/FavIcon';
import SEO from '../../components/SEO';
import Details from '../../components/Details';
import Feautures from '../../components/Feautures';
import Testimonial from '../../components/Testimonial';
import Faq from '../../components/Faq';

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
          <Details
            color="violet"
            place="Cali"
            date="6 de Abril"
            price="Gratis"
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
            color="violet"
          />
          <Testimonial color="violet" />
        </div>
      </div>
    );
  }
}

export default Landing;
