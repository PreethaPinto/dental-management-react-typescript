import { useState } from 'react';
import ModalWindow from '../components/ModalWindow';

const Edit = () => {
  const [openModal, setOpenModal] = useState(false);
  const [context, setContext] = useState<'patient' | 'dentist'>('dentist');

  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <>
      <ModalWindow open={openModal} onClose={handleClose} context={context} />
    </>
  );
};

export default Edit;
