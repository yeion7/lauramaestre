import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Banner from '../components/Banner';
import FavIcon from '../components/FavIcon';
import Self from '../components/Self';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import graphql from 'graphql';

import { takeThreeClosest, isBlog, isEvent, isLater } from '../lib';
import filter from 'lodash/filter';

import pic01 from '../assets/images/pic01.jpg';
import pic02 from '../assets/images/pic02.jpg';
import pic03 from '../assets/images/pic03.jpg';
import pic04 from '../assets/images/pic04.jpg';
import pic05 from '../assets/images/pic05.jpg';
import pic06 from '../assets/images/pic06.jpg';

class HomeIndex extends React.Component {
  render() {
    const { title, description } = this.props.data.site.siteMetadata;
    const { edges: pages } = this.props.data.allMarkdownRemark;

    const posts = takeThreeClosest(filter(pages, isBlog), 3);

    const events = takeThreeClosest(filter(filter(pages, isEvent), isLater));

    console.log({ posts, events });

    return (
      <div>
        <SEO title={title} description={description} />
        <FavIcon type="all" />

        <Banner />

        <Self color="blue" />

        <div id="main">
          <div className="inner">
            <header className="major">
              <h2>Servicios</h2>
            </header>
          </div>
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Talleres experienciales</h3>
                <p>
                  “Transforma los pensamientos y emociones todos días para que
                  crear la vida de tus sueños”. Ver más..
                </p>
              </header>
              <Link to="/services" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Talleres experienciales</h3>
                <p>
                  “Transforma los pensamientos y emociones todos días para que
                  crear la vida de tus sueños”. Ver más..
                </p>
              </header>
              <Link to="/services" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Talleres experienciales</h3>
                <p>
                  “Transforma los pensamientos y emociones todos días para que
                  crear la vida de tus sueños”. Ver más..
                </p>
              </header>
              <Link to="/services" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Talleres experienciales</h3>
                <p>
                  “Transforma los pensamientos y emociones todos días para que
                  crear la vida de tus sueños”. Ver más..
                </p>
              </header>
              <Link to="/services" className="link primary" />
            </article>
          </section>
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
          }
        }
      }
    }
  }
`;
