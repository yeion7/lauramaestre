import React from 'react';
import Link from 'gatsby-link';
const FreeContent = ({ color, questions = [] }) => {
  return (
    <div className="inner">
      <h2>También tenemos recursos GRATIS para ti</h2>
      <div className="row freecontent">
        <div className="12u$(small) box align-center ">
          <i className="fa fa-3x fa-calendar" />
          <h3>Agenda un sesión gratuita de 30 minutos</h3>
          <a
            target="_blank"
            href="https://calendly.com/hablame"
            className="button icon fa-check"
          >
            Inscribirme
          </a>
        </div>
        <div className="12u$(small) box align-center ">
          <i className="fa fa-3x fa-child" />
          <h3>Asiste a nuestra conferencia gratuita</h3>
          <Link
            to="/eventos/conferencia-gratis"
            className="button icon fa-check"
          >
            Asistir
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FreeContent;
