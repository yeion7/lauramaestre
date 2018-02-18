import React from 'react';
import Countdown from 'react-countdown-now';

const BannerLanding = ({ title, description }) => (
  <section id="banner">
    <div className="inner">
      <header className="">
        <h1>{title}</h1>
      </header>
      <div className="content">
        <p>{description}</p>
      </div>
      <div id="content">
        <Countdown
          date={new Date('February 24, 2018 09:00:00')}
          renderer={({ days, hours, minutes, seconds, completed }) => {
            return (
              !completed && (
                <div className="countdown">
                  <div className="time">
                    {days}
                    <span>Días</span>
                  </div>
                  <div className="time">
                    {hours}
                    <span>Horas</span>
                  </div>
                  <div className="time">
                    {minutes}
                    <span>Min</span>
                  </div>
                </div>
              )
            );
          }}
        />,
      </div>
      <ul className="actions">
        <li>
          <a href="#contact" className="button special">
            Registrarme
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default BannerLanding;
