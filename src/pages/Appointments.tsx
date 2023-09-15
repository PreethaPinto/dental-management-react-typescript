import { useState } from 'react';
import AddButton from '../components/AddButton';
import AppointmentsModalWindow from '../components/AppointmentsModalWindow';
import Calendar from '../components/Calendar';

const Appointments = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);

  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <AddButton
        onClick={handleOpenModal}
        addTitle='Add New Appointment'
        customSx={{ float: 'right' }}
      />
      <AppointmentsModalWindow open={openModal} onClose={handleCloseModal} />
      <Calendar />
    </>
  );
};

export default Appointments;
