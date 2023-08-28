import { useState } from 'react';
import AddButton from '../components/AddButton';
import AppointmentsModalWindow from '../components/AppointmentsModalWindow';

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
    </>
  );
};

export default Appointments;
