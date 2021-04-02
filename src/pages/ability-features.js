// Node modules.
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { keyframes } from "styled-components"
import filter from "lodash/filter"
import map from "lodash/map"
import uniq from "lodash/uniq"
// Relative imports.
import Layout from "../components/layout"
import Chevron from "../components/icons/Chevron"
import SEO from "../components/seo"
import defaultRaceImage from "../images/defaultRace.png"

const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 90px 0 0;
  text-align: center;

  h2 {
    text-align: center;
    width: 100%;
  }

  h3 {
    align-items: center;
    background: rgba(81, 43, 252, 0.8);
    // bottom: 0;
    color: #ffffff;
    display: flex;
    font-size: 2.5rem;
    justify-content: space-between;
    line-height: 40px;
    padding: 10px 20px;
    // position: absolute;
    text-align: left;
    width: 100%;
  }

  .chevron {
    height: 35px;
    margin-left: 20px;
    transition: transform 0.5s ease;

    path {
      fill: #ffffff;
    }

    &.expanded {
      transform: rotate(180deg);
    }
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

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
          }
        }
      }
    }
  `)

  // Derive Races and Perks data from the graphql query above.
  const ABILITIES = queryResult?.site?.siteMetadata?.ABILITY_FEATURES

  const [activeFilters, setActiveFilters] = useState([])
  const [collapsedHeadings, setCollapsedHeadings] = useState([
    "1",
    "3",
    "5",
    "7",
  ])
  const [collapsedAbilityIDs, setCollapsedAbilityIDs] = useState([])

  const level1Abilities = filter(ABILITIES, ability => ability.level === 1)
  const level3Abilities = filter(ABILITIES, ability => ability.level === 3)
  const level5Abilities = filter(ABILITIES, ability => ability.level === 5)
  const level7Abilities = filter(ABILITIES, ability => ability.level === 7)

  console.log(activeFilters)
  return (
    <Layout>
      <SEO title="Ability Features" />
      <Wrapper>
        <h2>Ability Features</h2>
        <section className="buttons">
          <button
            type="button"
            onClick={() =>
              onFilterToggle("Dual Weilding", activeFilters, setActiveFilters)
            }
          >
            Dual Weilding
          </button>
          <button
            type="button"
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
            onClick={() =>
              onFilterToggle("Fencing", activeFilters, setActiveFilters)
            }
          >
            Fencing
          </button>
          <button
            type="button"
            onClick={() =>
              onFilterToggle("Two-Handed", activeFilters, setActiveFilters)
            }
          >
            Two-Handed
          </button>
          <button
            type="button"
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
            onClick={() =>
              onFilterToggle("Spellcasting", activeFilters, setActiveFilters)
            }
          >
            Spellcasting
          </button>
          <button
            type="button"
            onClick={() =>
              onFilterToggle("Polearms", activeFilters, setActiveFilters)
            }
          >
            Polearms
          </button>
          <button
            type="button"
            onClick={() =>
              onFilterToggle("Ranged", activeFilters, setActiveFilters)
            }
          >
            Ranged
          </button>
        </section>
        <ul>
          <li>
            <h3
              onClick={() =>
                onCollapseToggle("1", collapsedHeadings, setCollapsedHeadings)
              }
            >
              Level 1 Abilities
              <Chevron
                className={`chevron${
                  !collapsedHeadings?.includes("1") ? " expanded" : ""
                }`}
              />
            </h3>
            {!collapsedHeadings?.includes("1") && (
              <>
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
                    <button
                      className="ability"
                      key={`${id}`}
                      onClick={() =>
                        onCollapseToggle(
                          id,
                          collapsedAbilityIDs,
                          setCollapsedAbilityIDs
                        )
                      }
                      type="button"
                    >
                      {/* Subrace Name */}
                      <h5>{name}</h5>

                      {/* Subrace Info */}
                      {!collapsedAbilityIDs?.includes(id) && relevant && (
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
                })}
              </>
            )}
          </li>
          <li>
            <h3
              onClick={() =>
                onCollapseToggle("3", collapsedHeadings, setCollapsedHeadings)
              }
            >
              Level 3 Abilities
              <Chevron
                className={`chevron${
                  !collapsedHeadings?.includes("3") ? " expanded" : ""
                }`}
              />
            </h3>
          </li>
          <li>
            <h3
              onClick={() =>
                onCollapseToggle("5", collapsedHeadings, setCollapsedHeadings)
              }
            >
              Level 5 Abilities
              <Chevron
                className={`chevron${
                  !collapsedHeadings?.includes("5") ? " expanded" : ""
                }`}
              />
            </h3>
          </li>
          <li>
            <h3
              onClick={() =>
                onCollapseToggle("7", collapsedHeadings, setCollapsedHeadings)
              }
            >
              Level 7 Abilities
              <Chevron
                className={`chevron${
                  !collapsedHeadings?.includes("7") ? " expanded" : ""
                }`}
              />
            </h3>
          </li>
        </ul>
      </Wrapper>
    </Layout>
  )
}

export default AbilityFeaturesPage
