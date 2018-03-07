import React, { Component } from 'react';
import Countdown from 'react-countdown-now';

class BannerLanding extends Component {
  render() {
    const { title, description, time } = this.props;
    return (
      <section id="banner">
        <div className="inner">
          <header className="">
            <h1>{title}</h1>
          </header>
          <div className="content">
            <p>{description}</p>
          </div>
          {time && (
            <div id="content">
              <Countdown
                date={new Date(time)}
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
                        <div className="time seg">
                          {seconds}
                          <span>Seg</span>
                        </div>
                      </div>
                    )
                  );
                }}
              />,
            </div>
          )}
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
  }
}

export default BannerLanding;
