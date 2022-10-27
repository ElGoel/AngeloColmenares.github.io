import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getDesignTokens } from './modes';

const ColorModeContext = React.createContext();

export const PaletteProvider = ({children}) => {

  const [modeColor, setModeColor] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setModeColor((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme(getDesignTokens(modeColor)),
    [modeColor],
  );

  return (
    <ColorModeContext.Provider value={{colorMode, modeColor}}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ColorModeContext