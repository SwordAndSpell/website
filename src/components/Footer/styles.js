// Node modules.
import styled from "styled-components"
// Relative imports.
import dividerLine from "../../../static/images/divider-line.svg"
import dividerLeft from "../../../static/images/divider-left.svg"
import dividerRight from "../../../static/images/divider-right.svg"
import footerImage from "../../../static/images/footer.jpeg"

export const Wrapper = styled.footer`
  background: #000000;
  display: flex;
  justify-content: space-around;
  padding: 0 20px 20px;
  position: relative;
  text-align: center;

  @media (min-width: 970px) {
    min-height: 400px;
  }

  &:before {
    background: rgba(0, 0, 0, 0.6);
    bottom: 0;
    content: "";
    height: 100%;
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    width: 100%;
    z-index: 1;
  }

  .divider {
    background-image: url("${dividerLine}");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 7px;
    position: absolute;
    top: -7px;
    left: calc(10%);
    width: 80%;

    &:before,
    &:after {
      bottom: 0;
      content: "";
      height: 7px;
      position: absolute;
      width: 30px;
    }

    &:before {
      right: 100%;
      background-image: url("${dividerLeft}");
    }

    &:after {
      left: 100%;
      background-image: url("${dividerRight}");
    }
  }

  .background {
    background-image: url("${footerImage}");
    background-position: 10% 0;
    background-size: cover;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  a {
    color: #fbcea0;
  }

  h2 {
    color: #fbcea0;
    font-size: 1.2rem;
    font-weight: 400;
    margin: 0 0 10px;
    text-align: center;
    width: 100%;
  }

  section {
    padding: 20px;
    z-index: 1;

    ul {
      align-items: center;
      display: flex;
      justify-content: center;
      margin: 0;
      width: 100%;

      img {
        margin-right: 20px;
        width: 25px;
      }
    }

    p {
      text-align: left;
    }
  }
`
