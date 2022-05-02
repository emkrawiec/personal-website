module.exports = {
  siteMetadata: {
    title: `emcrav | Michał Krawiec personal site`,
    author: {
      name: `Michał Krawiec`,
      email: 'hi@michalkrawiec.com'
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://emcrav.com/`,
    social: {
      twitter: `https://twitter.com/micha_krawiec`,
      linkedin: 'https://www.linkedin.com/in/micha%C5%82-krawiec-055397238/'
    },
  },
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
    'gatsby-plugin-sitemap',
    `gatsby-plugin-react-helmet`,
  ],
}
