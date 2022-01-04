module.exports = {
  siteMetadata: {
    siteUrl: "https://geeksforgeeks-srmist-ncr.github.io/",
    title: "GeeksForGeeks SRMIST NCE",
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    author: `@Drish`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-M13VCWJBMC",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
    },
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
