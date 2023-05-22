import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Barlow', sans-serif;
  }

  html{
    /* equivale a 10 pixels */
    /* para ser mais acessivel */
    font-size: 62.5%;
  }

  body{
    background: ${props => props.theme.backgroundSecondary};
    color: ${props => props.theme.background};
  }

  body,input,button{
    font-size: 1.6rem;
  }
`