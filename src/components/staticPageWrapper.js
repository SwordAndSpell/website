// Node modules.
import styled from "styled-components"

export const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 90px 0 0px;
  padding: 0 0 20px;
  text-align: center;

  .card {
    width: 100%;
    box-shadow: 0 4px 8px 0 rgb(0, 0, 0, 0.4);
    margin: 20px 10px;
    max-width: 400px;
  }

  h2 {
    text-align: center;
    width: 100%;
    background: #ffffff;
    color: #8471ff;
    position: initial;
    font-size: 1.5rem;
    width: 100%;
    padding: 15px;
  }
  h3,
  h4 {
    color: #8471ff;
    width: 100%;
    padding: 10px;
  }
  h4 {
    margin: 5px 0;
  }
  h5 {
    text-align: left;
    padding: 5px 15px;
    font-size: 0.9rem;
    margin: 0 10px;
    border-bottom: 2px solid #8471ff;
  }

  p {
    margin: 5px 15px;
  }

  ul {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 10px;
    margin: 5px 0;
  }

  li {
    text-align: left;
    width: 100%;

    &:last-of-type {
      margin-bottom: 15px;
    }
  }

  .requirement {
    margin: 3px 0 0;
    font-size: 0.75rem;
    font-weight: bold;
  }

  .hover {
    &:hover {
      border-bottom: 1px solid transparent;
      box-shadow: 0px 3px 7px -5px #000000;
      cursor: pointer;
    }
  }

  .wide-stats {
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .label {
      font-weight: bold;
      margin-bottom: 0;
    }

    .value {
      margin-top: 5px;
    }
  }
`
