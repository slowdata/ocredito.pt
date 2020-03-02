module.exports = {
  siteMetadata: {
    title: "O Credito",
    creditos: [
      { id: 1, name: "Habitação" },
      { id: 2, name: "Pessoal" },
      { id: 3, name: "Automóvel" },
      { id: 4, name: "Transferência de créditos" }
    ],
    parcerias: [
      { id: 1, name: "Imobiliárias" },
      { id: 2, name: "Seguradoras" }
    ]
  },
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
