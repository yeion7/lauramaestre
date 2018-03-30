import React from 'react';
import { LandingTemplate } from '../../templates/landing-page';

const landingPreview = props => {
  const { entry } = props;
  return (
    <LandingTemplate
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
    />
  );
};

export default landingPreview;
