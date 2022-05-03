const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/BlogPost.tsx`);

  const result = await graphql(
    `
      {
        allMdx(sort: { fields: frontmatter___date, order: ASC }) {
          nodes {
            id
            slug
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts.`,
      result.errors
    );
    return;
  }

  const posts = result.data.allMdx.nodes;

  if (posts.length > 0) {
    posts.forEach(post => {
      createPage({
        path: post.slug,
        component: blogPost,
        context: {
          id: post.id,
        },
      });
    });
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type SiteSiteMetadata {
      title: String
      description: String
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      email: String
    }

    type Social {
      twitter: String
      linkedin: String
    }

    type Fields {
      slug: String
    }
  `);
};
