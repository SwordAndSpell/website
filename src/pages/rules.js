// Node modules.
import React, { Fragment, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
// Relative imports.
import Chevron from "../components/icons/Chevron"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TableOfContents from "../components/TableOfContents"
import { Wrapper } from "../components/cardsPage"
import { onCollapseToggle } from "../utils"
import { filter } from "lodash"

const RulesPage = () => {
  const queryResult = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          RULES {
            description
            id
            name
            chart {
              description
              level
              modifier
              result
            }
            subsections {
              description
              name
            }
          }
        }
      }
    }
  `)

  // Derive data from the graphql query above.
  const RULES = queryResult?.site?.siteMetadata?.RULES

  // Start with everything collapsed.
  const [expandedRulesIDs, setExpandedRulesIDs] = useState([])

  // filtering.
  const [searchInput, setSearchInput] = useState("")

  return (
    <Layout>
      <Seo title="Rules" />
      <Wrapper>
        <h2>Rules</h2>

        {/* Table of Contents */}
        <TableOfContents includedHeaders={["h2"]} />

        <input
          className="filter-input"
          name="search input"
          onChange={event => setSearchInput(event.target.value)}
          value={searchInput}
          placeholder="Search for rules..."
        />
        <p>
          Showing{" "}
          {
            filter(RULES, rule =>
              JSON.stringify(rule)
                .toLowerCase()
                .includes(searchInput.toLowerCase())
            ).length
          }{" "}
          rules
        </p>

        <ul>
          {RULES?.map(rule => {
            // Derive rule properties.
            const id = rule?.id
            const name = rule?.name
            const description = rule?.description
            const subsections = rule?.subsections
            const chart = rule?.chart

            // Derive if the details are expanded.
            const isExpanded = expandedRulesIDs?.includes(id)
            const isRelevant =
              searchInput === "" ||
              JSON.stringify(rule)
                .toLowerCase()
                .includes(searchInput.toLowerCase())

            if (!isRelevant) {
              return null
            }

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
                        expandedRulesIDs,
                        setExpandedRulesIDs
                      )
                    }
                  }}
                  onClick={() =>
                    onCollapseToggle(id, expandedRulesIDs, setExpandedRulesIDs)
                  }
                  role="button"
                  tabIndex="0"
                >
                  <h3 id={id}>{name}</h3>
                  <Chevron
                    className={`chevron${isExpanded ? " expanded" : ""}`}
                  />
                </header>
                {isExpanded && (
                  <section className="content">
                    <section className="fields column">
                      <section className="field-group">
                        <p className="value">{description}</p>
                      </section>
                      <section className="field-group">
                        {subsections?.map(subsection => {
                          const subsectionName = subsection?.name
                          const subsectionDescription = subsection?.description
                          return (
                            <Fragment key={`${id}-${subsectionName}`}>
                              <h3 id={`${id}-${subsectionName}`}>
                                {subsectionName}
                              </h3>
                              <p className="value">{subsectionDescription}</p>
                            </Fragment>
                          )
                        })}
                      </section>

                      {chart && (
                        <section className="leveling-chart">
                          <table border="1">
                            <thead>
                              <tr>
                                <th>
                                  {chart?.[0]?.modifier ? "Modifier" : "Level"}
                                </th>
                                <th>
                                  {chart?.[1]?.result
                                    ? "Result"
                                    : "Description"}
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {chart?.map(row => {
                                const col1 =
                                  row?.modifier ||
                                  undefined ||
                                  row?.level ||
                                  undefined
                                const col2 =
                                  row?.result ||
                                  undefined ||
                                  row?.description ||
                                  undefined

                                return (
                                  <tr key={`${col1}-${col2}`}>
                                    <td>{col1}</td>
                                    <td>{col2}</td>
                                  </tr>
                                )
                              })}
                            </tbody>
                          </table>
                        </section>
                      )}
                    </section>
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

export default RulesPage
