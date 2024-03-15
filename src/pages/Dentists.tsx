import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dentist } from "../interfaces/Dentist";
import {dentistData} from '../data/dentistData'
import { dentistColumns } from "../columns/dentistColumns";
import axios from "axios";
import AddButton from "../components/AddButton";
import ModalWindow from "../components/ModalWindow";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button, Icon, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Delete, Edit } from "@mui/icons-material";
import DentistForm from "../components/DentistForm";
import { FormFields } from "../components/DentistForm";
import { C } from "@fullcalendar/core/internal-common";


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
  const [dentistTable, setDentistTable] = useState<Dentist[]>(dentistData)
  const [openDentistForm, setOpenModalDentistForm] = useState(false);
  const [selectedDentist, setSelectedDentist] = useState<Dentist | null>(null)
  const [context, setContext] = useState<"patient" | "dentist">("dentist");

  const handleOpenDentistForm = () => {
    setOpenModalDentistForm(true);
  };

  const handleCloseDentistForm = () => {
    setOpenModalDentistForm(false);
  };

  const handleFormSubmit = (formData: FormFields) => {
    const newId = dentistData.length + (data.length + 1);
    const newDentist: Dentist = {
      id: newId,
      firstName: formData.firstName,
      lastName: formData.lastName,
      speciality: formData.speciality,
      emailId: formData.emailId,
      phone: formData.phone,
    };

    setData((prevData) => [...prevData, newDentist]);
  };

  const handleDelete = (idToDelete: number) => {
    const updatedDentistData = dentistData.filter((row) => row.id !== idToDelete);
    console.log(updatedDentistData)
    setDentistTable(updatedDentistData);
   
    const updatedData = data.filter((row) => row.id !== idToDelete);
    setData(updatedData);
  }

  const handleEdit = (id: number) => {
    const selected = dentistTable.find((row) => row.id === id);
    console.log(selected)

    if (selected) {
      setSelectedDentist(selected);
      setOpenModalDentistForm(true)
    }}

  return (
    <>
      <AddButton
        onClick={handleOpenDentistForm}
        addTitle={"Add New Dentist"}
        customSx={{ float: "right", margin: 2 }}
      />

      <DentistForm
        open={openDentistForm}
        onClose={handleCloseDentistForm}
        onSubmitData={handleFormSubmit}
        initialDentist={selectedDentist}
      />

      {/* <ModalWindow open={open} onClose={handleClose} context={context} /> */}
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 900 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {dentistColumns.map((column) => (
                  <TableCell
                    key={column.id}
                    align="center"
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {[...dentistTable, ...data]
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">
                      {row.firstName} {row.lastName}
                    </TableCell>
                    <TableCell align="center">{row.speciality}</TableCell>
                    <TableCell align="center">{row.emailId}</TableCell>
                    <TableCell align="center">{row.phone}</TableCell>
                    <TableCell align="center">
                      <Button onClick={() => handleDelete(row.id)}>
                        <DeleteIcon />
                      </Button>
                      <Button onClick={() => handleEdit(row.id)}>
                        <EditIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>

          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
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





  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3000/dentists')
  //     .then((response) => setData(response.data))
  //     .catch((error) => console.log(error));
  // }, []);

  

            {/* {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role='checkbox' tabIndex={-1} key={index}>
                      {dentistColumns.map((column) => {
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
                })} */}



