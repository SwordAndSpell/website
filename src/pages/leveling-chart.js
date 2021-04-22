import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import map from "lodash/map"
// Relative imports.
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Wrapper } from "../components/cardsPage"

const LevelingChartPage = () => {
  const queryResult = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          LEVELING {
            featuresGranted
            level
            partOfCharacterCreation
          }
        }
      }
    }
  `)

  // Derive data from the graphql query above.
  const LEVELING_CHART = queryResult?.site?.siteMetadata?.LEVELING

  return (
    <Layout>
      <Seo title="Leveling Chart" />
      <Wrapper>
        <h2>Leveling Chart </h2>
        <table>
          <thead>
            <tr>
              <th>Level</th>
              <th>Features Granted</th>
            </tr>
          </thead>
          <tbody>
            {map(LEVELING_CHART, row => (
              <tr key={`${row?.level}-${row?.featuresGranted}`}>
                <td>{row?.level}</td>
                <td>{row?.featuresGranted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Wrapper>
    </Layout>
  )
}

export default LevelingChartPage
