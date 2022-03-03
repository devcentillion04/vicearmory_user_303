import React from "react";
import { Modal, InputGroup } from "react-bootstrap";
import { FormInput } from "../form-input/forminput";

const AdminModal = ({ isOpen, closeModal }) => {
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
      <div className="modal-dialog" role="document">
        <div className="modal-content" onClose={closeModal}>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Create Product
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <FormInput type="text" label="Title" />
              </div>
              <div className="form-group">
                <FormInput type="text" label="MetaTitle" />
              </div>
              <div className="form-group">
                <FormInput type="text" label="Summary" />
              </div>
              <div className="form-group">
                <FormInput type="text" label="Type" />
              </div>
              <div className="form-group">
                <FormInput type="Number" label="Price" />
              </div>
              <div className="form-group">
                <FormInput type="file" label="ProductImage" />
              </div>

              <div class="input-group-text">
                <InputGroup.Checkbox />
                IsWeeklyAdvertise
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-dark create ">
              Create
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default AdminModal;
