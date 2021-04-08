// Node modules.
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import filter from "lodash/filter"
import map from "lodash/map"
import uniq from "lodash/uniq"
// Relative imports.
import Chevron from "../components/icons/Chevron"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrapper } from "../components/cardsPage"

const onExpandedToggle = (id, expandedIDs, setExpandedIDs) => {
  // Collapse the ID.
  if (expandedIDs?.includes(id)) {
    setExpandedIDs(filter(expandedIDs, expandedID => expandedID !== id))
    return
  }

  // Expand the ID.
  setExpandedIDs(uniq([...expandedIDs, id]))
}

const ArmorPage = () => {
  const queryResult = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          ARMOR_RUNES {
            name
            id
            arcaniteCost
            craftingLevelRequired
            description
            goldCost
          }
          HEAVY_ARMOR {
            name
            id
            armorValue
            cost
            defenseBonus
            maxDexterityBonus
            movementPenalty
            strengthRequired
          }
          LIGHT_ARMOR {
            name
            id
            armorValue
            cost
            defenseBonus
            maxDexterityBonus
            movementPenalty
            strengthRequired
          }
          MEDIUM_ARMOR {
            name
            id
            armorValue
            cost
            defenseBonus
            maxDexterityBonus
            movementPenalty
            strengthRequired
          }
          MARTIAL_WEAPONS {
            name
            id
            cost
            damage
            range
            weaponProperties
          }
          SHIELDS {
            name
            id
            cost
            defenseBonus
            specialAbility
            strengthRequired
          }
          SIMPLE_WEAPONS {
            name
            id
            cost
            damage
            range
            weaponProperties
          }
          WEAPON_PROPERTIES {
            name
            id
            description
          }
          WEAPON_RUNES {
            name
            id
            arcaniteCost
            craftingLevelRequired
            description
            goldCost
          }
        }
      }
    }
  `)

  // Derive data from the graphql query above.
  const ARMOR_RUNES = queryResult?.site?.siteMetadata?.ARMOR_RUNES
  const HEAVY_ARMOR = queryResult?.site?.siteMetadata?.HEAVY_ARMOR
  const LIGHT_ARMOR = queryResult?.site?.siteMetadata?.LIGHT_ARMOR
  const MARTIAL_WEAPONS = queryResult?.site?.siteMetadata?.MARTIAL_WEAPONS
  const MEDIUM_ARMOR = queryResult?.site?.siteMetadata?.MEDIUM_ARMOR
  const SHIELDS = queryResult?.site?.siteMetadata?.SHIELDS
  const SIMPLE_WEAPONS = queryResult?.site?.siteMetadata?.SIMPLE_WEAPONS
  const WEAPON_PROPERTIES = queryResult?.site?.siteMetadata?.WEAPON_PROPERTIES
  const WEAPON_RUNES = queryResult?.site?.siteMetadata?.WEAPON_RUNES

  // Start with everything collapsed.
  const [expandedARMOR_RUNESIDs, setExpandedARMOR_RUNESIDs] = useState([])
  const [expandedHEAVY_ARMORIDs, setExpandedHEAVY_ARMORIDs] = useState([])
  const [expandedLIGHT_ARMORIDs, setExpandedLIGHT_ARMORIDs] = useState([])
  const [expandedMARTIAL_WEAPONSIDs, setExpandedMARTIAL_WEAPONSIDs] = useState(
    []
  )
  const [expandedMEDIUM_ARMORIDs, setExpandedMEDIUM_ARMORIDs] = useState([])
  const [expandedSHIELDSIDs, setExpandedSHIELDSIDs] = useState([])
  const [expandedSIMPLE_WEAPONSIDs, setExpandedSIMPLE_WEAPONSIDs] = useState([])
  const [
    expandedWEAPON_PROPERTIESIDs,
    setExpandedWEAPON_PROPERTIESIDs,
  ] = useState([])
  const [expandedWEAPON_RUNESIDs, setExpandedWEAPON_RUNESIDs] = useState([])

  return (
    <Layout>
      <SEO title="Armor" />
      <Wrapper>
        <h2>Armor</h2>

        <h2 className="category">ARMOR_RUNES</h2>
        <ul>
          {map(ARMOR_RUNES, item => {
            // Derive item properties.
            const id = item?.id
            const name = item?.name
            const arcaniteCost = item?.arcaniteCost
            const craftingLevelRequired = item?.craftingLevelRequired
            const description = item?.description
            const goldCost = item?.goldCost

            // Derive if the item is expanded or not.
            const isExpanded = expandedARMOR_RUNESIDs?.includes(id)

            return (
              <li key={id}>
                <header
                  className="no-background-image"
                  onKeyDown={event => {
                    // On enter, toggle expanded/expanded.
                    if (event.keyCode === 13) {
                      onExpandedToggle(
                        id,
                        expandedARMOR_RUNESIDs,
                        setExpandedARMOR_RUNESIDs
                      )
                    }
                  }}
                  onClick={() =>
                    onExpandedToggle(
                      id,
                      expandedARMOR_RUNESIDs,
                      setExpandedARMOR_RUNESIDs
                    )
                  }
                  role="button"
                  tabIndex="0"
                >
                  <h3>{name}</h3>
                  <Chevron
                    className={`chevron${isExpanded ? " expanded" : ""}`}
                  />
                </header>

                {isExpanded && (
                  <section className="fields column">
                    <section className="field-group">
                      <h4>Arcanite Cost</h4>
                      <p className="value">{arcaniteCost}</p>
                    </section>
                    <section className="field-group">
                      <h4>Crafting Level Required</h4>
                      <p className="value">{craftingLevelRequired}</p>
                    </section>
                    <section className="field-group">
                      <h4>Description</h4>
                      <p className="value">{description}</p>
                    </section>
                    <section className="field-group">
                      <h4>Gold Cost</h4>
                      <p className="value">{goldCost}</p>
                    </section>
                  </section>
                )}
              </li>
            )
          })}
        </ul>

        <h2 className="category">HEAVY_ARMOR</h2>
        <ul>
          {map(HEAVY_ARMOR, item => {
            // Derive item properties.
            const id = item?.id
            const name = item?.name
            const armorValue = item?.armorValue
            const cost = item?.cost
            const defenseBonus = item?.defenseBonus
            const maxDexterityBonus = item?.maxDexterityBonus
            const movementPenalty = item?.movementPenalty
            const strengthRequired = item?.strengthRequired

            // Derive if the item is expanded or not.
            const isExpanded = expandedHEAVY_ARMORIDs?.includes(id)

            return (
              <li key={id}>
                <header
                  className="no-background-image"
                  onKeyDown={event => {
                    // On enter, toggle expanded/expanded.
                    if (event.keyCode === 13) {
                      onExpandedToggle(
                        id,
                        expandedHEAVY_ARMORIDs,
                        setExpandedHEAVY_ARMORIDs
                      )
                    }
                  }}
                  onClick={() =>
                    onExpandedToggle(
                      id,
                      expandedHEAVY_ARMORIDs,
                      setExpandedHEAVY_ARMORIDs
                    )
                  }
                  role="button"
                  tabIndex="0"
                >
                  <h3>{name}</h3>
                  <Chevron
                    className={`chevron${isExpanded ? " expanded" : ""}`}
                  />
                </header>

                {isExpanded && (
                  <section className="fields column">
                    <section className="field-group">
                      <h4>Armor Value</h4>
                      <p className="value">{armorValue}</p>
                    </section>
                    <section className="field-group">
                      <h4>Cost</h4>
                      <p className="value">{cost}</p>
                    </section>
                    <section className="field-group">
                      <h4>Defense Bonus</h4>
                      <p className="value">{defenseBonus}</p>
                    </section>
                    <section className="field-group">
                      <h4>Max Dexterity Bonus</h4>
                      <p className="value">{maxDexterityBonus}</p>
                    </section>
                    <section className="field-group">
                      <h4>Movement Penalty</h4>
                      <p className="value">{movementPenalty}</p>
                    </section>
                    <section className="field-group">
                      <h4>Strength Required</h4>
                      <p className="value">{strengthRequired}</p>
                    </section>
                  </section>
                )}
              </li>
            )
          })}
        </ul>

        <h2 className="category">LIGHT_ARMOR</h2>
        <ul>
          {map(LIGHT_ARMOR, item => {
            // Derive item properties.
            const id = item?.id
            const name = item?.name
            const armorValue = item?.armorValue
            const cost = item?.cost
            const defenseBonus = item?.defenseBonus
            const maxDexterityBonus = item?.maxDexterityBonus
            const movementPenalty = item?.movementPenalty
            const strengthRequired = item?.strengthRequired

            // Derive if the item is expanded or not.
            const isExpanded = expandedLIGHT_ARMORIDs?.includes(id)

            return (
              <li key={id}>
                <header
                  className="no-background-image"
                  onKeyDown={event => {
                    // On enter, toggle expanded/expanded.
                    if (event.keyCode === 13) {
                      onExpandedToggle(
                        id,
                        expandedLIGHT_ARMORIDs,
                        setExpandedLIGHT_ARMORIDs
                      )
                    }
                  }}
                  onClick={() =>
                    onExpandedToggle(
                      id,
                      expandedLIGHT_ARMORIDs,
                      setExpandedLIGHT_ARMORIDs
                    )
                  }
                  role="button"
                  tabIndex="0"
                >
                  <h3>{name}</h3>
                  <Chevron
                    className={`chevron${isExpanded ? " expanded" : ""}`}
                  />
                </header>

                {isExpanded && (
                  <section className="fields column">
                    <section className="field-group">
                      <h4>Armor Value</h4>
                      <p className="value">{armorValue}</p>
                    </section>
                    <section className="field-group">
                      <h4>Cost</h4>
                      <p className="value">{cost}</p>
                    </section>
                    <section className="field-group">
                      <h4>Defense Bonus</h4>
                      <p className="value">{defenseBonus}</p>
                    </section>
                    <section className="field-group">
                      <h4>Max Dexterity Bonus</h4>
                      <p className="value">{maxDexterityBonus}</p>
                    </section>
                    <section className="field-group">
                      <h4>Movement Penalty</h4>
                      <p className="value">{movementPenalty}</p>
                    </section>
                    <section className="field-group">
                      <h4>Strength Required</h4>
                      <p className="value">{strengthRequired}</p>
                    </section>
                  </section>
                )}
              </li>
            )
          })}
        </ul>

        <h2 className="category">MARTIAL_WEAPONS</h2>
        <ul>
          {map(MARTIAL_WEAPONS, item => {
            // Derive item properties.
            const id = item?.id
            const name = item?.name
            const cost = item?.cost
            const damage = item?.damage
            const range = item?.range
            const weaponProperties = item?.weaponProperties

            // Derive if the item is expanded or not.
            const isExpanded = expandedMARTIAL_WEAPONSIDs?.includes(id)

            return (
              <li key={id}>
                <header
                  className="no-background-image"
                  onKeyDown={event => {
                    // On enter, toggle expanded/expanded.
                    if (event.keyCode === 13) {
                      onExpandedToggle(
                        id,
                        expandedMARTIAL_WEAPONSIDs,
                        setExpandedMARTIAL_WEAPONSIDs
                      )
                    }
                  }}
                  onClick={() =>
                    onExpandedToggle(
                      id,
                      expandedMARTIAL_WEAPONSIDs,
                      setExpandedMARTIAL_WEAPONSIDs
                    )
                  }
                  role="button"
                  tabIndex="0"
                >
                  <h3>{name}</h3>
                  <Chevron
                    className={`chevron${isExpanded ? " expanded" : ""}`}
                  />
                </header>

                {isExpanded && (
                  <section className="fields column">
                    <section className="field-group">
                      <h4>Cost</h4>
                      <p className="value">{cost}</p>
                    </section>
                    <section className="field-group">
                      <h4>Damage</h4>
                      <p className="value">{damage}</p>
                    </section>
                    <section className="field-group">
                      <h4>Range</h4>
                      <p className="value">{range}</p>
                    </section>
                    <section className="field-group">
                      <h4>Weapon Properties</h4>
                      <p className="value">{weaponProperties}</p>
                    </section>
                  </section>
                )}
              </li>
            )
          })}
        </ul>

        <h2 className="category">MEDIUM_ARMOR</h2>
        <ul>
          {map(MEDIUM_ARMOR, item => {
            // Derive item properties.
            const id = item?.id
            const name = item?.name
            const armorValue = item?.armorValue
            const cost = item?.cost
            const defenseBonus = item?.defenseBonus
            const maxDexterityBonus = item?.maxDexterityBonus
            const movementPenalty = item?.movementPenalty
            const strengthRequired = item?.strengthRequired

            // Derive if the item is expanded or not.
            const isExpanded = expandedMEDIUM_ARMORIDs?.includes(id)

            return (
              <li key={id}>
                <header
                  className="no-background-image"
                  onKeyDown={event => {
                    // On enter, toggle expanded/expanded.
                    if (event.keyCode === 13) {
                      onExpandedToggle(
                        id,
                        expandedMEDIUM_ARMORIDs,
                        setExpandedMEDIUM_ARMORIDs
                      )
                    }
                  }}
                  onClick={() =>
                    onExpandedToggle(
                      id,
                      expandedMEDIUM_ARMORIDs,
                      setExpandedMEDIUM_ARMORIDs
                    )
                  }
                  role="button"
                  tabIndex="0"
                >
                  <h3>{name}</h3>
                  <Chevron
                    className={`chevron${isExpanded ? " expanded" : ""}`}
                  />
                </header>

                {isExpanded && (
                  <section className="fields column">
                    <section className="field-group">
                      <h4>Armor Value</h4>
                      <p className="value">{armorValue}</p>
                    </section>
                    <section className="field-group">
                      <h4>Cost</h4>
                      <p className="value">{cost}</p>
                    </section>
                    <section className="field-group">
                      <h4>Defense Bonus</h4>
                      <p className="value">{defenseBonus}</p>
                    </section>
                    <section className="field-group">
                      <h4>Max Dexterity Bonus</h4>
                      <p className="value">{maxDexterityBonus}</p>
                    </section>
                    <section className="field-group">
                      <h4>Movement Penalty</h4>
                      <p className="value">{movementPenalty}</p>
                    </section>
                    <section className="field-group">
                      <h4>Strength Required</h4>
                      <p className="value">{strengthRequired}</p>
                    </section>
                  </section>
                )}
              </li>
            )
          })}
        </ul>

        <h2 className="category">SHIELDS</h2>
        <ul>
          {map(SHIELDS, item => {
            // Derive item properties.
            const id = item?.id
            const name = item?.name
            const cost = item?.cost
            const defenseBonus = item?.defenseBonus
            const specialAbility = item?.specialAbility
            const strengthRequired = item?.strengthRequired

            // Derive if the item is expanded or not.
            const isExpanded = expandedSHIELDSIDs?.includes(id)

            return (
              <li key={id}>
                <header
                  className="no-background-image"
                  onKeyDown={event => {
                    // On enter, toggle expanded/expanded.
                    if (event.keyCode === 13) {
                      onExpandedToggle(
                        id,
                        expandedSHIELDSIDs,
                        setExpandedSHIELDSIDs
                      )
                    }
                  }}
                  onClick={() =>
                    onExpandedToggle(
                      id,
                      expandedSHIELDSIDs,
                      setExpandedSHIELDSIDs
                    )
                  }
                  role="button"
                  tabIndex="0"
                >
                  <h3>{name}</h3>
                  <Chevron
                    className={`chevron${isExpanded ? " expanded" : ""}`}
                  />
                </header>

                {isExpanded && (
                  <section className="fields column">
                    <section className="field-group">
                      <h4>Cost</h4>
                      <p className="value">{cost}</p>
                    </section>
                    <section className="field-group">
                      <h4>Defense Bonus</h4>
                      <p className="value">{defenseBonus}</p>
                    </section>
                    <section className="field-group">
                      <h4>Special Ability</h4>
                      <p className="value">{specialAbility}</p>
                    </section>
                    <section className="field-group">
                      <h4>Strength Required</h4>
                      <p className="value">{strengthRequired}</p>
                    </section>
                  </section>
                )}
              </li>
            )
          })}
        </ul>

        <h2 className="category">SIMPLE_WEAPONS</h2>
        <ul>
          {map(SIMPLE_WEAPONS, item => {
            // Derive item properties.
            const id = item?.id
            const name = item?.name
            const cost = item?.cost
            const damage = item?.damage
            const range = item?.range
            const weaponProperties = item?.weaponProperties

            // Derive if the item is expanded or not.
            const isExpanded = expandedSIMPLE_WEAPONSIDs?.includes(id)

            return (
              <li key={id}>
                <header
                  className="no-background-image"
                  onKeyDown={event => {
                    // On enter, toggle expanded/expanded.
                    if (event.keyCode === 13) {
                      onExpandedToggle(
                        id,
                        expandedSIMPLE_WEAPONSIDs,
                        setExpandedSIMPLE_WEAPONSIDs
                      )
                    }
                  }}
                  onClick={() =>
                    onExpandedToggle(
                      id,
                      expandedSIMPLE_WEAPONSIDs,
                      setExpandedSIMPLE_WEAPONSIDs
                    )
                  }
                  role="button"
                  tabIndex="0"
                >
                  <h3>{name}</h3>
                  <Chevron
                    className={`chevron${isExpanded ? " expanded" : ""}`}
                  />
                </header>

                {isExpanded && (
                  <section className="fields column">
                    <section className="field-group">
                      <h4>Cost</h4>
                      <p className="value">{cost}</p>
                    </section>
                    <section className="field-group">
                      <h4>Damage</h4>
                      <p className="value">{damage}</p>
                    </section>
                    <section className="field-group">
                      <h4>Range</h4>
                      <p className="value">{range}</p>
                    </section>
                    <section className="field-group">
                      <h4>Weapon Properties</h4>
                      <p className="value">{weaponProperties}</p>
                    </section>
                  </section>
                )}
              </li>
            )
          })}
        </ul>

        <h2 className="category">WEAPON_PROPERTIES</h2>
        <ul>
          {map(WEAPON_PROPERTIES, item => {
            // Derive item properties.
            const id = item?.id
            const name = item?.name
            const description = item?.description

            // Derive if the item is expanded or not.
            const isExpanded = expandedWEAPON_PROPERTIESIDs?.includes(id)

            return (
              <li key={id}>
                <header
                  className="no-background-image"
                  onKeyDown={event => {
                    // On enter, toggle expanded/expanded.
                    if (event.keyCode === 13) {
                      onExpandedToggle(
                        id,
                        expandedWEAPON_PROPERTIESIDs,
                        setExpandedWEAPON_PROPERTIESIDs
                      )
                    }
                  }}
                  onClick={() =>
                    onExpandedToggle(
                      id,
                      expandedWEAPON_PROPERTIESIDs,
                      setExpandedWEAPON_PROPERTIESIDs
                    )
                  }
                  role="button"
                  tabIndex="0"
                >
                  <h3>{name}</h3>
                  <Chevron
                    className={`chevron${isExpanded ? " expanded" : ""}`}
                  />
                </header>

                {isExpanded && (
                  <section className="fields column">
                    <section className="field-group">
                      <h4>Description</h4>
                      <p className="value">{description}</p>
                    </section>
                  </section>
                )}
              </li>
            )
          })}
        </ul>

        <h2 className="category">WEAPON_RUNES</h2>
        <ul>
          {map(WEAPON_RUNES, item => {
            // Derive item properties.
            const id = item?.id
            const name = item?.name
            const arcaniteCost = item?.arcaniteCost
            const craftingLevelRequired = item?.craftingLevelRequired
            const description = item?.description
            const goldCost = item?.goldCost

            // Derive if the item is expanded or not.
            const isExpanded = expandedWEAPON_RUNESIDs?.includes(id)

            return (
              <li key={id}>
                <header
                  className="no-background-image"
                  onKeyDown={event => {
                    // On enter, toggle expanded/expanded.
                    if (event.keyCode === 13) {
                      onExpandedToggle(
                        id,
                        expandedWEAPON_RUNESIDs,
                        setExpandedWEAPON_RUNESIDs
                      )
                    }
                  }}
                  onClick={() =>
                    onExpandedToggle(
                      id,
                      expandedWEAPON_RUNESIDs,
                      setExpandedWEAPON_RUNESIDs
                    )
                  }
                  role="button"
                  tabIndex="0"
                >
                  <h3>{name}</h3>
                  <Chevron
                    className={`chevron${isExpanded ? " expanded" : ""}`}
                  />
                </header>

                {isExpanded && (
                  <section className="fields column">
                    <section className="field-group">
                      <h4>Arcanite Cost</h4>
                      <p className="value">{arcaniteCost}</p>
                    </section>
                    <section className="field-group">
                      <h4>Crafting Level Required</h4>
                      <p className="value">{craftingLevelRequired}</p>
                    </section>
                    <section className="field-group">
                      <h4>Description</h4>
                      <p className="value">{description}</p>
                    </section>
                    <section className="field-group">
                      <h4>Gold Cost</h4>
                      <p className="value">{goldCost}</p>
                    </section>
                  </section>
                )}
              </li>
            )
          })}
        </ul>
      </Wrapper>
    </Layout>
  )
}

export default ArmorPage
