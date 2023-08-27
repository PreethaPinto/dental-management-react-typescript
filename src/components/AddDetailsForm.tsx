import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import FormTextField from './FormTextField';
import { z } from 'zod';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface AddDetailsProps {
  heading: string;
  buttonName: string;
  context: 'patient' | 'dentist';
}

type FormData = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  age: number;
  speciality: string;
  contactNumber: number;
  emailID: string;
};

const AddDetailsForm = ({ heading, buttonName, context }: AddDetailsProps) => {
  const styles = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '30px',
  };

  const stylesRadio = {
    marginLeft: '50px',
  };

  const stylesButton = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '40px',
  };

  const isPatientContext = context === 'patient';

  const schema = z.object({
    firstName: z.string().min(2).max(30),
    lastName: z.string().min(2).max(30),
    //dateOfBirth:
    age: z.number(),
    speciality: z.string(),
    contactNumber: z.string().min(10).max(14),
    emailID: z.string().email(),
  });

  return (
    <>
      <Box sx={{ mt: 8 }}>
        <Typography variant='h6' textAlign={'center'}>
          {heading}
        </Typography>

        <Box sx={{ mt: 4 }}>
          <div style={stylesRadio}>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby='demo-row-radio-buttons-group-label'
                name='row-radio-buttons-group'
              >
                <FormControlLabel
                  value='male'
                  control={<Radio />}
                  label='Male'
                />
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
          </div>
          <div style={styles}>
            <FormTextField label={'First Name'} name={'firstName'} />
            <FormTextField label={'Last Name'} name={'lastName'} />
          </div>

          <div style={styles}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label='Date of Birth' sx={{ width: '300px' }} />
            </LocalizationProvider>
            {isPatientContext && <FormTextField label={'Age'} name={'age'} />}
            {!isPatientContext && (
              <FormTextField label={'Speciality'} name={'speciality'} />
            )}
          </div>
          <div style={styles}>
            <FormTextField label={'Contact Number'} name={'contactNumber'} />
            <FormTextField label={'Email ID'} name={'emailId'} />
          </div>
          <div style={stylesButton}>
            <Button type='submit'>{buttonName}</Button>
            <Button>Reset</Button>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default AddDetailsForm;
