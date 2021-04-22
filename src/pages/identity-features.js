// Node modules.
import React, { Fragment, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import find from "lodash/find"
import forEach from "lodash/forEach"
import map from "lodash/map"
import reduce from "lodash/reduce"
// Relative imports.
import Chevron from "../components/icons/Chevron"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TableOfContents from "../components/TableOfContents"
import { Wrapper } from "../components/cardsPage"
import { onCollapseToggle } from "../utils"
import { filter } from "lodash"

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
      forEach(identityFeature?.identity, identity => {
        if (accumulator?.[identity]) {
          accumulator?.[identity]?.push(identityFeature)
          return
        }

        accumulator[identity] = [identityFeature]
      })

      return accumulator
    },
    {}
  )

  // Start with everything collapsed.
  const [expandedIdentityFeatureIDs, setExpandedIdentityFeatureIDs] = useState(
    []
  )
  // filtering.
  const [searchInput, setSearchInput] = useState("")

  return (
    <Layout>
      <Seo title="Identity Features" />
      <Wrapper>
        <h2>Identity Features</h2>

        {/* Table of Contents */}
        <TableOfContents includedHeaders={["h2"]} />

        <input
          className="filter-input"
          name="search input"
          onChange={event => setSearchInput(event.target.value)}
          value={searchInput}
          placeholder="Search for identity features..."
        />
        <p>
          Showing{" "}
          {
            filter(IDENTITY_FEATURES, feature =>
              JSON.stringify(feature)
                .toLowerCase()
                .includes(searchInput.toLowerCase())
            ).length
          }{" "}
          features
        </p>

        {/* Identity Categories */}
        {map(identitiesLookup, (identityFeatures, identity) => (
          <Fragment key={identity}>
            {JSON.stringify(identityFeatures)
              .toLowerCase()
              .includes(searchInput.toLowerCase()) && (
              <h2 className="category" id={identity}>
                {identity}
              </h2>
            )}
            {JSON.stringify(identityFeatures)
              .toLowerCase()
              .includes(searchInput.toLowerCase()) && (
              <ul>
                {identityFeatures?.map(identityFeature => {
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
                  const requirements = requirementIDs
                    ?.map(
                      requirementID =>
                        find(IDENTITY_FEATURE_REQUIREMENTS, [
                          "id",
                          requirementID,
                        ])?.name
                    )
                    ?.sort()

                  // Derive if the details are expanded.
                  const isExpanded = expandedIdentityFeatureIDs?.includes(id)
                  const isRelevant =
                    searchInput === "" ||
                    JSON.stringify(identityFeature)
                      .toLowerCase()
                      .includes(searchInput.toLowerCase())

                  return (
                    isRelevant && (
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
                          <h3 id={`${identity}--${name}`}>{name}</h3>
                          <Chevron
                            className={`chevron${
                              isExpanded ? " expanded" : ""
                            }`}
                          />
                        </header>
                        {/* IMAGE + NAME end */}
                        {/* ============ */}

                        {isExpanded && (
                          <section className="fields column">
                            <section className="field-group">
                              <h4>Requirements</h4>
                              <p className="value">
                                {requirements?.join(", ") || "None"}
                              </p>
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
                  )
                })}
              </ul>
            )}
          </Fragment>
        ))}
      </Wrapper>
    </Layout>
  )
}

export default IdentityFeaturesPage
