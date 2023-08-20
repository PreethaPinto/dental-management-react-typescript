import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { TextField } from '@mui/material';
import AddPatientForm from './AddPatientForm';
import { Close } from '@mui/icons-material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface ModalWindowProps {
  open: boolean;
  onClose: () => void;
}

const ModalWindow = ({ open, onClose }: ModalWindowProps) => {
  return (
    <Modal
      open={open}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Button sx={{ float: 'right' }} onClick={onClose}>
          <Close />
        </Button>

        <AddPatientForm />
      </Box>
    </Modal>
  );
};

export default ModalWindow;
