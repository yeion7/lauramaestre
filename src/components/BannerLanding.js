import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import LauraImage from '../assets/images/laura4.jpg';

class BannerLanding extends Component {
  render() {
    const {
      title,
      description,
      time,
      image,
      color = 'violet',
      cta = 'Más información',
    } = this.props;
    return (
      <section
        id="banner"
        style={{ backgroundImage: `url(${image || LauraImage})` }}
      >
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
                        <div className={`time ${color}`}>
                          {days}
                          <span>Días</span>
                        </div>
                        <div className={`time ${color}`}>
                          {hours}
                          <span>Horas</span>
                        </div>
                        <div className={`time ${color}`}>
                          {minutes}
                          <span>Min</span>
                        </div>
                        <div className={`time seg ${color}`}>
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
                {cta}
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default BannerLanding;
