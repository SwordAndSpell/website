// Node modules.
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import filter from "lodash/filter"
import map from "lodash/map"
import uniq from "lodash/uniq"
// Relative imports.
import Layout from "../components/layout"
import Chevron from "../components/icons/Chevron"
import SEO from "../components/seo"
import { Wrapper } from "../components/cardsPage"

const onFilterToggle = (filterToToggle, activeFilters, setActiveFilters) => {
  // Expand the ID.
  if (activeFilters?.includes(filterToToggle)) {
    setActiveFilters(filter(activeFilters, filter => filter !== filterToToggle))
    return
  }
  // toggle the filter
  setActiveFilters(uniq([...activeFilters, filterToToggle]))
}

const onCollapseToggle = (id, collapsedIDs, setCollapsedIDs) => {
  // Expand the ID.
  if (collapsedIDs?.includes(id)) {
    setCollapsedIDs(filter(collapsedIDs, collapsedID => collapsedID !== id))
    return
  }

  // Collapse the ID.
  setCollapsedIDs(uniq([...collapsedIDs, id]))
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
    "Dual Weilding",
    "Daggers / Finesse",
    "Fencing",
    "Two-Handed",
    "Weapon and Shield",
    "Brawling / Grappling",
    "Spellcasting",
    "Polearms",
    "Ranged",
  ])
  const [collapsedHeadings, setCollapsedHeadings] = useState(["3", "5", "7"])
  const [collapsedAbilityIDs, setCollapsedAbilityIDs] = useState([])

  const level1Abilities = filter(ABILITIES, ability => ability.level === 1)
  const level3Abilities = filter(ABILITIES, ability => ability.level === 3)
  const level5Abilities = filter(ABILITIES, ability => ability.level === 5)
  const level7Abilities = filter(ABILITIES, ability => ability.level === 7)

  return (
    <Layout>
      <SEO title="Ability Features" />
      <Wrapper>
        <h2>Ability Features</h2>
        <section className="buttons">
          <button
            type="button"
            className={`filter-button ${
              activeFilters?.includes("Dual Weilding")
                ? "active-button"
                : "inactive-button"
            }`}
            onClick={() =>
              onFilterToggle("Dual Weilding", activeFilters, setActiveFilters)
            }
          >
            Dual Weilding
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
              <h3>
                Level 1 Abilities
                <Chevron
                  className={`chevron${
                    !collapsedHeadings?.includes("1") ? " expanded" : ""
                  }`}
                />
              </h3>
            </header>

            {/* NAME end */}
            {/* ======== */}

            {!collapsedHeadings?.includes("1") && (
              <>
                <section className="collapsibles">
                  {map(level1Abilities, ability => {
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
                          <h5>{name}</h5>

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
              <h3>
                Level 3 Abilities
                <Chevron
                  className={`chevron${
                    !collapsedHeadings?.includes("3") ? " expanded" : ""
                  }`}
                />
              </h3>
            </header>

            {/* NAME end */}
            {/* ======== */}

            {!collapsedHeadings?.includes("3") && (
              <>
                <section className="collapsibles">
                  {map(level3Abilities, ability => {
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
                          <h5>{name}</h5>

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
              <h3>
                Level 5 Abilities
                <Chevron
                  className={`chevron${
                    !collapsedHeadings?.includes("5") ? " expanded" : ""
                  }`}
                />
              </h3>
            </header>

            {/* NAME end */}
            {/* ======== */}

            {!collapsedHeadings?.includes("5") && (
              <>
                <section className="collapsibles">
                  {map(level5Abilities, ability => {
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
                          <h5>{name}</h5>

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
              <h3>
                Level 7 Abilities
                <Chevron
                  className={`chevron${
                    !collapsedHeadings?.includes("7") ? " expanded" : ""
                  }`}
                />
              </h3>
            </header>

            {/* NAME end */}
            {/* ======== */}

            {!collapsedHeadings?.includes("7") && (
              <>
                <section className="collapsibles">
                  {map(level7Abilities, ability => {
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
                          <h5>{name}</h5>

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
