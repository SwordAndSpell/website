// Node modules.
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import get from "lodash/get"
import map from "lodash/map"
// Relative imports.
import Layout from "../components/layout"
import SEO from "../components/seo"

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
  const RACES = get(queryResult, "site.siteMetadata.RACES")

  return (
    <Layout>
      <SEO title="Home" />
      <h2>Races</h2>
      <ul>
        {map(RACES, race => {
          // Derive race properties.
          const name = get(race, "name")
          const size = get(race, "size")
          const landSpeed = get(race, "landSpeed")
          const swimSpeed = get(race, "swimSpeed")
          const climbSpeed = get(race, "climbSpeed")
          const flySpeed = get(race, "flySpeed")
          const burrowSpeed = get(race, "burrowSpeed")
          const hitPoints = get(race, "hitPoints")
          const languages = get(race, "languages")
          const ability = get(race, "ability")
          // const subraces = get(race, "subraces")
          // const generalPerks = get(race, "generalPerks")

          return (
            <li key={name}>
              <h3>{name}</h3>

              <section>
                <p className="label">Size</p>
                <p className="value">{size}</p>
              </section>

              <section>
                <p className="label">Land Speed</p>
                <p className="value">{landSpeed}</p>
              </section>

              <section>
                <p className="label">Swim Speed</p>
                <p className="value">{swimSpeed}</p>
              </section>

              <section>
                <p className="label">Climb Speed</p>
                <p className="value">{climbSpeed}</p>
              </section>

              <section>
                <p className="label">Fly Speed</p>
                <p className="value">{flySpeed}</p>
              </section>

              <section>
                <p className="label">Burrow Speed</p>
                <p className="value">{burrowSpeed}</p>
              </section>

              <section>
                <p className="label">Hit Points</p>
                <p className="value">{hitPoints}</p>
              </section>

              <section>
                <p className="label">Languages</p>
                <p className="value">{languages}</p>
              </section>

              <section>
                <p className="label">Ability</p>
                <p className="value">{ability}</p>
              </section>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default RacesPage
