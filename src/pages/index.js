import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Banner from '../components/Banner';
import FavIcon from '../components/FavIcon';
import Self from '../components/Self';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import graphql from 'graphql';

import { takeThreeClosest, isBlog, isEvent, isService, isLater } from '../lib';
import filter from 'lodash/filter';

import pic01 from '../assets/images/pic01.jpg';

const BUTTERFLYS = {
  blue: 'terapias-transformacion',
  purple: 'talleres-experienciales',
  orange: 'programa-vida',
  yellow: 'entrenamientos-empresariales',
};

class HomeIndex extends React.Component {
  render() {
    const { title, description, siteUrl } = this.props.data.site.siteMetadata;
    const { edges: pages } = this.props.data.allMarkdownRemark;

    const posts = takeThreeClosest(filter(pages, isBlog), 3);

    const events = takeThreeClosest(filter(filter(pages, isEvent), isLater));

    const services = filter(pages, isService);

    console.log(events);

    return (
      <div>
        <SEO
          title={title}
          description={description}
          url={siteUrl}
          image="/img/laura-big.jpg"
        />
        <FavIcon type="all" />

        <Banner />

        <Self color="violet" />

        <div id="main">
          <div className="inner" id="services">
            <header className="major">
              <h2>Servicios</h2>
            </header>
          </div>
          <section id="one" className="tiles">
            {services.map(service => (
              <article
                className={service.node.frontmatter.theme.color}
                key={service.node.frontmatter.path}
                style={{
                  backgroundImage: `url(${service.node.frontmatter.path}.svg)`,
                }}
              >
                <header className="major">
                  <h3>{service.node.frontmatter.title}</h3>
                  <p>{service.node.frontmatter.description}</p>
                </header>
                <Link
                  to={`/servicios/${service.node.frontmatter.path}`}
                  className="link primary"
                />
              </article>
            ))}
          </section>
          <section id="two">
            <div className="inner" id="events">
              <header className="major">
                <h2>Próximos eventos</h2>
              </header>
              <div className="events">
                {events &&
                  events.map(({ node: { frontmatter } }) => (
                    <div className="box events-card" key={frontmatter.date}>
                      <img
                        src={`${BUTTERFLYS[frontmatter.theme.favicon]}.svg`}
                        style={{ margin: '0 auto' }}
                        alt="imagen mariposa"
                        width="120px"
                      />
                      <h4>{frontmatter.title}</h4>
                      <strong>
                        {new Date(frontmatter.date).toLocaleDateString('es-CO')}
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
          <section id="two" className="spotlights">
            <div className="inner">
              <header className="major">
                <h2>Blog</h2>
              </header>
            </div>
            {posts.map(
              ({
                node: {
                  frontmatter: { title, description, date, path, imagen },
                },
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
      </div>
    );
  }
}

export default HomeIndex;

export const query = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          frontmatter {
            path
            templateKey
            date
            title
            description
            imagen
            theme {
              favicon
              color
            }
          }
        }
      }
    }
  }
`;
