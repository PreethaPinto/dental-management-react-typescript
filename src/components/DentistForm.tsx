import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { SubmitHandler, useForm } from "react-hook-form";
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { style } from "../styles/ModalStyles";
import styles from '../styles/FormStyle.module.css';
import { Dentist } from "../interfaces/Dentist";
import { useEffect, useState } from "react";
import {schema} from '../validation/dentistFormValidation'


export type FormFields = z.infer<typeof schema>

export enum FormMode {
Add = 'Add',
Update = 'Update'
}

interface DentistFormProps {
  open: boolean;
  onClose: () => void;
  onSubmitDentistFormData: (dentistFormData: FormFields) => void;
  initialDentist?: Dentist | null;
  formMode: FormMode
}

const DentistForm = ({ open, onClose, onSubmitDentistFormData, initialDentist, formMode }: DentistFormProps) => {
  const { register, handleSubmit, reset, formState: {errors, isSubmitting} } = useForm<FormFields>({resolver: zodResolver(schema)});
  const [initialValues, setInitialValues] = useState<FormFields | undefined>();

  const resetForm = () => {
    reset({
      firstName: '',
      lastName: '',
      emailId: '',
      phone: 0,
      speciality: ''
    });
  };

  useEffect(() => {
    if (initialDentist) {
      reset({
        firstName: initialDentist.firstName,
        lastName: initialDentist.lastName,
        emailId: initialDentist.emailId,
        phone: initialDentist.phone, // Convert phone number to string
        speciality: initialDentist.speciality
      }) 
    } else if (formMode === FormMode.Add) {
        reset({
          firstName: '',
          lastName: '',
          emailId: '',
          phone:0,
          speciality: ''
        });
    }
  }, [initialDentist, reset])

  const onSubmit: SubmitHandler<FormFields> = (dentistFormData) => {
    console.log(dentistFormData)
    onSubmitDentistFormData(dentistFormData);
    reset();
  };

  const handleReset = () => {
    reset();
  }

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div style={{display:'flex', justifyContent:'flex-end'}}>
        <Button  onClick={onClose}>
          <Close />
        </Button>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.textContainer}>
            <div>
            <TextField
              {...register("firstName")}
              sx={{width: '300px'}}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              defaultValue={initialDentist?.firstName}
            />
            {errors.firstName && (
              <div className={styles.errors}>{errors.firstName.message}</div>
            )}
            </div>

            <div>
            <TextField
              {...register("lastName")}
              sx={{width: '300px'}}
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              defaultValue={initialDentist?.lastName}
            />
            {errors.lastName && (
              <div className={styles.errors}>{errors.lastName.message}</div>
            )}
          </div>
          </div>

          <div className={styles.textContainer}>
            <div>
            <TextField
              {...register("emailId")}
              sx={{width: '300px'}}
              id="outlined-basic"
              label="Email ID"
              variant="outlined"
              defaultValue={initialDentist?.emailId}
            />
            {errors.emailId && (
              <div className={styles.errors}>{errors.emailId.message}</div>
            )}
            </div>

              <div>
            <TextField
              {...register("phone")}
              sx={{width: '300px'}}
              type="number"
              inputProps={{ min: "1000000000", max: "9999999999" }}
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              defaultValue={initialDentist?.phone}
            />
            {errors.phone && (
            <div className={styles.errors}>{errors.phone.message}</div>)}
          </div>
          </div>

          <div className={styles.textContainer}>
            <div>
          <TextField
              sx={{width: '300px'}}
              id="outlined-basic"
              label="Date of Birth"
              variant="outlined"
            />
            </div>

            <div>
            <TextField
              {...register("speciality")}
              sx={{width: '300px'}}
              id="outlined-basic"
              label="Speciality"
              variant="outlined"
              defaultValue={initialDentist?.speciality}
            />
            {errors.speciality && (
              <div className={styles.errors}>{errors.speciality.message}</div>
            )}
          </div>
          </div>
          <div className={styles.buttonContainer}>
            <Button disabled={isSubmitting} type="submit">{formMode === FormMode.Add ? 'Add' : 'Update' } Dentist</Button>
            <Button onClick={handleReset}> Reset</Button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default DentistForm;
