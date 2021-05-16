// Node modules.
import * as React from "react"
import { Link } from "gatsby"
// Relative imports.
import flameVideo from "../../static/videos/flame.mp4"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="homepage">
      <video autoPlay loop muted playsInline type="video/mp4">
        <source src={flameVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1>Embark on your journey</h1>
      <Link to="/races">Choose your race</Link>
    </section>
  </Layout>
)

export default IndexPage
