import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";

const Blog = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <h1 className="text-3xl font-bold my-6">Latest blog posts</h1>
      <ol>
        {posts.map(post => {
          const title = post.frontmatter.title;

          return (
            <li key={post.slug}>
              <Link to={post.slug}>
                <article>
                  <header>
                    <h2 className="text-2xl">{title}</h2>
                    <small className="text-sm">
                      {post.frontmatter.date}, {post.timeToRead} minutes to read
                    </small>
                  </header>
                  <section>
                    <p className="line-clamp-3 text-base">
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
  }
`;
