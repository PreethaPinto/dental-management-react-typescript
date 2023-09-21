import { useEffect, useState } from 'react';
import CustomTable from '../components/CustomTable';
import axios from 'axios';
import { cl } from '@fullcalendar/core/internal-common';
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const actions = ['Edit', 'Delete', 'Details'];

interface Patient {
  firstName: string;
  lastName: string;
  age: number;
  emailId: string;
  contact: string;
}

interface Column {
  id: 'fullName' | 'age' | 'emailId' | 'contact';
  label: string;
  minWidth?: number;
  align?: 'center';
  format?: (value: number) => string;
}

export default function PatientTable() {
  const [data, setData] = useState<Patient[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/patients')
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const columns: readonly Column[] = [
    { id: 'fullName', label: 'Full Name', minWidth: 170 },
    { id: 'age', label: 'Age', minWidth: 100 },
    {
      id: 'emailId',
      label: 'Email ID',
      minWidth: 170,
      align: 'center',
      format: (value: number) => value.toLocaleString('en-US'),
    },
    {
      id: 'contact',
      label: 'Contact Number',
      minWidth: 170,
      align: 'center',
      format: (value: number) => value.toLocaleString('en-US'),
    },
  ];

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget as HTMLElement;
    setAnchorEl(target);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ height: '60vh' }}>
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
              <TableCell align='center'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      if (column.id === 'fullName') {
                        const fullName = `${row.firstName} ${row.lastName}`;
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {fullName}
                          </TableCell>
                        );
                      } else {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      }
                    })}
                    <TableCell align='center'>
                      <IconButton
                        aria-label='more'
                        id='long-button'
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup='true'
                      >
                        <Edit />
                      </IconButton>

                      <IconButton
                        aria-label='more'
                        id='long-button'
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup='true'
                        onClick={handleClick}
                      >
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
