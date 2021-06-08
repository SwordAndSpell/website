// Node modules.
import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// Relative imports.
import fog from "../../static/videos/fog.mp4"
import smokeImage from "../../static/images/smoke.jpeg"
import Footer from "./Footer"
import Guide from "./Guide"
import TopNav from "./TopNav"
import "./layout.css"

const isBrowser = typeof window !== "undefined"

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

  const isHomepage = isBrowser && window.location.pathname === "/"

  return (
    <>
      {!isHomepage && <Guide />}
      <TopNav siteTitle={data?.site?.siteMetadata?.title} />
      <main>{children}</main>
      <Footer />
      <video
        autoPlay
        className="smoke-animation"
        loop
        muted
        playsInline
        type="video/mp4"
      >
        <source src={fog} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
