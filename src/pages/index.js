// Node modules.
import * as React from "react"
import styled from "styled-components"
// Relative imports.
import Layout from "../components/layout"
import SEO from "../components/seo"

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
    <SEO title="Home" />
    <Wrapper>
      <h2>Welcome to the wiki</h2>
    </Wrapper>
  </Layout>
)

export default IndexPage
