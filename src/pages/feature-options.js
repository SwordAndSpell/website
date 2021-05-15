// Node modules.
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
// Relative imports.
import Chevron from "../components/icons/Chevron"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Wrapper } from "../components/cardsPage"
import { onCollapseToggle } from "../utils"

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

  const [collapsedHeadings, setCollapsedHeadings] = useState([
    "EmpoweredBloodlines",
    "Metamagics",
    "FightingStyles",
  ])
  const [collapsedAbilityIDs, setCollapsedAbilityIDs] = useState([])

  const BLOODLINES = OPTIONS?.filter(
    item => item?.instanceType === "Empowered Bloodline"
  )
  const FIGHTING_STYLES = OPTIONS?.filter(
    item => item?.instanceType === "Fighting Style"
  )
  const METAMAGICS = OPTIONS?.filter(item => item?.instanceType === "Metamagic")

  return (
    <Layout>
      <Seo title="Feature Options" />
      <Wrapper>
        <h2>Feature Options</h2>

        {/* Filters */}

        {/* begin headings for abilities */}
        <ul>
          <li key={"bloodlines"}>
            {/*  NAME */}
            {/* ===== */}
            <header
              className="no-background-image"
              onKeyDown={event => {
                // On enter, toggle expanded/expanded.
                if (event.keyCode === 13) {
                  onCollapseToggle(
                    "EmpoweredBloodlines",
                    collapsedHeadings,
                    setCollapsedHeadings
                  )
                }
              }}
              onClick={() =>
                onCollapseToggle(
                  "EmpoweredBloodlines",
                  collapsedHeadings,
                  setCollapsedHeadings
                )
              }
              role="button"
              tabIndex="0"
            >
              <h3 id="EmpoweredBloodlines">Empowered Bloodlines</h3>
              <Chevron
                className={`chevron${
                  !collapsedHeadings?.includes("EmpoweredBloodlines")
                    ? " expanded"
                    : ""
                }`}
              />
            </header>

            {/* NAME end */}
            {/* ======== */}

            {!collapsedHeadings?.includes("EmpoweredBloodlines") && (
              <>
                <section className="collapsibles content">
                  {BLOODLINES?.map(item => {
                    // Derive ability properties.
                    const name = item?.name
                    const id = item?.id
                    const description = item?.description

                    return (
                      <button
                        className="collapsible"
                        key={`filter-button ${id}`}
                        onClick={() =>
                          onCollapseToggle(
                            id,
                            collapsedAbilityIDs,
                            setCollapsedAbilityIDs
                          )
                        }
                        type="button"
                      >
                        {/* Ability Name */}
                        <h4 id={name}>{name}</h4>

                        {/* Ability Info */}
                        {collapsedAbilityIDs?.includes(id) && (
                          <p>{description}</p>
                        )}
                      </button>
                    )
                  })}
                </section>
              </>
            )}
          </li>
          <li key={"fightingStyles"}>
            {/*  NAME */}
            {/* ===== */}
            <header
              className="no-background-image"
              onKeyDown={event => {
                // On enter, toggle expanded/expanded.
                if (event.keyCode === 13) {
                  onCollapseToggle(
                    "FightingStyles",
                    collapsedHeadings,
                    setCollapsedHeadings
                  )
                }
              }}
              onClick={() =>
                onCollapseToggle(
                  "FightingStyles",
                  collapsedHeadings,
                  setCollapsedHeadings
                )
              }
              role="button"
              tabIndex="0"
            >
              <h3 id="FightingStyles">Fighting Styles</h3>
              <Chevron
                className={`chevron${
                  !collapsedHeadings?.includes("FightingStyles")
                    ? " expanded"
                    : ""
                }`}
              />
            </header>

            {/* NAME end */}
            {/* ======== */}

            {!collapsedHeadings?.includes("FightingStyles") && (
              <>
                <section className="collapsibles content">
                  {FIGHTING_STYLES?.map(item => {
                    // Derive ability properties.
                    const name = item?.name
                    const id = item?.id
                    const description = item?.description

                    return (
                      <button
                        className="collapsible"
                        key={`filter-button ${id}`}
                        onClick={() =>
                          onCollapseToggle(
                            id,
                            collapsedAbilityIDs,
                            setCollapsedAbilityIDs
                          )
                        }
                        type="button"
                      >
                        {/* Ability Name */}
                        <h4 id={name}>{name}</h4>

                        {/* Ability Info */}
                        {collapsedAbilityIDs?.includes(id) && (
                          <p>{description}</p>
                        )}
                      </button>
                    )
                  })}
                </section>
              </>
            )}
          </li>
          <li key={"metamagics"}>
            {/*  NAME */}
            {/* ===== */}
            <header
              className="no-background-image"
              onKeyDown={event => {
                // On enter, toggle expanded/expanded.
                if (event.keyCode === 13) {
                  onCollapseToggle(
                    "Metamagics",
                    collapsedHeadings,
                    setCollapsedHeadings
                  )
                }
              }}
              onClick={() =>
                onCollapseToggle(
                  "Metamagics",
                  collapsedHeadings,
                  setCollapsedHeadings
                )
              }
              role="button"
              tabIndex="0"
            >
              <h3 id="Metamagics">Metamagics</h3>
              <Chevron
                className={`chevron${
                  !collapsedHeadings?.includes("Metamagics") ? " expanded" : ""
                }`}
              />
            </header>

            {/* NAME end */}
            {/* ======== */}

            {!collapsedHeadings?.includes("Metamagics") && (
              <>
                <section className="collapsibles content">
                  {METAMAGICS?.map(item => {
                    // Derive ability properties.
                    const name = item?.name
                    const id = item?.id
                    const description = item?.description

                    return (
                      <button
                        className="collapsible"
                        key={`filter-button ${id}`}
                        onClick={() =>
                          onCollapseToggle(
                            id,
                            collapsedAbilityIDs,
                            setCollapsedAbilityIDs
                          )
                        }
                        type="button"
                      >
                        {/* Ability Name */}
                        <h4 id={name}>{name}</h4>

                        {/* Ability Info */}
                        {collapsedAbilityIDs?.includes(id) && (
                          <p>{description}</p>
                        )}
                      </button>
                    )
                  })}
                </section>
              </>
            )}
          </li>
        </ul>
      </Wrapper>
    </Layout>
  )
}

export default FeatureOptionsPage
