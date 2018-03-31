import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import graphql from 'graphql';
import SEO from '../components/SEO';
import FavIcon from '../components/FavIcon';
import Laura from '../assets/images/laura1.jpg';

class BlogPostTemplate extends React.Component {
  render() {
    console.log(this.props);
    const { next, events } = this.props.pathContext;

    console.log(events);
    const post = this.props.data.markdownRemark;
    const { title, description, path, imagen } = post.frontmatter;
    return (
      <div>
        <SEO
          title={title}
          description={description}
          url={path}
          isPost
          image={imagen || Laura}
        />
        <FavIcon />
        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>{post.frontmatter.title}</h1>
                <p>{post.frontmatter.date}</p>
              </header>
              <div
                className="blog"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
              {next && (
                <div className="align-center">
                  <Link
                    className="button "
                    to={`/blog/${next.frontmatter.path}`}
                  >
                    Leer más
                  </Link>
                </div>
              )}
              <section id="two">
                <div className="inner">
                  <header className="major">
                    <h2>Próximos eventos</h2>
                  </header>
                  <div className="events">
                    {events &&
                      events.map(({ node: { frontmatter } }) => (
                        <div className="box events-card" key={frontmatter.date}>
                          <i className="fa fa-3x fa-calendar" />
                          <h4>{frontmatter.title}</h4>
                          <strong>
                            {new Date(frontmatter.date).toLocaleDateString(
                              'es-CO'
                            )}
                          </strong>
                          <p>{frontmatter.description}</p>
                          <Link
                            to={`/eventos/${frontmatter.path}`}
                            className="button icon fa-check"
                          >
                            Ver más
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        imagen
        path
      }
    }
  }
`;
