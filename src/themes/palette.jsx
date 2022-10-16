import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    status: {
      danger: 'red',
    },
    primary: {
      light: '#33c9dc',
      main: '#00bcd4',
      dark: '#008394',
      contrastText: '#333333',
    },
    secondary: {
      light: '#ffac33',
      main: '#ff9800',
      dark: '#b26a00',
      contrastText: '#333333',
    },
  },
});

const PaletteProvider = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  )
}

export default PaletteProvider