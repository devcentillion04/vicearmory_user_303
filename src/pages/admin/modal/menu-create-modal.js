import React from "react";
import { Modal, InputGroup } from "react-bootstrap";
import { FormInput } from "../form-input/forminput";

const AdminMenuModal = ({ isOpen, closeModal }) => {
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
      onHide={closeModal}
    >
      <div className="modal-content" onClose={closeModal}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Create Menu
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={closeModal}
          ></button>
        </div>
        <div className="modal-body p-2">
          <form>
            <div className="form-group">
              <FormInput type="text" label="Name" />
            </div>
            <div className="form-group">
              <FormInput type="text" label="Description" />
            </div>
            <div>
              <FormInput type="select" label="parentid" />
            </div>
            <div class="input-group-text">
              <InputGroup.Checkbox />
              IsActive
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-outline-dark create ">
            Create
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default AdminMenuModal;
