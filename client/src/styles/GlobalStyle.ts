'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    outline: none;
  }

  body {
    background-color: #f8f5ff;
  }
  
  html { 
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.2px;
  }

  button {
    cursor:pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`

export default GlobalStyle
