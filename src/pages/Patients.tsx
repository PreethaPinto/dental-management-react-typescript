import { useEffect, useState } from 'react';
import CustomTable from '../components/CustomTable';
import axios from 'axios';

interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  emailId: string;
  contact: string;
}

const columns = [
  { id: 'id', label: 'Patient ID', minWidth: 170, align: 'center' },
  { id: 'fullName', label: 'Full Name', minWidth: 170, align: 'center' },
  { id: 'age', label: 'Age', minWidth: 170, align: 'center' },
  { id: 'emailId', label: 'Email ID', minWidth: 170, align: 'center' },
  { id: 'contact', label: 'Contact Number', minWidth: 170, align: 'center' },
];

export default function PatientTable() {
  const [data, setData] = useState<Patient[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/patients')
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return <CustomTable columns={columns} data={data} />;
}
