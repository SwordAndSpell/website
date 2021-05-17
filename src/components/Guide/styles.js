// Node modules.
import styled from "styled-components"

export const Wrapper = styled.section`
  background: #000000;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0) 0%,
    rgba(20, 20, 20) 100%
  );
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: #ffffff;
  font-size: 1rem;
  padding: 25px 20px 20px 30px;
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 0;
  top: calc(50% - 100px);
  text-align: left;
  max-width: 500px;
  z-index: 2;

  @media (max-width: 900px) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 0;
    border-top-right-radius: 5px;
    bottom: 20px;
    left: 0;
    max-width: calc(100% - 70px);
    padding: 25px 30px 20px 20px;
    right: unset;
    top: unset;
  }

  .show-guide {
    color: #fbcea0;
    cursor: pointer;
    text-align: left;
    text-decoration: none;
  }

  p {
    margin: 0;
  }

  .close {
    background: transparent;
    color: #ffffff;
    cursor: pointer;
    height: 20px;
    max-height: 20px;
    max-width: 20px;
    left: 5px;
    position: absolute;
    padding: 5px;
    top: 0;
    width: 20px;

    @media (max-width: 900px) {
      left: unset;
      right: 5px;
    }

    path {
      fill: #ffffff;
    }
  }
`
