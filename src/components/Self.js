import React from 'react';
import Laura from '../assets/images/laura1.jpg';
import Link from 'gatsby-link';

const Self = ({ color }) => {
  return (
    <section id="self" className={color}>
      <div className="inner">
        <header>
          <h2>¿Quién es Laura Maestre?</h2>
        </header>
        <div className="row">
          <div className="self-image">
            <div
              className="laura"
              style={{ backgroundImage: `url(${Laura})` }}
            />
          </div>
          <div className="self-description">
            <p>
              Laura Maestre es una mujer apasionada, una buscadora incansable
              que siempre se preguntó, ¿cuál era el sentido de vivir?. Sólo
              cuando sané por fin las heridas de mi niña interior y conecté con
              mi verdadera esencia, comencé por primera vez a crear la vida que
              realmente siempre había querido.
            </p>
            <p>
              Actualmente soy Renacedora, donde a través de un taller acompaño a
              las personas para que a través de sus emociones sanen las
              historias de concepción, gestación, nacimiento y literalmente
              volverán a nacer para crear los permisos que quieren en su vida.
            </p>
            <Link to="/sobre-mi" className="button white icon fa-check">
              Ver más
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Self;
