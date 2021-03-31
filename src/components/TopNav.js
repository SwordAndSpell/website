// Node modules.
import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
// Relative imports.
import logo from "../images/logo.svg"

const Header = styled.header`
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 3px 15px -5px #000000;
  display: flex;
  padding: 10px 20px;
  justify-content: center;

  a {
    align-items: center;
    display: flex;

    img {
      height: 40px;
    }

    h1 {
      font-weight: 300;
      margin: 0 0 0 20px;
    }
  }
`

const TopNav = ({ siteTitle }) => (
  <Header>
    <Link to="/">
      <img alt="logo" src={logo} />
      <h1>{siteTitle}</h1>
    </Link>
  </Header>
)

TopNav.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default TopNav
