// Node modules.
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import uniq from "lodash/uniq"
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
  const [collapsedHeadings, setCollapsedHeadings] = useState([
    "1",
    "3",
    "5",
    "7",
  ])
  const [collapsedAbilityIDs, setCollapsedAbilityIDs] = useState([])

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

        {/* begin headings for abilities */}
        <ul>
          <li key={"level1Abilities"}>
            {/*  NAME */}
            {/* ===== */}
            <header
              className="no-background-image"
              onKeyDown={event => {
                // On enter, toggle expanded/expanded.
                if (event.keyCode === 13) {
                  onCollapseToggle("1", collapsedHeadings, setCollapsedHeadings)
                }
              }}
              onClick={() =>
                onCollapseToggle("1", collapsedHeadings, setCollapsedHeadings)
              }
              role="button"
              tabIndex="0"
            >
              <h3 id="Level 1 Abilities">Level 1 Abilities</h3>
              <Chevron
                className={`chevron${
                  !collapsedHeadings?.includes("1") ? " expanded" : ""
                }`}
              />
            </header>

            {/* NAME end */}
            {/* ======== */}

            {!collapsedHeadings?.includes("1") && (
              <>
                <section className="collapsibles">
                  {level1Abilities?.map(ability => {
                    // Derive ability properties.
                    const name = ability?.name
                    const id = ability?.id
                    const description = ability?.description
                    const requirements = ability?.requirements
                    const relevantStyles = ability?.relevantStyles

                    const relevant = activeFilters.some(style =>
                      relevantStyles.includes(style)
                    )

                    return (
                      relevant && (
                        <button
                          className="collapsible"
                          key={`filter-button ${id}`}
                          onClick={() =>
                            onCollapseToggle(
                              id,
                              collapsedAbilityIDs,
                              setCollapsedAbilityIDs
                            )
                          }
                          type="button"
                        >
                          {/* Ability Name */}
                          <h4 id={name}>{name}</h4>

                          {/* Ability Info */}
                          {collapsedAbilityIDs?.includes(id) && (
                            <>
                              {requirements && (
                                <p className="requirements">
                                  <strong>Requirements:</strong> {requirements}
                                </p>
                              )}
                              <p>{description}</p>
                            </>
                          )}
                        </button>
                      )
                    )
                  })}
                </section>
              </>
            )}
          </li>

          <li key={"level3Abilities"}>
            {/*  NAME */}
            {/* ===== */}
            <header
              className="no-background-image"
              onKeyDown={event => {
                // On enter, toggle expanded/expanded.
                if (event.keyCode === 13) {
                  onCollapseToggle("3", collapsedHeadings, setCollapsedHeadings)
                }
              }}
              onClick={() =>
                onCollapseToggle("3", collapsedHeadings, setCollapsedHeadings)
              }
              role="button"
              tabIndex="0"
            >
              <h3 id="Level 3 Abilities">Level 3 Abilities</h3>
              <Chevron
                className={`chevron${
                  !collapsedHeadings?.includes("3") ? " expanded" : ""
                }`}
              />
            </header>

            {/* NAME end */}
            {/* ======== */}

            {!collapsedHeadings?.includes("3") && (
              <>
                <section className="collapsibles">
                  {level3Abilities?.map(ability => {
                    // Derive ability properties.
                    const name = ability?.name
                    const id = ability?.id
                    const description = ability?.description
                    const requirements = ability?.requirements
                    const relevantStyles = ability?.relevantStyles

                    const relevant = activeFilters.some(style =>
                      relevantStyles.includes(style)
                    )

                    return (
                      relevant && (
                        <button
                          className="collapsible"
                          key={`filter-button ${id}`}
                          onClick={() =>
                            onCollapseToggle(
                              id,
                              collapsedAbilityIDs,
                              setCollapsedAbilityIDs
                            )
                          }
                          type="button"
                        >
                          {/* Ability Name */}
                          <h4 id={name}>{name}</h4>

                          {/* Ability Info */}
                          {collapsedAbilityIDs?.includes(id) && (
                            <>
                              {requirements && (
                                <p className="requirements">
                                  <strong>Requirements:</strong> {requirements}
                                </p>
                              )}
                              <p>{description}</p>
                            </>
                          )}
                        </button>
                      )
                    )
                  })}
                </section>
              </>
            )}
          </li>

          <li key={"level5Abilities"}>
            {/*  NAME */}
            {/* ===== */}
            <header
              className="no-background-image"
              onKeyDown={event => {
                // On enter, toggle expanded/expanded.
                if (event.keyCode === 13) {
                  onCollapseToggle("5", collapsedHeadings, setCollapsedHeadings)
                }
              }}
              onClick={() =>
                onCollapseToggle("5", collapsedHeadings, setCollapsedHeadings)
              }
              role="button"
              tabIndex="0"
            >
              <h3 id="Level 5 Abilities">Level 5 Abilities</h3>
              <Chevron
                className={`chevron${
                  !collapsedHeadings?.includes("5") ? " expanded" : ""
                }`}
              />
            </header>

            {/* NAME end */}
            {/* ======== */}

            {!collapsedHeadings?.includes("5") && (
              <>
                <section className="collapsibles">
                  {level5Abilities?.map(ability => {
                    // Derive ability properties.
                    const name = ability?.name
                    const id = ability?.id
                    const description = ability?.description
                    const requirements = ability?.requirements
                    const relevantStyles = ability?.relevantStyles

                    const relevant = activeFilters.some(style =>
                      relevantStyles.includes(style)
                    )

                    return (
                      relevant && (
                        <button
                          className="collapsible"
                          key={`filter-button ${id}`}
                          onClick={() =>
                            onCollapseToggle(
                              id,
                              collapsedAbilityIDs,
                              setCollapsedAbilityIDs
                            )
                          }
                          type="button"
                        >
                          {/* Ability Name */}
                          <h4 id={name}>{name}</h4>

                          {/* Ability Info */}
                          {collapsedAbilityIDs?.includes(id) && (
                            <>
                              {requirements && (
                                <p className="requirements">
                                  <strong>Requirements:</strong> {requirements}
                                </p>
                              )}
                              <p>{description}</p>
                            </>
                          )}
                        </button>
                      )
                    )
                  })}
                </section>
              </>
            )}
          </li>

          <li key={"level7Abilities"}>
            {/*  NAME */}
            {/* ===== */}
            <header
              className="no-background-image"
              onKeyDown={event => {
                // On enter, toggle expanded/expanded.
                if (event.keyCode === 13) {
                  onCollapseToggle("7", collapsedHeadings, setCollapsedHeadings)
                }
              }}
              onClick={() =>
                onCollapseToggle("7", collapsedHeadings, setCollapsedHeadings)
              }
              role="button"
              tabIndex="0"
            >
              <h3 id="Level 7 Abilities">Level 7 Abilities</h3>
              <Chevron
                className={`chevron${
                  !collapsedHeadings?.includes("7") ? " expanded" : ""
                }`}
              />
            </header>

            {/* NAME end */}
            {/* ======== */}

            {!collapsedHeadings?.includes("7") && (
              <>
                <section className="collapsibles">
                  {level7Abilities?.map(ability => {
                    // Derive ability properties.
                    const name = ability?.name
                    const id = ability?.id
                    const description = ability?.description
                    const requirements = ability?.requirements
                    const relevantStyles = ability?.relevantStyles

                    const relevant = activeFilters.some(style =>
                      relevantStyles.includes(style)
                    )

                    return (
                      relevant && (
                        <button
                          className="collapsible"
                          key={`filter-button ${id}`}
                          onClick={() =>
                            onCollapseToggle(
                              id,
                              collapsedAbilityIDs,
                              setCollapsedAbilityIDs
                            )
                          }
                          type="button"
                        >
                          {/* Ability Name */}
                          <h4 id={name}>{name}</h4>

                          {/* Ability Info */}
                          {collapsedAbilityIDs?.includes(id) && (
                            <>
                              {requirements && (
                                <p className="requirements">
                                  <strong>Requirements:</strong> {requirements}
                                </p>
                              )}
                              <p>{description}</p>
                            </>
                          )}
                        </button>
                      )
                    )
                  })}
                </section>
              </>
            )}
          </li>
        </ul>
      </Wrapper>
    </Layout>
  )
}

export default AbilityFeaturesPage
