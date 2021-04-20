// Node modules.
import styled from "styled-components"

export const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;

  .toc {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 0 10px;
    padding: 0 20px;
    width: 100%;

    li {
      align-items: flex-start;
      background: transparent;
      box-shadow: none;
      margin: 10px 0 0;
      padding: 0 20px;
      text-align: left;

      button {
        background: none;
        border: none;
        color: #24c9fc;
        cursor: pointer;
        outline: none;
        text-align: left;
        text-decoration: none;
        text-indent: -5px;
      }
    }
  }

  .toggle-toc {
    background: none;
    color: #24c9fc;
    cursor: pointer;
    font-size: 1rem;
    margin: 10px 0 0;
    outline: none;
    text-decoration: none;
  }
`
