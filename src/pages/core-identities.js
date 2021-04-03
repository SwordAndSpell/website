// Node modules.
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { keyframes } from "styled-components"
import find from "lodash/find"
import filter from "lodash/filter"
import map from "lodash/map"
import uniq from "lodash/uniq"
// Relative imports.
import Chevron from "../components/icons/Chevron"
import Layout from "../components/layout"
import SEO from "../components/seo"
import defaultCoreIdentityImage from "../images/defaultCoreIdentity.jpg"

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

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

  ul {
    align-items: center;
    display: flex;
    flex-flow: row wrap;
  }

  li {
    align-items: center;
    background: #ffffff;
    box-shadow: 0 4px 8px 0 rgb(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    margin: 0 20px 50px;
    width: 100%;

    * {
      animation: ${fadeIn} 0.5s;
    }

    &:nth-of-type(even) {
      h3 {
        background: rgba(164, 0, 255, 0.8);
      }
    }

    header {
      align-items: center;
      display: flex;
      flex-direction: column;
      position: relative;
      outline: none;
      width: 100%;

      img {
        width: 100%;
      }

      h3 {
        align-items: center;
        background: rgba(81, 43, 252, 0.8);
        bottom: 0;
        color: #ffffff;
        display: flex;
        font-size: 2.5rem;
        justify-content: space-between;
        line-height: 40px;
        padding: 10px 20px;
        position: absolute;
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
    }

    h4 {
      margin: 20px 0 0;
    }

    .fields {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      padding: 10px 10px 0;
    }

    .field-group {
      display: flex;
      flex-direction: column;
      margin: 10px;

      .label {
        font-size: 1rem;
        font-weight: bold;
        margin: 0;

        &:first-of-type {
          margin: 20px 0;
        }
      }

      .value {
        color: #444444;
        font-size: 1.2rem;
        margin: 0;
        white-space: pre-line;
        text-align: left;
      }
    }

    .core-abilities {
      align-items: center;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      padding: 0 20px;
      width: 100%;

      header {
        margin: 0 0 20px;
      }

      .disclaimer {
        color: #999999;
        font-size: 0.7rem;
        margin: 0;
      }

      .core-ability {
        white-space: pre-line;
        text-align: left;

        h5 {
          color: #512bfccc;
          font-size: 1.5rem;
          text-align: center;
        }
      }
    }
  }
`

const onCollapseToggle = (id, expandedIDs, setExpandedIDs) => {
  // Expand the ID.
  if (expandedIDs?.includes(id)) {
    setExpandedIDs(filter(expandedIDs, expandedID => expandedID !== id))
    return
  }

  // Collapse the ID.
  setExpandedIDs(uniq([...expandedIDs, id]))
}

const CoreIdentitiesPage = () => {
  const queryResult = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          CORE_IDENTITIES {
            coreAbilityIDs
            healthAtFirstLevel
            healthBeyondFirstLevel
            id
            initialProficiencies
            name
            startingEquipment
          }
          CORE_ABILITIES {
            description
            id
            name
          }
        }
      }
    }
  `)

  // Derive data from the graphql query above.
  const CORE_IDENTITIES = queryResult?.site?.siteMetadata?.CORE_IDENTITIES
  const CORE_ABILITIES = queryResult?.site?.siteMetadata?.CORE_ABILITIES

  // Start with all identities + abilities being expanded.
  const [expandedCoreIdentityIDs, setExpandedCoreIdentityIDs] = useState([])
  const [expandedCoreAbilityIDs, setExpandedCoreAbilityIDs] = useState([])

  return (
    <Layout>
      <SEO title="Identities" />
      <Wrapper>
        <h2>Core Identities</h2>
        <ul>
          {map(CORE_IDENTITIES, coreIdentity => {
            // Derive coreIdentity properties.
            const coreAbilityIDs = coreIdentity?.coreAbilityIDs
            const healthAtFirstLevel = coreIdentity?.healthAtFirstLevel
            const healthBeyondFirstLevel = coreIdentity?.healthBeyondFirstLevel
            const id = coreIdentity?.id
            const imageURL = coreIdentity?.imageURL || defaultCoreIdentityImage
            const initialProficiencies = coreIdentity?.initialProficiencies
            const name = coreIdentity?.name
            const startingEquipment = coreIdentity?.startingEquipment

            // Derive the coreAbilities.
            const coreAbilities = map(coreAbilityIDs, coreAbilityID =>
              find(CORE_ABILITIES, ["id", coreAbilityID])
            )

            // Derive if the details are expanded.
            const isExpanded = expandedCoreIdentityIDs?.includes(id)

            return (
              <li key={name}>
                {/* NAME */}
                {/* ============ */}
                <header
                  onKeyDown={event => {
                    // On enter, toggle expanded/expanded.
                    if (event.keyCode === 13) {
                      onCollapseToggle(
                        id,
                        expandedCoreIdentityIDs,
                        setExpandedCoreIdentityIDs
                      )
                    }
                  }}
                  onClick={() =>
                    onCollapseToggle(
                      id,
                      expandedCoreIdentityIDs,
                      setExpandedCoreIdentityIDs
                    )
                  }
                  role="button"
                  tabIndex="0"
                >
                  <img alt={`${name} core identity`} src={imageURL} />
                  <h3>
                    {name}
                    <Chevron
                      className={`chevron${isExpanded ? " expanded" : ""}`}
                    />
                  </h3>
                </header>
                {/* IMAGE + NAME end */}
                {/* ============ */}

                {isExpanded && (
                  <>
                    {/* CORE STATS */}
                    {/* ========== */}
                    <section className="fields">
                      <section className="field-group">
                        <p className="label">Health at Level 1</p>
                        <p className="value">{healthAtFirstLevel}</p>
                      </section>

                      <section className="field-group">
                        <p className="label">Health at Level 2+</p>
                        <p className="value">{healthBeyondFirstLevel}</p>
                      </section>

                      <section className="field-group">
                        <p className="label">Starting Equipment</p>
                        <p className="value">{startingEquipment}</p>
                      </section>

                      <section className="field-group">
                        <p className="label">Initial Proficiencies</p>
                        <p className="value">{initialProficiencies}</p>
                      </section>
                    </section>
                    {/* CORE STATS end */}
                    {/* ========== */}

                    {/* CORE_IDENTITIES */}
                    {/* ========== */}
                    {coreAbilities?.length > 0 && (
                      <section className="core-abilities">
                        <header>
                          <h4>Core Abilities</h4>
                        </header>

                        {map(coreAbilities, coreAbility => {
                          // Derive coreAbility properties.
                          const description = coreAbility?.description
                          const name = coreAbility?.name
                          const coreAbilityID = coreAbility?.id

                          // Derive the composite ID.
                          const coreIdentityAbilityID = `${id}--${coreAbilityID}`

                          return (
                            <button
                              className="core-ability"
                              key={coreIdentityAbilityID}
                              onClick={() =>
                                onCollapseToggle(
                                  coreIdentityAbilityID,
                                  expandedCoreAbilityIDs,
                                  setExpandedCoreAbilityIDs
                                )
                              }
                              type="button"
                            >
                              {/* CoreAbility Name */}
                              <h5>{name}</h5>

                              {/* CoreAbility Info */}
                              {expandedCoreAbilityIDs?.includes(
                                coreIdentityAbilityID
                              ) && <p>{description}</p>}
                            </button>
                          )
                        })}
                      </section>
                    )}
                    {/* CORE_IDENTITIES end */}
                    {/* ========== */}
                  </>
                )}
              </li>
            )
          })}
        </ul>
      </Wrapper>
    </Layout>
  )
}

export default CoreIdentitiesPage
