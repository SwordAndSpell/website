// Node modules.
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import map from "lodash/map"
// Relative imports.
import Chevron from "../components/icons/Chevron"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Wrapper } from "../components/cardsPage"

const ReferenceChartsPage = () => {
  const queryResult = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          ABILITY_MODIFIERS {
            _5
            _6
            _7
            _8
            _9
            _10
            _11
            _12
            _13
            _14
            _15
            _16
            _17
            _18
            _19
            _20
            _21
            _22
            _23
            _24
          }
          EXAMPLE_DCS {
            difficultDC
            easyDC
            expertDC
            impossibleDC
            playerLevel
            standardDC
            trivialDC
          }
          SKILLS_QUICK_REFERENCE {
            abilityScoreModifier
            apprentice
            expert
            legendary
            master
            trained
            unskilled
          }
        }
      }
    }
  `)

  // Derive data from the graphql query above.
  const ABILITY_MODIFIERS = queryResult?.site?.siteMetadata?.ABILITY_MODIFIERS
  const abilityModifiersReference = {
    _5: "5",
    _6: "6",
    _7: "7",
    _8: "8",
    _9: "9",
    _10: "10",
    _11: "11",
    _12: "12",
    _13: "13",
    _14: "14",
    _15: "15",
    _16: "16",
    _17: "17",
    _18: "18",
    _19: "19",
    _20: "20",
    _21: "21",
    _22: "22",
    _23: "23",
    _24: "24",
  }
  const EXAMPLE_DCS = queryResult?.site?.siteMetadata?.EXAMPLE_DCS
  const SKILLS_QUICK_REFERENCE =
    queryResult?.site?.siteMetadata?.SKILLS_QUICK_REFERENCE

  // Derive state properties.
  const [isAbilityModifiersExpanded, setIsAbilityModifiersExpanded] = useState(
    false
  )
  const [isExampleDCSExpanded, setIsExampleDCSExpanded] = useState(false)
  const [
    isSkillsQuickReferenceExpanded,
    setIsSkillsQuickReferenceExpanded,
  ] = useState(false)

  return (
    <Layout>
      <Seo title="Reference Charts" />
      <Wrapper>
        <h2>Reference Charts</h2>
        <ul>
          {/* ABILITY_MODIFIERS */}
          <li>
            <header
              className="no-background-image"
              onKeyDown={event => {
                // On enter, toggle expanded/expanded.
                if (event.keyCode === 13) {
                  setIsAbilityModifiersExpanded(!isAbilityModifiersExpanded)
                }
              }}
              onClick={() =>
                setIsAbilityModifiersExpanded(!isAbilityModifiersExpanded)
              }
              role="button"
              tabIndex="0"
            >
              <h3>Ability Modifiers</h3>
              <Chevron
                className={`chevron${
                  isAbilityModifiersExpanded ? " expanded" : ""
                }`}
              />
            </header>

            {isAbilityModifiersExpanded && (
              <table>
                <thead>
                  <tr>
                    <th>Ability Score</th>
                    <th>Modifier</th>
                  </tr>
                </thead>
                <tbody>
                  {map(ABILITY_MODIFIERS, (value, key) => (
                    <tr>
                      <td>{abilityModifiersReference[key]}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </li>

          {/* SkillsQuickReference */}
          <li>
            <header
              className="no-background-image"
              onKeyDown={event => {
                // On enter, toggle expanded/expanded.
                if (event.keyCode === 13) {
                  setIsSkillsQuickReferenceExpanded(
                    !isSkillsQuickReferenceExpanded
                  )
                }
              }}
              onClick={() =>
                setIsSkillsQuickReferenceExpanded(
                  !isSkillsQuickReferenceExpanded
                )
              }
              role="button"
              tabIndex="0"
            >
              <h3>Skill Modifiers</h3>
              <Chevron
                className={`chevron${
                  isSkillsQuickReferenceExpanded ? " expanded" : ""
                }`}
              />
            </header>

            {isSkillsQuickReferenceExpanded && (
              <table>
                <thead>
                  <tr>
                    <th>Modifier</th>
                    <th>Apprentice</th>
                    <th>Trained</th>
                    <th>Expert</th>
                    <th>Master</th>
                    <th>Legendary</th>
                  </tr>
                </thead>
                <tbody>
                  {map(SKILLS_QUICK_REFERENCE, row => (
                    <tr>
                      <td>{row?.abilityScoreModifier}</td>
                      <td>{row?.apprentice}</td>
                      <td>{row?.trained}</td>
                      <td>{row?.expert}</td>
                      <td>{row?.master}</td>
                      <td>{row?.legendary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </li>

          {/* ExampleDCS */}
          <li>
            <header
              className="no-background-image"
              onKeyDown={event => {
                // On enter, toggle expanded/expanded.
                if (event.keyCode === 13) {
                  setIsExampleDCSExpanded(!isExampleDCSExpanded)
                }
              }}
              onClick={() => setIsExampleDCSExpanded(!isExampleDCSExpanded)}
              role="button"
              tabIndex="0"
            >
              <h3>Example DCS</h3>
              <Chevron
                className={`chevron${isExampleDCSExpanded ? " expanded" : ""}`}
              />
            </header>

            {isExampleDCSExpanded && (
              <table>
                <thead>
                  <tr>
                    <th>Level</th>
                    <th>Trivial</th>
                    <th>Easy</th>
                    <th>Normal</th>
                    <th>Difficult</th>
                    <th>Expert</th>
                    <th>Impossible</th>
                  </tr>
                </thead>
                <tbody>
                  {map(EXAMPLE_DCS, row => (
                    <tr>
                      <td>{row?.playerLevel}</td>
                      <td>{row?.trivialDC}</td>
                      <td>{row?.easyDC}</td>
                      <td>{row?.standardDC}</td>
                      <td>{row?.difficultDC}</td>
                      <td>{row?.expertDC}</td>
                      <td>{row?.impossibleDC}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </li>
        </ul>
      </Wrapper>
    </Layout>
  )
}

export default ReferenceChartsPage
