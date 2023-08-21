import { ColorModeContext, useMode } from '../styles/theme';
import MainNavigation from '../components/MainNavigation';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Box, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import AddPatientButton from '../components/AddPatientButton';
import ModalWindow from '../components/ModalWindow';

const RootLayout = () => {
  const [open, setOpen] = useState(false);
  const [theme, colorMode] = useMode();

  const [mode, setMode] = useState<PaletteMode>('light');

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
          <Box component='main' sx={{ flexGrow: 1, pt: 8, pr: 6, pl: 6 }}>
            <Box sx={{}}>
              <AddPatientButton onClick={handleOpen} />
            </Box>
            <ModalWindow open={open} onClose={handleClose} />
            <Box sx={{ mt: 12 }}>
              <Outlet />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default RootLayout;
