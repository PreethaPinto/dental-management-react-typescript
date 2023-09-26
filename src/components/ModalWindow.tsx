import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AddDetailsForm from './AddDetailsForm';
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
  onClose?: () => void;
  context?: 'patient' | 'dentist';
}

const ModalWindow = ({ open, onClose, context }: ModalWindowProps) => {
  const isPatientContext = context === 'patient';
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
        {isPatientContext ? (
          <AddDetailsForm
            heading={'PATIENT DETAILS'}
            buttonName={'Add New Patient'}
            title='Patient'
            context={'patient'}
          />
        ) : (
          <AddDetailsForm
            heading={'DENTIST DETAILS'}
            buttonName={'Add New Dentist'}
            title='Dentist'
            context={'dentist'}
          />
        )}
      </Box>
    </Modal>
  );
};

export default ModalWindow;
