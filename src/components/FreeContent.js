import React from 'react';
import Link from 'gatsby-link';
import Free from './Free';

const FreeContent = ({ color, content = [] }) => {
  return (
    <div className="inner">
      <h2>También tenemos recursos GRATIS para ti</h2>
      <div className="row freecontent">
        {content &&
          content.map(({ icon, copy, url, cta }) => (
            <Free icon={icon} copy={copy} url={url} cta={cta} />
          ))}
      </div>
    </div>
  );
};

export default FreeContent;
