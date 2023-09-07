import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const styles = {
  display: 'flex',
  margin: '30px',
};

const stylesButton = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginRight: '40px',
};

const textAreaStyle = {
  width: '332px',
  height: '150px',
};

const initialValues = {
  patientName: '',
  dentistName: '',
  time: '',
  duration: '',
  treatment: '',
  notes: '',
};

const AppointmentForm = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [inputValue, setInputValue] = useState(initialValues);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    switch (name) {
      case 'patientName':
        setInputValue((prevState) => ({
          ...prevState,
          [name]: value,
        }));

        break;

      case 'dentistName':
        setInputValue((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        break;

      case 'time':
        setInputValue((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        break;

      case 'duration':
        setInputValue((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        break;

      case 'treatment':
        setInputValue((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        break;
    }
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = event.target;
    setInputValue((prevState) => ({
      ...prevState,
      value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInputValue(initialValues);
  };

  return (
    <>
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography
          variant='h6'
          textAlign={'center'}
          sx={{ marginBottom: '30px' }}
        >
          Add New Appointment
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box>
            <TextField
              label={'Patient Name'}
              name={'patientName'}
              value={inputValue.patientName}
              fullWidth
              sx={{ marginBottom: '30px' }}
              onChange={handleInputChange}
            />
            <TextField
              label={'Dentist Name'}
              name={'dentistName'}
              value={inputValue.dentistName}
              fullWidth
              sx={{ marginBottom: '30px' }}
              onChange={handleInputChange}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label='Appointment Date'
                sx={{ width: '332px', marginBottom: '30px' }}
              />
            </LocalizationProvider>
            <TextField
              label={'Time'}
              name={'time'}
              value={inputValue.time}
              fullWidth
              sx={{ marginBottom: '30px' }}
              onChange={handleInputChange}
            />
            <TextField
              label={'Duration'}
              name={'duration'}
              value={inputValue.duration}
              fullWidth
              sx={{ marginBottom: '30px' }}
              onChange={handleInputChange}
            />

            <TextField
              label={'Treatment'}
              name={'treatment'}
              value={inputValue.treatment}
              fullWidth
              sx={{ marginBottom: '30px' }}
              onChange={handleInputChange}
            />
            <textarea
              style={textAreaStyle}
              name='notes'
              value={inputValue.notes}
              rows={4}
              placeholder='Notes'
              onChange={handleTextAreaChange}
            />

            <div style={stylesButton}>
              <Button type='submit' onClick={() => setOpenSnackbar(true)}>
                Add
              </Button>
              <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={() => setOpenSnackbar(false)}
              >
                <Alert
                  onClose={() => setOpenSnackbar(false)}
                  severity='success'
                  sx={{ width: '100%' }}
                >
                  Appointment added successfully!
                </Alert>
              </Snackbar>
              <Button onClick={() => setInputValue(initialValues)}>
                Reset
              </Button>
            </div>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default AppointmentForm;
