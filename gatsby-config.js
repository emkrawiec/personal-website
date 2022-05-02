module.exports = {
  siteMetadata: {
    title: `Michał Krawiec's personal site`,
    author: {
      name: `Michał Krawiec`,
      email: 'hi@michalkrawiec.com',
    },
    description: ``,
    siteUrl: `https://emcrav.com/`,
    social: {
      github: `https://github.com/emkrawiec`,
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
