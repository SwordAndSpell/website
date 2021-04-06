// Node modules.
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import find from "lodash/find"
import filter from "lodash/filter"
import map from "lodash/map"
import uniq from "lodash/uniq"
// Relative imports.
import Chevron from "../components/icons/Chevron"
import Layout from "../components/layout"
import SEO from "../components/seo"
import defaultBackgroundImage from "../images/defaultBackground.jpg"
import { Wrapper } from "../components/cardsPage"

const onCollapseToggle = (id, expandedIDs, setExpandedIDs) => {
  // Expand the ID.
  if (expandedIDs?.includes(id)) {
    setExpandedIDs(filter(expandedIDs, expandedID => expandedID !== id))
    return
  }

  // Collapse the ID.
  setExpandedIDs(uniq([...expandedIDs, id]))
}

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
      <SEO title="Backgrounds" />
      <Wrapper>
        <h2>Backgrounds</h2>
        <ul>
          {map(BACKGROUNDS, background => {
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
                  <h3>
                    {name}
                    <Chevron
                      className={`chevron${isExpanded ? " expanded" : ""}`}
                    />
                  </h3>
                </header>
                {/* IMAGE + NAME end */}
                {/* ============ */}

                {/* CORE STATS */}
                {/* ========== */}
                {isExpanded && (
                  <section className="fields">
                    <section className="field-group">
                      <h4>Ability Boost Choice</h4>
                      <p className="value">{abilityBoostChoice}</p>
                    </section>

                    <section className="field-group">
                      <h4>Free Ability Boost</h4>
                      <p className="value">{freeAbilityBoost}</p>
                    </section>

                    <section className="field-group">
                      <h4>Lore Advantage</h4>
                      <p className="value">{loreAdvantage}</p>
                    </section>

                    <section className="field-group">
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
