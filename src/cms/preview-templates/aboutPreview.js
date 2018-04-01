import React from 'react';
import { About } from '../../templates/sobre-mi';

const AboutPagePreview = ({ entry, widgetFor, getAsset, ...rest }) => {
  const entryForm = entry.getIn(['data', 'form']);
  const form = entryForm ? entryForm.toJS() : {};

  console.log(rest);
  return (
    <About
      title={entry.getIn(['data', 'title'])}
      imagen={getAsset(entry.getIn(['data', 'imagen']))}
      content={widgetFor('body')}
      form={form}
    />
  );
};

export default AboutPagePreview;
