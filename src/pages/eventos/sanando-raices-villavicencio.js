import React from 'react';
import BannerLanding from '../../components/BannerLanding';
import FavIcon from '../../components/FavIcon';
import SEO from '../../components/SEO';
import Details from '../../components/Details';
import Faq from '../../components/Faq';
import Feautures from '../../components/Feautures';
import Testimonial from '../../components/Testimonial';
import Questions from '../../components/Questions';
import FreeContent from '../../components/FreeContent';
import Image from '../../assets/images/landing.jpg';
import Link from 'gatsby-link';

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
          <section
            id="features"
            className={color}
            style={{ textAlign: 'center' }}
          >
            <div className="inner">
              <i className="fa fa-gift fa-4x" style={{ color: 'white' }} />
              <header>
                <h2>
                  Reclama tu entrenamiento virtual gratis: liberate de tus
                  historías familiares limitantes
                </h2>
                <Link
                  to="/regalo-liberate-historias/"
                  className="button special icon fa-gift big"
                >
                  Reclamar regalo
                </Link>
              </header>
            </div>
          </section>
          <Faq
            questions={[
              {
                question: `¿Qué duración tiene el taller?`,
                answer: `El taller dura un día de 8am-6pm.`,
              },
              {
                question: `¿Qué Incluye la inversión del taller?`,
                answer: `Incluye Refrigerios, recordatorio`,
              },
              {
                question: `¿Debo llevar comidas?`,
                answer: `El taller sólo incluye refrigerios; no incluye el almuerzo.`,
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
                question: `¿Cuál es la metodología utilizada en el taller?`,
                answer: `El taller es grupal y los participantes realizarán su árbol genealógico donde descubrirán a través de fechas, nombres, enfermedades, características, si están reparando historias familiares que no les dejan avanzar.`,
              },
              {
                question: `¿Debe ser mayor de edad para hacer el taller?`,
                answer: `Se recomienda mayor de 15 años`,
              },
              {
                question: `¿El taller es presencial o virtual?`,
                answer: `Por ahora sólo presencial`,
              },
              {
                question: `¿Qué métodos de pago existen?`,
                answer: `Por PayU o consignación directa`,
              },
              {
                question: `¿En qué lugar se realiza el taller?`,
                answer: `En el Hotel Saloma.  Calle 26 #38-69, Villavicencio. Meta.`,
              },
            ]}
            color={color}
          />
        </div>
      </div>
    );
  }
}

export default Landing;
