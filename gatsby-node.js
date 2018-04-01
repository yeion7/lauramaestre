const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const select = require(`unist-util-select`);
const fs = require(`fs-extra`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  frontmatter {
                    path
                    templateKey
                    date
                    title
                    description
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        console.log(JSON.stringify(result.data, undefined, 2));

        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const blogSet = new Set();
        const eventSet = new Set();
        const servicesSet = new Set();

        // Create blog posts pages.
        _.each(result.data.allMarkdownRemark.edges, edge => {
          if (edge.node.frontmatter.templateKey === 'blog') {
            blogSet.add(edge);
          } else if (edge.node.frontmatter.templateKey === 'eventos') {
            eventSet.add(edge);
          } else if (edge.node.frontmatter.templateKey === 'servicios') {
            servicesSet.add(edge);
          } else {
            createPage({
              path: edge.node.frontmatter.path,
              component: path.resolve(
                `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
              ),
              context: {
                slug: edge.node.frontmatter.path,
              },
            });
          }
        });

        const posts = Array.from(blogSet);
        const events = Array.from(eventSet);
        const services = Array.from(servicesSet);

        _.each(posts, (post, index) => {
          const previous =
            index === posts.length - 1 ? false : posts[index + 1].node;
          const next = index === 0 ? false : posts[index - 1].node;
          createPage({
            path: `/blog/${post.node.frontmatter.path}`,
            component: path.resolve(
              `src/templates/${String(post.node.frontmatter.templateKey)}.js`
            ),
            context: {
              slug: post.node.frontmatter.path,
              previous,
              next,
              events: _.take(
                _.sortBy(
                  _.filter(
                    events,
                    o => new Date(o.node.frontmatter.date) > new Date()
                  ),
                  o => o.node.frontmatter.date
                ),
                3
              ),
            },
          });
        });

        _.each(events, event => {
          createPage({
            path: `/eventos/${event.node.frontmatter.path}`,
            component: path.resolve(
              `src/templates/${String(event.node.frontmatter.templateKey)}.js`
            ),
            context: {
              slug: event.node.frontmatter.path,
            },
          });
        });

        _.each(services, service => {
          createPage({
            path: `/servicios/${service.node.frontmatter.path}`,
            component: path.resolve(
              `src/templates/${String(service.node.frontmatter.templateKey)}.js`
            ),
            context: {
              slug: service.node.frontmatter.path,
            },
          });
        });
      })
    );
  });
};
