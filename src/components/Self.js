import React from 'react';
import Laura from '../assets/images/laura1.jpg';

const Self = ({ color, achievements = [] }) => {
  return (
    <section id="self" className={color}>
      <div className="inner">
        <header>
          <h2>Quién es Laura Maestre</h2>
        </header>
        <div className="row">
          <div className="3u 12u$(small)">
            <img
              src={Laura}
              alt="Foto Laura Maestre"
              width="250px"
              height="250px"
              style={{ borderRadius: '50%' }}
            />
          </div>
          <div className="9u 12u$(small)">
            <p>
              Laura Maestre es una mujer apasionada, una buscadora incansable
              que siempre se preguntó cuál era el sentido de vivir. Sólo cuando
              sané por fin las heridas de mi niña interior y conecté con mi
              verdadera esencia, comencé por primera vez a crear la vida que
              realmente siempre había querido.
            </p>
            <p>
              Actualmente soy Renacedora donde a través de un taller acompaño a
              las personas para que a través de tus emociones san las historias
              de concepción, gestación y nacimiento y literalmente volverán a
              nacer para crear los permisos que quieren en su vida
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Self;
