import React from 'react';
import Link from 'gatsby-link';
const FreeContent = ({ color, questions = [] }) => {
  return (
    <section id="features" className={color} style={{ textAlign: 'center' }}>
      <div className="inner">
        <i className="fa fa-gift fa-4x" style={{ color: 'white' }} />
        <header>
          <h2>
            Reclama tu entrenamiento virtual gratis: liberate de tus historías
            familiares limitantes
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
  );
};

export default FreeContent;
