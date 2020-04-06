import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Rubik", sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #dadada;
    background: #1a1d23;
  }

  a {
    color: #BC2D57;
    text-decoration: none;
    border-bottom: 1px dashed #BC2D57;
    transition: color 0.5s;

    &:hover {
      color: #dadada;
    }
  }

  p {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`
export default GlobalStyles
