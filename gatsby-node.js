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
                  }
                }
              }
            }
          }
        `
      ).then(result => {

        console.log(JSON.stringify(result.data.allMarkdownRemark, undefined, 2));

        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create blog posts pages.
        _.each(result.data.allMarkdownRemark.edges, edge => {
          createPage({
            path: edge.node.frontmatter.path,
            component: path.resolve(`src/templates/${String(edge.node.frontmatter.templateKey)}.js`),
            context: {
              path: edge.node.frontmatter.path,
            },
          });
        });
      })
    );
  });
};
