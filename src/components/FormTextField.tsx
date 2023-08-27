import { TextField } from '@mui/material';
import React from 'react';

interface TextFieldProps {
  label: string;
  name: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormTextField = ({ label, name, type, onChange }: TextFieldProps) => {
  return (
    <TextField
      id='oulined-basic'
      name={name}
      label={label}
      variant='outlined'
      sx={{ width: '300px' }}
      type={type}
      onChange={onChange}
    />
  );
};

export default FormTextField;
