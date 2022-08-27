module.exports = {
  pathPrefix: "",
  siteMetadata: {
    siteUrl: "https://geeksforgeeks-srmist-ncr.github.io/",
    title: "GeeksForGeeks SRMIST NCR",
    description: `Geeksforgeeks Students' chapter at SRM NCR is working
    on the idea - to impart knowledge among the geeks in a fun and
    exciting way. It will be achieved through events, hackathons and
    webinars to enlighten the mates. We aim for the perfection and success
    of all who are connected with us through this chapter. So keep
    yourself connected with us to ace your career beyond the skies.`,
    author: `@Drish`,
    image:
      "https://raw.githubusercontent.com/GEEKSFORGEEKS-SRMIST-NCR/GEEKSFORGEEKS-SRMIST-NCR.github.io/main/src/images/Screenshot.webp",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TKCTBZ8",
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GeeksForGeeks`,
        short_name: `GFG`,
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
    "gatsby-plugin-transition-link",

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
