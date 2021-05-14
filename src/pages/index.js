// Node modules.
import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
// Relative imports.
import flameVideo from "../../static/videos/flame.mp4"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;

  video {
    position: absolute;
    z-index: -1;
  }

  h1 {
    /* Make sure background stays at the top here. */
    background: radial-gradient(
      circle at 50% 50%,
      #fff 0,
      #fbcea0 66%,
      #fbcea0 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: #fbcea0;
    font-size: 2.5rem;
    margin: 50vh 0 0;
    text-align: center;
    text-transform: uppercase;
  }

  a {
    background-size: contain;
    background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.9),
      rgba(53, 53, 53, 0.7)
    );
    border-radius: 5px;
    border: 2px solid #1b1705;
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 10px 20px 5px;
    text-transform: uppercase;
    transition: border 1s ease;

    &:hover {
      border: 2px solid #52450b;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Wrapper>
      <video
        autoPlay
        loop="loop"
        muted="muted"
        poster="/video-still-4.jpg"
        type="video/mp4"
      >
        <source src={flameVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1>Embark on your journey</h1>
      <Link to="/races">Choose your race</Link>
    </Wrapper>
  </Layout>
)

export default IndexPage
