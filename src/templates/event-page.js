import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
// import BannerLanding from '../../components/BannerLanding';
// import FavIcon from '../../components/FavIcon';
// import SEO from '../../components/SEO';
import get from 'lodash/get';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

class EventPageTemplate extends React.Component {
  render() {
    console.log(this.props);
    // const post = this.props.data.markdownRemark;
    // const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    // const { location } = this.props;
    return (
      <h1>siteTitle</h1>
      // <div>
      //   <FavIcon type="purple" />
      //   <SEO
      //     title="Laura Maestre | Taller renacer"
      //     description="¿Te gustaría tener un nuevo comienzo para crear la vida que deseas?"
      //     url={location.pathname}
      //   />
      //   <BannerLanding
      //     title="Taller Renacer"
      //     description="¿Te gustaría tener un nuevo comienzo para crear la vida que deseas?"
      //     time="February 24, 2018 09:00:00"
      //   />
      //
      //   <div id="main">
      //     {/* Insert components */}
      //   </div>
      // </div>
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
         date(formatString: "MMMM DD, YYYY")
       }
     }
   }
`;
