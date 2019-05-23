require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: `Evangelos Pallis`,
        description: `Personal site`,
        subtitle: `Custom Desc`,
        author: `@vpsnak`,
    },
    plugins: [
        /*
         * Gatsby's data processing layer begins with “source”
         * plugins. Here the site sources its data from Wordpress.
         */
        {
            resolve: "gatsby-source-wordpress",
            options: {
                /*
                 * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
                 * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
                 */
                baseUrl: "vpsnak.com",
                // The protocol. This can be http or https.
                protocol: "https",
                // Indicates whether the site is hosted on wordpress.com.
                // If false, then the assumption is made that the site is self hosted.
                // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
                // If your site is hosted on wordpress.org, then set this to false.
                hostingWPCOM: false,
                // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
                // This feature is untested for sites hosted on wordpress.com.
                // Defaults to true.
                useACF: true,
                // Include specific ACF Option Pages that have a set post ID
                // Regardless if an ID is set, the default options route will still be retrieved
                // Must be using V3 of ACF to REST to include these routes
                // Example: `["option_page_1", "option_page_2"]` will include the proper ACF option
                // routes with the ID option_page_1 and option_page_2
                // The IDs provided to this array should correspond to the `post_id` value when defining your
                // options page using the provided `acf_add_options_page` method, in your WordPress setup
                // Dashes in IDs will be converted to underscores for use in GraphQL
                // acfOptionPageIds: [],
                auth: {
                    htaccess_user: process.env.JWT_USER,
                    htaccess_pass: process.env.JWT_PASSWORD,
                    htaccess_sendImmediately: false,
                    // jwt_user: process.env.JWT_USER,
                    // jwt_pass: process.env.JWT_PASSWORD,
                    // jwt_base_path: "/jwt-auth/v1/token", // Default - can skip if you are using https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
                },
                // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
                // It can help you debug specific API Endpoints problems.
                verboseOutput: true,
                // Set how many pages are retrieved per API request.
                perPage: 100,
                // Search and Replace Urls across WordPress content.
                // searchAndReplaceContentUrls: {
                //     sourceUrl: "https://source-url.com",
                //     replacementUrl: "https://replacement-url.com",
                // },
                // Set how many simultaneous requests are sent at once.
                // concurrentRequests: 10,
                // Set WP REST API routes whitelists
                // and blacklists using glob patterns.
                // Defaults to whitelist the routes shown
                // in the example below.
                // See: https://github.com/isaacs/minimatch
                // Example:  `["/*/*/comments", "/yoast/**"]`
                // ` will either include or exclude routes ending in `comments` and
                // all routes that begin with `yoast` from fetch.
                // Whitelisted routes using glob patterns
                includedRoutes: [
                    "**/categories",
                    "**/posts",
                    "**/pages",
                    "**/media",
                    "**/taxonomies",
                    "**/educations",
                    "**/employments",
                    "**/projects",
                    // "**/spirit/**",
                    // "**/spirit/v2/options",
                    // "**/settings",
                    "**/menus",
                ],
                // Blacklisted routes using glob patterns
                // excludedRoutes: ["**/posts/1456"],
                // use a custom normalizer which is applied after the built-in ones.
                normalizer: function({ entities }) {
                    return entities
                },
            },
        },
        `gatsby-plugin-emotion`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                useMozJpeg: false,
                stripMetadata: true,
                defaultQuality: 75,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/assets/`,
            }
        },
        'gatsby-plugin-react-helmet',
        // 'gatsby-plugin-netlify',
    ],
};