import React from 'react';

const AddPatientForm = () => {
  return <div>AddPatientForm</div>;
};

export default AddPatientForm;

// import {
//   Box,
//   Button,
//   FormControl,
//   FormControlLabel,
//   Radio,
//   RadioGroup,
//   TextField,
//   Typography,
// } from '@mui/material';
// import FormTextField from './FormTextField';

// interface AddDetailsProps {
//   heading: string;
//   buttonName: string;
// }

// const AddPatientForm = () => {
//   const styles = {
//     display: 'flex',
//     justifyContent: 'space-around',
//     margin: '30px',
//   };

//   const stylesRadio = {
//     marginLeft: '50px',
//   };

//   const stylesButton = {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     marginRight: '40px',
//   };

//   const titles = [
//     {
//       value: 'Mr.',
//       label: 'Mr.',
//     },
//     {
//       value: 'Mrs.',
//       label: 'Mrs.',
//     },
//     {
//       value: 'Master.',
//       label: 'Master',
//     },
//     {
//       value: 'Ms',
//       label: 'Ms',
//     },
//     {
//       value: 'None',
//       label: 'Prefer not to say',
//     },
//   ];

//   return (
//     <>
//       <Box sx={{ mt: 8 }}>
//         <Typography variant='h6' textAlign={'center'}>
//           PATIENT DETAILS
//         </Typography>

//         <Box sx={{ mt: 4 }}>
//           <div style={stylesRadio}>
//             <FormControl>
//               <RadioGroup
//                 row
//                 aria-labelledby='demo-row-radio-buttons-group-label'
//                 name='row-radio-buttons-group'
//               >
//                 <FormControlLabel
//                   value='male'
//                   control={<Radio />}
//                   label='Male'
//                 />
//                 <FormControlLabel
//                   value='female'
//                   control={<Radio />}
//                   label='Female'
//                 />
//                 <FormControlLabel
//                   value='other'
//                   control={<Radio />}
//                   label='Prefer not to say'
//                 />
//               </RadioGroup>
//             </FormControl>
//           </div>
//           <div style={styles}>
//             <FormTextField label={'First Name'} />
//             <FormTextField label={'Last Name'} />
//           </div>

//           <div style={styles}>
//             <FormTextField label={'Date of Birth'} />
//             <FormTextField label={'Age'} />
//           </div>
//           <div style={styles}>
//             <FormTextField label={'Contact Number'} />
//             <FormTextField label={'Email ID'} />
//           </div>
//           <div style={stylesButton}>
//             <Button>Add New Patient</Button>
//             <Button>Reset</Button>
//           </div>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default AddPatientForm;
