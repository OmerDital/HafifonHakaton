import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    primary: {
      main: 'rgba(150, 150, 150, 1)',
    },
    background: {
      default: '#f1f1f1'
    }
  },
  typography: { fontFamily: 'Segoe UI' }
});

export default lightTheme;