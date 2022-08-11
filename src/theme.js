import { createTheme } from "@mui/material"

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#00695c',
    },
    secondary: {
      main: '#920084',
    },
    background: {
      default: '#f2f2ff',
    },
    error: {
      main: '#fb1d1d',
    },
    warning: {
      main: '#ffa700',
    },
    info: {
      main: '#0db6ff',
    },
    success: {
      main: '#27ff36',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 760,
      lg: 1000,
      xl: 1336,
    },
  },
})

export default theme