import { TextField } from '@mui/material';
import React from 'react';

interface TextFieldProps {
  label: string;
}
const FormTextField = ({ label }: TextFieldProps) => {
  return (
    <TextField
      id='oulined-basic'
      label={label}
      variant='outlined'
      sx={{ width: '300px' }}
    />
  );
};

export default FormTextField;
