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
import defaultRaceImage from "../images/defaultRace.png"

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
        font-size: 3rem;
        justify-content: space-between;
        padding: 0 20px;
        position: absolute;
        width: 100%;
      }

      .chevron {
        height: 35px;
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
        color: #999999;
        font-size: 0.7rem;
        margin: 0;
      }

      .value {
        color: #444444;
        font-size: 1.2rem;
        margin: 0;
        white-space: pre-line;
      }
    }

    .perks,
    .subraces {
      padding: 0 20px;

      header {
        margin: 0 0 20px;
      }

      .disclaimer {
        color: #999999;
        font-size: 0.7rem;
        margin: 0;
      }

      .perk,
      .subrace {
        h5 {
          color: #512bfccc;
          font-size: 1.5rem;
        }

        .requirements {
          font-size: 0.7rem;
          margin: 0;
        }
      }

      .subrace h5 {
        color: #831fbbcc;
      }
    }
  }
`

const onCollapseToggle = (id, collapsedIDs, setCollapsedIDs) => {
  // Expand the ID.
  if (collapsedIDs?.includes(id)) {
    setCollapsedIDs(filter(collapsedIDs, collapsedID => collapsedID !== id))
    return
  }

  // Collapse the ID.
  setCollapsedIDs(uniq([...collapsedIDs, id]))
}

const RacesPage = () => {
  const queryResult = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          RACES {
            ability
            burrowSpeed
            climbSpeed
            flySpeed
            hitPoints
            id
            imageURL
            landSpeed
            languages
            name
            perkIDs
            size
            swimSpeed
          }
          SUBRACES {
            description
            id
            name
            penalty
            raceID
            requirements
          }
          PERKS {
            description
            id
            name
            requirements
          }
        }
      }
    }
  `)

  // Derive Races and Perks data from the graphql query above.
  const RACES = queryResult?.site?.siteMetadata?.RACES
  const SUBRACES = queryResult?.site?.siteMetadata?.SUBRACES
  const PERKS = queryResult?.site?.siteMetadata?.PERKS

  // Start with them all races being collapsed.
  const [collapsedRaceIDs, setCollapsedRaceIDs] = useState(
    RACES?.map(race => race?.id)
  )

  // Start with all perks + subraces being expanded.
  const [collapsedPerkIDs, setCollapsedPerkIDs] = useState([])
  const [collapsedSubraceIDs, setCollapsedSubraceIDs] = useState([])

  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <h2>Races</h2>
        <ul>
          {map(RACES, race => {
            // Derive race properties.
            const ability = race?.ability
            const burrowSpeed = race?.burrowSpeed
            const climbSpeed = race?.climbSpeed
            const flySpeed = race?.flySpeed
            const hitPoints = race?.hitPoints
            const id = race?.id
            const imageURL = race?.imageURL || defaultRaceImage
            const landSpeed = race?.landSpeed
            const languages = race?.languages?.join(", ")
            const name = race?.name
            const perkIDs = race?.perkIDs
            const size = race?.size
            const swimSpeed = race?.swimSpeed

            // Derive the subraces.
            const subraces = filter(SUBRACES, subrace => subrace.raceID === id)

            // Derive if the details are expanded.
            const isExpanded = !collapsedRaceIDs?.includes(id)

            return (
              <li key={name}>
                {/* IMAGE + NAME */}
                {/* ============ */}
                <header
                  onClick={() =>
                    onCollapseToggle(id, collapsedRaceIDs, setCollapsedRaceIDs)
                  }
                >
                  <img alt={`${name} race`} src={imageURL} />
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
                    <h4>Core Stats</h4>

                    <section className="fields">
                      <section className="field-group">
                        <p className="label">Size</p>
                        <p className="value">{size}</p>
                      </section>

                      <section className="field-group">
                        <p className="label">Land Speed</p>
                        <p className="value">{landSpeed}</p>
                      </section>

                      <section className="field-group">
                        <p className="label">Hit Points</p>
                        <p className="value">{hitPoints}</p>
                      </section>

                      {swimSpeed > 0 && (
                        <section className="field-group">
                          <p className="label">Swim Speed</p>
                          <p className="value">{swimSpeed}</p>
                        </section>
                      )}

                      {climbSpeed > 0 && (
                        <section className="field-group">
                          <p className="label">Climb Speed</p>
                          <p className="value">{climbSpeed}</p>
                        </section>
                      )}

                      {flySpeed > 0 && (
                        <section className="field-group">
                          <p className="label">Fly Speed</p>
                          <p className="value">{flySpeed}</p>
                        </section>
                      )}

                      {burrowSpeed > 0 && (
                        <section className="field-group">
                          <p className="label">Burrow Speed</p>
                          <p className="value">{burrowSpeed}</p>
                        </section>
                      )}
                    </section>

                    {ability && (
                      <section className="field-group">
                        <p className="label">Ability</p>
                        <p className="value">{ability}</p>
                      </section>
                    )}

                    <section className="field-group">
                      <p className="label">Languages</p>
                      <p className="value">{languages}</p>
                    </section>
                    {/* CORE STATS end */}
                    {/* ========== */}

                    {/* SUBRACES */}
                    {/* ========== */}
                    {subraces?.length > 0 && (
                      <section className="subraces">
                        <header>
                          <h4>Subraces</h4>

                          <p className="disclaimer">(Choose 1)</p>
                        </header>

                        {map(subraces, subrace => {
                          // Derive subrace properties.
                          const description = subrace?.description
                          const subraceID = subrace?.id
                          const name = subrace?.name
                          const penalty = subrace?.penalty
                          const raceID = subrace?.raceID
                          const requirements = subrace?.requirements

                          return (
                            <button
                              className="subrace"
                              key={`${id}-${subraceID}`}
                              onClick={() =>
                                onCollapseToggle(
                                  subraceID,
                                  collapsedSubraceIDs,
                                  setCollapsedSubraceIDs
                                )
                              }
                              type="button"
                            >
                              {/* Subrace Name */}
                              <h5>{name}</h5>

                              {/* Subrace Info */}
                              {!collapsedSubraceIDs?.includes(subraceID) && (
                                <>
                                  {requirements && (
                                    <p className="requirements">
                                      <strong>Requirements:</strong>{" "}
                                      {requirements}
                                    </p>
                                  )}
                                  <p>{description}</p>
                                </>
                              )}
                            </button>
                          )
                        })}
                      </section>
                    )}
                    {/* SUBRACES end */}
                    {/* ========== */}

                    {/* PERKS */}
                    {/* ===== */}
                    <section className="perks">
                      <header>
                        <h4>Perks</h4>

                        <p className="disclaimer">
                          (Choose 3 unless specified by your subrace)
                        </p>
                      </header>

                      {/* List Perks */}
                      {map(perkIDs, perkID => {
                        // Derive the perk.
                        // @WARNING: This could become slower (currently O(n)) as total perk records grow.
                        // Consider using a perks lookup table for O(1) speed if this becomes slow.
                        const perk = find(PERKS, ["id", perkID])
                        const description = perk?.description
                        const name = perk?.name
                        const requirements = perk?.requirements

                        return (
                          <button
                            className="perk"
                            key={`${id}-${perkID}`}
                            onClick={() =>
                              onCollapseToggle(
                                perkID,
                                collapsedPerkIDs,
                                setCollapsedPerkIDs
                              )
                            }
                            type="button"
                          >
                            {/* Perk Name */}
                            <h5>{name}</h5>

                            {/* Perk Info */}
                            {!collapsedPerkIDs?.includes(perkID) && (
                              <>
                                {requirements && (
                                  <p className="requirements">
                                    <strong>Requirements:</strong>{" "}
                                    {requirements}
                                  </p>
                                )}
                                <p>{description}</p>
                              </>
                            )}
                          </button>
                        )
                      })}
                    </section>
                    {/* PERKS end */}
                    {/* ===== */}
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

export default RacesPage
