import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';

interface AddButtonProps {
  onClick: () => void;
  addTitle: string;
  customSx?: object;
}

const AddButton = ({ onClick, addTitle, customSx }: AddButtonProps) => {
  return (
    <Button
      variant='outlined'
      onClick={onClick}
      startIcon={<Add />}
      sx={customSx}
    >
      {addTitle}
    </Button>
  );
};

export default AddButton;
