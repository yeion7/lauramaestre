import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import BannerLanding from '../components/BannerLanding';
import FavIcon from '../components/FavIcon';
import Details from '../components/Details';
import Faq from '../components/Faq';
import Feautures from '../components/Feautures';
import FreeContent from '../components/FreeContent';
import Testimonial from '../components/Testimonial';
import Questions from '../components/Questions';
import Self from '../components/Self';
import Contact from '../components/Contact';
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
  form = {},
}) => {
  const {
    showAchievements,
    showDetails,
    showFaqs,
    showForm,
    showSelf,
    showSituations,
    showTestimonials,
    showFreeContent,
    useImage,
  } = theme;

  return (
    <div>
      <FavIcon type={theme.favicon} />

      <SEO
        image={imagen}
        title={`Laura Maestre | ${title}`}
        description={description}
        path={`eventos/${path}`}
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
        {showDetails && (
          <Details
            color={theme.color}
            place={details.city}
            date={details.date}
            price={details.price}
          />
        )}
        {showSituations && (
          <Questions questions={situations} color={theme.color} />
        )}
        {showFreeContent && <FreeContent color={theme.color} />}
        {showSelf && <Self color={theme.color} />}
        {showFaqs && <Faq questions={faqs} color={theme.color} />}
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
  query EventByPath($slug: String!) {
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
        description
        cta
        date(formatString: "DD MMMM, YYYY")
        imagen
        achievements {
          icon
          text
        }
        situations {
          question
        }
        details {
          city
          date
          price
        }
        faqs {
          answer
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
          showDetails
          showFaqs
          showForm
          showSelf
          showSituations
          showTestimonials
          showFreeContent
          useImage
        }
      }
    }
  }
`;
