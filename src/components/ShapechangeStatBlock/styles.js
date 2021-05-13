// Node modules.
import styled from "styled-components"

export const Wrapper = styled.div`
  align-items: center;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  width: 100%;

  h2 {
    background: #ffffff;
    color: #8471ff;
    position: initial;
    font-size: 1.5rem;
  }

  h3,
  .heading {
    margin-bottom: 5px;
    background: #ffffff !important;
  }

  span,
  div {
    width: 100%;
    text-align: left;
    white-space: pre-line;
  }

  .type {
    font-size: 0.9rem;
  }

  .name {
    padding: 15px;
    &:hover {
      border-bottom: 1px solid transparent;
      box-shadow: 0px 3px 7px -5px #000000;
      cursor: pointer;
    }
  }

  .body {
    padding: 0 15px;
  }
  .skill-row {
    margin: 2px 0;
  }

  .vitals {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;

    .vital-data {
      width: 100%;
      text-align: left;
      margin: 2px;
    }
  }

  .stats {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    .label {
      font-weight: bold;
      text-align: center;
    }

    .value {
      text-align: center;
    }

    .stat {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 30%;
    }
  }
  .saves {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  .ability {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .ability-name {
      width: 100%;
      text-align: left;
      font-weight: bold;
    }
    .ability-description {
      width: 100%;
      text-align: left;
      margin-bottom: 10px;
    }
  }

  .action {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .action-name {
      width: 100%;
      text-align: left;
      font-weight: bold;
    }
    .action-description {
      width: 100%;
      text-align: left;
      margin-bottom: 10px;
    }
  }

  .barrier {
    width: 100%;
    height: 2px;
    background: #8471ff;
    margin: 7px 0;
  }
`
