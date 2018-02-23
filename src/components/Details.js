import React from 'react';
import PropTypes from 'prop-types';

const Details = () => {
  return (
    <section id="details">
      <div className="inner">
        <header>
          <h2>Cuándo</h2>
        </header>
        <div className="row">
          <div className="feature">
            <div className="card">
              <i
                class="fa fa-map-marker fa-4x"
                style={{ color: 'cadetblue' }}
              />
              <h3>Villavicencio</h3>
            </div>
          </div>
          <div className="feature">
            <div className="card">
              <i
                class="fa fa-calendar-check-o fa-4x"
                style={{ color: 'cadetblue' }}
              />
              <h3>24 - 25 - 26 de Febrero</h3>
            </div>
          </div>
          <div className="feature">
            <div className="card" style={{ color: 'cadetblue' }}>
              <i class="fa fa-money fa-4x" />
              <h3>$ 300.000</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Details;
