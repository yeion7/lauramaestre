import React from 'react';
import { LandingTemplate } from '../../templates/eventos';

const landingPreview = props => {
  const { entry } = props;
  const entryTestimonials = entry.getIn(['data', 'testimonials']);
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : [];

  const entryAchievements = entry.getIn(['data', 'achievements']);
  const achievements = entryAchievements ? entryAchievements.toJS() : [];

  const entrySituations = entry.getIn(['data', 'situations']);
  const situations = entrySituations ? entrySituations.toJS() : [];

  const entryFaq = entry.getIn(['data', 'faqs']);
  const faqs = entryFaq ? entryFaq.toJS() : [];

  const entryDetails = entry.getIn(['data', 'details']);
  const details = entryDetails ? entryDetails.toJS() : {};

  const entryTheme = entry.getIn(['data', 'theme']);
  const theme = entryTheme ? entryTheme.toJS() : {};

  const entryForm = entry.getIn(['data', 'form']);
  const form = form ? form.toJS() : {};

  return (
    <LandingTemplate
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      date={entry.getIn(['data', 'date'])}
      cta={entry.getIn(['data', 'cta'])}
      theme={theme}
      details={details}
      situations={situations}
      faqs={faqs}
      form={form}
      testimonials={[]}
      achievements={achievements}
    />
  );
};

export default landingPreview;
