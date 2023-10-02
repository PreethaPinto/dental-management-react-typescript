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
import axios from 'axios';
import { Formik } from 'formik';
import * as yup from 'yup';

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

const phoneRegExp =
  /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  age: yup.string().required('required'),
  speciality: yup.string().required('required'),
  contactNumber: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('required'),
  emailId: yup.string().email('invalid email').required('required'),
});

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

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const apiUrl = isPatientContext
      ? 'http://localhost:3000/patients'
      : 'http://localhost:3000/dentists';

    const data = {
      firstName: inputValue.firstName,
      lastName: inputValue.lastName,
      age: isPatientContext ? inputValue.age : undefined,
      speciality: isPatientContext ? undefined : inputValue.speciality,
      contact: inputValue.contactNumber,
      emailId: inputValue.emailId,
    };

    try {
      const response = await axios.post(apiUrl, data);
      // Handle the response as needed
      console.log(response.data); // Assuming the server sends a response
      setInputValue(initialValues);
      setOpenSnackbar(true);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Box sx={{ mt: 8 }}>
        <Typography variant='h6' textAlign={'center'}>
          {heading}
        </Typography>

        <Formik>
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
        </Formik>
      </Box>
    </>
  );
};

export default AddDetailsForm;
