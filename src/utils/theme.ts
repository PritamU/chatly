// theme.js
import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1400,
      xl: 1536,
    },
  },
  colorSchemes: {
    dark: true,
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#e5e9ed",
      light: "#ffffffcc",
    },
    background: {
      default: "#e5e9ed",
    },
    secondary: {
      main: "#ff3d54",
      light: "#ffe4e7",
    },
    text: {
      primary: "#011d43",
      secondary: "#021d44cc",
    },
  },
});

const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1400,
      xl: 1536,
    },
  },

  colorSchemes: {
    dark: true,
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#011d43",
      light: "#021d44cc",
    },
    background: {
      default: "#011d43",
    },
    secondary: {
      main: "#ff3d54",
      light: "#ffe4e7",
    },
    text: {
      primary: "#e5e9ed",
      secondary: "#ffffffcc",
    },
  },
});

export { darkTheme, lightTheme };
