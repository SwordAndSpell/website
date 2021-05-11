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

  setActiveFilters(["Arcane", "Divine", "Primal"])
  return
}

const SpellsPage = () => {
  const queryResult = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          CANTRIPS {
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
        }
      }
    }
  `)

  // Derive Races and Perks data from the graphql query above.
  const CANTRIPS = queryResult?.site?.siteMetadata?.CANTRIPS

  const [activeFilters, setActiveFilters] = useState([
    "Arcane",
    "Divine",
    "Primal",
  ])
  const [collapsedHeadings, setCollapsedHeadings] = useState(["0", "1"])
  const [collapsedSpellIDs, setCollapsedSpellIDs] = useState([])

  return (
    <Layout>
      <Seo title="Spells" />
      <Wrapper>
        <h2>Spells</h2>

        {/* Filters */}
        <section className="filters">
          <button
            type="button"
            className={`filter-button ${
              activeFilters?.includes("Arcane") &&
              activeFilters?.includes("Divine") &&
              activeFilters?.includes("Primal")
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
              activeFilters?.includes("Arcane")
                ? "active-button"
                : "inactive-button"
            }`}
            onClick={() =>
              onFilterToggle("Arcane", activeFilters, setActiveFilters)
            }
          >
            Arcane
          </button>
          <button
            type="button"
            className={`filter-button ${
              activeFilters?.includes("Divine")
                ? "active-button"
                : "inactive-button"
            }`}
            onClick={() =>
              onFilterToggle("Divine", activeFilters, setActiveFilters)
            }
          >
            Divine
          </button>
          <button
            type="button"
            className={`filter-button ${
              activeFilters?.includes("Primal")
                ? "active-button"
                : "inactive-button"
            }`}
            onClick={() =>
              onFilterToggle("Primal", activeFilters, setActiveFilters)
            }
          >
            Primal
          </button>
        </section>

        {/* begin headings for abilities */}
        <ul></ul>
      </Wrapper>
    </Layout>
  )
}

export default SpellsPage
