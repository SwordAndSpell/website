// Node modules.
import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
// Relative imports.
import characterSheet from "../../../static/files/character-sheet.pdf"
import Burger from "../icons/Burger"
import { Header, NavItems } from "./styles"

const isBrowser = typeof window !== "undefined"

const TopNav = ({ siteTitle }) => {
  const [showNavItems, setShowNavItems] = useState(false)

  // Derive the nav items from the graphql query.
  const queryResult = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          navItems {
            label
            link
            instructions
            instructionsLinks {
              label
              link
            }
          }
        }
      }
    }
  `)
  const navItems = queryResult?.site?.siteMetadata?.navItems

  return (
    <>
      {/* Main Nav */}
      <Header className={showNavItems ? "expanded" : ""}>
        {/* Logo */}
        <Link to="/">
          <h1>{siteTitle}</h1>
        </Link>

        {/* Burger */}
        <button
          aria-label="burger icon for navigation"
          className={showNavItems ? "expanded" : ""}
          onClick={() => setShowNavItems(!showNavItems)}
          type="button"
        >
          <Burger highlighted={showNavItems} />
        </button>

        <div className="shadows">
          <div className="overlay" />
          <div className="shadow right" />
          <div className="shadow left" />
        </div>
      </Header>

      {/* Nav Items */}
      <NavItems className={showNavItems ? "expanded" : ""}>
        {navItems?.map(navItem => (
          <Link
            className={
              isBrowser && navItem?.link === window.location.pathname
                ? "active"
                : ""
            }
            key={navItem?.link}
            to={navItem?.link}
            onClick={() => setShowNavItems(false)}
          >
            <li>{navItem?.label}</li>
          </Link>
        ))}
        <a download href={characterSheet}>
          <li>Download Character Sheet (PDF)</li>
        </a>
      </NavItems>
    </>
  )
}

TopNav.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default TopNav
