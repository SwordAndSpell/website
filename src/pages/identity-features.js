// Node modules.
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import filter from "lodash/filter"
import find from "lodash/find"
import map from "lodash/map"
import reduce from "lodash/reduce"
import uniq from "lodash/uniq"
// Relative imports.
import Chevron from "../components/icons/Chevron"
import Layout from "../components/layout"
import SEO from "../components/seo"
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

const IdentityFeaturesPage = () => {
  const queryResult = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          IDENTITY_FEATURE_REQUIREMENTS {
            id
            name
          }
          IDENTITY_FEATURES {
            firstLevelSpells
            secondLevelSpells
            thirdLevelSpells
            fourthLevelSpells
            fifthLevelSpells
            description
            id
            identity
            name
            requirementIDs
          }
        }
      }
    }
  `)

  // Derive data from the graphql query above.
  const IDENTITY_FEATURE_REQUIREMENTS =
    queryResult?.site?.siteMetadata?.IDENTITY_FEATURE_REQUIREMENTS
  const IDENTITY_FEATURES = queryResult?.site?.siteMetadata?.IDENTITY_FEATURES

  // Derive identity categories.
  const identitiesLookup = reduce(
    IDENTITY_FEATURES,
    (accumulator, identityFeature) => {
      if (accumulator?.[identityFeature?.identity]) {
        accumulator?.[identityFeature?.identity]?.push(identityFeature)
        return accumulator
      }

      accumulator[identityFeature?.identity] = [identityFeature]
      return accumulator
    },
    {}
  )

  // Start with everything collapsed.
  const [expandedIdentityFeatureIDs, setExpandedIdentityFeatureIDs] = useState(
    []
  )

  return (
    <Layout>
      <SEO title="Identity Features" />
      <Wrapper>
        <h2>Identity Features</h2>

        {map(identitiesLookup, (identityFeatures, identity) => (
          <>
            <h2 className="category">{identity}</h2>
            <ul>
              {map(identityFeatures, identityFeature => {
                // Derive identityFeature properties.
                const firstLevelSpells = identityFeature?.firstLevelSpells
                const secondLevelSpells = identityFeature?.secondLevelSpells
                const thirdLevelSpells = identityFeature?.thirdLevelSpells
                const fourthLevelSpells = identityFeature?.fourthLevelSpells
                const fifthLevelSpells = identityFeature?.fifthLevelSpells
                const description = identityFeature?.description
                const id = identityFeature?.id
                const identity = identityFeature?.identity
                const name = identityFeature?.name
                const requirementIDs = identityFeature?.requirementIDs

                // Derive requirements.
                const requirements = map(
                  requirementIDs,
                  requirementID =>
                    find(IDENTITY_FEATURE_REQUIREMENTS, ["id", requirementID])
                      ?.name
                )?.sort()

                // Derive if the details are expanded.
                const isExpanded = expandedIdentityFeatureIDs?.includes(id)

                return (
                  <li key={`${id}--${identity}`}>
                    {/* NAME */}
                    {/* ============ */}
                    <header
                      className="no-background-image"
                      onKeyDown={event => {
                        // On enter, toggle expanded/expanded.
                        if (event.keyCode === 13) {
                          onCollapseToggle(
                            id,
                            expandedIdentityFeatureIDs,
                            setExpandedIdentityFeatureIDs
                          )
                        }
                      }}
                      onClick={() =>
                        onCollapseToggle(
                          id,
                          expandedIdentityFeatureIDs,
                          setExpandedIdentityFeatureIDs
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

                    {isExpanded && (
                      <section className="fields column">
                        <section className="field-group">
                          <h4>Requirements</h4>
                          <p className="value">{requirements?.join(", ")}</p>
                        </section>

                        <section className="field-group">
                          <h4>Identity</h4>
                          <p className="value">{identity}</p>
                        </section>

                        <section className="field-group">
                          <h4>Description</h4>
                          <p className="value">{description}</p>
                        </section>

                        {firstLevelSpells && (
                          <section className="field-group">
                            <h4>1st Level Spells</h4>
                            <p className="value">{firstLevelSpells}</p>
                          </section>
                        )}

                        {secondLevelSpells && (
                          <section className="field-group">
                            <h4>2nd Level Spells</h4>
                            <p className="value">{secondLevelSpells}</p>
                          </section>
                        )}

                        {thirdLevelSpells && (
                          <section className="field-group">
                            <h4>3rd Level Spells</h4>
                            <p className="value">{thirdLevelSpells}</p>
                          </section>
                        )}

                        {fourthLevelSpells && (
                          <section className="field-group">
                            <h4>4th Level Spells</h4>
                            <p className="value">{fourthLevelSpells}</p>
                          </section>
                        )}

                        {fifthLevelSpells && (
                          <section className="field-group">
                            <h4>5th Level Spells</h4>
                            <p className="value">{fifthLevelSpells}</p>
                          </section>
                        )}
                      </section>
                    )}
                  </li>
                )
              })}
            </ul>
          </>
        ))}
      </Wrapper>
    </Layout>
  )
}

export default IdentityFeaturesPage
