// Node modules.
import styled from "styled-components"

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 700px;

  ul {
    align-items: flex-start;
    background: #000000;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    flex-flow: column;
    margin: 20px 0 10px;
    padding: 0 20px 10px;
    width: 100%;

    li {
      align-items: flex-start;
      background: transparent;
      box-shadow: none;
      margin: 10px 0 0;
      padding: 0 20px;
      text-align: left;
      width: 100%;

      button {
        background: none;
        border: none;
        color: #fbcea0;
        cursor: pointer;
        outline: none;
        text-align: left;
        text-decoration: none;
        text-indent: -5px;
        width: 100%;
      }
    }
  }

  .toggle-toc {
    background: none;
    color: #fbcea0;
    cursor: pointer;
    font-size: 1rem;
    margin: 10px 0 0;
    outline: none;
    text-decoration: none;
  }
`
