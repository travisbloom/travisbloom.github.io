module.exports = {
  siteMetadata: {
    siteUrl: `https://www.travisbloom.me`,
    description: 'Cofounder and CTO @PawlicyAdvisor. JavaScript/GraphQL geek. I love what I do.',
    title: 'Travis Bloom',
    author: 'travisbloom@gmail.com',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: ['toposort', 'react-spring', '@emotion/weak-memoize'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    { resolve: `gatsby-plugin-sharp`, options: { defaultQuality: 99 } },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Travis Bloom`,
        short_name: `Travis`,
        start_url: `/`,
        background_color: `#3989c9`,
        theme_color: `#3989c9`,
        display: `standalone`,
        icon: `content/assets/color-logo.png`,
        include_favicon: true,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-react-helmet`, // `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    'gatsby-plugin-sass',
    'gatsby-plugin-lodash',
  ],
}
