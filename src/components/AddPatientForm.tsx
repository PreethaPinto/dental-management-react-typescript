import { Close } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

const AddPatientForm = () => {
  const styles = {
    display: 'flex',
  };

  const titles = [
    {
      value: 'Mr.',
      label: 'Mr.',
    },
    {
      value: 'Mrs.',
      label: 'Mrs.',
    },
    {
      value: 'Master.',
      label: 'Master',
    },
    {
      value: 'Ms',
      label: 'Ms',
    },
    {
      value: 'None',
      label: 'Prefer not to say',
    },
  ];

  return (
    <>
      <Box sx={{ mt: 8 }}>
        <Typography variant='h6' textAlign={'center'}>
          PATIENT DETAILS
        </Typography>

        <Box>
          <FormControl></FormControl>
          <div>
            <TextField
              id='outlined-basic'
              label='First Name'
              variant='outlined'
            />
            <TextField
              id='outlined-basic'
              label='Last Name'
              variant='outlined'
            />
          </div>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby='demo-row-radio-buttons-group-label'
              name='row-radio-buttons-group'
            >
              <FormControlLabel value='male' control={<Radio />} label='Male' />
              <FormControlLabel
                value='female'
                control={<Radio />}
                label='Female'
              />
              <FormControlLabel
                value='other'
                control={<Radio />}
                label='Prefer not to say'
              />
            </RadioGroup>
          </FormControl>
          <div style={styles}>
            <TextField
              id='outlined-basic'
              label='Date of Birth'
              variant='outlined'
            />
            <TextField id='outlined-basic' label='Age' variant='outlined' />
          </div>
          <div style={styles}>
            <TextField id='outlined-basic' label='Contact' variant='outlined' />

            <TextField
              id='outlined-basic'
              label='Email ID'
              variant='outlined'
            />
          </div>

          <Button>Add Patient</Button>
          <Button>Reset</Button>
        </Box>
      </Box>
    </>
  );
};

export default AddPatientForm;
