// Node modules.
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
// Relative imports.
import Close from "../icons/Close"
import ExternalLink from "../icons/ExternalLink"
import { Wrapper } from "./styles"

const isBrowser = typeof window !== "undefined"

const Guide = () => {
  // Derive showGuide state.
  const defaultShowGuide =
    isBrowser && sessionStorage.getItem("showGuide") !== "false"
  const [showGuide, setShowGuide] = useState(defaultShowGuide)

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
            showDefaultGuide
          }
        }
      }
    }
  `)
  const navItems = queryResult?.site?.siteMetadata?.navItems

  // Derive the current nav item.
  const path = isBrowser ? window.location.pathname : ""
  const currentNavItem = navItems?.find(navItem => path?.includes(navItem.link))

  const onClose = () => {
    setShowGuide(false)
    if (isBrowser) {
      sessionStorage.setItem("showGuide", false)
    }
  }

  // Hide guide if we should not show it.
  if (!showGuide || !currentNavItem) {
    return null
  }

  // Default guide.
  if (currentNavItem?.showDefaultGuide) {
    return (
      <Wrapper>
        <button className="close" onClick={onClose} type="button">
          <Close />
        </button>
        <p>Ready to start building a character?</p>
        <a href="/races">
          Choose a race
          <ExternalLink />
        </a>
      </Wrapper>
    )
  }

  // If we recognize the page, use the nav item's instructions.
  return (
    <Wrapper>
      {/* Close button */}
      <button className="close" onClick={onClose} type="button">
        <Close />
      </button>

      {/* Instructions */}
      <p>{currentNavItem?.instructions}</p>

      {/* Instruction links */}
      {currentNavItem?.instructionsLinks?.map(instructionLink => (
        <a key={instructionLink?.link} href={`${instructionLink?.link}`}>
          {instructionLink?.label}
          <ExternalLink />
        </a>
      ))}
    </Wrapper>
  )
}

export default Guide
