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

export const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 90px 0 0;
  text-align: center;

  h2 {
    text-align: center;
    width: 100%;

    &.category {
      border-top: 3px solid #999999;
      border-bottom: 3px solid #999999;
      color: #999999;
      padding: 10px 20px;
      margin: 20px 0 10px;
    }
  }

  ul {
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
  }

  li {
    align-items: center;
    background: #ffffff;
    box-shadow: 0 4px 8px 0 rgb(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    margin: 0 20px 20px;
    width: 100%;

    * {
      animation: ${fadeIn} 0.5s;
    }

    &:nth-of-type(even) {
      h3 {
        background: rgba(164, 0, 255, 0.8);
      }
    }

    header {
      align-items: center;
      display: flex;
      flex-direction: column;
      position: relative;
      outline: none;
      width: 100%;
      min-height: 60px;

      &.no-background-image {
        flex-direction: row;
        justify-content: space-between;
        padding: 5px 20px 5px 0;

        h3 {
          background: #ffffff;
          color: #8471ff;
          position: initial;
          font-size: 1.5rem;
        }

        .chevron {
          height: 25px;
          position: initial;

          path {
            fill: #8471ff;
          }
        }
      }

      img {
        width: 100%;
      }

      h3 {
        align-items: center;
        background: rgba(81, 43, 252, 0.8);
        bottom: 0;
        color: #ffffff;
        display: flex;
        font-size: 2.5rem;
        justify-content: space-between;
        line-height: 40px;
        padding: 10px 20px;
        position: absolute;
        text-align: left;
        width: 100%;
      }

      .chevron {
        flex-shrink: 0;
        height: 35px;
        margin-left: 20px;
        transition: transform 0.5s ease;
        position: absolute;
        bottom: 10px;
        right: 20px;

        path {
          fill: #ffffff;
        }

        &.expanded {
          transform: rotate(180deg);
        }
      }
    }

    h4 {
      margin: 20px 0 0;
    }

    .fields {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      padding: 10px 10px 10px;

      &.column {
        flex-direction: column;
      }
    }

    .field-group {
      display: flex;
      flex-direction: column;
      margin: 10px;

      h4 {
        margin: 10px 0 20px;
      }

      .label {
        color: #999999;
        font-size: 0.7rem;
        margin: 0;
      }

      .value {
        color: #444444;
        font-size: 1.2rem;
        margin: 0;
        white-space: pre-line;
      }
    }

    .collapsibles {
      align-items: center;
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      width: 100%;

      header {
        margin: 0 0 20px;
      }

      .disclaimer {
        color: #999999;
        font-size: 0.7rem;
        margin: 0;
      }

      .collapsible {
        text-align: center;
        white-space: pre-line;
        width: 100%;

        h5 {
          color: #512bfccc;
          font-size: 1.5rem;
          text-align: center;
        }

        .requirements {
          font-size: 0.7rem;
          margin: 0;
        }
      }

      &:nth-of-type(even) {
        h5 {
          color: #831fbbcc;
        }
      }

      &:last-of-type {
        margin-bottom: 20px;
      }
    }
  }

  .filters {
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    padding: 0 20px;
    margin: 10px 0 0;

    .filter-button {
      background: #ffffff;
      border-radius: 5px;
      border: 1px solid #999999;
      box-shadow: 0 1px 1px 0 rgb(0, 0, 0, 0.4);
      color: #999999;
      margin: 5px;
      padding: 10px 15px;
      font-size: 0.9rem;

      &.active-button {
        background: #6d56ff;
        border: 1px solid transparent;
        color: #ffffff;
      }
    }
  }
`
