import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children, deleteCard, setLoadingModal }) => {
  return createPortal(
    <section className="modal">
      <div className="modal-content">
        {children}
        <button onClick={deleteCard}>YES</button>
        <button onClick={() => setLoadingModal(false)}>NO</button>
      </div>
    </section>,
    document.getElementById("modal")
  );
};

export default Modal;
