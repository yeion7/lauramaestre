import React from 'react';

const Free = ({ icon, copy, url, cta }) => (
  <div className="12u$(small) box align-center ">
    <i className={`fa fa-3x ${icon}`} />
    <h3>{copy}</h3>
    <a target="_blank" href={url} className="button icon fa-check">
      {cta}
    </a>
  </div>
);

export default Free;
