import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Kodchasan:400,700');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Kodchasan', sans-serif;
    color:#fff;
  }
  
  body {
    font-size: 14px;
  }
  
  a {
    text-decoration: none;
    box-shadow: none;
  }
  
  ul {
    margin: 0 auto;
    list-style-type: none;
  }
  p {
    margin: 0;
  }
`

export default GlobalStyle
