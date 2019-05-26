require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Evangelos Pallis`,
    description: `Personal site`,
    subtitle: `Custom Desc`,
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
          // "**/spirit/**",
          // "**/spirit/v2/options",
          // "**/settings",
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
  ]
}