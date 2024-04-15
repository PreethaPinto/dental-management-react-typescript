import MainNavigation from '../components/MainNavigation';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import {
  Box,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  useTheme,
} from '@mui/material';
import AddButton from '../components/AddButton';
import PatientForm, { FormFields } from '../components/PatientForm';

const RootLayout = () => {
  const [openPatientForm, setOpenPatientForm] = useState(false);
  const [context, setContext] = useState<'patient' | 'dentist'>('patient');
  const theme = useTheme();

  const [mode, setMode] = useState<PaletteMode>('light');

  const handleOpenPatientForm = () => {
    setOpenPatientForm(true);
  };
  const handleClosePatientForm = () => {
    setOpenPatientForm(false);
  };
  const handleFormSubmit = (formData: FormFields) => {
    console.log('Patient data in root: ', formData)
  }
 

  return (
      <ThemeProvider theme={theme}>
        <Box
          sx={{ display: 'flex' }}
          bgcolor={'background.default'}
          color={'text.primary'}
        >
          <CssBaseline />
          <MainNavigation mode={mode} setMode={setMode} />
          <Box component='main' sx={{ flexGrow: 1, pt: 8, pr: 6, pl: 6 }}>
            {/* <Box>
              <AddButton
                onClick={handleOpenPatientForm}
                addTitle={'Add New Patient'}
                customSx={{ float: 'right', margin: 2 }}
              />
            </Box> */}
            {/* <PatientForm onSubmitPatientFormData={handleFormSubmit} open={openPatientForm} onClose={handleClosePatientForm}/> */}
            {/* <ModalWindow open={open} onClose={handleClose} context={context} /> */}
            <Box sx={{ mt: 12 }}>
              <Outlet />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
  
  );
};

export default RootLayout;
