import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Banner from '../components/Banner';
import FavIcon from '../components/FavIcon';
import Self from '../components/Self';
import SEO from '../components/SEO';
import graphql from 'graphql';

import pic01 from '../assets/images/pic01.jpg';

class BlogPage extends React.Component {
  render() {
    const { title, description } = this.props.data.site.siteMetadata;

    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <div>
        <SEO title={`Blog | ${title}`} description={description} />
        <FavIcon type="all" />

        <Banner title="Blog" />

        <section id="two" className="spotlights">
          {posts.map(
            ({
              node: { frontmatter: { title, description, date, path, imagen } },
            }) => (
              <section key={date}>
                <Link to={`/blog/${path}`} className="image">
                  <img src={imagen || pic01} alt="" />
                </Link>
                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>{title}</h3>
                    </header>
                    <p>{description}</p>
                    <ul className="actions">
                      <li>
                        <Link to={`/blog/${path}`} className="button">
                          Leer más
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            )
          )}
        </section>
      </div>
    );
  }
}

export default BlogPage;

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { regex: "/blog/" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date
            templateKey
            path
            imagen
          }
        }
      }
    }
  }
`;
