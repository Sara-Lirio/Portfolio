import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../styles/global'
import usePeristedState from '../utils/usePersistedState'

import light from '../styles/themes/light'
import dark from '../styles/themes/dark'


import Home from '../pages/Home'
import Header from '../components/Header'

const AppRoutes = () => {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };


  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme}
         />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default AppRoutes