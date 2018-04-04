import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import BannerLanding from '../components/BannerLanding';
import FavIcon from '../components/FavIcon';
import Feautures from '../components/Feautures';
import Testimonial from '../components/Testimonial';
import Questions from '../components/Questions';
import Contact from '../components/Contact';
import Included from '../components/Included';
import SEO from '../components/SEO';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const LandingTemplate = ({
  favicon,
  title = '',
  subtitle = '',
  description = '',
  imagen,
  date = '',
  path = '',
  url = '',
  theme = {},
  achievements = [],
  details = [],
  cta = '',
  faqs = [],
  situations = [],
  testimonials = [],
  includes = [],
  form = {},
}) => {
  const {
    showAchievements,
    showForm,
    showSituations,
    showTestimonials,
    showFreeContent,
    showIncludes,
    useImage,
  } = theme;

  return (
    <div>
      <FavIcon type={theme.favicon} />

      <SEO
        image={imagen}
        title={`Laura Maestre | ${title}`}
        description={description}
        path={`servicios/${path}`}
        url={url}
      />

      <BannerLanding
        title={title}
        description={subtitle}
        time={date}
        color={theme.color}
        cta={cta}
        image={useImage ? imagen : null}
      />

      <div id="main">
        {showAchievements && (
          <Feautures color={theme.color} achievements={achievements} />
        )}
        {showSituations && (
          <Questions questions={situations} color={theme.color} />
        )}

        {showIncludes && <Included includes={includes} />}
        {showTestimonials && (
          <Testimonial testimonials={testimonials} color={theme.color} />
        )}

        {showForm && (
          <Contact
            title={form.title}
            listID={form.listID}
            expanded={form.showMessage}
          />
        )}
      </div>
    </div>
  );
};
class EventPageTemplate extends React.Component {
  render() {
    const data = this.props.data.markdownRemark.frontmatter;
    const { siteUrl } = this.props.data.site.siteMetadata;

    return (
      <LandingTemplate {...data} path={post.frontmatter.path} url={siteUrl} />
    );
  }
}

export default EventPageTemplate;

export const pageQuery = graphql`
  query ServicesByPath($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      id
      html
      frontmatter {
        path
        templateKey
        title
        subtitle
        subtitle
        description
        cta
        imagen
        achievements {
          icon
          text
        }
        includes {
          icon
          text
        }
        situations {
          question
        }
        testimonials {
          imagen
          name
          testimony
        }
        form {
          listID
          title
          showMessage
        }
        theme {
          color
          favicon
          showAchievements
          showForm
          showIncludes
          showSituations
          showTestimonials
          useImage
        }
      }
    }
  }
`;
