import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

#root{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
}


body{
    font-family: 'Montserrat', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding:0;
    margin:0;
  position: relative;
  min-height: 100vh;
}

`
