// Node modules.
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
// Relative imports.
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Wrapper } from "../components/cardsPage"
import { onCollapseToggle } from "../utils"
import ShapechangeStatBlock from "../components/ShapechangeStatBlock"

const ShapechangePage = () => {
  const queryResult = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          SHAPECHANGE {
            abilities {
              description
              name
            }
            actions {
              description
              name
            }
            armor
            choose
            constitution
            defense
            dexterity
            fortitude
            hitPoints
            id
            name
            reflex
            senses
            skills {
              name
              value
            }
            speed
            strength
            type
            will
          }
        }
      }
    }
  `)

  // Derive Races and Perks data from the graphql query above.
  const SHAPECHANGE = queryResult?.site?.siteMetadata?.SHAPECHANGE
  const [expandedBlocksIDs, setExpandedBlocksIDs] = useState([])
  return (
    <Layout>
      <Seo title="Shapechange Forms" />
      <Wrapper>
        <h2>Shapechange Forms</h2>

        {/* begin headings for abilities */}
        <ul>
          {SHAPECHANGE?.map(form => {
            // Derive if the details are expanded.
            const id = form?.id
            const isExpanded = expandedBlocksIDs?.includes(id)
            return (
              <li key={id}>
                <ShapechangeStatBlock
                  data={form}
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

export default ShapechangePage
