import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/SEO";

const Blog = ({ data }) => {
  const {
    allMdx: { nodes: posts },
    site: {
      siteMetadata: { title, description },
    },
  } = data;

  return (
    <Layout>
      <Seo title={title} description={description} />
      <h1 className="text-3xl font-bold mt-10 mb-8">Latest blog posts</h1>
      <ol>
        {posts.map(post => {
          const title = post.frontmatter.title;

          return (
            <li key={post.slug}>
              <Link to={post.slug}>
                <article>
                  <header>
                    <h2 className="text-2xl">{title}</h2>
                    <small className="block text-sm my-2">
                      {post.frontmatter.date}, {post.timeToRead} minutes to read
                    </small>
                  </header>
                  <section>
                    <p className="line-clamp-6 md:line-clamp-4 text-base">
                      {post.frontmatter.excerpt}
                    </p>
                  </section>
                </article>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: ASC }) {
      nodes {
        slug
        frontmatter {
          date(formatString: "DD/MM/YYYY")
          title
          excerpt
        }
        timeToRead
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
