// Node modules.
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import find from "lodash/find"
// Relative imports.
import Chevron from "../components/icons/Chevron"
import Layout from "../components/layout"
import Seo from "../components/seo"
import defaultCoreIdentityImage from "../images/defaultCoreIdentity.jpg"
import { Wrapper } from "../components/cardsPage"
import { onCollapseToggle } from "../utils"

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

  // Start with everything collapsed.
  const [expandedCoreIdentityIDs, setExpandedCoreIdentityIDs] = useState([])
  const [expandedCoreAbilityIDs, setExpandedCoreAbilityIDs] = useState([])

  return (
    <Layout>
      <Seo title="Identities" />
      <Wrapper>
        <h2>Core Identities</h2>
        <ul>
          {CORE_IDENTITIES?.map(coreIdentity => {
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
            const coreAbilities = coreAbilityIDs?.map(coreAbilityID =>
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
                  <h3>{name}</h3>
                  <Chevron
                    className={`chevron${isExpanded ? " expanded" : ""}`}
                  />
                </header>
                {/* IMAGE + NAME end */}
                {/* ============ */}

                {isExpanded && (
                  <>
                    {/* CORE STATS */}
                    {/* ========== */}
                    <section className="fields">
                      <section className="field-group">
                        <h4>Health at Level 1</h4>
                        <p className="value">{healthAtFirstLevel}</p>
                      </section>

                      <section className="field-group">
                        <h4>Health at Level 2+</h4>
                        <p className="value">{healthBeyondFirstLevel}</p>
                      </section>

                      <section className="field-group">
                        <h4>Starting Equipment</h4>
                        <p className="value">{startingEquipment}</p>
                      </section>

                      <section className="field-group">
                        <h4>Initial Proficiencies</h4>
                        <p className="value">{initialProficiencies}</p>
                      </section>
                    </section>
                    {/* CORE STATS end */}
                    {/* ========== */}

                    {/* CORE ABILITIES */}
                    {/* ========== */}
                    {coreAbilities?.length > 0 && (
                      <section className="collapsibles">
                        <header>
                          <h4>Core Abilities</h4>
                        </header>

                        {coreAbilities?.map(coreAbility => {
                          // Derive coreAbility properties.
                          const description = coreAbility?.description
                          const name = coreAbility?.name
                          const coreAbilityID = coreAbility?.id

                          // Derive the composite ID.
                          const coreIdentityAbilityID = `${id}--${coreAbilityID}`

                          return (
                            <button
                              className="collapsible"
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
                    {/* CORE ABILITIES end */}
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
