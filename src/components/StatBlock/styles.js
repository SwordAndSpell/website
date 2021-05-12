// Node modules.
import styled from "styled-components"

export const Wrapper = styled.div`
  align-items: center;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 15px;
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

  .vitals {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;

    .vital-data {
      width: 100%;
      text-align: left;
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
    }

    .stat {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
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
