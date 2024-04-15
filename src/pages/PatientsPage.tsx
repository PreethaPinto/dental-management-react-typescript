import React, { useEffect, useState } from 'react';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TablePagination,
} from '@mui/material';
import { Patient } from '../interfaces/Patient';
import { patientData } from '../data/patientData';
import { patientColumns } from '../columns/patientColumns';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PatientForm, { FormFields, FormMode } from '../components/PatientForm';
import AddButton from '../components/AddButton';

export default function PatientsPage() {
  const [data, setData] = useState<Patient[]>([]);
  const [patientTable, setPatientTable] = useState<Patient[]>(patientData);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const [openPatientForm, setOpenPatientForm] = useState(false);

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

  const handleOpenPatientForm = () => {
    setSelectedPatient(null);
    setOpenPatientForm(true);
  };
  const handleClosePatientForm = () => {
    setOpenPatientForm(false);
  };
 

  const handleDelete = (idToDelete: number) => {
    const updatedPatientData = patientData.filter(
      (patient) => patient.id !== idToDelete
    );
    console.log(updatedPatientData);
    setPatientTable(updatedPatientData);
  };

  const handleEdit = (id: number) => {
    const selected = patientTable.find((patient) => patient.id === id);
    const selectedNew = data.find((newPatient) => newPatient.id === id);
    console.log(selected)
    console.log(selectedNew)

    if (selected) {
    setSelectedPatient(selected);
    } else if (selectedNew) {
     setSelectedPatient(selectedNew);
    }  
    setOpenPatientForm(true); 
  }



  const handlePatientFormSubmit= (formData: FormFields) => {
    if (selectedPatient) {
      const updatedData = data.map(patient => {
        if (patient.id === selectedPatient.id) {
          return { ...patient, ...formData };
        }
        return patient;
      });
      setData(updatedData);
  
      const updatedTable = patientTable.map(patient => {
        if (patient.id === selectedPatient.id) {
          return { ...patient, ...formData };
        }
        return patient;
      });
      setPatientTable(updatedTable);
    } else {
  
      const newPatient: Patient = {
        id: patientTable.length + 1,
        firstName: formData.firstName,
        lastName: formData.lastName,
        age: formData.age,
        emailId: formData.emailId,
        phone: formData.phone,
      };
      setData(prevData => [...prevData, newPatient]);
    }
  
    handleClosePatientForm();
  };

  return (
    <>
      <AddButton
        onClick={handleOpenPatientForm}
        addTitle={'Add New Patient'}
        customSx={{ float: 'right', margin: 2 }}
      />

      <PatientForm
        onSubmitPatientFormData={handlePatientFormSubmit}
        open={openPatientForm}
        initialPatient={selectedPatient || undefined}
        onClose={handleClosePatientForm}
        formMode={selectedPatient ? FormMode.Update : FormMode.Add}

      />

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 900 }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {patientColumns
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((column) => (
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
              {[...patientTable, ...data]
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell align='center'>{row.id} </TableCell>
                    <TableCell align='center'>
                      {row.firstName} {row.lastName}
                    </TableCell>
                    <TableCell align='center'>{row.age}</TableCell>
                    <TableCell align='center'>{row.emailId}</TableCell>
                    <TableCell align='center'>{row.phone}</TableCell>
                    <TableCell align='center'>
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
          component='div'
          count={patientTable.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    
    </>
  );
}
