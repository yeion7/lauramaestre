import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Banner from '../components/Banner';
import FavIcon from '../components/FavIcon';
import Self from '../components/Self';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import graphql from 'graphql';
import Content, { HTMLContent } from '../components/Content';

export const About = ({
  contentComponent,
  content,
  title,
  path,
  imagen,
  description,
  form,
}) => {
  const AboutComponent = contentComponent || Content;
  const { listID, title: titleForm, showMessage } = form;
  return (
    <div>
      <SEO
        title={`${title} | Sobre mi`}
        description={description}
        isAbout
        url={path}
        image={imagen}
        description={description}
      />
      <FavIcon type="all" />

      <Banner image={imagen} />

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>{title}</h1>
            </header>
            <AboutComponent content={content} className="blog" />
            <Contact title={titleForm} listID={listID} expanded={showMessage} />
          </div>
        </section>
      </div>
    </div>
  );
};

class AboutMe extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const { siteUrl } = this.props.data.site.siteMetadata;

    return (
      <About
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        imagen={post.frontmatter.imagen}
        post={post}
        contentComponent={HTMLContent}
        content={post.html}
        form={post.frontmatter.form}
        path={`${siteUrl}/sobre-mi`}
      />
    );
  }
}

export default AboutMe;

export const aboutPageQuery = graphql`
  query AboutPage($slug: String!) {
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
