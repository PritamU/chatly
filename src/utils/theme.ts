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
    dark: false,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#1DC497",
      light: "#ffffffcc",
    },
    background: {
      default: "whitesmoke",
    },
    secondary: {
      main: "#ff3d54",
      light: "#ffe4e7",
    },
    text: {
      primary: "#1DC497",
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
      main: "#1DC497",
      light: "#021d44cc",
    },
    background: {
      default: "#1DC497",
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
