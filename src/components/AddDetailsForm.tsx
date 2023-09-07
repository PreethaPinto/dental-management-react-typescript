import {
  Alert,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Snackbar,
  Typography,
} from '@mui/material';
import FormTextField from './FormTextField';
import { z } from 'zod';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';

interface AddDetailsProps {
  heading: string;
  buttonName: string;
  title: string;
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

const schema = z.object({
  firstName: z.string().min(2).max(30),
  lastName: z.string().min(2).max(30),
  //dateOfBirth:
  age: z.number(),
  speciality: z.string(),
  contactNumber: z.string().min(10).max(14),
  emailID: z.string().email(),
});

const initialValues = {
  firstName: '',
  lastName: '',
  age: '',
  speciality: '',
  contactNumber: '',
  emailId: '',
};

const AddDetailsForm = ({
  heading,
  buttonName,
  title,
  context,
}: AddDetailsProps) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [inputValue, setInputValue] = useState(initialValues);
  const isPatientContext = context === 'patient';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'firstName':
        setInputValue((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        break;

      case 'lastName':
        setInputValue((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        break;

      case 'age':
        setInputValue((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        break;

      case 'speciality':
        setInputValue((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        break;

      case 'contactNumber':
        setInputValue((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        break;

      case 'emailId':
        setInputValue((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        break;
    }
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInputValue(initialValues);
  };

  return (
    <>
      <Box sx={{ mt: 8 }}>
        <Typography variant='h6' textAlign={'center'}>
          {heading}
        </Typography>

        <form onSubmit={handleSubmitForm}>
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
              <FormTextField
                label={'First Name'}
                name={'firstName'}
                value={inputValue.firstName}
                onChange={handleChange}
              />
              <FormTextField
                label={'Last Name'}
                name={'lastName'}
                value={inputValue.lastName}
                onChange={handleChange}
              />
            </div>

            <div style={styles}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label='Date of Birth' sx={{ width: '300px' }} />
              </LocalizationProvider>
              {isPatientContext && (
                <FormTextField
                  label={'Age'}
                  name={'age'}
                  value={inputValue.age}
                  onChange={handleChange}
                />
              )}
              {!isPatientContext && (
                <FormTextField
                  label={'Speciality'}
                  name={'speciality'}
                  value={inputValue.speciality}
                  onChange={handleChange}
                />
              )}
            </div>
            <div style={styles}>
              <FormTextField
                label={'Contact Number'}
                name={'contactNumber'}
                value={inputValue.contactNumber}
                onChange={handleChange}
              />
              <FormTextField
                label={'Email ID'}
                name={'emailId'}
                value={inputValue.emailId}
                onChange={handleChange}
              />
            </div>
            <div style={stylesButton}>
              <Button type='submit' onClick={() => setOpenSnackbar(true)}>
                {buttonName}
              </Button>
              <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={() => setOpenSnackbar(false)}
              >
                <Alert
                  onClose={() => setOpenSnackbar(false)}
                  severity='success'
                  sx={{ width: '100%' }}
                >
                  {title} added successfully!
                </Alert>
              </Snackbar>

              <Button onClick={() => setInputValue(initialValues)}>
                Reset
              </Button>
            </div>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default AddDetailsForm;
