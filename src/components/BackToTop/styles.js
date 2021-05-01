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
  background: linear-gradient(to right, #3e4346 0%, #596164 100%);
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  bottom: 20px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 40%);
  color: #ffffff;
  display: flex;
  height: 50px;
  justify-content: center;
  padding: 10px;
  position: fixed;
  right: 0;
  width: 60px;
  z-index: 1;

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
