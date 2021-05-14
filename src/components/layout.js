// Node modules.
import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// Relative imports.
import fog from "../../static/videos/fog.mp4"
import smokeImage from "../../static/images/smoke.jpeg"
import Footer from "./Footer"
import TopNav from "./TopNav"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <TopNav siteTitle={data?.site?.siteMetadata?.title} />
      <main>{children}</main>
      <Footer />
      {window.location.pathname !== "/" && (
        <video
          autoPlay
          className="smoke-animation"
          loop="loop"
          muted="muted"
          type="video/mp4"
        >
          <source src={fog} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div
        className="smoke-background"
        style={{ backgroundImage: `url('${smokeImage}')` }}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
