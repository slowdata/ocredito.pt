module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true
      }
    }
  ]
};
