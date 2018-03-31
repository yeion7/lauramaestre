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

export const LandingTemplate = ({
  favicon,
  title,
  description,
  date,
  pathname,
  theme,
}) => {
  return (
    <div>
      {/* <FavIcon type={theme.favicon} /> */}

      <SEO
        title={`Laura Maestre | ${title}`}
        description={description}
        url={pathname}
      />

      <BannerLanding
        title={title}
        description={description}
        time={date}
        // color={theme.color}
      />

      {/* <div id="main">
        <Feautures />
        <Details />
        <Faq />
        <Testimonial />
      </div> */}
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
        title
        description
        date(formatString: "MMMM DD, YYYY HH:MM:SS ")
      }
    }
  }
`;
