import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import { amber } from '@mui/material/colors';
import { lightBlue } from '@mui/material/colors';
import { grey } from '@mui/material/colors';
import { blueGrey } from '@mui/material/colors';
import { lime } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ececec',
    },
    primary: {
      main: amber.A400,
      light: amber.A200,
      dark: amber.A700,
    },
    secondary: {
      main: lightBlue.A400,
      light: lightBlue.A200,
      dark: lightBlue.A700,
      contrastText: 'white',
    },
    appbartitle: {
      main: grey.A100,
    },
  },
  typography: {
    subtitle1: {
      fontSize: 20,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 'bold',
      color: grey[600],
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: amber.A700,
          color: grey.A100,
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: blueGrey.A700,
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: grey.A100,
          '&.Mui-selected': {
            color: lime.A400,
          },
        },
      },
    },
  },
});

export const AppTheme = (props) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {props.children}
  </ThemeProvider>
);
