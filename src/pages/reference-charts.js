// Node modules.
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// Relative imports.
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrapper } from "../components/cardsPage"

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

  return (
    <Layout>
      <SEO title="Reference Charts" />
      <Wrapper>
        <h2>Reference Charts</h2>

        {/* ABILITY_MODIFIERS */}
        <h2 className="category">Ability Modifiers</h2>

        {/* EXAMPLE_DCS */}
        <h2 className="category">Example DCs</h2>

        {/* LEVELING */}
        <h2 className="category">Leveling</h2>

        {/* SKILLS_QUICK_REFERENCE */}
        <h2 className="category">Skills Quick Reference</h2>

        {/* SPELL_POINT_COSTS */}
        <h2 className="category">Spell Point Costs</h2>

        {/* UNIVERSAL_SPELL_CHARGES */}
        <h2 className="category">Universal Spell Charges</h2>

        {/* UNIVERSAL_SPELL_POINTS */}
        <h2 className="category">Universal Spell Points</h2>
      </Wrapper>
    </Layout>
  )
}

export default ReferenceChartsPage
