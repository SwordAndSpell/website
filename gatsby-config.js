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
    navItems: [
      {
        link: "/races",
        label: "Races",
      },
      {
        link: "/backgrounds",
        label: "Backgrounds",
      },
      {
        link: "/core-identities",
        label: "Core Identities",
      },
      {
        link: "/identity-features",
        label: "Identity Features",
      },
      {
        link: "/ability-features",
        label: "Ability Features",
      },
      {
        link: "/spells",
        label: "Spells",
      },
      {
        link: "/rules",
        label: "Rules",
      },
      {
        link: "/spellcasting-charts",
        label: "Spellcasting Charts",
      },
      {
        link: "/summoning-stat-blocks",
        label: "Summoning Stat Blocks",
      },
      {
        link: "/shapechange-forms",
        label: "Shapechange Forms",
      },
      {
        link: "/weapons",
        label: "Weapons",
      },
      {
        link: "/armor",
        label: "Armor",
      },
      {
        link: "/runes",
        label: "Runes",
      },
    ],
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`open sans\:300,400,700`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#644ffd`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
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
