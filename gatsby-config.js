/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-chakra-ui",
    {
      resolve: "gatsby-source-google-sheets",
      options: {
        spreadsheetId: "1YYxOtthvOfIqtMl5prIFY-beKZGs8J283oH4T6XX2a8",
        worksheetTitle: "Sheet",
        credentials: require("./credentials/client_secret.json"),
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Holtwood One SC`,
          },
        ],
      },
    },
    { resolve: `gatsby-plugin-react-helmet` },
  ],
  pathPrefix: `/friscodeli`,
  siteMetadata: {
    title: "Frisco Deli",
    description: "Deli and fried food in Pearl, Mississippi!",
    url: "http://www.friscodeli.com", // No trailing slash allowed!
    image: "/images/FriscoIconLetter.png", // Path to your image you placed in the 'static' folder
  },
}
