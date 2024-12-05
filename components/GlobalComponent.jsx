import React from 'react'
import PropTypes from 'prop-types'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Header from './Header'
import Footer from './Footer'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0070f3',
    },
  },
})

const GlobalComponent = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

GlobalComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GlobalComponent
