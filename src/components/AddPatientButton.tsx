import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';

interface AddPatientButtonProps {
  onClick: () => void;
}

const AddPatientButton = ({ onClick }: AddPatientButtonProps) => {
  return (
    <Button
      variant='outlined'
      onClick={onClick}
      startIcon={<Add />}
      sx={{
        float: 'right',
        margin: 2,
      }}
    >
      Add New Patient
    </Button>
  );
};

export default AddPatientButton;
