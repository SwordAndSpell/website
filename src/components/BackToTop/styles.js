// Node modules.
import styled from "styled-components"

export const Wrapper = styled.button`
  background: rgba(81, 43, 252, 0.8);
  bottom: 20px;
  color: #ffffff;
  height: 50px;
  padding: 10px;
  position: fixed;
  right: 0;
  width: 50px;
  z-index: 1;

  svg {
    height: 30px;
    width: 30px;
    transform: rotate(180deg);
  }

  path {
    fill: #ffffff;
  }
`
