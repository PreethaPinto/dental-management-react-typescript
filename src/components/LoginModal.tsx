import { Close } from '@mui/icons-material';
import { Box, Button, Modal, Typography } from '@mui/material';
import FormTextField from './FormTextField';

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

interface LoginModalProps {
  open: boolean;
  onClick: () => void;
}

const LoginModal = ({ open, onClick }: LoginModalProps) => {
  return (
    <Modal
      open={open}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Button sx={{ float: 'right' }} onClick={onClick}>
          <Close />
        </Button>

        <Box sx={{ mt: 6 }}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            sx={{ textAlign: 'center', marginBottom: '6px' }}
          >
            LOGIN
          </Typography>
          <FormTextField label={'User Name'} name={'username'} />
          <FormTextField label={'Password'} name={'password'} />
          <Button>LOGIN</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default LoginModal;
