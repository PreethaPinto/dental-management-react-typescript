import { ThemeProvider } from '@emotion/react';
import getDesignTokens from '../styles/theme';
import MainNavigation from '../components/MainNavigation';
import { Outlet } from 'react-router-dom';
import { useMemo, useState, createContext } from 'react';
import {
  Box,
  CssBaseline,
  PaletteMode,
  Stack,
  createTheme,
} from '@mui/material';

const RootLayout = () => {
  const ColorModeContext = createContext({
    toggleColorMode: () => {},
  });
  const [mode, setMode] = useState<PaletteMode>('light');
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{ display: 'flex' }}
          bgcolor={'background.default'}
          color={'text.primary'}
        >
          <CssBaseline />
          <MainNavigation mode={mode} setMode={setMode} />
          <Box component='main' sx={{ flexGrow: 1, pt: 10, pl: 3, pr: 3 }}>
            <Outlet />
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default RootLayout;
