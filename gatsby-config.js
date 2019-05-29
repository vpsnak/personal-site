require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Evangelos Pallis`,
    description: `Programming made easy`,
    subtitle: `Programming made easy`,
    siteUrl: `https://epallis.gr`,
    author: `@vpsnak`
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'vpsnak.com',
        protocol: 'https',
        hostingWPCOM: false,
        useACF: true,
        auth: {
          jwt_user: process.env.JWT_USER,
          jwt_pass: process.env.JWT_PASSWORD
        },
        verboseOutput: true,
        perPage: 100,
        includedRoutes: [
          '**/categories',
          '**/posts',
          '**/pages',
          '**/media',
          '**/taxonomies',
          '**/educations',
          '**/employments',
          '**/projects',
          '**/slides',
          '**/spirit-presentation',
          '**/presentation',
          '**/menus'
        ]
      }
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [`IntersectionObserver`]
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/`
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Programming made easy | Evangelos Pallis`,
        short_name: `Evangelos Pallis`,
        start_url: `/`,
        background_color: `#575757`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-80048808-4'
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: ['/test/*', `/hello-world/**`, '/presentation/**']
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `${process.env.SITE_URL}`,
        sitemap: `https://epallis.gr/sitemap.xml`,
        policy: [{userAgent: '*', allow: '/'}]
      }
    }
  ]
}