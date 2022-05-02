import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout";
import Seo from "../components/SEO";

interface BlogPostTemplateProps {
  mdx: {
    body: string;
    frontmatter: {
      title: string;
      description: string;
      date: string;
    };
  };
}

const BlogPostTemplate = ({ data }: PageProps<BlogPostTemplateProps>) => {
  const post = data.mdx;
  const postTitle = post.frontmatter.title;
  const postMeta = post.frontmatter.description;
  const publishDate = post.frontmatter.date;

  return (
    <>
      <Seo title={postTitle} description={postMeta} />
      <Layout>
        <section className="mt-10 mb-4">
          <header className="mb-8 text-center">
            <h1
              className="text-4xl font-bold mb-2"
              dangerouslySetInnerHTML={{ __html: postTitle }}
            />
            <p className="text-sm text-slate-400">{publishDate}</p>
          </header>
          <article className="prose">
            <MDXRenderer>{post.body}</MDXRenderer>
          </article>
        </section>
      </Layout>
    </>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    mdx(id: { eq: $id }) {
      body
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
