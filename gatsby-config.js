module.exports = {
  pathPrefix: "",
  siteMetadata: {
    siteUrl: "https://geeksforgeeks-srmist-ncr.github.io/",
    title: "GeeksForGeeks SRMIST NCR",
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    author: `@Drish`,
  },
  plugins: [{
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-M13VCWJBMC",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GeeksForGeeks`,
        short_name: `GeeksForGeeks`,
        start_url: `/`,
        background_color: `#f5f5f5`,
        theme_color: `#f5f5f5`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-dark-mode",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};