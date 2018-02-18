import React from 'react';

const BannerLanding = ({ title, description }) => (
  <section id="banner">
    <div className="inner">
      <header className="">
        <h1>{title}</h1>
      </header>
      <div className="content">
        <p>{description}</p>
      </div>
      <ul className="actions">
        <li>
          <a href="#one" className="button special">
            Registrarme
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default BannerLanding;
