import CustomTable from '../components/CustomTable';

const actions = ['Edit', 'Delete', 'Details'];

interface Column {
  id: 'patientName' | 'patientId' | 'age' | 'contactNumber' | 'emailId';
  label: string;
  minWidth?: number;
  align?: 'center';
  fontWeight?: 'bold';
  textAlign?: 'center';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'patientId', label: 'Patient ID', minWidth: 100, fontWeight: 'bold' },

  {
    id: 'patientName',
    label: 'Patient Name',
    minWidth: 170,
    fontWeight: 'bold',
  },
  {
    id: 'age',
    label: 'Age',
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
  patientName: string;
  patientId: number;
  age: number;
  emailId: string;
  contactNumber: number;
}

function createData(
  patientId: number,
  patientName: string,
  age: number,
  emailId: string,
  contactNumber: number
): Data {
  return { patientName, patientId, age, emailId, contactNumber };
}

const rows = [
  createData(1, 'Jane Austen', 45, 'mail@email.com', 3287263),
  createData(2, 'Sam Kerr', 64, 'mail@email.com', 3287263),
  createData(3, 'Lauren James', 35, 'mail@email.com', 3287263),
  createData(4, 'Alex Russo', 23, 'mail@email.com', 3287263),
  createData(5, 'Justin Raso', 38, 'mail@email.com', 3287263),
  createData(6, 'Natalie Portman', 75, 'mail@email.com', 3287263),
  createData(7, 'Chris Nolan', 7, 'mail@email.com', 3287263),
  createData(8, 'Jake Smith', 8, 'mail@email.com', 3287263),
  createData(9, 'Jaden Lopez', 9, 'mail@email.com', 3287263),
  createData(10, 'Maria Goretti', 22, 'mail@email.com', 3287263),
  createData(1, 'Jane Austen', 45, 'mail@email.com', 3287263),
  createData(2, 'Sam Kerr', 64, 'mail@email.com', 3287263),
  createData(3, 'Lauren James', 35, 'mail@email.com', 3287263),
  createData(4, 'Alex Russo', 23, 'mail@email.com', 3287263),
  createData(5, 'Justin Raso', 38, 'mail@email.com', 3287263),
  createData(6, 'Natalie Portman', 75, 'mail@email.com', 3287263),
  createData(7, 'Chris Nolan', 7, 'mail@email.com', 3287263),
  createData(8, 'Jake Smith', 8, 'mail@email.com', 3287263),
  createData(9, 'Jaden Lopez', 9, 'mail@email.com', 3287263),
  createData(10, 'Maria Goretti', 22, 'mail@email.com', 3287263),
  createData(1, 'Jane Austen', 45, 'mail@email.com', 3287263),
  createData(2, 'Sam Kerr', 64, 'mail@email.com', 3287263),
  createData(3, 'Lauren James', 35, 'mail@email.com', 3287263),
  createData(4, 'Alex Russo', 23, 'mail@email.com', 3287263),
  createData(5, 'Justin Raso', 38, 'mail@email.com', 3287263),
  createData(6, 'Natalie Portman', 75, 'mail@email.com', 3287263),
  createData(7, 'Chris Nolan', 7, 'mail@email.com', 3287263),
  createData(8, 'Jake Smith', 8, 'mail@email.com', 3287263),
  createData(9, 'Jaden Lopez', 9, 'mail@email.com', 3287263),
  createData(10, 'Maria Goretti', 22, 'mail@email.com', 3287263),
  createData(1, 'Jane Austen', 45, 'mail@email.com', 3287263),
  createData(2, 'Sam Kerr', 64, 'mail@email.com', 3287263),
  createData(3, 'Lauren James', 35, 'mail@email.com', 3287263),
  createData(4, 'Alex Russo', 23, 'mail@email.com', 3287263),
  createData(5, 'Justin Raso', 38, 'mail@email.com', 3287263),
  createData(6, 'Natalie Portman', 75, 'mail@email.com', 3287263),
  createData(7, 'Chris Nolan', 7, 'mail@email.com', 3287263),
  createData(8, 'Jake Smith', 8, 'mail@email.com', 3287263),
  createData(9, 'Jaden Lopez', 9, 'mail@email.com', 3287263),
  createData(10, 'Maria Goretti', 22, 'mail@email.com', 3287263),
  createData(1, 'Jane Austen', 45, 'mail@email.com', 3287263),
  createData(2, 'Sam Kerr', 64, 'mail@email.com', 3287263),
  createData(3, 'Lauren James', 35, 'mail@email.com', 3287263),
  createData(4, 'Alex Russo', 23, 'mail@email.com', 3287263),
  createData(5, 'Justin Raso', 38, 'mail@email.com', 3287263),
  createData(6, 'Natalie Portman', 75, 'mail@email.com', 3287263),
  createData(7, 'Chris Nolan', 7, 'mail@email.com', 3287263),
  createData(8, 'Jake Smith', 8, 'mail@email.com', 3287263),
  createData(9, 'Jaden Lopez', 9, 'mail@email.com', 3287263),
  createData(10, 'Maria Goretti', 22, 'mail@email.com', 3287263),
  createData(1, 'Jane Austen', 45, 'mail@email.com', 3287263),
  createData(2, 'Sam Kerr', 64, 'mail@email.com', 3287263),
  createData(3, 'Lauren James', 35, 'mail@email.com', 3287263),
  createData(4, 'Alex Russo', 23, 'mail@email.com', 3287263),
  createData(5, 'Justin Raso', 38, 'mail@email.com', 3287263),
  createData(6, 'Natalie Portman', 75, 'mail@email.com', 3287263),
  createData(7, 'Chris Nolan', 7, 'mail@email.com', 3287263),
  createData(8, 'Jake Smith', 8, 'mail@email.com', 3287263),
  createData(9, 'Jaden Lopez', 9, 'mail@email.com', 3287263),
  createData(10, 'Maria Goretti', 22, 'mail@email.com', 3287263),
  createData(1, 'Jane Austen', 45, 'mail@email.com', 3287263),
  createData(2, 'Sam Kerr', 64, 'mail@email.com', 3287263),
  createData(3, 'Lauren James', 35, 'mail@email.com', 3287263),
  createData(4, 'Alex Russo', 23, 'mail@email.com', 3287263),
  createData(5, 'Justin Raso', 38, 'mail@email.com', 3287263),
  createData(6, 'Natalie Portman', 75, 'mail@email.com', 3287263),
  createData(7, 'Chris Nolan', 7, 'mail@email.com', 3287263),
  createData(8, 'Jake Smith', 8, 'mail@email.com', 3287263),
  createData(9, 'Jaden Lopez', 9, 'mail@email.com', 3287263),
  createData(10, 'Maria Goretti', 22, 'mail@email.com', 3287263),
];

export default function PatientTable() {
  return <CustomTable columns={columns} rows={rows} actions={actions} />;
}
