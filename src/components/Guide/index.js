// Node modules.
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import isEmpty from "lodash/isEmpty"
// Relative imports.
import CloseIcon from "../icons/Close"
import { Wrapper } from "./styles"

const isBrowser = typeof window !== "undefined"

const Guide = () => {
  // Derive showGuide state.
  const queryParams = new URLSearchParams(
    isBrowser ? window.location.search : ""
  )
  const [showGuide, setShowGuide] = useState(
    queryParams.get("showGuide") === "true"
  )

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

  // Derive the current nav item.
  const path = isBrowser ? window.location.pathname : ""
  const currentNavItem = navItems?.find(navItem => path?.includes(navItem.link))

  // Hide guide if we should not show it.
  if (!showGuide) {
    return null
  }

  // If we recognize the page, use the nav item's instructions.
  if (currentNavItem) {
    return (
      <Wrapper>
        {/* Close button */}
        <button
          className="close"
          onClick={() => setShowGuide(false)}
          type="button"
        >
          <CloseIcon />
        </button>

        {/* Instructions */}
        <p>
          {currentNavItem?.instructions || "Ready to create your character?"}
        </p>

        {/* Default instruction link */}
        {isEmpty(currentNavItem?.instructionsLinks) && (
          <a href="/races?showGuide=true">Choose a race</a>
        )}

        {/* Instruction links */}
        {currentNavItem?.instructionsLinks?.map(instructionLink => (
          <a
            key={instructionLink?.link}
            href={`${instructionLink?.link}?showGuide=true`}
          >
            {instructionLink?.label}
          </a>
        ))}
      </Wrapper>
    )
  }

  // Default guide.
  return (
    <Wrapper>
      <button
        className="close"
        onClick={() => setShowGuide(false)}
        type="button"
      >
        <CloseIcon />
      </button>
      <p>Need some help creating a character?</p>
      <a href="/races?showGuide=true">Choose a race</a>
    </Wrapper>
  )
}

export default Guide
