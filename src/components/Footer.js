// Node modules.
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Wrapper = styled.footer`
  align-items: center;
  background: #ebebeb;
  display: flex;
  flex-direction: column;
  font-size: 0.6rem;
  padding: 10px 20px;

  a {
    color: #33a1b6;
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <p>
        Copyright © {new Date().getFullYear()} | Built with ❤️ by{" "}
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
