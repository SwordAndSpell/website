// Node modules.
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import map from "lodash/map"
// Relative imports.
import Chevron from "../components/icons/Chevron"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Wrapper } from "../components/cardsPage"
import { onExpandedToggle } from "../utils"

const ReferenceChartsPage = () => {
  const queryResult = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          ABILITY_MODIFIERS {
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
            _4
            _5
            _6
            _7
            _8
            _9
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
          LEVELING {
            featuresGranted
            level
            partOfCharacterCreation
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
            sixthLevelCharges
            seventhLevelCharges
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
  const ABILITY_MODIFIERS = queryResult?.site?.siteMetadata?.ABILITY_MODIFIERS
  const EXAMPLE_DCS = queryResult?.site?.siteMetadata?.EXAMPLE_DCS
  const LEVELING = queryResult?.site?.siteMetadata?.LEVELING
  const SKILLS_QUICK_REFERENCE =
    queryResult?.site?.siteMetadata?.SKILLS_QUICK_REFERENCE
  const SPELL_POINT_COSTS = queryResult?.site?.siteMetadata?.SPELL_POINT_COSTS
  const UNIVERSAL_SPELL_CHARGES =
    queryResult?.site?.siteMetadata?.UNIVERSAL_SPELL_CHARGES
  const UNIVERSAL_SPELL_POINTS =
    queryResult?.site?.siteMetadata?.UNIVERSAL_SPELL_POINTS

  // Derive state properties.
  const [isAbilityModifiersExpanded, setIsAbilityModifiersExpanded] = useState(
    false
  )
  const [isExampleDCSExpanded, setIsExampleDCSExpanded] = useState(false)
  const [isLevelingExpanded, setIsLevelingExpanded] = useState(false)
  const [
    isSkillsQuickReferenceExpanded,
    setIsSkillsQuickReferenceExpanded,
  ] = useState(false)
  const [isSpellPointCostsExpanded, setIsSpellPointCostsExpanded] = useState(
    false
  )
  const [
    isUniversalSpellChargesExpanded,
    setIsUniversalSpellChargesExpanded,
  ] = useState(false)
  const [
    isUniversalSpellPointsExpanded,
    setIsUniversalSpellPointsExpanded,
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
              <section className="fields">
                {map(ABILITY_MODIFIERS, (value, key) => (
                  <section className="field-group" key={key}>
                    <p className="label">{key}</p>
                    <p className="value">{value}</p>
                  </section>
                ))}
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
              <section className="fields">
                {map(EXAMPLE_DCS, (value, key) => (
                  <section className="field-group" key={key}>
                    <p className="label">{key}</p>
                    <p className="value">{value}</p>
                  </section>
                ))}
              </section>
            )}
          </li>

          {/* Leveling */}
          <li>
            <header
              className="no-background-image"
              onKeyDown={event => {
                // On enter, toggle expanded/expanded.
                if (event.keyCode === 13) {
                  setIsLevelingExpanded(!isLevelingExpanded)
                }
              }}
              onClick={() => setIsLevelingExpanded(!isLevelingExpanded)}
              role="button"
              tabIndex="0"
            >
              <h3>Leveling</h3>
              <Chevron
                className={`chevron${isLevelingExpanded ? " expanded" : ""}`}
              />
            </header>

            {isLevelingExpanded && (
              <section className="fields">
                {map(LEVELING, (value, key) => (
                  <section className="field-group" key={key}>
                    <p className="label">{key}</p>
                    <p className="value">{value}</p>
                  </section>
                ))}
              </section>
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
              <h3>Skills Quick Reference</h3>
              <Chevron
                className={`chevron${
                  isSkillsQuickReferenceExpanded ? " expanded" : ""
                }`}
              />
            </header>

            {isSkillsQuickReferenceExpanded && (
              <section className="fields">
                {map(SKILLS_QUICK_REFERENCE, (value, key) => (
                  <section className="field-group" key={key}>
                    <p className="label">{key}</p>
                    <p className="value">{value}</p>
                  </section>
                ))}
              </section>
            )}
          </li>

          {/* SpellPointCosts */}
          <li>
            <header
              className="no-background-image"
              onKeyDown={event => {
                // On enter, toggle expanded/expanded.
                if (event.keyCode === 13) {
                  setIsSpellPointCostsExpanded(!isSpellPointCostsExpanded)
                }
              }}
              onClick={() =>
                setIsSpellPointCostsExpanded(!isSpellPointCostsExpanded)
              }
              role="button"
              tabIndex="0"
            >
              <h3>Spell Point Costs</h3>
              <Chevron
                className={`chevron${
                  isSpellPointCostsExpanded ? " expanded" : ""
                }`}
              />
            </header>

            {isSpellPointCostsExpanded && (
              <section className="fields">
                {map(SPELL_POINT_COSTS, (value, key) => (
                  <section className="field-group" key={key}>
                    <p className="label">{key}</p>
                    <p className="value">{value}</p>
                  </section>
                ))}
              </section>
            )}
          </li>

          {/* UniversalSpellCharges */}
          <li>
            <header
              className="no-background-image"
              onKeyDown={event => {
                // On enter, toggle expanded/expanded.
                if (event.keyCode === 13) {
                  setIsUniversalSpellChargesExpanded(
                    !isUniversalSpellChargesExpanded
                  )
                }
              }}
              onClick={() =>
                setIsUniversalSpellChargesExpanded(
                  !isUniversalSpellChargesExpanded
                )
              }
              role="button"
              tabIndex="0"
            >
              <h3>Universal Spell Charges</h3>
              <Chevron
                className={`chevron${
                  isUniversalSpellChargesExpanded ? " expanded" : ""
                }`}
              />
            </header>

            {isUniversalSpellChargesExpanded && (
              <section className="fields">
                {map(UNIVERSAL_SPELL_CHARGES, (value, key) => (
                  <section className="field-group" key={key}>
                    <p className="label">{key}</p>
                    <p className="value">{value}</p>
                  </section>
                ))}
              </section>
            )}
          </li>

          {/* UniversalSpellPoints */}
          <li>
            <header
              className="no-background-image"
              onKeyDown={event => {
                // On enter, toggle expanded/expanded.
                if (event.keyCode === 13) {
                  setIsUniversalSpellPointsExpanded(
                    !isUniversalSpellPointsExpanded
                  )
                }
              }}
              onClick={() =>
                setIsUniversalSpellPointsExpanded(
                  !isUniversalSpellPointsExpanded
                )
              }
              role="button"
              tabIndex="0"
            >
              <h3>Universal Spell Points</h3>
              <Chevron
                className={`chevron${
                  isUniversalSpellPointsExpanded ? " expanded" : ""
                }`}
              />
            </header>

            {isUniversalSpellPointsExpanded && (
              <section className="fields">
                {map(UNIVERSAL_SPELL_POINTS, (value, key) => (
                  <section className="field-group" key={key}>
                    <p className="label">{key}</p>
                    <p className="value">{value}</p>
                  </section>
                ))}
              </section>
            )}
          </li>
        </ul>
      </Wrapper>
    </Layout>
  )
}

export default ReferenceChartsPage
