module.exports = {
  siteMetadata: {
    title: `Semantic Styles`,
    description: `Responsive, Themed, UI Design System`,
    subHeading: `Featuring responsive typography and spacing, calculated vertical
    rhythm, responsive light / dark theme, classes that match
    semantic HTML elements.`,
    author: `<tannermichaelgaucher@gmail>`,
    social: {
      github: `https://github.com/tannergaucher`,
      linkedIn: ``,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
