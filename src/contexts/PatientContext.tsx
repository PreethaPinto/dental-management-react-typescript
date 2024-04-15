// PatientContext.tsx

import React, { createContext, useContext, useState } from 'react';

interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  emailId: string;
  phone: number;
}

interface PatientContextType {
  patients: Patient[];
  addPatient: (patient: Patient) => void;
}

const PatientContext = createContext<PatientContextType>({
  patients: [],
  addPatient: () => {},
});

export const usePatientContext = () => useContext(PatientContext);

export const PatientProvider: React.FC = ({ children }) => {
  const [patients, setPatients] = useState<Patient[]>([]);

  const addPatient = (patient: Patient) => {
    setPatients([...patients, patient]);
  };

  return (
    <PatientContext.Provider value={{ patients, addPatient }}>
      {children}
    </PatientContext.Provider>
  );
};
