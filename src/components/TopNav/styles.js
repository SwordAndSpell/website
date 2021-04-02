// Node modules.
import styled from "styled-components"

export const Header = styled.header`
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid #d5d5d5;
  display: flex;
  justify-content: center;
  padding: 15px 20px;
  position: fixed;
  top: 0;
  left: 0;
  transition: box-shadow 0.2s ease, border-bottom 0.2s ease;
  width: 100%;
  z-index: 1;

  &:hover {
    border-bottom: 1px solid transparent;
    box-shadow: 0px 3px 7px -5px #000000;
  }

  @media (max-width: 600px) {
    justify-content: space-between;

    img {
      height: 20px;
    }

    h1 {
      font-size: 1.6rem;
    }
  }

  a {
    align-items: center;
    color: inherit;
    display: flex;
    margin-right: 20px;

    img {
      height: 40px;
    }

    h1 {
      color: #686868;
      font-weight: 300;
    }
  }

  button {
    border: none;
    background: transparent;
    outline: none;
    height: 40px;

    .burger {
      height: 40px;
      width: 40px;
      outline: none;
    }
  }
`

export const NavItems = styled.ul`
  align-items: center;
  background: #8471ff;
  display: none;
  flex-direction: column;
  margin: 0;
  max-height: calc(100vh - 60px);
  min-height: calc(100vh - 60px);
  overflow-x: none;
  overflow-y: auto;
  position: fixed;
  top: 70px;
  width: 100%;
  z-index: 1;

  &.expanded {
    display: flex;
  }

  li {
    margin: 0;
    padding: 20px;
    width: 100%;

    &:last-of-type {
      border-bottom: none;
    }
  }

  a {
    border-bottom: 1px solid #ffffff;
    color: #ffffff;
    font-size: 1.2rem;
    width: 100%;
  }
`
