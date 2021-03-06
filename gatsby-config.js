require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Брови, ресницы Одесса - Лия Хадорик`,
    siteTitleAlt: `Брови, ресницы Одесса - Лия Хадорик`,
    siteUrl: 'https://liya.kopakov.com/',
    siteLanguage: 'ru',
    title: 'Брови, ресницы Одесса - Лия Хадорик',
    description: 'Моделирование бровей, коррекция бровей, ламинирование бровей Одесса. Брови, ресницы, ищу модель, модель Одесса. Browmaster Odessa, lashmaker odessa',
    siteDescription: 'Моделирование бровей, коррекция бровей, ламинирование бровей Одесса. Брови, ресницы, ищу модель, модель Одесса. Browmaster Odessa, lashmaker odessa',
    author: 'Лия Хадорик',
    keywords: 'Моделирование бровей, коррекция бровей, ламинирование бровей Одесса. Брови, ресницы, ищу модель, модель Одесса, Browmaster Odessa, lashmaker odessa, Брови, ресницы Одесса - Лия Хадорик, качественно, недорого, топ мастер, brow artist',
    image: 'https://liya.kopakov.com/static/banner.jpg',
    siteImage: 'https://liya.kopakov.com/static/banner.jpg',
  },
  // pathPrefix: '/liya',
  // assetPrefix: '/liya',
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {
        // basePath: '/liya'
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Лия Хадорик - https://liya.kopakov.com/`,
        short_name: `Лия`,
        description: `Моделирование бровей, коррекция бровей, ламинирование бровей Одесса. Брови, ресницы, ищу модель, модель Одесса. Browmaster Odessa, lashmaker odessa.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
