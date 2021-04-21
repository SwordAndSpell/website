// Node modules.
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
// Relative imports.
import Chevron from "../components/icons/Chevron"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Wrapper } from "../components/cardsPage"
import { onCollapseToggle } from "../utils"

const BackgroundsPage = () => {
  const queryResult = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          BACKGROUNDS {
            abilityBoostChoice
            freeAbilityBoost
            id
            loreAdvantage
            name
            trainedSkill
          }
        }
      }
    }
  `)

  // Derive data from the graphql query above.
  const BACKGROUNDS = queryResult?.site?.siteMetadata?.BACKGROUNDS

  // Start with everything collapsed.
  const [expandedBackgroundIDs, setExpandedBackgroundIDs] = useState([])

  return (
    <Layout>
      <Seo title="Backgrounds" />
      <Wrapper>
        <h2>Backgrounds</h2>
        <ul>
          {BACKGROUNDS?.map(background => {
            // Derive background properties.
            const abilityBoostChoice = background?.abilityBoostChoice
            const freeAbilityBoost = background?.freeAbilityBoost
            const id = background?.id
            const loreAdvantage = background?.loreAdvantage
            const name = background?.name
            const trainedSkill = background?.trainedSkill

            // Derive if the details are expanded.
            const isExpanded = expandedBackgroundIDs?.includes(id)

            return (
              <li key={name}>
                {/* NAME */}
                {/* ============ */}
                <header
                  className="no-background-image"
                  onKeyDown={event => {
                    // On enter, toggle expanded/expanded.
                    if (event.keyCode === 13) {
                      onCollapseToggle(
                        id,
                        expandedBackgroundIDs,
                        setExpandedBackgroundIDs
                      )
                    }
                  }}
                  onClick={() =>
                    onCollapseToggle(
                      id,
                      expandedBackgroundIDs,
                      setExpandedBackgroundIDs
                    )
                  }
                  role="button"
                  tabIndex="0"
                >
                  <h3>{name}</h3>
                  <Chevron
                    className={`chevron${isExpanded ? " expanded" : ""}`}
                  />
                </header>
                {/* IMAGE + NAME end */}
                {/* ============ */}

                {/* CORE STATS */}
                {/* ========== */}
                {isExpanded && (
                  <section className="fields-background">
                    <section className="field-group-background">
                      <h4>Ability Boost Choice</h4>
                      <p className="value">{abilityBoostChoice}</p>
                    </section>

                    <section className="field-group-background">
                      <h4>Free Ability Boost</h4>
                      <p className="value">{freeAbilityBoost}</p>
                    </section>

                    <section className="field-group-background">
                      <h4>Lore Advantage</h4>
                      <p className="value">{loreAdvantage}</p>
                    </section>

                    <section className="field-group-background">
                      <h4>Trained Skill</h4>
                      <p className="value">{trainedSkill}</p>
                    </section>
                  </section>
                )}
                {/* CORE STATS end */}
                {/* ========== */}
              </li>
            )
          })}
        </ul>
      </Wrapper>
    </Layout>
  )
}

export default BackgroundsPage
