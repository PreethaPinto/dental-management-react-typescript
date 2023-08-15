import { ColorModeContext, useMode } from '../styles/theme';
import MainNavigation from '../components/MainNavigation';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Box, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';

const RootLayout = () => {
  const [theme, colorMode] = useMode();

  const [mode, setMode] = useState<PaletteMode>('light');

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
