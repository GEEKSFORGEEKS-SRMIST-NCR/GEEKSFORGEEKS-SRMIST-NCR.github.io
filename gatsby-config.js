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
        icon: `src/images/Logo.svg`,
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