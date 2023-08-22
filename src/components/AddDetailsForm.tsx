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

interface AddDetailsProps {
  heading: string;
  buttonName: string;
  context: 'patient' | 'dentist';
}

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
            <FormTextField label={'First Name'} />
            <FormTextField label={'Last Name'} />
          </div>

          <div style={styles}>
            <FormTextField label={'Date of Birth'} />
            {isPatientContext && <FormTextField label={'Age'} />}
            {!isPatientContext && <FormTextField label={'Speciality'} />}
          </div>
          <div style={styles}>
            <FormTextField label={'Contact Number'} />
            <FormTextField label={'Email ID'} />
          </div>
          <div style={stylesButton}>
            <Button>{buttonName}</Button>
            <Button>Reset</Button>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default AddDetailsForm;
