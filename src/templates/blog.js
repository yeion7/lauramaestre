import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import graphql from 'graphql';

class BlogPostTemplate extends React.Component {
  render() {
    console.log(this.props);
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
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
              <section id="two">
                <div className="inner">
                  <header className="major">
                    <h2>Próximos eventos</h2>
                  </header>
                  <div className="events">
                    <div className="box events-card">
                      <i className="fa fa-3x fa-calendar" />
                      <h4>Taller renacer</h4>
                      <strong>4/12/12</strong>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sequi, suscipit!
                      </p>
                      <Link to="/sobre-mi" className="button icon fa-check">
                        Ver más
                      </Link>
                    </div>
                    <div className="box events-card">
                      <i className="fa fa-3x fa-calendar" />
                      <h4>Taller renacer</h4>
                      <strong>4/12/12</strong>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sequi, suscipit!
                      </p>
                      <Link to="/sobre-mi" className="button icon fa-check">
                        Ver más
                      </Link>
                    </div>
                    <div className="box events-card">
                      <i className="fa fa-3x fa-calendar" />
                      <h4>Taller renacer</h4>
                      <strong>4/12/12</strong>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sequi, suscipit!
                      </p>
                      <Link to="/sobre-mi" className="button icon fa-check">
                        Ver más
                      </Link>
                    </div>
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
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
