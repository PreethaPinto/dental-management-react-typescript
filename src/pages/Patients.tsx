import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

interface Column {
  id: 'patientName' | 'patientId' | 'emailId' | 'contactNumber' | 'action';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'patientName', label: 'Patient Name', minWidth: 170 },
  { id: 'patientId', label: 'Patient ID', minWidth: 100 },
  {
    id: 'emailId',
    label: 'Age',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'contactNumber',
    label: 'Email ID',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  patientName: string;
  patientId: number;
  emailId: string;
  contactNumber: number;
  action: string;
}

function createData(
  patientName: string,
  patientId: number,
  emailId: string,
  contactNumber: number,
  action: string
): Data {
  return { patientName, patientId, emailId, contactNumber, action };
}

const rows = [
  createData('Jane Austen', 1, 'mail@email.com', 3287263, 'Action'),
  createData('Sam Kerr', 2, 'mail@email.com', 3287263, 'Action'),
  createData('Lauren James', 3, 'mail@email.com', 3287263, 'Action'),
  createData('Alex Russo', 4, 'mail@email.com', 3287263, 'Action'),
  createData('Justin Raso', 5, 'mail@email.com', 3287263, 'Action'),
  createData('Natalie Portman', 6, 'mail@email.com', 3287263, 'Action'),
  createData('Chris Nolan', 7, 'mail@email.com', 3287263, 'Action'),
  createData('Jake Smith', 8, 'mail@email.com', 3287263, 'Action'),
  createData('Jaden Lopez', 9, 'mail@email.com', 3287263, 'Action'),
  createData('Maria Goretti', 10, 'mail@email.com', 3287263, 'Action'),
  createData('Jane Austen', 1, 'mail@email.com', 3287263, 'Action'),
  createData('Sam Kerr', 2, 'mail@email.com', 3287263, 'Action'),
  createData('Lauren James', 3, 'mail@email.com', 3287263, 'Action'),
  createData('Alex Russo', 4, 'mail@email.com', 3287263, 'Action'),
  createData('Justin Raso', 5, 'mail@email.com', 3287263, 'Action'),
  createData('Natalie Portman', 6, 'mail@email.com', 3287263, 'Action'),
  createData('Chris Nolan', 7, 'mail@email.com', 3287263, 'Action'),
  createData('Jake Smith', 8, 'mail@email.com', 3287263, 'Action'),
  createData('Jaden Lopez', 9, 'mail@email.com', 3287263, 'Action'),
  createData('Maria Goretti', 10, 'mail@email.com', 3287263, 'Action'),
  createData('Jane Austen', 1, 'mail@email.com', 3287263, 'Action'),
  createData('Sam Kerr', 2, 'mail@email.com', 3287263, 'Action'),
  createData('Lauren James', 3, 'mail@email.com', 3287263, 'Action'),
  createData('Alex Russo', 4, 'mail@email.com', 3287263, 'Action'),
  createData('Justin Raso', 5, 'mail@email.com', 3287263, 'Action'),
  createData('Natalie Portman', 6, 'mail@email.com', 3287263, 'Action'),
  createData('Chris Nolan', 7, 'mail@email.com', 3287263, 'Action'),
  createData('Jake Smith', 8, 'mail@email.com', 3287263, 'Action'),
  createData('Jaden Lopez', 9, 'mail@email.com', 3287263, 'Action'),
  createData('Maria Goretti', 10, 'mail@email.com', 3287263, 'Action'),
  createData('Jane Austen', 1, 'mail@email.com', 3287263, 'Action'),
  createData('Sam Kerr', 2, 'mail@email.com', 3287263, 'Action'),
  createData('Lauren James', 3, 'mail@email.com', 3287263, 'Action'),
  createData('Alex Russo', 4, 'mail@email.com', 3287263, 'Action'),
  createData('Justin Raso', 5, 'mail@email.com', 3287263, 'Action'),
  createData('Natalie Portman', 6, 'mail@email.com', 3287263, 'Action'),
  createData('Chris Nolan', 7, 'mail@email.com', 3287263, 'Action'),
  createData('Jake Smith', 8, 'mail@email.com', 3287263, 'Action'),
  createData('Jaden Lopez', 9, 'mail@email.com', 3287263, 'Action'),
  createData('Maria Goretti', 10, 'mail@email.com', 3287263, 'Action'),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 900 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role='checkbox'
                    tabIndex={-1}
                    key={row.patientId}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
