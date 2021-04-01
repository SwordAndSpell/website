// Node modules.
import React from "react"
// Relative imports.
import { Wrapper } from "./styles"

const Footer = () => {
  return (
    <Wrapper>
      <p>
        Copyright © {new Date().getFullYear()}
        <br />
        Built with ❤️ by{" "}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/srsuddath"
        >
          SolonTheWizard
        </a>{" "}
        and{" "}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/kelsonic"
        >
          kelsonic
        </a>
        .
      </p>
    </Wrapper>
  )
}

export default Footer
