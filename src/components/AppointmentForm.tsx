import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
  TextField,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import FormTextField from './FormTextField';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Close } from '@mui/icons-material';

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

const AppointmentForm = () => {
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

        <Box>
          <TextField
            label={'Patient Name'}
            name={'patientName'}
            fullWidth
            sx={{ marginBottom: '30px' }}
          />
          <TextField
            label={'Dentist Name'}
            name={'dentistName'}
            fullWidth
            sx={{ marginBottom: '30px' }}
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
            fullWidth
            sx={{ marginBottom: '30px' }}
          />
          <TextField
            label={'Duration'}
            name={'duration'}
            fullWidth
            sx={{ marginBottom: '30px' }}
          />

          <TextField
            label={'Treatment'}
            name={'treatment'}
            fullWidth
            sx={{ marginBottom: '30px' }}
          />
          <textarea style={textAreaStyle} rows={4} placeholder='Notes' />

          <div style={stylesButton}>
            <Button type='submit'>Add</Button>
            <Button>Reset</Button>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default AppointmentForm;
