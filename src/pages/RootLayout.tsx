import { ThemeProvider } from '@emotion/react';
import Sidebar from '../components/Sidebar';
import { Outlet } from '@mui/icons-material';
import { useState } from 'react';
import { Box, PaletteMode, createTheme } from '@mui/material';

const RootLayout = () => {
  const [mode, setMode] = useState<PaletteMode>('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Sidebar mode={mode} setMode={setMode} />
        <Outlet />
      </Box>
    </ThemeProvider>
  );
};

export default RootLayout;
