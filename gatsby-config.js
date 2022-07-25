module.exports = {
  siteMetadata: {
    title: `argos-gatsby-github-actions`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // plugins: [`argos-javascript/packages/gatsby-plugin-screenshot`],

  plugins: [
    ...(process.env.CI
      ? [
          {
            resolve: 'argos-javascript/packages/gatsby-plugin-argos',
            options: {
              branch: process.env.GITHUB_REF_NAME,
              commit: process.env.GITHUB_SHA,
              token: process.env.ARGOS_TOKEN,
            },
          },
        ]
      : []),
  ],
}
