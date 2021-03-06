// Node modules.
import React, { Fragment, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import find from "lodash/find"
// Relative imports.
import Chevron from "../components/icons/Chevron"
import Layout from "../components/layout"
import Seo from "../components/seo"
import defaultCoreIdentityImage from "../../static/images/defaultCoreIdentity.jpg"
import { Wrapper } from "../components/cardsPage"
import { onCollapseToggle } from "../utils"
import { map } from "lodash"

import arcanistIcon from "../../static/images/classIcons/arcanistIcon.svg"
import barbarianIcon from "../../static/images/classIcons/barbarianIcon.svg"
import bardIcon from "../../static/images/classIcons/bardIcon.svg"
import championIcon from "../../static/images/classIcons/championIcon.svg"
import inheritorIcon from "../../static/images/classIcons/inheritorIcon.svg"
import mysticIcon from "../../static/images/classIcons/mysticIcon.svg"
import priestIcon from "../../static/images/classIcons/priestIcon.svg"
import scoundrelIcon from "../../static/images/classIcons/scoundrelIcon.svg"
import spellbladeIcon from "../../static/images/classIcons/spellbladeIcon.svg"
import wardenIcon from "../../static/images/classIcons/wardenIcon.svg"
import warriorIcon from "../../static/images/classIcons/warriorIcon.svg"
import wildlingIcon from "../../static/images/classIcons/wildlingIcon.svg"

const CoreIdentitiesPage = () => {
  const queryResult = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          CORE_IDENTITIES {
            coreAbilityIDs
            id
            name
          }
          CORE_ABILITIES {
            description
            id
            name
            links {
              description
              url
            }
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

  const iconSources = {
    Arcanist: arcanistIcon,
    Barbarian: barbarianIcon,
    Bard: bardIcon,
    Champion: championIcon,
    Inheritor: inheritorIcon,
    Mystic: mysticIcon,
    Priest: priestIcon,
    Scoundrel: scoundrelIcon,
    Spellblade: spellbladeIcon,
    Warden: wardenIcon,
    Warrior: warriorIcon,
    Wildling: wildlingIcon,
  }

  return (
    <Layout>
      <Seo title="Identities" />
      <Wrapper>
        <h2>Core Identities</h2>
        <ul>
          {CORE_IDENTITIES?.map(coreIdentity => {
            // Derive coreIdentity properties.
            const coreAbilityIDs = coreIdentity?.coreAbilityIDs
            const id = coreIdentity?.id
            const imageURL =
              iconSources[coreIdentity?.name] || defaultCoreIdentityImage
            const name = coreIdentity?.name

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
                  <section className="content">
                    {/* CORE ABILITIES */}
                    {/* ========== */}
                    {coreAbilities?.length > 0 && (
                      <section className="collapsibles">
                        {coreAbilities?.map(coreAbility => {
                          // Derive coreAbility properties.
                          const description = coreAbility?.description
                          const name = coreAbility?.name
                          const coreAbilityID = coreAbility?.id
                          const links = coreAbility?.links

                          // Derive the composite ID.
                          const coreIdentityAbilityID = `${id}--${coreAbilityID}`

                          return (
                            <Fragment key={coreIdentityAbilityID}>
                              <header
                                className="no-background-image remove-bg"
                                onKeyDown={event => {
                                  // On enter, toggle expanded/expanded.
                                  if (event.keyCode === 13) {
                                    onCollapseToggle(
                                      coreAbilityID,
                                      expandedCoreAbilityIDs,
                                      setExpandedCoreAbilityIDs
                                    )
                                  }
                                }}
                                onClick={() =>
                                  onCollapseToggle(
                                    coreAbilityID,
                                    expandedCoreAbilityIDs,
                                    setExpandedCoreAbilityIDs
                                  )
                                }
                                role="button"
                                tabIndex="0"
                              >
                                <h3>{name}</h3>
                              </header>
                              {expandedCoreAbilityIDs.includes(
                                coreAbilityID
                              ) && (
                                <section className="field-group remove-bg">
                                  <p className="value">{description}</p>
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
                              )}
                            </Fragment>
                          )
                        })}
                      </section>
                    )}
                    {/* CORE ABILITIES end */}
                    {/* ========== */}
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

export default CoreIdentitiesPage
