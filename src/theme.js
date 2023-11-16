import { createTheme } from '@mui/material/styles'
import { green, red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    text: {
      secondary: green[500]
    }
  }
})

export default theme
