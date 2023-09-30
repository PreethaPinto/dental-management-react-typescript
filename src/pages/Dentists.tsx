import React, { useEffect, useState } from 'react';
import CustomTable from '../components/CustomTable';
import axios from 'axios';
import AddButton from '../components/AddButton';
import ModalWindow from '../components/ModalWindow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Delete, Edit } from '@mui/icons-material';

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
  {
    id: 'actions',
    label: 'Actions',
    minWidth: 170,
    align: 'center',
    fontWeight: 'bold',
  },
];

export default function Dentists() {
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
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align='center'
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role='checkbox' tabIndex={-1} key={index}>
                      {columns.map((column) => {
                        let cellContent;

                        if (column.id === 'fullName') {
                          const fullName = `${row.firstName} ${row.lastName}`;
                          cellContent = fullName;
                        } else {
                          cellContent = row[column.id];
                        }

                        // Render the cell content with an Edit button
                        return (
                          <TableCell key={column.id} align='center'>
                            {cellContent}
                            {column.id === 'actions' && (
                              <>
                                <Link to={`edit/${row.id}`}>
                                  <IconButton aria-label='edit'>
                                    <Edit onClick={handleOpen} />
                                  </IconButton>
                                </Link>
                                <IconButton
                                  aria-label='edit'
                                  onClick={() => handleEdit(row.id)}
                                >
                                  <Delete />
                                </IconButton>
                              </>
                            )}
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
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
