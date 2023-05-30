import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `Reza Pourdian`,
    siteTitleAlt: `Reza Pourdian - Concept Designer Portfolio`,
    siteHeadline: `Reza Pourdian - Concept Designer`,
    siteUrl: `https://rpsreza.github.io/portfolio`,
    siteDescription: `Leveraging my background in Industrial Design, my passion lies in creating imaginative designs for spaceships and sci-fi vehicles.`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    author: `@RPourdian`,
  },
  trailingSlash: `never`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Reza Pourdian - Concept Designer`,
        short_name: `Reza Pourdian`,
        description: `Leveraging my background in Industrial Design, my passion lies in creating imaginative designs for spaceships and sci-fi vehicles.`,
        start_url: `/portfolio/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#3182ce`,
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
    // You can remove this plugin if you don't need it
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-statoscope`,
      options: {
        saveReportTo: `${__dirname}/public/.statoscope/_bundle.html`,
        saveStatsTo: `${__dirname}/public/.statoscope/_stats.json`,
        open: false,
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
