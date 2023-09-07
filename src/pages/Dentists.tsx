import { useState } from 'react';
import AddButton from '../components/AddButton';
import CustomTable from '../components/CustomTable';
import ModalWindow from '../components/ModalWindow';
import { Alert, Snackbar } from '@mui/material';

const actions = ['Edit', 'Delete', 'Details'];

interface Column {
  id:
    | 'dentistName'
    | 'dentistId'
    | 'speciality'
    | 'contactNumber'
    | 'emailId'
    | 'action';
  label: string;
  minWidth?: number;
  align?: 'center';
  fontWeight?: 'bold';
  textAlign?: 'center';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'dentistId', label: 'Dentist ID', minWidth: 100, fontWeight: 'bold' },

  {
    id: 'dentistName',
    label: 'Dentist Name',
    minWidth: 170,
    fontWeight: 'bold',
  },
  {
    id: 'speciality',
    label: 'Speciality',
    minWidth: 170,
    align: 'center',
    fontWeight: 'bold',
  },
  {
    id: 'emailId',
    label: 'Email ID',
    minWidth: 170,
    align: 'center',
    fontWeight: 'bold',
  },
  {
    id: 'contactNumber',
    label: 'Contact Number',
    minWidth: 170,
    align: 'center',
    fontWeight: 'bold',
  },
];

interface Data {
  dentistName: string;
  dentistId: number;
  speciality: string;
  emailId: string;
  contactNumber: number;
}

function createData(
  dentistId: number,
  dentistName: string,
  speciality: string,
  emailId: string,
  contactNumber: number
): Data {
  return { dentistId, dentistName, speciality, emailId, contactNumber };
}

const rows = [
  createData(1, 'Jane Austen', 'General', 'mail@email.com', 3287263),
  createData(2, 'Sam Kerr', 'Orthodontist', 'mail@email.com', 3287263),
  createData(3, 'Lauren James', 'Periodontist', 'mail@email.com', 3287263),
  createData(4, 'Alex Russo', 'Pedodontist', 'mail@email.com', 3287263),
  createData(
    5,
    'Justin Raso',
    'Maxillofacial Surgeon',
    'mail@email.com',
    3287263
  ),
  createData(6, 'Natalie Portman', 'Endodontist', 'mail@email.com', 3287263),
  createData(7, 'Chris Nolan', 'General', 'mail@email.com', 3287263),
  createData(8, 'Jake Smith', 'Endodontist', 'mail@email.com', 3287263),
  createData(9, 'Jaden Lopez', 'Pedodontist', 'mail@email.com', 3287263),
  createData(10, 'Maria Goretti', 'General', 'mail@email.com', 3287263),
];

const Dentists = () => {
  const [openModal, setOpenModal] = useState(false);

  const onClick = () => {
    setOpenModal(true);
  };

  const onClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <AddButton
        onClick={onClick}
        addTitle={'Add New Dentist'}
        customSx={{ float: 'right', marginRight: 2 }}
      />

      <ModalWindow open={openModal} onClose={onClose} context={'dentist'} />
      <CustomTable columns={columns} rows={rows} actions={actions} />
    </>
  );
};

export default Dentists;
