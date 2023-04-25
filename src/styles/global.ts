
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300&display=swap');

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