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
  margin: 90px 0 0px;
  padding: 0 0 20px;
  text-align: center;

  h2 {
    text-align: center;
    width: 100%;

    &.category {
      border-top: 1px solid #fbcea0;
      border-bottom: 1px solid #fbcea0;
      color: #fbcea0;
      padding: 10px 20px 5px;
      margin: 20px 0 10px;
    }
  }

  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
  }

  li {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 20px 20px;
    max-width: 400px;
    width: 100%;

    * {
      animation: ${fadeIn} 0.5s;
    }

    &:nth-of-type(even) {
      h3 {
        background: rgba(88, 102, 69, 0.9);
      }
    }

    header {
      align-items: center;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      position: relative;
      outline: none;
      width: 100%;
      min-height: 60px;

      &.no-background-image {
        background: #000000;
        background: linear-gradient(0deg, #151515 0%, #000000 100%);
        flex-direction: row;
        justify-content: space-between;
        padding: 5px 20px 5px 0;

        h3 {
          background: transparent;
          color: #ffffff;
          position: initial;
          font-size: 1.5rem;
        }

        .chevron {
          height: 25px;
          position: initial;

          path {
            fill: #ffffff;
          }
        }
      }

      img {
        width: 100%;
      }

      .header-column {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      .tags {
        justify-content: flex-start;
        margin: 0 0 10px 20px;
        display: flex;
        width: 100%;

        li {
          background: #f1b306;
          border-radius: 3px;
          border: none;
          outline: none;
          color: #ffffff;
          font-size: 0.7rem;
          padding: 3px 5px;
          width: auto;
          margin: 0 10px 0 0;
          box-shadow: none;
        }
      }

      h3 {
        align-items: center;
        background: rgba(14, 88, 105, 0.9);
        bottom: 0;
        color: #ffffff;
        display: flex;
        font-size: 2.5rem;
        justify-content: space-between;
        line-height: 40px;
        padding: 15px 20px 5px;
        position: absolute;
        text-align: left;
        width: 100%;
      }

      .extra-info {
        color: #fbcea0;
        font-size: 0.75rem;
        padding: 0 0 0 20px;
        margin: 0 0 5px;
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

    .content {
      background: linear-gradient(180deg, #151515 0%, #000000 100%);
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      cursor: initial;
      width: 100%;
    }

    h4 {
      color: #ffffff;
      font-size: 1rem;
      font-weight: 700;
      margin: 20px 0 0;
    }

    hr {
      border: none;
      border-bottom: 3px solid #8471ff;
      margin: 20px 0 0;
      width: 100%;
    }

    .fields {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      padding: 0 10px 10px;
      width: 100%;

      &.column {
        flex-direction: column;
      }
    }

    .field-group {
      display: flex;
      flex-direction: column;
      margin: 0 10px 0;

      &.row {
        flex-direction: row;
      }

      h4 {
        color: #fbcea0;
        font-size: 0.8rem;
        margin: 10px 0 5px;
        text-transform: uppercase;
        font-weight: 400;
        text-align: left;
      }

      .label {
        color: #fbcea0;
        font-size: 0.8rem;
        margin: 0;
      }

      .value {
        color: #ffffff;
        font-size: 1rem;
        margin: 0;
        white-space: pre-line;
        text-align: left;
        margin: 10px 10px 5px;
      }
      .spell-label {
        color: #fbcea0;
        font-size: 0.8rem;
        margin: 0;
      }
      .spell-value {
        color: #ffffff;
        font-size: 0.8rem;
        margin: 0;
        white-space: pre-line;
        text-align: left;
        margin: 10px 10px 5px;
      }

      .description {
        font-size: 1rem !important;
      }

      .value-center {
        color: #ffffff;
        font-size: 1rem;
        margin: 0;
        white-space: pre-line;
        text-align: center;
      }
    }

    .fields-background {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      padding: 0 10px 10px;
      width: 100%;

      &.column {
        flex-direction: column;
      }
    }

    .field-group-background {
      display: flex;
      flex-direction: column;
      margin: 10px 10px 0;
      width: 40%;

      h4 {
        margin: 0 0 10px;
        font-size: 1rem;
      }

      .label {
        color: #fbcea0;
        font-size: 0.7rem;
        margin: 0;
      }

      .value {
        color: #bbbbbb;
        font-size: 1rem;
        margin: 0;
        white-space: pre-line;
      }
    }
    .empty-filter {
      margin-bottom: 20px;
      background: none;
    }

    .collapsibles {
      align-items: center;
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      width: 100%;

      header {
        margin: 0;
      }

      .disclaimer {
        color: #fbcea0;
        font-size: 0.7rem;
        margin: 0;
      }

      .collapsible {
        padding: 5px 0;
        text-align: center;
        white-space: pre-line;
        width: 100%;

        h4,
        h5 {
          color: #ffffff;
          font-size: 1.2rem;
          margin: 10px 0 0;
          text-align: left;
        }

        p {
          color: #ffffff;
          margin: 10px 0;
          text-align: left;
        }

        .requirements {
          display: flex;
          flex-direction: column;
          font-size: 0.85rem;
          margin: 10px 0 0;
          text-align: left;

          &:last-of-type {
            margin-bottom: 10px;
          }
        }
      }

      &:last-of-type {
        margin-bottom: 20px;
      }
    }

    .fields-gear {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      padding: 0 10px 10px;
      width: 100%;

      &.column {
        flex-direction: column;
      }
    }

    .field-group-gear {
      display: flex;
      flex-direction: column;
      margin: 10px 10px 0;
      margin-top: 10px;

      h4 {
        margin: 0 0 10px;
        font-size: 1.2rem;
      }

      .label {
        color: #fbcea0;
        font-size: 0.7rem;
        margin: 0;
      }

      .value {
        color: #bbbbbb;
        font-size: 1rem;
        margin: 0;
        white-space: pre-line;
      }
    }

    .field-group-gear-wide {
      display: flex;
      flex-direction: column;
      margin: 10px 10px 0;
      max-width: 100%;

      h4 {
        margin: 0 0 10px;
        font-size: 1.2rem;
      }

      .label {
        color: #fbcea0;
        font-size: 0.7rem;
        margin: 0;
      }

      .value {
        color: #bbbbbb;
        font-size: 1.2rem;
        margin: 0;
        white-space: pre-line;
      }
    }
  }
  .search-section {
    h4 {
      margin: 10px 10px 5px !important;
    }

    .filters {
      align-items: center;
      justify-content: center;
      display: flex;
      flex-flow: row wrap;
      padding: 0 20px;
      margin: 10px 0 0;

      .filter-button {
        background: transparent;
        border-radius: 5px;
        border: 1px solid #fbcea0;
        box-shadow: 0 1px 1px 0 rgb(0, 0, 0, 0.4);
        color: #fbcea0;
        margin: 5px;
        padding: 10px 15px;
        font-size: 0.9rem;

        &.active-button {
          background: #fbcea0;
          border: 1px solid transparent;
          color: #000000;
        }
      }
    }

    .filter-input {
      background: #000000;
      border-radius: 5px;
      border: none;
      color: #ffffff;
      font-size: 1rem;
      margin: 0;
      max-width: 500px;
      outline: none;
      padding: 12px 15px;
      width: 100%;
    }
  }
  .filter-input {
    background: #000000;
    border-radius: 5px;
    border: none;
    color: #ffffff;
    font-size: 1rem;
    margin: 20px 0 5px;
    max-width: 500px;
    outline: none;
    padding: 12px 15px;
    width: 100%;
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

  .search-bar {
    border: 1px solid #999999;
    border-radius: 5px;
    color: #ffffff;
    width: 80%;
    padding: 5px;
    margin: 15px 10px 10px;
    &:hover {
      border: 1px solid #fbcea0;
      color: #fbcea0;
      cursor: pointer;
    }
  }
`
