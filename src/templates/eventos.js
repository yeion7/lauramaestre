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
  description = '',
  date = '',
  path = '',
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
  } = theme;
  return (
    <div>
      <FavIcon type={theme.favicon} />

      <SEO
        title={`Laura Maestre | ${title}`}
        description={description}
        url={path}
      />

      <BannerLanding
        title={title}
        description={description}
        time={date}
        color={theme.color}
        cta={cta}
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
            expanded={form.showMessage}
            listID={form.listID}
          />
        )}
      </div>
    </div>
  );
};
class EventPageTemplate extends React.Component {
  render() {
    const data = this.props.data.markdownRemark.frontmatter;
    const { location } = this.props;

    return <LandingTemplate {...data} pathname={location.pathname} />;
  }
}

export default EventPageTemplate;

export const pageQuery = graphql`
  query EventByPath($slug: String!) {
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
        }
      }
    }
  }
`;
