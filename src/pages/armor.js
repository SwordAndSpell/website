// Node modules.
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
// Relative imports.
import Chevron from "../components/icons/Chevron"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TableOfContents from "../components/TableOfContents"
import { Wrapper } from "../components/cardsPage"
import { onExpandedToggle } from "../utils"

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
          SHIELDS {
            name
            id
            cost
            defenseBonus
            specialAbility
            strengthRequired
          }
        }
      }
    }
  `)

  // Derive data from the graphql query above.
  const ARMOR_RUNES = queryResult?.site?.siteMetadata?.ARMOR_RUNES
  const HEAVY_ARMOR = queryResult?.site?.siteMetadata?.HEAVY_ARMOR
  const LIGHT_ARMOR = queryResult?.site?.siteMetadata?.LIGHT_ARMOR
  const MEDIUM_ARMOR = queryResult?.site?.siteMetadata?.MEDIUM_ARMOR
  const SHIELDS = queryResult?.site?.siteMetadata?.SHIELDS

  // Start with everything collapsed.
  const [expandedArmorRunesIDs, setExpandedArmorRunesIDs] = useState([])
  const [expandedHeavyArmorIDs, setExpandedHeavyArmorIDs] = useState([])
  const [expandedLightArmorIDs, setExpandedLightArmorIDs] = useState([])
  const [expandedMediumArmorIDs, setExpandedMediumArmorIDs] = useState([])
  const [expandedShieldsIDs, setExpandedShieldsIDs] = useState([])

  return (
    <Layout>
      <Seo title="Armors | Armor Runes" />
      <Wrapper>
        <h2>Armors / Armor Runes</h2>

        {/* Table of Contents */}
        <TableOfContents />

        <h2 className="category" id="Light Armor">
          Light Armor
        </h2>
        <ul>
          {LIGHT_ARMOR?.map(item => {
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
            const isExpanded = expandedLightArmorIDs?.includes(id)

            return (
              <li key={id}>
                <header
                  className="no-background-image"
                  onKeyDown={event => {
                    // On enter, toggle expanded/expanded.
                    if (event.keyCode === 13) {
                      onExpandedToggle(
                        id,
                        expandedLightArmorIDs,
                        setExpandedLightArmorIDs
                      )
                    }
                  }}
                  onClick={() =>
                    onExpandedToggle(
                      id,
                      expandedLightArmorIDs,
                      setExpandedLightArmorIDs
                    )
                  }
                  role="button"
                  tabIndex="0"
                >
                  <h3 id={name}>{name}</h3>
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

        <h2 className="category" id="Medium Armor">
          Medium Armor
        </h2>
        <ul>
          {MEDIUM_ARMOR?.map(item => {
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
            const isExpanded = expandedMediumArmorIDs?.includes(id)

            return (
              <li key={id}>
                <header
                  className="no-background-image"
                  onKeyDown={event => {
                    // On enter, toggle expanded/expanded.
                    if (event.keyCode === 13) {
                      onExpandedToggle(
                        id,
                        expandedMediumArmorIDs,
                        setExpandedMediumArmorIDs
                      )
                    }
                  }}
                  onClick={() =>
                    onExpandedToggle(
                      id,
                      expandedMediumArmorIDs,
                      setExpandedMediumArmorIDs
                    )
                  }
                  role="button"
                  tabIndex="0"
                >
                  <h3 id={name}>{name}</h3>
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

        <h2 className="category" id="Heavy Armor">
          Heavy Armor
        </h2>
        <ul>
          {HEAVY_ARMOR?.map(item => {
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
            const isExpanded = expandedHeavyArmorIDs?.includes(id)

            return (
              <li key={id}>
                <header
                  className="no-background-image"
                  onKeyDown={event => {
                    // On enter, toggle expanded/expanded.
                    if (event.keyCode === 13) {
                      onExpandedToggle(
                        id,
                        expandedHeavyArmorIDs,
                        setExpandedHeavyArmorIDs
                      )
                    }
                  }}
                  onClick={() =>
                    onExpandedToggle(
                      id,
                      expandedHeavyArmorIDs,
                      setExpandedHeavyArmorIDs
                    )
                  }
                  role="button"
                  tabIndex="0"
                >
                  <h3 id={name}>{name}</h3>
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

        <h2 className="category" id="Shields">
          Shields
        </h2>
        <ul>
          {SHIELDS?.map(item => {
            // Derive item properties.
            const id = item?.id
            const name = item?.name
            const cost = item?.cost
            const defenseBonus = item?.defenseBonus
            const specialAbility = item?.specialAbility
            const strengthRequired = item?.strengthRequired

            // Derive if the item is expanded or not.
            const isExpanded = expandedShieldsIDs?.includes(id)

            return (
              <li key={id}>
                <header
                  className="no-background-image"
                  onKeyDown={event => {
                    // On enter, toggle expanded/expanded.
                    if (event.keyCode === 13) {
                      onExpandedToggle(
                        id,
                        expandedShieldsIDs,
                        setExpandedShieldsIDs
                      )
                    }
                  }}
                  onClick={() =>
                    onExpandedToggle(
                      id,
                      expandedShieldsIDs,
                      setExpandedShieldsIDs
                    )
                  }
                  role="button"
                  tabIndex="0"
                >
                  <h3 id={name}>{name}</h3>
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

        <h2 className="category" id="Armor Runes">
          Armor Runes
        </h2>
        <ul>
          {ARMOR_RUNES?.map(item => {
            // Derive item properties.
            const id = item?.id
            const name = item?.name
            const arcaniteCost = item?.arcaniteCost
            const craftingLevelRequired = item?.craftingLevelRequired
            const description = item?.description
            const goldCost = item?.goldCost

            // Derive if the item is expanded or not.
            const isExpanded = expandedArmorRunesIDs?.includes(id)

            return (
              <li key={id}>
                <header
                  className="no-background-image"
                  onKeyDown={event => {
                    // On enter, toggle expanded/expanded.
                    if (event.keyCode === 13) {
                      onExpandedToggle(
                        id,
                        expandedArmorRunesIDs,
                        setExpandedArmorRunesIDs
                      )
                    }
                  }}
                  onClick={() =>
                    onExpandedToggle(
                      id,
                      expandedArmorRunesIDs,
                      setExpandedArmorRunesIDs
                    )
                  }
                  role="button"
                  tabIndex="0"
                >
                  <h3 id={name}>{name}</h3>
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
