module.exports = {
  siteMetadata: {
    title: `argos-gatsby-github-actions`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // plugins: [`argos-javascript/packages/gatsby-plugin-screenshot`],
  plugins: [
    {
      resolve: `gatsby-plugin-argos`,
      options: {
        branch: env.GITHUB_REF_NAME,
        commit: env.GITHUB_SHA,
        token: env.ARGOS_TOKEN,
      },
    },
  ],
};
