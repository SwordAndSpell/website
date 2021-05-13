// Node modules.
import React, { Fragment, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import map from "lodash/map"
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
        }
      }
    }
  `)

  // Derive Races and Perks data from the graphql query above.
  const CANTRIPS = queryResult?.site?.siteMetadata?.CANTRIPS
  const FIRST_LEVEL_SPELLS = queryResult?.site?.siteMetadata?.FIRST_LEVEL_SPELLS

  const spellCategories = [
    {
      label: "Cantrips",
      items: CANTRIPS,
    },
    {
      label: "1st Level",
      items: FIRST_LEVEL_SPELLS,
    },
  ]

  // Start with everything collapsed.
  const [expandedSpellIDs, setExpandedSpellIDs] = useState([])

  return (
    <Layout>
      <Seo title="Spells" />
      <Wrapper>
        <h2>Spells</h2>

        {/* Spell Categories */}
        {map(spellCategories, spellCategory => (
          <Fragment key={spellCategory.label}>
            <h2 className="category" id={spellCategory?.label}>
              {spellCategory?.label}
            </h2>
            <ul>
              {spellCategory?.items?.map(spell => {
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

                // Derive if the details are expanded.
                const isExpanded = expandedSpellIDs?.includes(id)

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
                        <ul className="tags">
                          {tags?.map(tag => (
                            <li key={tag}>{tag}</li>
                          ))}
                        </ul>
                        <h3 id={`${level}--${name}`}>{name}</h3>
                        <p className="extra-info">{castingSpeed}</p>
                      </div>
                      <Chevron
                        className={`chevron${isExpanded ? " expanded" : ""}`}
                      />
                    </header>
                    {/* IMAGE + NAME end */}
                    {/* ============ */}

                    {isExpanded && (
                      <section className="fields column">
                        <hr />
                        {castingSpeed && (
                          <section className="field-group">
                            <h4>Casting Speed</h4>
                            <p className="value">{castingSpeed}</p>
                          </section>
                        )}
                        {duration && (
                          <section className="field-group">
                            <h4>Duration</h4>
                            <p className="value">
                              {duration}
                              {concentration && " (Requires concentration)"}
                            </p>
                          </section>
                        )}
                        {range && (
                          <section className="field-group">
                            <h4>Range</h4>
                            <p className="value">{range}</p>
                          </section>
                        )}
                        {school && (
                          <section className="field-group">
                            <h4>School</h4>
                            <p className="value">{school}</p>
                          </section>
                        )}
                        {components && (
                          <section className="field-group">
                            <h4>Components</h4>
                            <p className="value">{components?.join(", ")}</p>
                          </section>
                        )}
                        <hr />
                        {description && (
                          <section className="field-group">
                            <p className="value">{description}</p>
                          </section>
                        )}
                        {atHigherLevels && (
                          <section className="field-group">
                            <h4>At higher levels</h4>
                            <p className="value">{atHigherLevels}</p>
                          </section>
                        )}
                      </section>
                    )}
                  </li>
                )
              })}
            </ul>
          </Fragment>
        ))}
      </Wrapper>
    </Layout>
  )
}

export default SpellsPage
