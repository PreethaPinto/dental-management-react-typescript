import React, { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { Delete, Edit, MoreVert } from '@mui/icons-material';
import ModalWindow from './ModalWindow';

const ITEM_HEIGHT = 48;

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'center';
  fontWeight?: 'bold';
  textAlign?: 'center';
  format?: (value: number) => string;
}

interface Row {
  [key: string]: any;
}

interface CustomTableProps {
  columns: Column[];
  rows: Row[];
  actions: string[];
}

export default function CustomTable({
  columns,
  rows,
  actions,
}: CustomTableProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openModal, setOpenModal] = useState(false);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
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

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget as HTMLElement;
    setAnchorEl(target);
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
                      key={row.patientId}
                      hover
                      role='checkbox'
                      tabIndex={-1}
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
                          onClick={() => setOpenModal(true)}
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
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <ModalWindow open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}
