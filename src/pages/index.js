// Node modules.
import * as React from "react"
import styled from "styled-components"
// Relative imports.
import Layout from "../components/layout"
import Seo from "../components/seo"

const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 90px 0 0;
  text-align: center;

  li {
    font-size: 1.1rem;
  }
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Wrapper>
      <h2>Welcome to the wiki</h2>
      <h3>Create a character following these steps:</h3>
      <ol>
        <li>Choose race</li>
        <li>
          Gain ability boosts + penalty (option to take additional penalty +
          boost)
        </li>
        <li>Gain core stats</li>
        <li>Choose subrace</li>
        <li>Gain/choose abilities/stats</li>
        <li>Choose +/-3 perks</li>
        <li>Modify abilities/stats/</li>
        <li>Choose background</li>
        <li>Modify ability scores</li>
        <li>
          Gain trained skill (*If already trained, gain skill of your choice)
        </li>
        <li>Gain lore advantage</li>
        <li>Choose core identity</li>
        <li>Gain health</li>
        <li>
          Choose proficiencies (*If already trained, gain skill of your choice)
        </li>
        <li>Choose equipment</li>
        <li>Gain abilities</li>
        <li>(Optional) Choose spells if spell caster</li>
        <li>Choose identity feature(s) (1 by default)</li>
        <li>Identify edge cases that modify abilities/stats</li>
        <li>Choose ability feature(s) (1 by default)</li>
        <li>Save & view new character</li>
      </ol>
    </Wrapper>
  </Layout>
)

export default IndexPage
