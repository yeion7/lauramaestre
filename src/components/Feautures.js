import React from 'react';

const Features = () => {
  return (
    <section id="features">
      <div className="inner">
        <header>
          <h2>Qué lograras</h2>
        </header>
        <div className="row">
          <div className="feature">
            <i class="fa fa-star fa-4x" style={{ color: 'white' }} />
            <p>
              Recordaras y sanarás las emociones que viviste durante tu
              gestación.
            </p>
          </div>
          <div className="feature">
            <i class="fa fa-medkit fa-4x" style={{ color: 'white' }} />

            <p>
              Sanarás la forma como naciste ya que ella marca como te
              presentas y te desenvuelves en la vida.
            </p>
          </div>
          <div className="feature">
            <i class="fa fa-plane fa-4x" style={{ color: 'white' }} />
            <p>
              Crearás nuevos permisos y proyectos para crear la vida que
              deseas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
