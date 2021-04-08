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

const WeaponsPage = () => {
  const queryResult = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          MARTIAL_WEAPONS {
            name
            id
            cost
            damage
            range
            weaponProperties
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
  const MARTIAL_WEAPONS = queryResult?.site?.siteMetadata?.MARTIAL_WEAPONS
  const SIMPLE_WEAPONS = queryResult?.site?.siteMetadata?.SIMPLE_WEAPONS
  const WEAPON_PROPERTIES = queryResult?.site?.siteMetadata?.WEAPON_PROPERTIES
  const WEAPON_RUNES = queryResult?.site?.siteMetadata?.WEAPON_RUNES

  // Start with everything collapsed.
  const [expandedMartialWeaponsIDs, setExpandedMartialWeaponsIDs] = useState([])
  const [expandedSimpleWeaponsIDs, setExpandedSimpleWeaponsIDs] = useState([])
  const [
    expandedWeaponPropertiesIDs,
    setExpandedWeaponPropertiesIDs,
  ] = useState([])
  const [expandedWeaponRunesIDs, setExpandedWeaponRunesIDs] = useState([])

  return (
    <Layout>
      <SEO title="Weapons | Weapon Runes" />
      <Wrapper>
        <h2>Weapons / Weapon Runes</h2>

        <h2 className="category">Martial Weapons</h2>
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
            const isExpanded = expandedMartialWeaponsIDs?.includes(id)

            return (
              <li key={id}>
                <header
                  className="no-background-image"
                  onKeyDown={event => {
                    // On enter, toggle expanded/expanded.
                    if (event.keyCode === 13) {
                      onExpandedToggle(
                        id,
                        expandedMartialWeaponsIDs,
                        setExpandedMartialWeaponsIDs
                      )
                    }
                  }}
                  onClick={() =>
                    onExpandedToggle(
                      id,
                      expandedMartialWeaponsIDs,
                      setExpandedMartialWeaponsIDs
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

        <h2 className="category">Simple Weapons</h2>
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
            const isExpanded = expandedSimpleWeaponsIDs?.includes(id)

            return (
              <li key={id}>
                <header
                  className="no-background-image"
                  onKeyDown={event => {
                    // On enter, toggle expanded/expanded.
                    if (event.keyCode === 13) {
                      onExpandedToggle(
                        id,
                        expandedSimpleWeaponsIDs,
                        setExpandedSimpleWeaponsIDs
                      )
                    }
                  }}
                  onClick={() =>
                    onExpandedToggle(
                      id,
                      expandedSimpleWeaponsIDs,
                      setExpandedSimpleWeaponsIDs
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

        <h2 className="category">Weapon Properties</h2>
        <ul>
          {map(WEAPON_PROPERTIES, item => {
            // Derive item properties.
            const id = item?.id
            const name = item?.name
            const description = item?.description

            // Derive if the item is expanded or not.
            const isExpanded = expandedWeaponPropertiesIDs?.includes(id)

            return (
              <li key={id}>
                <header
                  className="no-background-image"
                  onKeyDown={event => {
                    // On enter, toggle expanded/expanded.
                    if (event.keyCode === 13) {
                      onExpandedToggle(
                        id,
                        expandedWeaponPropertiesIDs,
                        setExpandedWeaponPropertiesIDs
                      )
                    }
                  }}
                  onClick={() =>
                    onExpandedToggle(
                      id,
                      expandedWeaponPropertiesIDs,
                      setExpandedWeaponPropertiesIDs
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

        <h2 className="category">Weapon Runes</h2>
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
            const isExpanded = expandedWeaponRunesIDs?.includes(id)

            return (
              <li key={id}>
                <header
                  className="no-background-image"
                  onKeyDown={event => {
                    // On enter, toggle expanded/expanded.
                    if (event.keyCode === 13) {
                      onExpandedToggle(
                        id,
                        expandedWeaponRunesIDs,
                        setExpandedWeaponRunesIDs
                      )
                    }
                  }}
                  onClick={() =>
                    onExpandedToggle(
                      id,
                      expandedWeaponRunesIDs,
                      setExpandedWeaponRunesIDs
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

export default WeaponsPage
