import React from 'react';

const Features = ({ color, achievements = [] }) => {
  return (
    <section id="features" className={color}>
      <div className="inner">
        <header>
          <h2>Qué lograras</h2>
        </header>
        <div className="row">
          {achievements.map(({ text, icon = 'fa-star' } = {}) => (
            <div className="feature">
              <i className={`fa fa-4x ${icon}`} style={{ color: 'white' }} />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
