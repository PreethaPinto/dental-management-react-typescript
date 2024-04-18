import {
  Alert,
  Box,
  Button,
  Modal,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';

import React, { useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Close } from '@mui/icons-material';
import { style } from '../styles/ModalStyles';

export type FormFields = {
  patientName: string;
  dentistName: string;
  notes: string;
};

interface AppointmentFormProps {
  open: boolean;
  onClose: () => void;
  onSubmitAppointmentForm: (appointmentFormData:FormFields) => void;
}

const AppointmentForm = ({open, onClose, onSubmitAppointmentForm}: AppointmentFormProps) => {
  const { register, handleSubmit } = useForm<FormFields>();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [openCalendarModal, setOpenCalendarModal] = useState(false);

  const handleCloseCalendarModal = () => {
    setOpenCalendarModal(false);
  };

  const onSubmit: SubmitHandler<FormFields> = (appointmentFormData) => {
    console.log(appointmentFormData);
    onSubmitAppointmentForm(appointmentFormData);
    onClose();
  };

  return (
    <>
      <Modal open={open}>
        <Box sx={style}>
          <Button sx={{ float: 'right' }} onClick={onClose}>
            <Close />
          </Button>

          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography
              variant='h6'
              textAlign={'center'}
              sx={{ marginBottom: '30px' }}
            >
              Add New Appointment
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Box>
                <TextField
                  {...register('patientName')}
                  label={'Patient Name'}
                  name={'patientName'}
                  fullWidth
                  sx={{ marginBottom: '30px' }}
                />
                <TextField
                  {...register('dentistName')}
                  label={'Dentist Name'}
                  name={'dentistName'}
                  fullWidth
                  sx={{ marginBottom: '30px' }}
                />
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label='Appointment Date'
                  sx={{ width: '332px', marginBottom: '30px' }}
                />
              </LocalizationProvider>
              */}

                <TextField
                  {...register('notes')}
                  label={'Notes'}
                  name={'notes'}
                  fullWidth
                  sx={{ marginBottom: '30px' }}
                />

                <div>
                  <Button type='submit'>Add</Button>
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
                  <Button>Reset</Button>
                </div>
              </Box>
            </form>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AppointmentForm;
