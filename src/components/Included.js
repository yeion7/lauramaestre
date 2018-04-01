import React from 'react';

const Included = ({ color, includes = [] }) => {
  return (
    <section id="details" className={color}>
      <div className="inner">
        <header>
          <h2>Qué incluye</h2>
        </header>
        <div className="row" style={{ display: 'flex' }}>
          {includes.map(include => {
            return (
              <div className="feature">
                <div className="card">
                  <i
                    className={`fa ${include.icon} fa-4x`}
                    style={{ color: 'cadetblue' }}
                  />
                  <h3>{include.text}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="inner align-center" style={{ padding: '15px 0' }}>
          <a href="#contact" className="button big icon fa-check ">
            Registrate
          </a>
        </div>
      </div>
    </section>
  );
};

export default Included;
