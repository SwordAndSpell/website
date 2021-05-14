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
            <section className="modifier-chart">
              {isAbilityModifiersExpanded && (
                <table border="1">
                  <thead>
                    <tr>
                      <th>Ability Score</th>
                      <th>Modifier</th>
                      <th>Ability Score</th>
                      <th>Modifier</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>5</td>
                      <td>-3</td>
                      <td>15</td>
                      <td>+2</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>-2</td>
                      <td>16</td>
                      <td>+3</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>-2</td>
                      <td>17</td>
                      <td>+3</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>-1</td>
                      <td>18</td>
                      <td>+4</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>-1</td>
                      <td>19</td>
                      <td>+4</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>+0</td>
                      <td>20</td>
                      <td>+5</td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>+0</td>
                      <td>21</td>
                      <td>+5</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>+1</td>
                      <td>22</td>
                      <td>+6</td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>+1</td>
                      <td>23</td>
                      <td>+6</td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>+2</td>
                      <td>24</td>
                      <td>+7</td>
                    </tr>
                  </tbody>
                </table>
              )}
            </section>
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
              <section className="modifier-chart">
                <table border="1">
                  <thead>
                    <tr>
                      <th>Modifier</th>
                      <th>A</th>
                      <th>T</th>
                      <th>E</th>
                      <th>M</th>
                      <th>L</th>
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
              </section>
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
              <section className="modifier-chart">
                <table border="1">
                  <thead>
                    <tr>
                      <th>Level</th>
                      <th>-- --</th>
                      <th> -- </th>
                      <th>Standard</th>
                      <th>+</th>
                      <th>+ +</th>
                      <th>+ + +</th>
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
              </section>
            )}
          </li>
        </ul>
      </Wrapper>
    </Layout>
  )
}

export default ReferenceChartsPage
