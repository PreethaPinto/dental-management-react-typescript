import React, { useEffect, useState } from 'react';
import CustomTable from '../components/CustomTable';
import axios from 'axios';
import AddButton from '../components/AddButton';
import ModalWindow from '../components/ModalWindow';

interface Dentist {
  id: number;
  firstName: string;
  lastName: string;
  speciality: string;
  emailId: string;
  contact: string;
}

const columns = [
  {
    id: 'id',
    label: 'Dentist ID',
    minWidth: 100,
    fontWeight: 'bold',
    align: 'center',
  },
  {
    id: 'fullName',
    label: 'Dentist Name',
    minWidth: 170,
    fontWeight: 'bold',
    align: 'center',
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
    id: 'contact',
    label: 'Contact Number',
    minWidth: 170,
    align: 'center',
    fontWeight: 'bold',
  },
];

export default function Dentists() {
  const [data, setData] = useState<Dentist[]>([]);
  const [open, setOpen] = useState(false);
  const [context, setContext] = useState<'patient' | 'dentist'>('dentist');

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get('http://localhost:3000/dentists')
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <AddButton
        onClick={handleOpen}
        addTitle={'Add New Dentist'}
        customSx={{ float: 'right', margin: 2 }}
      />

      <ModalWindow open={open} onClose={handleClose} context={context} />
      <CustomTable columns={columns} data={data} />
    </>
  );
}
