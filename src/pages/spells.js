// Node modules.
import React, { Fragment, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import isEmpty from "lodash/isEmpty"
import map from "lodash/map"
import orderBy from "lodash/orderBy"
import uniq from "lodash/uniq"
// Relative imports.
import Chevron from "../components/icons/Chevron"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Wrapper } from "../components/cardsPage"
import BackToTop from "../components/BackToTop"
import { onCollapseToggle } from "../utils"

const onFilterToggle = (
  filterToToggle,
  activeListFilters,
  setActiveListFilters
) => {
  // Expand the ID.
  if (activeListFilters?.includes(filterToToggle)) {
    setActiveListFilters(
      activeListFilters?.filter(filter => filter !== filterToToggle)
    )
    return
  }

  // toggle the filter
  setActiveListFilters(uniq([...activeListFilters, filterToToggle]))
}

const toggleAllFilters = (
  activeListFilters,
  setActiveListFilters,
  fullList
) => {
  if (activeListFilters.length > 0) {
    setActiveListFilters([])
    return
  }

  setActiveListFilters(fullList)
  return
}

const SpellsPage = () => {
  const queryResult = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          CANTRIPS {
            atHigherLevels
            castingSpeed
            components
            concentration
            description
            duration
            id
            level
            name
            range
            school
            tags
          }
          FIRST_LEVEL_SPELLS {
            atHigherLevels
            castingSpeed
            components
            concentration
            description
            duration
            id
            level
            name
            range
            school
            tags
          }
          SECOND_LEVEL_SPELLS {
            atHigherLevels
            castingSpeed
            components
            concentration
            description
            duration
            id
            level
            name
            range
            school
            tags
            links {
              description
              url
            }
          }
          THIRD_LEVEL_SPELLS {
            atHigherLevels
            castingSpeed
            components
            concentration
            description
            duration
            id
            level
            name
            range
            school
            tags
            links {
              description
              url
            }
          }
        }
      }
    }
  `)

  // Derive Races and Perks data from the graphql query above.
  const CANTRIPS = queryResult?.site?.siteMetadata?.CANTRIPS
  const FIRST_LEVEL_SPELLS = queryResult?.site?.siteMetadata?.FIRST_LEVEL_SPELLS
  const SECOND_LEVEL_SPELLS =
    queryResult?.site?.siteMetadata?.SECOND_LEVEL_SPELLS
  const THIRD_LEVEL_SPELLS = queryResult?.site?.siteMetadata?.THIRD_LEVEL_SPELLS

  const spellCategories = [
    {
      label: "Cantrips",
      items: orderBy(CANTRIPS, "name"),
      level: 0,
    },
    {
      label: "1st Level",
      items: orderBy(FIRST_LEVEL_SPELLS, "name"),
      level: 1,
    },
    {
      label: "2nd Level",
      items: orderBy(SECOND_LEVEL_SPELLS, "name"),
      level: 2,
    },
    {
      label: "3rd Level (In Work)",
      items: orderBy(THIRD_LEVEL_SPELLS, "name"),
      level: 3,
    },
  ]

  // Start with everything collapsed.
  const [expandedSpellIDs, setExpandedSpellIDs] = useState([])

  // filtering.
  const [searchInput, setSearchInput] = useState("")

  const [activeListFilters, setActiveListFilters] = useState([
    "Arcane",
    "Divine",
    "Primal",
  ])
  const [activeLevelFilters, setActiveLevelFilters] = useState([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ])

  const noSpellsShowing =
    isEmpty(activeLevelFilters) || isEmpty(activeListFilters)

  return (
    <Layout>
      <Seo title="Spells" />
      <Wrapper>
        {/* Back to top button */}
        <BackToTop />

        {/* Title */}
        <h2>Spells</h2>

        {/* Show/hide filters button */}
        <button
          className="search-bar"
          onClick={() =>
            onCollapseToggle("filters", expandedSpellIDs, setExpandedSpellIDs)
          }
          type="button"
        >
          {expandedSpellIDs?.includes("filters") ? "Hide" : "Show"} filters
        </button>

        {/* Filters */}
        {expandedSpellIDs.includes("filters") && (
          <section className="search-section">
            {/* Search */}
            <p className="filters-label">Search</p>
            <input
              className="filter-input"
              name="search input"
              onChange={event => setSearchInput(event.target.value)}
              value={searchInput}
              placeholder="e.g. 'bubble of acid'"
            />

            {/* Spell Tags */}
            <p className="filters-label">Filter by spell tag</p>
            <section className="filters">
              <button
                type="button"
                className={`filter-button ${
                  activeListFilters?.includes("Arcane") &&
                  activeListFilters?.includes("Divine") &&
                  activeListFilters?.includes("Primal")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  toggleAllFilters(activeListFilters, setActiveListFilters, [
                    "Arcane",
                    "Divine",
                    "Primal",
                  ])
                }
              >
                All
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeListFilters?.includes("Arcane")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle(
                    "Arcane",
                    activeListFilters,
                    setActiveListFilters
                  )
                }
              >
                Arcane
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeListFilters?.includes("Divine")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle(
                    "Divine",
                    activeListFilters,
                    setActiveListFilters
                  )
                }
              >
                Divine
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeListFilters?.includes("Primal")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle(
                    "Primal",
                    activeListFilters,
                    setActiveListFilters
                  )
                }
              >
                Primal
              </button>
            </section>

            {/* Spell Levels */}
            <p className="filters-label">Filter by spell level</p>
            <section className="filters">
              <button
                type="button"
                className={`filter-button ${
                  activeLevelFilters?.includes(0) &&
                  activeLevelFilters?.includes(1) &&
                  activeLevelFilters?.includes(2) &&
                  activeLevelFilters?.includes(3) &&
                  activeLevelFilters?.includes(4) &&
                  activeLevelFilters?.includes(5) &&
                  activeLevelFilters?.includes(6) &&
                  activeLevelFilters?.includes(7) &&
                  activeLevelFilters?.includes(8) &&
                  activeLevelFilters?.includes(9)
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  toggleAllFilters(activeLevelFilters, setActiveLevelFilters, [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                  ])
                }
              >
                All
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeLevelFilters?.includes(0)
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle(0, activeLevelFilters, setActiveLevelFilters)
                }
              >
                Cantrips
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeLevelFilters?.includes(1)
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle(1, activeLevelFilters, setActiveLevelFilters)
                }
              >
                1st Level
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeLevelFilters?.includes(2)
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle(2, activeLevelFilters, setActiveLevelFilters)
                }
              >
                2nd Level
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeLevelFilters?.includes(3)
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle(3, activeLevelFilters, setActiveLevelFilters)
                }
              >
                3rd Level
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeLevelFilters?.includes(4)
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle(4, activeLevelFilters, setActiveLevelFilters)
                }
              >
                4th Level
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeLevelFilters?.includes(5)
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle(5, activeLevelFilters, setActiveLevelFilters)
                }
              >
                5th Level
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeLevelFilters?.includes(6)
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle(6, activeLevelFilters, setActiveLevelFilters)
                }
              >
                6th Level
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeLevelFilters?.includes(7)
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle(7, activeLevelFilters, setActiveLevelFilters)
                }
              >
                7th Level
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeLevelFilters?.includes(8)
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle(8, activeLevelFilters, setActiveLevelFilters)
                }
              >
                8th Level
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeLevelFilters?.includes(9)
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle(9, activeLevelFilters, setActiveLevelFilters)
                }
              >
                9th Level
              </button>
            </section>
          </section>
        )}

        {/* No results */}
        {noSpellsShowing && (
          <p>Enable at least one filter in each category to view spells...</p>
        )}

        {/* Spell Categories */}
        {map(spellCategories, spellCategory => {
          const hasRelevantSpell = spellCategory?.items?.some(
            spell =>
              searchInput === "" ||
              `${spell?.description},${spell?.name},${spell?.school},${spell?.school},${spell?.components}`
                .toLowerCase()
                .includes(searchInput.toLowerCase())
          )

          if (!hasRelevantSpell) {
            return null
          }

          if (!activeLevelFilters.includes(spellCategory.level)) {
            return null
          }

          return (
            <Fragment key={spellCategory.label}>
              <h2 className="category" id={spellCategory?.label}>
                {spellCategory?.label}
              </h2>
              <ul>
                {map(spellCategory?.items, spell => {
                  // Derive spell properties.
                  const atHigherLevels = spell?.atHigherLevels
                  const castingSpeed = spell?.castingSpeed
                  const components = spell?.components
                  const concentration = spell?.concentration
                  const description = spell?.description
                  const duration = spell?.duration
                  const id = spell?.id
                  const level = spell?.level
                  const name = spell?.name
                  const range = spell?.range
                  const school = spell?.school
                  const tags = spell?.tags
                  const links = spell?.links

                  // Derive if the details are expanded.
                  const isExpanded = expandedSpellIDs?.includes(id)

                  const isRelevant =
                    searchInput === "" ||
                    `${spell?.description},${spell?.name},${spell?.school},${spell?.school},${spell?.components}`
                      .toLowerCase()
                      .includes(searchInput.toLowerCase())

                  const arcaneActive = activeListFilters.includes("Arcane")
                  const divineActive = activeListFilters.includes("Divine")
                  const primalActive = activeListFilters.includes("Primal")
                  const isPartOfList =
                    (tags.includes("Arcane") && arcaneActive) ||
                    (tags.includes("Divine") && divineActive) ||
                    (tags.includes("Primal") && primalActive)

                  if (isRelevant && isPartOfList)
                    return (
                      <li key={id}>
                        {/* NAME */}
                        {/* ============ */}
                        <header
                          className="no-background-image"
                          onKeyDown={event => {
                            // On enter, toggle expanded/expanded.
                            if (event.keyCode === 13) {
                              onCollapseToggle(
                                id,
                                expandedSpellIDs,
                                setExpandedSpellIDs
                              )
                            }
                          }}
                          onClick={() =>
                            onCollapseToggle(
                              id,
                              expandedSpellIDs,
                              setExpandedSpellIDs
                            )
                          }
                          role="button"
                          tabIndex="0"
                        >
                          <div className="header-column">
                            <h3 id={`${level}--${name}`}>{name}</h3>
                            {!isExpanded && (
                              <p className="extra-info">{castingSpeed}</p>
                            )}
                            <ul className="tags">
                              {tags?.map(tag => (
                                <li key={tag}>{tag}</li>
                              ))}
                            </ul>
                          </div>
                          <Chevron
                            className={`chevron${
                              isExpanded ? " expanded" : ""
                            }`}
                          />
                        </header>
                        {/* NAME end */}
                        {/* ============ */}

                        {isExpanded && (
                          <section className="fields column content">
                            {castingSpeed && (
                              <section className="field-group row">
                                <h4>Casting Speed: </h4>
                                <p className="inline-value">{castingSpeed}</p>
                              </section>
                            )}
                            {duration && (
                              <section className="field-group row">
                                <h4>Duration: </h4>
                                <p className="inline-value">
                                  {duration}
                                  {concentration && " (Requires concentration)"}
                                </p>
                              </section>
                            )}
                            {range && (
                              <section className="field-group row">
                                <h4>Range: </h4>
                                <p className="inline-value">{range}</p>
                              </section>
                            )}
                            {school && (
                              <section className="field-group row">
                                <h4>School: </h4>
                                <p className="inline-value">{school}</p>
                              </section>
                            )}
                            {components && (
                              <section className="field-group row">
                                <h4>Components: </h4>
                                <p className="inline-value">
                                  {components?.join(", ")}
                                </p>
                              </section>
                            )}
                            {description && (
                              <section className="field-group">
                                <p className="inline-value description">
                                  {description}
                                </p>
                              </section>
                            )}
                            {atHigherLevels && (
                              <section className="field-group">
                                <h4>At higher levels</h4>
                                <p className="inline-value description">
                                  {atHigherLevels}
                                </p>
                              </section>
                            )}
                            <section className="field-group">
                              {map(links, link => {
                                return (
                                  <a
                                    href={link?.url}
                                    key={`${name}--${link?.description}`}
                                    className="link"
                                  >
                                    {link?.description}
                                  </a>
                                )
                              })}
                            </section>
                          </section>
                        )}
                      </li>
                    )
                })}
              </ul>
            </Fragment>
          )
        })}
      </Wrapper>
    </Layout>
  )
}

export default SpellsPage
