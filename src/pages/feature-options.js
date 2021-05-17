// Node modules.
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import map from "lodash/map"
// Relative imports.
import Chevron from "../components/icons/Chevron"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Wrapper } from "../components/cardsPage"
import { onCollapseToggle } from "../utils"

const isBrowser = typeof window !== "undefined"

// This will look like:
// {
//   'Empowered Bloodline': {
//     id: 'Empowered Bloodline',
//     options: [option1, option2, option3],
//   },
// }
const deriveInstanceTypesLookup = (options = []) =>
  options?.reduce((instanceTypesLookup, option) => {
    const instanceType = instanceTypesLookup[option?.instanceType]

    // If the instanceType already exists on our lookup table, just add the option to its `options` list.
    if (instanceType) {
      instanceTypesLookup[option?.instanceType] = {
        ...instanceType,
        options: [...instanceType.options, option],
      }
      return instanceTypesLookup
    }

    // Otherwise, add the new instanceType to our lookup table.
    instanceTypesLookup[option?.instanceType] = {
      id: option?.instanceType,
      options: [option],
    }
    return instanceTypesLookup
  }, {})

const FeatureOptionsPage = () => {
  const queryResult = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          FEATURE_OPTIONS {
            description
            id
            instanceType
            name
          }
        }
      }
    }
  `)

  // Derive Races and Perks data from the graphql query above.
  const OPTIONS = queryResult?.site?.siteMetadata?.FEATURE_OPTIONS

  // Derive `?ids=1,2,3` query param.
  const queryParams = new URLSearchParams(
    isBrowser ? window.location.search : ""
  )
  const defaultExpandedIDs =
    queryParams.get("ids")?.split("%20")?.join(" ")?.split(",") || []

  // Create the IDs that should be expanded in state.
  const [expandedInstanceTypeIDs, setExpandedInstanceTypeIDs] = useState(
    defaultExpandedIDs
  )
  const [expandedOptionIDs, setExpandedOptionIDs] = useState(defaultExpandedIDs)

  // Derive the instance types lookup table.
  const instanceTypesLookup = deriveInstanceTypesLookup(OPTIONS)

  return (
    <Layout>
      <Seo title="Feature Options" />
      <Wrapper>
        <h2>Feature Options</h2>

        {/* begin headings for abilities */}
        <ul>
          {map(instanceTypesLookup, instanceTypeValue => {
            const id = instanceTypeValue?.id
            const options = instanceTypeValue?.options

            return (
              <li key={id} id={id}>
                <header
                  className="no-background-image"
                  onKeyDown={event => {
                    // On enter, toggle expanded/expanded.
                    if (event.keyCode === 13) {
                      onCollapseToggle(
                        id,
                        expandedInstanceTypeIDs,
                        setExpandedInstanceTypeIDs
                      )
                    }
                  }}
                  onClick={() =>
                    onCollapseToggle(
                      id,
                      expandedInstanceTypeIDs,
                      setExpandedInstanceTypeIDs
                    )
                  }
                  role="button"
                  tabIndex="0"
                >
                  <h3 id={id}>{id}</h3>
                  <Chevron
                    className={`chevron${
                      expandedInstanceTypeIDs?.includes(id) ? " expanded" : ""
                    }`}
                  />
                </header>

                {/* Options */}
                {expandedInstanceTypeIDs?.includes(id) && (
                  <section className="collapsibles content">
                    {options?.map(option => {
                      // Derive ability properties.
                      const name = option?.name
                      const id = option?.id
                      const description = option?.description

                      return (
                        <button
                          className="collapsible"
                          key={`filter-button ${id}`}
                          id={id}
                          onClick={() =>
                            onCollapseToggle(
                              id,
                              expandedOptionIDs,
                              setExpandedOptionIDs
                            )
                          }
                          type="button"
                        >
                          {/* Ability Name */}
                          <h4 id={name}>{name}</h4>

                          {/* Ability Info */}
                          {expandedOptionIDs?.includes(id) && (
                            <p>{description}</p>
                          )}
                        </button>
                      )
                    })}
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

export default FeatureOptionsPage
