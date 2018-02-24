import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import BannerLanding from '../components/BannerLanding';
import FavIcon from '../components/FavIcon';
import Details from '../components/Details';
import Faq from '../components/Faq';
import Feautures from '../components/Feautures';
import Testimonial from '../components/Testimonial';
import SEO from '../components/SEO';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

class EventPageTemplate extends React.Component {
  render() {
    const data = this.props.data.markdownRemark.frontmatter;
    const { date, description, title } = data;
    const { location } = this.props;

    return (
      <div>
        <FavIcon type="purple" />
        <SEO
          title={`Laura Maestre | ${title}`}
          description={description}
          url={location.pathname}
        />
        <BannerLanding title={title} description={description} time={date} />

        <div id="main">
          <Feautures />
          <Details />
          <Faq />
          <Testimonial />
        </div>
      </div>
    );
  }
}

export default EventPageTemplate;

export const pageQuery = graphql`
  query EventByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY HH:MM:SS ")
      }
    }
  }
`;
