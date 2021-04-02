// Node modules.
import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import map from "lodash/map"
// Relative imports.
import Burger from "../icons/Burger"
import logo from "../../images/logo.svg"
import { Header, NavItems } from "./styles"

const TopNav = ({ siteTitle }) => {
  const [showNavItems, setShowNavItems] = useState(false)

  const queryResult = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          navItems {
            label
            link
          }
        }
      }
    }
  `)

  return (
    <>
      {/* Main Nav */}
      <Header>
        {/* Logo */}
        <Link to="/">
          <img alt="logo" src={logo} />
        </Link>

        {/* Title */}
        <Link to="/">
          <h1>{siteTitle}</h1>
        </Link>

        {/* Burger */}
        <button
          className={showNavItems ? "expanded" : ""}
          onClick={() => setShowNavItems(!showNavItems)}
          type="button"
        >
          <Burger highlighted={showNavItems} />
        </button>
      </Header>

      {/* Nav Items */}
      <NavItems className={showNavItems ? "expanded" : ""}>
        {map(queryResult?.site?.siteMetadata?.navItems, navItem => (
          <Link
            className={
              navItem?.link === window.location.pathname ? "active" : ""
            }
            key={navItem?.link}
            to={navItem?.link}
          >
            <li>{navItem?.label}</li>
          </Link>
        ))}
      </NavItems>
    </>
  )
}

TopNav.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default TopNav
