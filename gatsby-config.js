// Node modules.
const ABILITY_FEATURES = require("sns-data/data/ABILITY_FEATURES.json")
const BACKGROUNDS = require("sns-data/data/BACKGROUNDS.json")
const CORE_ABILITIES = require("sns-data/data/CORE_ABILITIES.json")
const CORE_IDENTITIES = require("sns-data/data/CORE_IDENTITIES.json")
const FEATURE_OPTIONS = require("sns-data/data/FEATURE_OPTIONS.json")
const IDENTITY_FEATURES = require("sns-data/data/IDENTITY_FEATURES.json")
const LANGUAGES = require("sns-data/data/LANGUAGES.json")
const PERKS = require("sns-data/data/PERKS.json")
const RACES = require("sns-data/data/RACES.json")
const SUBRACES = require("sns-data/data/SUBRACES.json")

module.exports = {
  siteMetadata: {
    title: `Sword and Spell`,
    description: `The main wiki website for the game Sword and Spell.`,
    author: `@SwordAndSpell`,
    // Raw CMS Data Start
    // ========
    ABILITY_FEATURES,
    BACKGROUNDS,
    CORE_ABILITIES,
    CORE_IDENTITIES,
    FEATURE_OPTIONS,
    IDENTITY_FEATURES,
    LANGUAGES,
    PERKS,
    RACES,
    SUBRACES,
    // ========
    // Raw CMS Data End
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/pages/*`],
      },
    },
  ],
}
