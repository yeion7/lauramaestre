import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Banner from '../components/Banner';
import FavIcon from '../components/FavIcon';
import Self from '../components/Self';
import SEO from '../components/SEO';
import graphql from 'graphql';

import pic01 from '../assets/images/pic01.jpg';
import pic02 from '../assets/images/pic02.jpg';
import pic03 from '../assets/images/pic03.jpg';
import pic04 from '../assets/images/pic04.jpg';
import pic05 from '../assets/images/pic05.jpg';
import pic06 from '../assets/images/pic06.jpg';

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <SEO title="Laura Maestre | Sobre mi" description="" />
        <FavIcon type="all" />

        <Banner />

        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>Laura Maestre</h1>
              </header>
              <p>
                Laura Maestre es una mujer apasionada, una buscadora incansable
                que siempre se preguntó cuál era el sentido de vivir. Sólo
                cuando sané por fin las heridas de mi niña interior y conecté
                con mi verdadera esencia, comencé por primera vez a crear la
                vida que realmente siempre había querido.
              </p>
              <p>
                Me desempeño como Conferencista y Terapeuta en Bioreprogramación
                y Terapia Regresiva Reconstructiva, Mentora en procesos
                personales y grupales que me permiten cumplir mi propósito de
                vida, el cuál es es acompañar a las personas para que diseñen
                una vida en balance conectando con su niño interior y cumpliendo
                cada uno de sus sueños.
              </p>
              <p>
                Actualmente soy Renacedora donde a través de un taller acompaño
                a las personas para que a través de tus emociones san las
                historias de concepción, gestación y nacimiento y literalmente
                volverán a nacer para crear los permisos que quieren en su vida
              </p>
              <p>
                También soy Educadora experiencial enfocada en el lenguaje del
                inconsciente: la metáfora; de esta forma imparto talleres y
                conferencias donde se generan experiencias inolvidables de
                cambio y aprendizaje, conectando con las emociones de las
                personas y creando un plan de acción para producir una verdadera
                transformación.
              </p>

              <ul>
                <li>Certificada en Bioreprogramación.</li>
                <li>Formada como Renacedora en Bioreprogramación.</li>
                <li>
                  Certificada en Educación Experiencial con Enfoque de Metáforas
                  por la Universidad Dr José Matías Delgado del Salvador.
                </li>
                <li>
                  Practitioner en Técnicas Regresivas Aplicadas en OMTRA
                   (Organización Mundial de Terapia Regresiva Reconstructiva) .
                </li>
                <li>
                  Certificación en Mentoring desde la Esencia para acompañar a
                  las personas en procesos de transformación desde la conexión
                  con la esencia.
                </li>
                <li>
                  Seminarios Básico y Profundización de 5 Leyes Biológicas
                  descubiertas por el Doctor Hamer en la Ciudad de México.
                </li>
                <li>
                  He realizado talleres en la Escuela de Bioreprogramación y en
                  otras escuelas acerca Descodificación Biológica de
                  Enfermedades, Consciencia Corporal, Hipnosis, Psicogenealogía
                  y Prosperidad.
                </li>
                <li>Certificada como como Renacedora en Bioreprogramación.</li>
                <li>
                  Practitioner en Técnicas Regresivas Aplicadas en OMTRA
                   (Organización Mundial de Terapia Regresiva Reconstructiva) .
                </li>
                <li>
                  Diplomado en Programación Neurolinguistica y Coaching
                  Cetificado por Richard Bandler Co-Creador de PNL.
                </li>
                <li>Best seller con mi libro Arcoiris: Tu mirada al Alma</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default AboutMe;
