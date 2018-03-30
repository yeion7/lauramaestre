import React from 'react';
import LauraImage from '../assets/images/laura4.jpg';

const Banner = ({
  title = 'Diseña tu vida',
  description = 'Sueña - Sana - Transforma - Actua',
}) => (
  <section
    id="banner"
    className="major"
    style={{ backgroundImage: `url(${LauraImage})` }}
  >
    <div className="inner">
      <header>
        <h1>{title}</h1>
      </header>
      <div className="content">
        <p>{description}</p>
      </div>
    </div>
  </section>
);

export default Banner;
