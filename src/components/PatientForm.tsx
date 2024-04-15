import { Box, Button, Modal, TextField } from "@mui/material";
import { style } from "../styles/ModalStyles";
import styles from '../styles/FormStyle.module.css'
import { Close } from "@mui/icons-material";
import { SubmitHandler, useForm } from "react-hook-form";
import { Patient } from "../interfaces/Patient";
import { useEffect, useState } from "react";

export enum FormMode {
  Add = 'Add',
  Update = 'Update'
}

interface PatientProps {
  open: boolean;
  onClose: () => void;
  onSubmitPatientFormData: (patientFormData: FormFields) => void;
  initialPatient?: Patient | null;
  formMode: FormMode;
}

export type FormFields = {
  firstName: string;
  lastName: string;
  age: number;
  dateOfBirth: string;
  emailId: string;
  phone: number;
};

const PatientForm = ({open, onClose, initialPatient, formMode, onSubmitPatientFormData}: PatientProps) => {
  const { register, reset, handleSubmit, formState: {errors, isSubmitting}  } = useForm<FormFields>();
  const [initialValues, setInitialValues] = useState<FormFields | undefined>();

  const handleReset =() => {
    reset();
  }

 useEffect (() => {
    if (initialPatient) {
      reset({
        firstName: initialPatient.firstName,
        lastName: initialPatient.lastName,
        emailId: initialPatient.emailId,
        phone: initialPatient.phone,
        age: initialPatient.age,
      }) 
    } else if (formMode === FormMode.Add) {
        reset({
          firstName: '',
          lastName: '',
          emailId: '',
          dateOfBirth: '',
          age: 0,
          phone:0,
        });
    }
 }, [initialPatient, reset])

  const onSubmit: SubmitHandler<FormFields> = (patientFormData) => {
   console.log(patientFormData);
   onSubmitPatientFormData(patientFormData);
   onClose();
   reset();
  }





  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className={styles.buttonContainer}>
        <Button sx={{ float: "right" }} onClick={onClose}>
          <Close />
        </Button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.textContainer}>
            <div>
        <TextField
          {...register("firstName")}
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          defaultValue={initialPatient?.firstName}
        />
        </div>
        <div>
        <TextField
          {...register("lastName")}
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          defaultValue={initialPatient?.firstName}
        />
        </div>
        </div>

        <div className={styles.textContainer}>
          <div>
        <TextField
          {...register("age")}
          id="outlined-basic"
          label="Age"
          variant="outlined"
          defaultValue={initialPatient?.age}
        />
        </div>
        <div>
        <TextField
          {...register("dateOfBirth")}
          id="outlined-basic"
          label="Date of Birth"
          variant="outlined"

        />
        </div>
        </div>
        
        <div className={styles.textContainer}>
          <div>
        <TextField
          {...register("emailId")}
          id="outlined-basic"
          label="Email Id"
          variant="outlined"
          defaultValue={initialPatient?.emailId}
        />
        </div>

        <div>
        <TextField
          {...register("phone")}
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          defaultValue={initialPatient?.phone}
        />
        </div>
        </div>

        <div className={styles.buttonContainer}>
        <Button disabled={isSubmitting} type="submit">{formMode === FormMode.Add ? 'Add' : 'Update' } Patient</Button>
        <Button onClick={handleReset}>Reset</Button>
        </div>

        </form>
      </Box>
    </Modal>
  );
};

export default PatientForm;
