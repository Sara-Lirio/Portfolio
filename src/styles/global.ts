
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    max-width: 100%;
}

body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};   
    font-family: 'Montserrat', sans-serif;
  }

select {
  font-family: 'Montserrat', sans-serif;
 }
`