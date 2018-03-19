import React from 'react';
import PropTypes from 'prop-types';

const Details = ({ place, date, price }) => {
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
                className="fa fa-map-marker fa-4x"
                style={{ color: 'cadetblue' }}
              />
              <h3>{place}</h3>
            </div>
          </div>
          <div className="feature">
            <div className="card">
              <i
                className="fa fa-calendar-check-o fa-4x"
                style={{ color: 'cadetblue' }}
              />
              <h3>{date}</h3>
            </div>
          </div>
          <div className="feature">
            <div className="card" style={{ color: 'cadetblue' }}>
              <i className="fa fa-money fa-4x" />
              <h3>{price}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
