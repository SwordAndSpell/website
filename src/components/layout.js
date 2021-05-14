// Node modules.
import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// Relative imports.
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
      <div
        className="smoke"
        style={{ backgroundImage: `url('${smokeImage}')` }}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
