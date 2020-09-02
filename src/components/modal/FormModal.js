import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

const FormModal = ({buttonLabel, className, children}) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Button color="dark" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} centered={true} backdrop={true}>
        <ModalHeader toggle={toggle}>Select Payment Type:</ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
      </Modal>
    </>
  );
}

export default FormModal;