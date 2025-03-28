import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: "#D3D3D3",
        },
      },
    },
  },
  typography: {
    fontFamily: '"Tektur", sans-serif',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#00FF00',
    },
    secondary: {
      main: '#D3D3D3',
    },
    action: {
      active: '#00FF00',
      hover: '#FF3D77',
    },
    error: {
      main: '#FF5733',
    },
  },
});