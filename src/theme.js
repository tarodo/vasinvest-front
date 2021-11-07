import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f3a786',
      // main: teal[500]
    },
    secondary: {
      main: '#5bb5db',
    },
  },
  typography: {
    body1: {
      fontWeight: 500,
    },
  },
});

export default theme;
