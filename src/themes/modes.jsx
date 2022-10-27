import { amber, cyan, grey } from "@mui/material/colors";
import animatedShape from "../assets/animated_shape.svg";
import animatedShadeLight from "../assets/animated-lightmode.svg";

export const getDesignTokens = (mode) => {
  return {
    palette: {
      mode,
      primary: {
        ...(mode === "dark" 
        ? { main: cyan[200] } 
        : { main: cyan[500], 
            light: cyan[400], 
            dark: cyan[600]
          }
      ),
      },
      ...(mode === "dark"
        ? {
            background: {
              light: grey[800],
              default: grey[900],
              paper: grey[700],
            },
          }
        : {
            background: {
              light: grey[50],
              default: '#f2fbfd',
              paper: grey[300],
            },
          }),
      text: {
        ...(mode === "light"
          ? {
              primary: grey[900],
              secondary: grey[600],
            }
          : {
              primary: "#fff",
              secondary: grey[100],
            }),
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          body {
            background-image: url(${ mode === 'light' ? animatedShadeLight : animatedShape});
          } 
        `,
      },
    },
  }
};
