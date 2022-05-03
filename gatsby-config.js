module.exports = {
  siteMetadata: {
    title: `Michał Krawiec's Personal Website`,
    description: `Adventures through tech. Learn about my findings and thoughts in Web technologies and related topis.`,
    author: {
      name: `Michał Krawiec`,
      email: "hi@michalkrawiec.com",
    },
    siteUrl: `https://michalkrawiec.com/`,
    social: {
      github: `https://github.com/emkrawiec`,
      twitter: `https://twitter.com/micha_krawiec`,
      linkedin: "https://www.linkedin.com/in/micha%C5%82-krawiec-055397238/",
    },
  },
  trailingSlash: "always",
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-sitemap",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://michalkrawiec.com/`,
        stripQueryString: true,
      },
    },
  ],
};
