import { useEffect, useState } from 'react';
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
import ModalWindow from './ModalWindow';
import { Link } from 'react-router-dom';

interface Column {
  id: string;
  label: string;
  minWidth?: number;
}

interface RowData {
  [key: string]: any;
}

interface CustomTableProps {
  columns: Column[];
  data: RowData[];
}

export default function CustomTable({ columns, data }: CustomTableProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [context, setContext] = useState<'patient' | 'dentist'>('dentist');

  const [editId, setEditId] = useState(-1);
  const [openModal, setOpenModal] = useState(false);

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

  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ height: '60vh' }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <>
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  </>
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
      <ModalWindow open={openModal} onClose={handleClose} context={context} />
    </>
  );
}
