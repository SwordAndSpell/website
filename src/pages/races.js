// Node modules.
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import map from "lodash/map"
// Relative imports.
import defaultRaceImage from "../images/defaultRace.png"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 20px 0 0;
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
            imageURL
            landSpeed
            languages
            name
            size
            swimSpeed
          }
        }
      }
    }
  `)

  // Derive Races data from the graphql query above.
  const RACES = queryResult?.site.siteMetadata.RACES

  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <h2>Races</h2>
        <ul>
          {map(RACES, race => {
            // Derive race properties.
            const name = race?.name
            const imageURL = race?.imageURL || defaultRaceImage
            const size = race?.size
            const landSpeed = race?.landSpeed
            const swimSpeed = race?.swimSpeed
            const climbSpeed = race?.climbSpeed
            const flySpeed = race?.flySpeed
            const burrowSpeed = race?.burrowSpeed
            const hitPoints = race?.hitPoints
            const languages = race?.languages?.join(", ")
            const ability = race?.ability

            return (
              <li key={name}>
                <header>
                  <img alt={`${name} race`} src={imageURL} />
                  <h3>{name}</h3>
                </header>

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
                    <p className="label">Swim Speed</p>
                    <p className="value">{swimSpeed}</p>
                  </section>

                  <section className="field-group">
                    <p className="label">Climb Speed</p>
                    <p className="value">{climbSpeed}</p>
                  </section>

                  <section className="field-group">
                    <p className="label">Fly Speed</p>
                    <p className="value">{flySpeed}</p>
                  </section>

                  <section className="field-group">
                    <p className="label">Burrow Speed</p>
                    <p className="value">{burrowSpeed}</p>
                  </section>

                  <section className="field-group">
                    <p className="label">Hit Points</p>
                    <p className="value">{hitPoints}</p>
                  </section>
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
              </li>
            )
          })}
        </ul>
      </Wrapper>
    </Layout>
  )
}

export default RacesPage
