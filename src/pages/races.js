// Node modules.
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import map from "lodash/map"
import uniq from "lodash/uniq"
// Relative imports.
import defaultRaceImage from "../images/defaultRace.png"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
    display: flex;
    flex-direction: column;
    margin: 0 0 50px;
    width: 100%;

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
        background: rgba(81, 43, 252, 0.8);
        color: #ffffff;
        font-size: 3rem;
        position: absolute;
        bottom: 0;
        width: 100%;
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
      }
    }
  }
`

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

  const [expandedPerkIDs, setExpandedPerkIDs] = useState([])

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

            return (
              <li key={name}>
                <header>
                  <img alt={`${name} race`} src={imageURL} />
                  <h3>{name}</h3>
                </header>

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

                <section className="subraces"></section>

                <section className="perks">
                  <h4>Perks</h4>
                  {map(perkIDs, perkID => {
                    // Derive the perk.
                    const perk = PERKS?.[perkID]
                    const description = perk?.description
                    const name = perk?.name
                    const requirements = perk?.requirements

                    return (
                      <section className="perk" key={`${id}-${perkID}`}>
                        {/* Perk Name */}
                        <h5
                          onClick={() =>
                            setExpandedPerkIDs(
                              uniq([...expandedPerkIDs, perkID])
                            )
                          }
                        >
                          {name}
                        </h5>

                        {/* Expanded Perk Info */}
                        {expandedPerkIDs?.includes(perkID) && (
                          <>
                            {requirements && (
                              <p>
                                <strong>Requirements:</strong> {requirements}
                              </p>
                            )}
                            <p>{description}</p>
                          </>
                        )}
                      </section>
                    )
                  })}
                </section>
              </li>
            )
          })}
        </ul>
      </Wrapper>
    </Layout>
  )
}

export default RacesPage
