// Node modules.
import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Wrapper = styled.button`
  align-items: center;
  animation: ${fadeIn} 0.5s;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0) 0%,
    rgba(20, 20, 20) 100%
  );
  border-radius: 5px;
  border: 3px solid #271b1b;
  bottom: 20px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 40%);
  color: #ffffff;
  display: flex;
  height: 50px;
  justify-content: center;
  padding: 10px;
  position: fixed;
  right: 0;
  text-transform: uppercase;
  transition: border 1s ease;
  width: 60px;
  z-index: 2;

  &:hover {
    border: 3px solid #4a3232;
  }

  svg {
    height: 25px;
    width: 25px;
    transform: rotate(180deg);
  }

  path {
    fill: #ffffff;
  }
`

export const DesktopWrapper = styled(Wrapper)`
  border-radius: 4px;
  padding: 20px;
  right: unset;
  width: unset;

  svg {
    height: 15px;
    margin-left: 7px;
    width: 15px;
  }
`
