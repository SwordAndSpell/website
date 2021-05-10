// Node modules.
import React, { Component } from "react"
import PropTypes from "prop-types"
// Relative imports.
import { Wrapper } from "./styles"

const isBrowser = typeof window !== "undefined"
const RECALCULATE_TREE_INTERVAL_MS = 2000

class TableOfContents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: this.deriveItems(),
      showTOC: false,
    }
  }

  componentDidMount() {
    this.checkTreeInterval = setInterval(() => {
      this.setState({ items: this.deriveItems() })
    }, RECALCULATE_TREE_INTERVAL_MS)
  }

  componentWillUnmount() {
    clearInterval(this.checkTreeInterval)
  }

  deriveItems = () => {
    const { includedHeaders } = this.props

    let items = []

    // Do not render this server-side.
    if (isBrowser) {
      // Get all of the headers with IDs.
      items = [
        ...document.querySelectorAll(includedHeaders?.join(", ")),
      ]?.filter(element => !!element?.id)

      // Derive the header with the greatest depth (e.g. with headers h1, h2, and h3, h1 is considered highest depth).
      const highestDepth = items?.reduce((highestDepth, item) => {
        const depth = parseInt(item?.tagName?.replace("H", ""), 10)

        if (typeof highestDepth === "undefined") {
          return depth
        }

        if (highestDepth > depth) {
          highestDepth = depth
          return highestDepth
        }

        return highestDepth
      }, undefined)

      // Get all relevant meta data for each header element and put them in an array.
      items = items?.map(element => ({
        depth: parseInt(element?.tagName?.replace("H", ""), 10) - highestDepth,
        element: element,
        id: element?.id,
        label: element?.innerText,
      }))
    }

    return items
  }

  onJumpLinkClick = element => event => {
    event.preventDefault()

    // Escape early if there's no element.
    if (!element) {
      return
    }

    // Smooth scroll to element.
    element.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  onTOCToggleClick = event => {
    event.preventDefault()

    const { showTOC } = this.state

    // Scroll to top when closing.
    if (showTOC) {
      window.scroll(0, 0)
    }

    // Toggle show TOC.
    this.setState({ showTOC: !showTOC })
  }

  render() {
    const { onJumpLinkClick, onTOCToggleClick } = this
    const { items, showTOC } = this.state

    return (
      <Wrapper>
        {/* TOC Toggle */}
        <button className="toggle-toc" onClick={onTOCToggleClick} type="button">
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
                  <button
                    onClick={onJumpLinkClick(item?.element)}
                    type="button"
                  >
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
            onClick={onTOCToggleClick}
            type="button"
          >
            {showTOC ? "Hide" : "Show"} table of contents
          </button>
        )}
      </Wrapper>
    )
  }
}

TableOfContents.defaultProps = {
  includedHeaders: ["h2", "h3"],
}

TableOfContents.propTypes = {
  includedHeaders: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default TableOfContents
