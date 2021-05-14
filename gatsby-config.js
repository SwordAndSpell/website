// Node modules.
const ABILITY_FEATURES = require("sns-data/data/ABILITY_FEATURES.json")
const BACKGROUNDS = require("sns-data/data/BACKGROUNDS.json")
const CORE_ABILITIES = require("sns-data/data/CORE_ABILITIES.json")
const CORE_IDENTITIES = require("sns-data/data/CORE_IDENTITIES.json")
const FEATURE_OPTIONS = require("sns-data/data/FEATURE_OPTIONS.json")
const IDENTITY_FEATURES = require("sns-data/data/IDENTITY_FEATURES.json")
const IDENTITY_FEATURE_REQUIREMENTS = require("sns-data/data/IDENTITY_FEATURE_REQUIREMENTS.json")
const LANGUAGES = require("sns-data/data/LANGUAGES.json")
const PERKS = require("sns-data/data/PERKS.json")
const RACES = require("sns-data/data/RACES.json")
const SUBRACES = require("sns-data/data/SUBRACES.json")
const RULES = require("sns-data/data/RULES.json")
// Charts.
const ABILITY_MODIFIERS = require("sns-data/data/CHARTS/ABILITY_MODIFIERS")
const EXAMPLE_DCS = require("sns-data/data/CHARTS/EXAMPLE_DCS")
const LEVELING = require("sns-data/data/CHARTS/LEVELING")
const SKILLS_QUICK_REFERENCE = require("sns-data/data/CHARTS/SKILLS_QUICK_REFERENCE")
const SPELL_POINT_COSTS = require("sns-data/data/CHARTS/SPELL_POINT_COSTS")
const UNIVERSAL_SPELL_CHARGES = require("sns-data/data/CHARTS/UNIVERSAL_SPELL_CHARGES")
const UNIVERSAL_SPELL_POINTS = require("sns-data/data/CHARTS/UNIVERSAL_SPELL_POINTS")
// Gear.
const ARMOR_RUNES = require("sns-data/data/GEAR/ARMOR_RUNES.json")
const HEAVY_ARMOR = require("sns-data/data/GEAR/HEAVY_ARMOR.json")
const LIGHT_ARMOR = require("sns-data/data/GEAR/LIGHT_ARMOR.json")
const MARTIAL_WEAPONS = require("sns-data/data/GEAR/MARTIAL_WEAPONS.json")
const MEDIUM_ARMOR = require("sns-data/data/GEAR/MEDIUM_ARMOR.json")
const SHIELDS = require("sns-data/data/GEAR/SHIELDS.json")
const SIMPLE_WEAPONS = require("sns-data/data/GEAR/SIMPLE_WEAPONS.json")
const WEAPON_PROPERTIES = require("sns-data/data/GEAR/WEAPON_PROPERTIES.json")
const WEAPON_RUNES = require("sns-data/data/GEAR/WEAPON_RUNES.json")
// Spells
const CANTRIPS = require("sns-data/data/SPELLS/CANTRIPS.json")
const FIRST_LEVEL_SPELLS = require("sns-data/data/SPELLS/FIRST_LEVEL.json")
// Extra
const SUMMONABLES = require("sns-data/data/SUMMONABLES.json")
const COMPANIONS = require("sns-data/data/COMPANIONS.json")
const SHAPECHANGE = require("sns-data/data/SHAPECHANGE.json")

module.exports = {
  siteMetadata: {
    title: `Sword and Spell`,
    description: `The main wiki website for the game Sword and Spell.`,
    author: `@SwordAndSpell`,
    navItems: [
      {
        link: "/leveling-chart",
        label: "Leveling Chart",
      },
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
        link: "/feature-options",
        label: "Feature Options",
      },
      {
        link: "/ability-features",
        label: "Ability Features",
      },
      {
        link: "/armor",
        label: "Armor",
      },
      {
        link: "/weapons",
        label: "Weapons",
      },
      {
        link: "/spellcasting-charts",
        label: "Spellcasting Charts",
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
        link: "/summoning",
        label: "Summoning",
      },
      {
        link: "/animal-companions",
        label: "Animal Companions",
      },
      {
        link: "/shapechange-forms",
        label: "Shapechange Forms",
      },
      {
        link: "/reference-charts",
        label: "Quick Reference",
      },
    ],
    // Raw CMS Data Start
    // ========
    // Main.
    ABILITY_FEATURES,
    BACKGROUNDS,
    CORE_ABILITIES,
    CORE_IDENTITIES,
    FEATURE_OPTIONS,
    IDENTITY_FEATURES,
    IDENTITY_FEATURE_REQUIREMENTS,
    LANGUAGES,
    PERKS,
    RACES,
    SUBRACES,
    RULES,
    // Charts.
    ABILITY_MODIFIERS,
    EXAMPLE_DCS,
    LEVELING,
    SKILLS_QUICK_REFERENCE,
    SPELL_POINT_COSTS,
    UNIVERSAL_SPELL_CHARGES,
    UNIVERSAL_SPELL_POINTS,
    // Gear.
    ARMOR_RUNES,
    HEAVY_ARMOR,
    LIGHT_ARMOR,
    MARTIAL_WEAPONS,
    MEDIUM_ARMOR,
    SHIELDS,
    SIMPLE_WEAPONS,
    WEAPON_PROPERTIES,
    WEAPON_RUNES,
    // Spells.
    CANTRIPS,
    FIRST_LEVEL_SPELLS,
    // Extra
    SUMMONABLES,
    COMPANIONS,
    SHAPECHANGE,

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
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Crimson Text\:400,700`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sword-and-spell`,
        short_name: `sns`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#fbcea0`,
        display: `minimal-ui`,
        icon: `static/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     precachePages: [`/`, `/pages/*`],
    //   },
    // },
    // Full Story integration
    {
      resolve: `gatsby-plugin-fullstory`,
      options: {
        fs_org: "VZS58",
      },
    },
  ],
}
