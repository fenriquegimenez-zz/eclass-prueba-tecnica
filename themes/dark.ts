import { colors, createTheme } from '@mui/material'

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.teal[200],
        },
      },
    },
  },
})
