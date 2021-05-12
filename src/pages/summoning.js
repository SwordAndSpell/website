// Node modules.
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
// Relative imports.
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Wrapper } from "../components/cardsPage"
import { onCollapseToggle } from "../utils"
import SummonStatBlock from "../components/SummonStatBlock"

const SummoningPage = () => {
  const queryResult = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          SUMMONABLES {
            abilities {
              description
              name
            }
            actions {
              description
              name
            }
            armor
            charisma
            constitution
            defense
            dexterity
            fortitude
            hitPoints
            id
            intelligence
            immunities
            name
            senses
            reflex
            resistances
            speed
            strength
            type
            will
            wisdom
          }
        }
      }
    }
  `)

  // Derive Races and Perks data from the graphql query above.
  const SUMMONABLES = queryResult?.site?.siteMetadata?.SUMMONABLES
  const [expandedBlocksIDs, setExpandedBlocksIDs] = useState([])
  return (
    <Layout>
      <Seo title="Summons" />
      <Wrapper>
        <h2>Summonable Creatures</h2>

        {/* begin headings for abilities */}
        <ul>
          {SUMMONABLES?.map(summon => {
            // Derive if the details are expanded.
            const id = summon?.id
            const isExpanded = expandedBlocksIDs?.includes(id)
            return (
              <li key={id}>
                <SummonStatBlock
                  data={summon}
                  isOpen={isExpanded}
                  clickHandler={() =>
                    onCollapseToggle(
                      id,
                      expandedBlocksIDs,
                      setExpandedBlocksIDs
                    )
                  }
                />
              </li>
            )
          })}
        </ul>
      </Wrapper>
    </Layout>
  )
}

export default SummoningPage
