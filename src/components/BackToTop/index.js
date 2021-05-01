// Node modules.
import React, { Component } from "react"
// Relative imports.
import Chevron from "../icons/Chevron"
import { DesktopWrapper, Wrapper } from "./styles"

const MIN_VIEWPORT_WIDTH = 870
const SCROLL_BREAKPOINT = 600

const isBrowser = typeof window !== "undefined"

class BackToTop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      // Put window.innerWidth in state, otherwise component won't re-render on viewport width change.
      viewportWidth: isBrowser ? window.innerWidth : 360,
    }
  }

  componentDidMount() {
    document.addEventListener("scroll", this.onScroll)
    window.addEventListener("resize", this.onResize)
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.onScroll)
    window.removeEventListener("resize", this.onResize)
  }

  recalculateShow = () => {
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

  onResize = () => {
    this.recalculateShow()
    this.setState({ viewportWidth: window.innerWidth })
  }

  onScroll = event => {
    this.recalculateShow()
  }

  render() {
    const { show, viewportWidth } = this.state

    // Do not render if we shouldn't show it.
    if (!this.state.show) {
      return null
    }

    // Show desktop version if viewport is large enough.
    if (viewportWidth > MIN_VIEWPORT_WIDTH) {
      return (
        <DesktopWrapper
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          type="button"
        >
          Back to top
          <Chevron />
        </DesktopWrapper>
      )
    }

    // Show mobile version.
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
