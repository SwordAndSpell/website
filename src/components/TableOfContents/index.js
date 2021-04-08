// Node modules.
import React, { useState } from "react"
import PropTypes from "prop-types"
// Relative imports.
import { Wrapper } from "./styles"

const isBrowser = typeof window !== "undefined"

const onJumpLinkClick = element => event => {
  event.preventDefault()

  // Escape early if there's no element.
  if (!element) {
    return
  }

  // Smooth scroll to element.
  element.scrollIntoView({ behavior: "smooth", block: "center" })
}

const onTOCToggleClick = (showTOC, setShowTOC) => event => {
  event.preventDefault()

  // Scroll to top when closing.
  if (showTOC) {
    window.scroll(0, 0)
  }

  // Toggle show TOC.
  setShowTOC(!showTOC)
}

const TableOfContents = ({ includedHeaders }) => {
  // Derive show table of contents state.
  const [showTOC, setShowTOC] = useState(false)

  let items = []

  // Do not render this server-side.
  if (isBrowser) {
    items = [...document.querySelectorAll(includedHeaders?.join(", "))]
      ?.filter(element => !!element?.id)
      ?.map(element => ({
        depth: parseInt(element?.tagName?.replace("H", ""), 10) - 2,
        element: element,
        id: element?.id,
        label: element?.innerText,
      }))
  }

  // Do not render if there are no items.
  if (!items?.length) {
    return null
  }

  return (
    <Wrapper>
      {/* TOC Toggle */}
      <button
        className="toggle-toc"
        onClick={onTOCToggleClick(showTOC, setShowTOC)}
        type="button"
      >
        {showTOC ? "Hide" : "Show"} table of contents
      </button>

      {/* TOC List */}
      {showTOC && (
        <ul className="toc">
          {items?.map(item => {
            // Skip rendering item if there's no ID on the jump link.
            if (!item?.id) {
              return null
            }

            return (
              <li
                key={item?.id}
                style={{
                  fontSize: item?.depth ? "0.8rem" : "1rem",
                  marginTop: item?.depth ? "2px" : "10px",
                  paddingLeft: `${item?.depth * 15}px`,
                }}
              >
                <button onClick={onJumpLinkClick(item?.element)} type="button">
                  {item?.label}
                </button>
              </li>
            )
          })}
        </ul>
      )}

      {/* TOC Toggle */}
      {showTOC && items?.length > 30 && (
        <button
          className="toggle-toc"
          onClick={onTOCToggleClick(showTOC, setShowTOC)}
          type="button"
        >
          {showTOC ? "Hide" : "Show"} table of contents
        </button>
      )}
    </Wrapper>
  )
}

TableOfContents.defaultProps = {
  includedHeaders: ["h2", "h3"],
}

TableOfContents.propTypes = {
  includedHeaders: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default TableOfContents
