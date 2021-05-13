// Node modules.
import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
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

  a {
    color: #33a1b6;
  }
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Wrapper>
      <h2>How to create a character</h2>
      <ul>
        <li>
          <Link to="/races">Choose race</Link>
        </li>
        <li>
          Gain ability boosts + penalty (option to take additional penalty +
          boost)
        </li>
        <li>Gain core stats</li>
        <li>Choose subrace</li>
        <li>Gain/choose abilities/stats</li>
        <li>Choose +/-3 perks</li>
        <li>Modify abilities/stats/</li>
        <li>
          <Link to="/backgrounds">Choose background</Link>
        </li>
        <li>Modify ability scores</li>
        <li>
          Gain trained skill (*If already trained, gain skill of your choice)
        </li>
        <li>Gain lore advantage</li>
        <li>
          <Link to="/core-identities">Choose core identity</Link>
        </li>
        <li>Gain health</li>
        <li>
          Choose proficiencies (*If already trained, gain skill of your choice)
        </li>
        <li>
          Choose <Link to="/armor">armor</Link> and{" "}
          <Link to="/weapons">weapons</Link>
        </li>
        <li>Gain abilities</li>
        <li>
          (Optional) <Link to="/spells">Choose spells</Link>{" "}
          <em>if you are a spell caster</em>
        </li>
        <li>
          <Link to="/identity-features">Choose identity feature(s)</Link> (1 by
          default)
        </li>
        <li>Identify edge cases that modify abilities/stats</li>
        <li>
          <Link to="/ability-features">Choose ability feature(s)</Link> (1 by
          default)
        </li>
        <li>Save & view new character</li>
      </ul>
    </Wrapper>
  </Layout>
)

export default IndexPage
