import { ThemeProvider } from "styled-components"

import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from "./styles/themes/defaultTheme"
import { GlobalStyle } from "./styles/global"

import { Router } from "./Router"
import { AppContextProvider } from "./contexts/AppContext"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <AppContextProvider>
          <Router />
        </AppContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
