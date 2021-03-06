// Node modules.
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import find from "lodash/find"
// Relative imports.
import BackToTop from "../components/BackToTop"
import Chevron from "../components/icons/Chevron"
import Layout from "../components/layout"
import Seo from "../components/seo"
import defaultRaceImage from "../../static/images/defaultRace.png"
import { Wrapper } from "../components/cardsPage"
import { onExpandedToggle } from "../utils"

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

  // Derive data from the graphql query above.
  const RACES = queryResult?.site?.siteMetadata?.RACES
  const SUBRACES = queryResult?.site?.siteMetadata?.SUBRACES
  const PERKS = queryResult?.site?.siteMetadata?.PERKS

  // Start with everything collapsed.
  const [expandedRaceIDs, setExpandedRaceIDs] = useState([])
  const [expandedPerkIDs, setExpandedPerkIDs] = useState([])
  const [expandedSubraceIDs, setExpandedSubraceIDs] = useState([])

  return (
    <Layout>
      <Seo title="Races" />
      <Wrapper>
        <BackToTop />

        <h2>Races</h2>
        <ul>
          {RACES?.map(race => {
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
            const subraces = SUBRACES?.filter(subrace => subrace.raceID === id)

            // Derive if the details are expanded.
            const isExpanded = expandedRaceIDs?.includes(id)

            return (
              <li key={name}>
                {/* IMAGE + NAME */}
                {/* ============ */}
                <header
                  onKeyDown={event => {
                    // On enter, toggle expanded/expanded.
                    if (event.keyCode === 13) {
                      onExpandedToggle(id, expandedRaceIDs, setExpandedRaceIDs)
                    }
                  }}
                  onClick={() =>
                    onExpandedToggle(id, expandedRaceIDs, setExpandedRaceIDs)
                  }
                  role="button"
                  tabIndex="0"
                >
                  <img alt={`${name} race`} src={imageURL} />
                  <h3>{name}</h3>
                  <Chevron
                    className={`chevron${isExpanded ? " expanded" : ""}`}
                  />
                </header>
                {/* IMAGE + NAME end */}
                {/* ============ */}

                {isExpanded && (
                  <section className="content">
                    {/* CORE STATS */}
                    {/* ========== */}
                    <h4>CORE STATS</h4>

                    <section className="fields">
                      <section className="field-group">
                        <p className="label">Size</p>
                        <p className="value-center">{size}</p>
                      </section>

                      <section className="field-group">
                        <p className="label">Land Speed</p>
                        <p className="value-center">{landSpeed}</p>
                      </section>

                      <section className="field-group">
                        <p className="label">Hit Points</p>
                        <p className="value-center">{hitPoints}</p>
                      </section>

                      {swimSpeed > 0 && (
                        <section className="field-group">
                          <p className="label">Swim Speed</p>
                          <p className="value-center">{swimSpeed}</p>
                        </section>
                      )}

                      {climbSpeed > 0 && (
                        <section className="field-group">
                          <p className="label">Climb Speed</p>
                          <p className="value-center">{climbSpeed}</p>
                        </section>
                      )}

                      {flySpeed > 0 && (
                        <section className="field-group">
                          <p className="label">Fly Speed</p>
                          <p className="value-center">{flySpeed}</p>
                        </section>
                      )}

                      {burrowSpeed > 0 && (
                        <section className="field-group">
                          <p className="label">Burrow Speed</p>
                          <p className="value-center">{burrowSpeed}</p>
                        </section>
                      )}

                      {ability && (
                        <section className="field-group">
                          <p className="label">Ability</p>
                          <p className="value-center">{ability}</p>
                        </section>
                      )}

                      <section className="field-group">
                        <p className="label">Languages</p>
                        <p className="value-center">{languages}</p>
                      </section>
                    </section>
                    {/* CORE STATS end */}
                    {/* ========== */}

                    {/* SUBRACES */}
                    {/* ========== */}
                    {subraces?.length > 0 && (
                      <section className="collapsibles">
                        <header>
                          <h4>SUB RACES</h4>

                          <p className="disclaimer">(Choose 1)</p>
                        </header>

                        {subraces?.map(subrace => {
                          // Derive subrace properties.
                          const description = subrace?.description
                          const subraceID = subrace?.id
                          const name = subrace?.name
                          const penalty = subrace?.penalty
                          const requirements = subrace?.requirements

                          return (
                            <button
                              className="collapsible"
                              key={`${id}-${subraceID}`}
                              onClick={() =>
                                onExpandedToggle(
                                  subraceID,
                                  expandedSubraceIDs,
                                  setExpandedSubraceIDs
                                )
                              }
                              type="button"
                            >
                              {/* Subrace Name */}
                              <h5>{name}</h5>

                              {/* Subrace Info */}
                              {expandedSubraceIDs?.includes(subraceID) && (
                                <>
                                  {requirements && (
                                    <p className="requirements">
                                      <strong>Requirements:</strong>{" "}
                                      {requirements}
                                    </p>
                                  )}
                                  {penalty && (
                                    <p className="requirements">
                                      <strong>Penalty:</strong> {penalty}
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
                    <section className="collapsibles">
                      <header>
                        <h4>PERKS</h4>

                        <p className="disclaimer">
                          (Choose 3 unless specified by your subrace)
                        </p>
                      </header>

                      {/* List Perks */}
                      {perkIDs?.map(perkID => {
                        // Derive the perk.
                        // @WARNING: This could become slower (currently O(n)) as total perk records grow.
                        // Consider using a perks lookup table for O(1) speed if this becomes slow.
                        const perk = find(PERKS, ["id", perkID])
                        const description = perk?.description
                        const name = perk?.name
                        const requirements = perk?.requirements

                        // Derive the composite ID.
                        const racePerkID = `${id}--${perkID}`

                        return (
                          <button
                            className="collapsible"
                            key={racePerkID}
                            onClick={() =>
                              onExpandedToggle(
                                racePerkID,
                                expandedPerkIDs,
                                setExpandedPerkIDs
                              )
                            }
                            type="button"
                          >
                            {/* Perk Name */}
                            <h5>{name}</h5>

                            {/* Perk Info */}
                            {expandedPerkIDs?.includes(racePerkID) && (
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

export default RacesPage
