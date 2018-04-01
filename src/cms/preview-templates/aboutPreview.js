import React from 'react';
import { About } from '../../templates/sobre-mi';

const AboutPagePreview = ({ entry, widgetFor }) => (
  <About title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
);

export default AboutPagePreview;
