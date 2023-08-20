import { MouseEvent, useState } from 'react';
import ModalWindow from '../components/ModalWindow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {
  Button,
  Card,
  CardContent,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { Add, MoreVert } from '@mui/icons-material';

const options = ['Edit', 'Delete', 'Details'];
const ITEM_HEIGHT = 48;

interface Column {
  id: 'patientName' | 'patientId' | 'age' | 'contactNumber' | 'emailId';
  label: string;
  minWidth?: number;
  align?: 'center';
  fontWeight?: 'bold';
  textAlign?: 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
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

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 900 }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow sx={{ fontWeight: 'bolder' }}>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      fontWeight: column.fontWeight,
                      textAlign: column.textAlign,
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell
                  sx={{
                    minWidth: 100,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}
                >
                  Action
                </TableCell>
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
                          <TableCell
                            key={column.id}
                            align={column.align}
                            sx={{ textAlign: column.textAlign }}
                          >
                            {value}
                          </TableCell>
                        );
                      })}
                      <TableCell align='center'>
                        <IconButton
                          aria-label='more'
                          id='long-button'
                          aria-controls={open ? 'long-menu' : undefined}
                          aria-expanded={open ? 'true' : undefined}
                          aria-haspopup='true'
                          onClick={handleClick}
                        >
                          <MoreVert />
                        </IconButton>
                        <Menu
                          id='long-menu'
                          MenuListProps={{
                            'aria-labelledby': 'long-button',
                          }}
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          PaperProps={{
                            style: {
                              maxHeight: ITEM_HEIGHT * 4.5,
                              width: '20ch',
                            },
                          }}
                        >
                          {options.map((option) => (
                            <MenuItem
                              key={option}
                              selected={option === 'Pyxis'}
                              onClick={handleClose}
                            >
                              {option}
                            </MenuItem>
                          ))}
                        </Menu>
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
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
