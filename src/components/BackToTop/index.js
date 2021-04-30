// Node modules.
import React, { Component } from "react"
// Relative imports.
import Chevron from "../icons/Chevron"
import { Wrapper } from "./styles"

const SCROLL_BREAKPOINT = 600

class BackToTop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }

  componentDidMount() {
    document.addEventListener("scroll", this.onScroll)
  }

  onScroll = event => {
    const { show } = this.state

    // Derive if we scrolled down past the breakpoint.
    const isPastYBreakpoint = window.scrollY > SCROLL_BREAKPOINT

    // If we are past the Y breakpoint and we are not already showing BackToTop, show it.
    if (!show && isPastYBreakpoint) {
      this.setState({ show: true })
    }

    // If we are above the Y breakpoint and we are showing BackToTop, hide it.
    if (show && !isPastYBreakpoint) {
      this.setState({ show: false })
    }
  }

  render() {
    return (
      <Wrapper
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        type="button"
      >
        <Chevron />
      </Wrapper>
    )
  }
}

export default BackToTop
