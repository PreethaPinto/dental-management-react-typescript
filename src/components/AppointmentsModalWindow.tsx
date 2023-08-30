import { Close } from '@mui/icons-material';
import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react';
import AppointmentForm from './AppointmentForm';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface OpenModalProps {
  open: boolean;
  onClose: () => void;
}

const AppointmentsModalWindow = ({ open, onClose }: OpenModalProps) => {
  return (
    <>
      <Modal
        open={open}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Button sx={{ float: 'right' }} onClick={onClose}>
            <Close />
          </Button>
          <AppointmentForm />
        </Box>
      </Modal>
    </>
  );
};

export default AppointmentsModalWindow;
