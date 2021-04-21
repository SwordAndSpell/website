import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import map from "lodash/map"
// Relative imports.
import Chevron from "../components/icons/Chevron"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Wrapper } from "../components/cardsPage"
import { onExpandedToggle } from "../utils"

const SpellcastingChartPage = () => {
  const queryResult = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          SPELL_POINT_COSTS {
            spellLevel
            spellPointCost
          }
          UNIVERSAL_SPELL_CHARGES {
            eighthLevelCharges
            fifthLevelCharges
            firstLevelCharges
            fourthLevelCharges
            ninthLevelCharges
            secondLevelCharges
            seventhLevelCharges
            sixthLevelCharges
            spellCastingLevel
            thirdLevelCharges
          }
          UNIVERSAL_SPELL_POINTS {
            maxCastingLevel
            spellPoints
            spellcastingLevel
            upcastLevel
          }
        }
      }
    }
  `)

  // Derive data from the graphql query above.
  const UNIVERSAL_SPELL_CHARGES =
    queryResult?.site?.siteMetadata?.UNIVERSAL_SPELL_CHARGES
  const UNIVERSAL_SPELL_POINTS =
    queryResult?.site?.siteMetadata?.UNIVERSAL_SPELL_POINTS
  const SPELL_POINT_COSTS = queryResult?.site?.siteMetadata?.SPELL_POINT_COSTS

  console.log(SPELL_POINT_COSTS)
  return (
    <Layout>
      <Seo title="Spellcasting Charts" />
      <Wrapper>
        <h2>Universal Spellcharge Chart </h2>
        <table>
          <thead>
            <tr>
              <th>Level</th>
              <th>1st</th>
              <th>2nd</th>
              <th>3rd</th>
              <th>4th</th>
              <th>5th</th>
              <th>6th</th>
              <th>7th</th>
              <th>8th</th>
              <th>9th</th>
            </tr>
          </thead>
          <tbody>
            {map(UNIVERSAL_SPELL_CHARGES, row => (
              <tr key={row?.spellCastingLevel}>
                <td>{row?.spellCastingLevel}</td>
                <td>{row?.firstLevelCharges || "-"}</td>
                <td>{row?.secondLevelCharges || "-"}</td>
                <td>{row?.thirdLevelCharges || "-"}</td>
                <td>{row?.fourthLevelCharges || "-"}</td>
                <td>{row?.fifthLevelCharges || "-"}</td>
                <td>{row?.sixthLevelCharges || "-"}</td>
                <td>{row?.seventhLevelCharges || "-"}</td>
                <td>{row?.eighthLevelCharges || "-"}</td>
                <td>{row?.ninthLevelCharges || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Universal Spell Point Chart </h2>
        <table>
          <thead>
            <tr>
              <th>Level</th>
              <th>Spell Points</th>
              <th>Max Casting Level</th>
              <th>Upcast Level</th>
            </tr>
          </thead>
          <tbody>
            {map(UNIVERSAL_SPELL_POINTS, row => (
              <tr key={row?.spellcastingLevel}>
                <td>{row?.spellcastingLevel}</td>
                <td>{row?.spellPoints || "-"}</td>
                <td>{row?.maxCastingLevel || "-"}</td>
                <td>{row?.upcastLevel || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Spell Point Costs</h2>
        <table>
          <thead>
            <tr>
              <th>Level</th>
              <th>Point Cost</th>
            </tr>
          </thead>
          <tbody>
            {map(SPELL_POINT_COSTS, row => (
              <tr key={row?.spellLevel}>
                <td>{row?.spellLevel}</td>
                <td>{row?.spellPointCost || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <strong>*Note:</strong> There is an intense cost associated with
          casting spells of 6th level or higher using Spell Points. As such you
          can only cast a spell at each of these levels once per day.
        </div>
      </Wrapper>
    </Layout>
  )
}

export default SpellcastingChartPage
