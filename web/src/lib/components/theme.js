import { createMuiTheme } from '@material-ui/core/styles'

export const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    boxShadow: 'none',
  },
})

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff7070',
      dark: '#ef4444',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#04a7a2',
      contrastText: '#ffffff',
    }
  },
  typography: {
    useNextVariants: true,
  },
  shadows: Array(25).fill('none'),
})
