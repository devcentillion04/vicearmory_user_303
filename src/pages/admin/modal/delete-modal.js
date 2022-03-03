import React from "react";
import { Modal } from "react-bootstrap";

const DeleteModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      appear
      show={isOpen}
      //   onHide={closeModal}
    >
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={closeModal}
          ></button>
        </div>
        <div className="modal-body">
          <h5>Are you sure you want to Delete?</h5>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={closeModal}
          >
            Delete
          </button>
          <button
            type="button"
            className="btn btn-outline-dark create "
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default DeleteModal;
