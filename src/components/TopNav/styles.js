// Node modules.
import styled from "styled-components"
// Relative imports.
import menuShadowLeft from "../../../static/images/menu-shadow-left.png"
import menuShadowLeftMobile from "../../../static/images/menu-shadow-left-mobile.png"
import menuShadowRight from "../../../static/images/menu-shadow-right.png"
import menuShadowRightMobile from "../../../static/images/menu-shadow-right-mobile.png"

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: 15px 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

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

    h1 {
      color: #fbcea0;
      font-weight: 300;
      text-transform: uppercase;
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

  .shadows {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    z-index: -1;

    .overlay {
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.8) 30%,
        transparent
      );
      height: 100px;
      left: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      transition: opacity 1s ease;
      width: 100%;

      &.visible {
        opacity: 1;
      }
    }

    .shadow {
      background-size: contain;
      pointer-events: none;
      position: absolute;
      top: 0;

      &.right {
        background-image: url("${menuShadowRightMobile}");
        background-position: 0 0;
        height: 215px;
        right: 0;
        width: 305px;

        @media (min-width: 970px) {
          background-image: url("${menuShadowRight}");
          background-position: 0 0;
          background-size: cover;
          height: 126px;
          width: 431px;
        }
      }

      &.left {
        background-image: url("${menuShadowLeftMobile}");
        background-position: 0 0;
        height: 215px;
        left: 0;
        width: 305px;

        @media (min-width: 970px) {
          background-image: url("${menuShadowLeft}");
          background-position: 0 0;
          background-size: cover;
          height: 126px;
          width: 431px;
        }
      }
    }
  }
`

export const NavItems = styled.ul`
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  display: none;
  flex-direction: column;
  margin: 0;
  max-height: calc(100vh - 60px);
  min-height: calc(100vh - 60px);
  overflow-x: none;
  overflow-y: auto;
  position: fixed;
  padding: 0 0 10px;
  top: 70px;
  width: 100%;
  z-index: 2;

  &.expanded {
    display: flex;
  }

  li {
    margin: 0;
    padding: 15px 20px;
    width: 100%;
  }

  a {
    border-bottom: 1px solid #484848;
    color: #ffffff;
    font-size: 1.5rem;
    text-transform: uppercase;
    width: 100%;

    &.active {
      color: #fbcea0;
      text-decoration: underline;
    }

    &:last-of-type {
      border-bottom: none;
      margin-bottom: 150px;
    }
  }
`
