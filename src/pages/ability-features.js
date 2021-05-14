// Node modules.
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import uniq from "lodash/uniq"
import map from "lodash/map"
// Relative imports.
import Chevron from "../components/icons/Chevron"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Wrapper } from "../components/cardsPage"
import { onCollapseToggle } from "../utils"

const onFilterToggle = (filterToToggle, activeFilters, setActiveFilters) => {
  // Expand the ID.
  if (activeFilters?.includes(filterToToggle)) {
    setActiveFilters(activeFilters?.filter(filter => filter !== filterToToggle))
    return
  }

  // toggle the filter
  setActiveFilters(uniq([...activeFilters, filterToToggle]))
}

const toggleAllFilters = (activeFilters, setActiveFilters) => {
  if (activeFilters.length > 0) {
    setActiveFilters([])
    return
  }

  setActiveFilters([
    "Dual Wielding",
    "Daggers / Finesse",
    "Fencing",
    "Two-Handed",
    "Weapon and Shield",
    "Brawling / Grappling",
    "Spellcasting",
    "Polearms",
    "Ranged",
  ])
  return
}

const AbilityFeaturesPage = () => {
  const queryResult = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          ABILITY_FEATURES {
            relevantStyles
            requirements
            name
            level
            id
            description
          }
        }
      }
    }
  `)

  // Derive Races and Perks data from the graphql query above.
  const ABILITIES = queryResult?.site?.siteMetadata?.ABILITY_FEATURES

  const [activeFilters, setActiveFilters] = useState([
    "Dual Wielding",
    "Daggers / Finesse",
    "Fencing",
    "Two-Handed",
    "Weapon and Shield",
    "Brawling / Grappling",
    "Spellcasting",
    "Polearms",
    "Ranged",
  ])
  const [expandedAbilityIDs, setExpandedAbilityIDs] = useState([])

  const level1Abilities = ABILITIES?.filter(ability => ability.level === 1)
  const level3Abilities = ABILITIES?.filter(ability => ability.level === 3)
  const level5Abilities = ABILITIES?.filter(ability => ability.level === 5)
  const level7Abilities = ABILITIES?.filter(ability => ability.level === 7)

  return (
    <Layout>
      <Seo title="Ability Features" />
      <Wrapper>
        <h2>Ability Features</h2>

        {/* Filters */}
        <section className="search-section">
          <section className="filters">
            <button
              type="button"
              className={`filter-button ${
                activeFilters?.includes("Dual Wielding") &&
                activeFilters?.includes("Daggers / Finesse") &&
                activeFilters?.includes("Fencing") &&
                activeFilters?.includes("Two-Handed") &&
                activeFilters?.includes("Weapon and Shield") &&
                activeFilters?.includes("Brawling / Grappling") &&
                activeFilters?.includes("Spellcasting") &&
                activeFilters?.includes("Polearms") &&
                activeFilters?.includes("Ranged")
                  ? "active-button"
                  : "inactive-button"
              }`}
              onClick={() => toggleAllFilters(activeFilters, setActiveFilters)}
            >
              All
            </button>
            <button
              type="button"
              className={`filter-button ${
                activeFilters?.includes("Dual Wielding")
                  ? "active-button"
                  : "inactive-button"
              }`}
              onClick={() =>
                onFilterToggle("Dual Wielding", activeFilters, setActiveFilters)
              }
            >
              Dual Wielding
            </button>
            <button
              type="button"
              className={`filter-button ${
                activeFilters?.includes("Daggers / Finesse")
                  ? "active-button"
                  : "inactive-button"
              }`}
              onClick={() =>
                onFilterToggle(
                  "Daggers / Finesse",
                  activeFilters,
                  setActiveFilters
                )
              }
            >
              Daggers / Finesse
            </button>
            <button
              type="button"
              className={`filter-button ${
                activeFilters?.includes("Fencing")
                  ? "active-button"
                  : "inactive-button"
              }`}
              onClick={() =>
                onFilterToggle("Fencing", activeFilters, setActiveFilters)
              }
            >
              Fencing
            </button>
            <button
              type="button"
              className={`filter-button ${
                activeFilters?.includes("Two-Handed")
                  ? "active-button"
                  : "inactive-button"
              }`}
              onClick={() =>
                onFilterToggle("Two-Handed", activeFilters, setActiveFilters)
              }
            >
              Two-Handed
            </button>
            <button
              type="button"
              className={`filter-button ${
                activeFilters?.includes("Weapon and Shield")
                  ? "active-button"
                  : "inactive-button"
              }`}
              onClick={() =>
                onFilterToggle(
                  "Weapon and Shield",
                  activeFilters,
                  setActiveFilters
                )
              }
            >
              Weapon and Shield
            </button>
            <button
              type="button"
              className={`filter-button ${
                activeFilters?.includes("Brawling / Grappling")
                  ? "active-button"
                  : "inactive-button"
              }`}
              onClick={() =>
                onFilterToggle(
                  "Brawling / Grappling",
                  activeFilters,
                  setActiveFilters
                )
              }
            >
              Brawling / Grappling
            </button>
            <button
              type="button"
              className={`filter-button ${
                activeFilters?.includes("Spellcasting")
                  ? "active-button"
                  : "inactive-button"
              }`}
              onClick={() =>
                onFilterToggle("Spellcasting", activeFilters, setActiveFilters)
              }
            >
              Spellcasting
            </button>
            <button
              type="button"
              className={`filter-button ${
                activeFilters?.includes("Polearms")
                  ? "active-button"
                  : "inactive-button"
              }`}
              onClick={() =>
                onFilterToggle("Polearms", activeFilters, setActiveFilters)
              }
            >
              Polearms
            </button>
            <button
              type="button"
              className={`filter-button ${
                activeFilters?.includes("Ranged")
                  ? "active-button"
                  : "inactive-button"
              }`}
              onClick={() =>
                onFilterToggle("Ranged", activeFilters, setActiveFilters)
              }
            >
              Ranged
            </button>
          </section>
        </section>

        {/* begin headings for abilities */}
        <h2 className="category">Level 1 Abilties</h2>
        <ul>
          {map(level1Abilities, ability => {
            const name = ability?.name
            const id = ability?.id
            const description = ability?.description
            const requirements = ability?.requirements
            const relevantStyles = ability?.relevantStyles

            const isRelevant = activeFilters.some(style =>
              relevantStyles.includes(style)
            )

            const isExpanded = expandedAbilityIDs?.includes(id)
            if (isRelevant)
              return (
                <li key={`${id}--level1`}>
                  {/* NAME */}
                  {/* ============ */}
                  <header
                    className="no-background-image"
                    onKeyDown={event => {
                      // On enter, toggle expanded/expanded.
                      if (event.keyCode === 13) {
                        onCollapseToggle(
                          id,
                          expandedAbilityIDs,
                          setExpandedAbilityIDs
                        )
                      }
                    }}
                    onClick={() =>
                      onCollapseToggle(
                        id,
                        expandedAbilityIDs,
                        setExpandedAbilityIDs
                      )
                    }
                    role="button"
                    tabIndex="0"
                  >
                    <h3 id={`${id}--${name}`}>{name}</h3>
                    <Chevron
                      className={`chevron${isExpanded ? " expanded" : ""}`}
                    />
                  </header>
                  {/* IMAGE + NAME end */}
                  {/* ============ */}
                  {isExpanded && (
                    <section className="fields column content">
                      <section className="field-group">
                        <h4>Requirements</h4>
                        <p className="value">{requirements || "None"}</p>
                      </section>

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

        {/* begin headings for abilities */}
        <h2 className="category">Level 3 Abilties</h2>
        <ul>
          {map(level3Abilities, ability => {
            const name = ability?.name
            const id = ability?.id
            const description = ability?.description
            const requirements = ability?.requirements
            const relevantStyles = ability?.relevantStyles

            const isRelevant = activeFilters.some(style =>
              relevantStyles.includes(style)
            )

            const isExpanded = expandedAbilityIDs?.includes(id)
            if (isRelevant)
              return (
                <li key={`${id}--level1`}>
                  {/* NAME */}
                  {/* ============ */}
                  <header
                    className="no-background-image"
                    onKeyDown={event => {
                      // On enter, toggle expanded/expanded.
                      if (event.keyCode === 13) {
                        onCollapseToggle(
                          id,
                          expandedAbilityIDs,
                          setExpandedAbilityIDs
                        )
                      }
                    }}
                    onClick={() =>
                      onCollapseToggle(
                        id,
                        expandedAbilityIDs,
                        setExpandedAbilityIDs
                      )
                    }
                    role="button"
                    tabIndex="0"
                  >
                    <h3 id={`${id}--${name}`}>{name}</h3>
                    <Chevron
                      className={`chevron${isExpanded ? " expanded" : ""}`}
                    />
                  </header>
                  {/* IMAGE + NAME end */}
                  {/* ============ */}
                  {isExpanded && (
                    <section className="fields column content">
                      <section className="field-group">
                        <h4>Requirements</h4>
                        <p className="value">{requirements || "None"}</p>
                      </section>

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

        {/* begin headings for abilities */}
        <h2 className="category">Level 5 Abilties</h2>
        <ul>
          {map(level5Abilities, ability => {
            const name = ability?.name
            const id = ability?.id
            const description = ability?.description
            const requirements = ability?.requirements
            const relevantStyles = ability?.relevantStyles

            const isRelevant = activeFilters.some(style =>
              relevantStyles.includes(style)
            )

            const isExpanded = expandedAbilityIDs?.includes(id)
            if (isRelevant)
              return (
                <li key={`${id}--level1`}>
                  {/* NAME */}
                  {/* ============ */}
                  <header
                    className="no-background-image"
                    onKeyDown={event => {
                      // On enter, toggle expanded/expanded.
                      if (event.keyCode === 13) {
                        onCollapseToggle(
                          id,
                          expandedAbilityIDs,
                          setExpandedAbilityIDs
                        )
                      }
                    }}
                    onClick={() =>
                      onCollapseToggle(
                        id,
                        expandedAbilityIDs,
                        setExpandedAbilityIDs
                      )
                    }
                    role="button"
                    tabIndex="0"
                  >
                    <h3 id={`${id}--${name}`}>{name}</h3>
                    <Chevron
                      className={`chevron${isExpanded ? " expanded" : ""}`}
                    />
                  </header>
                  {/* IMAGE + NAME end */}
                  {/* ============ */}
                  {isExpanded && (
                    <section className="fields column content">
                      <section className="field-group">
                        <h4>Requirements</h4>
                        <p className="value">{requirements || "None"}</p>
                      </section>

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

        {/* begin headings for abilities */}
        <h2 className="category">Level 7 Abilties</h2>
        <ul>
          {map(level7Abilities, ability => {
            const name = ability?.name
            const id = ability?.id
            const description = ability?.description
            const requirements = ability?.requirements
            const relevantStyles = ability?.relevantStyles

            const isRelevant = activeFilters.some(style =>
              relevantStyles.includes(style)
            )

            const isExpanded = expandedAbilityIDs?.includes(id)
            if (isRelevant)
              return (
                <li key={`${id}--level1`}>
                  {/* NAME */}
                  {/* ============ */}
                  <header
                    className="no-background-image"
                    onKeyDown={event => {
                      // On enter, toggle expanded/expanded.
                      if (event.keyCode === 13) {
                        onCollapseToggle(
                          id,
                          expandedAbilityIDs,
                          setExpandedAbilityIDs
                        )
                      }
                    }}
                    onClick={() =>
                      onCollapseToggle(
                        id,
                        expandedAbilityIDs,
                        setExpandedAbilityIDs
                      )
                    }
                    role="button"
                    tabIndex="0"
                  >
                    <h3 id={`${id}--${name}`}>{name}</h3>
                    <Chevron
                      className={`chevron${isExpanded ? " expanded" : ""}`}
                    />
                  </header>
                  {/* IMAGE + NAME end */}
                  {/* ============ */}
                  {isExpanded && (
                    <section className="fields column content">
                      <section className="field-group">
                        <h4>Requirements</h4>
                        <p className="value">{requirements || "None"}</p>
                      </section>

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
      </Wrapper>
    </Layout>
  )
}

export default AbilityFeaturesPage
