import { ColorModeContext, useMode } from '../styles/theme';
import MainNavigation from '../components/MainNavigation';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from '@mui/material';
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
          <Box component='main' sx={{ flexGrow: 1, pt: 10, pr: 8 }}>
            <AddPatientButton onClick={handleOpen} />
            <ModalWindow open={open} onClose={handleClose} />
            <Outlet />
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default RootLayout;
