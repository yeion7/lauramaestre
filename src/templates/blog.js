import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import graphql from 'graphql';
import SEO from '../components/SEO';
import FavIcon from '../components/FavIcon';
import Laura from '../assets/images/laura1.jpg';
import Content, { HTMLContent } from '../components/Content';
import Contact from '../components/Contact';

export const Post = ({
  title = '',
  description = '',
  path = '',
  date = '',
  imagen = '',
  next = {},
  events = {},
  preview = false,
  content = {},
  contentComponent,
  titleForm,
  listID,
  showMessage,
}) => {
  const PostContent = contentComponent || Content;

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
              <h1>{title}</h1>
              <p>{date}</p>
            </header>
            <PostContent content={content} className="blog" />

            {next &&
              !preview && (
                <div className="align-center">
                  <Link
                    className="button "
                    to={`/blog/${next.frontmatter.path}`}
                  >
                    Leer más
                  </Link>
                </div>
              )}
            {!preview && (
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
            )}
            <Contact title={titleForm} listID={listID} expanded={showMessage} />
          </div>
        </section>
      </div>
    </div>
  );
};

class BlogPostTemplate extends React.Component {
  render() {
    const { preview } = this.props;
    const { next, events } = this.props.pathContext;
    const post = this.props.data.markdownRemark;
    const { siteUrl } = this.props.data.site.siteMetadata;

    return (
      <Post
        {...post.frontmatter}
        post={post}
        next={next}
        events={events}
        contentComponent={HTMLContent}
        content={post.html}
        preview={preview}
        titleForm={post.frontmatter.form.title}
        listID={post.frontmatter.form.listID}
        showMessage={post.frontmatter.form.showMessage}
        path={`${siteUrl}/eventos/${post.frontmatter.path}`}
      />
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        imagen
        path
        form {
          listID
          title
          showMessage
        }
      }
    }
  }
`;
