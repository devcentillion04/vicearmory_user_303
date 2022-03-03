import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AdminModal from "../modal/modal";
import UploadModal from "../modal/upload-modal";
import DeleteModal from "../modal/delete-modal";

const AdminProduct = (Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isItOpen, setIsItOpen] = useState(false);

  const onOpenModel = () => {
    console.log(`isOpen`, isOpen);
    setIsOpen(!isOpen);
  };

  const onShowModal = () => {
    console.log(isShow);
    setIsShow(!isShow);
  };
  const onLookModal = () => {
    console.log(isItOpen);
    setIsItOpen(!isItOpen);
  };

  console.log("isShow", isShow);
  return (
    <div className="container">
      <div className="container">
        <p className="page_header_name">
          <h2>Product list</h2>
        </p>
        <div className="top_buttons">
          <button className="btn btn-outline-dark m-2" onClick={onOpenModel}>
            Create New
          </button>
          <AdminModal isOpen={isOpen} closeModal={onOpenModel}></AdminModal>
          <button className="btn btn-primary m-2" onClick={onShowModal}>
            Upload PDF
          </button>
          <UploadModal isOpen={isShow} closeModal={onShowModal}></UploadModal>
        </div>
        <div className="select-and-search">
          <div className="col-lg-8 mt-3">
            <span>
              Show
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>10</option>
                <option value="1">25</option>
                <option value="2">50</option>
                <option value="3">100</option>
              </select>{" "}
              Entries
            </span>
          </div>

          <div class="serchbox-on-table col-lg-4  ">
            <input
              type="search"
              className="form-control"
              id="form1"
              placeholder="Search"
            />
            <label className="form-label" for="form1"></label>
            <button type="button" class="btn btn-primary">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="table-content">
          <table class="table no footer ">
            <thead class="thead-dark  ">
              <tr>
                <th scope="col"> Title</th>
                <th scope="col">Metatitle</th>
                <th scope="col">Price</th>
                <th scope="col">IsWeeklyAdvertise</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>abcd</td>
                <td>efgh</td>
                <td>10</td>
                <td>
                  <input
                    class="check-box"
                    style={{ cursor: "not-allowed" }}
                    disabled="disabled"
                    type="checkbox"
                  />
                </td>
                <td>
                  <button
                    type="button"
                    class="btn-sm btn-outline-dark"
                    onClick={onOpenModel}
                  >
                    edit
                  </button>{" "}
                  |{" "}
                  <button
                    type="button"
                    class="btn-sm btn-outline-danger"
                    onClick={onLookModal}
                  >
                    Delete
                  </button>
                  <DeleteModal
                    isOpen={isItOpen}
                    closeModal={onLookModal}
                  ></DeleteModal>
                </td>
              </tr>
              <tr>
                <td>Product1</td>
                <td>test15</td>
                <td>10</td>
                <td>
                  <input
                    class="check-box"
                    style={{ cursor: "not-allowed" }}
                    disabled="disabled"
                    type="checkbox"
                  />
                </td>
                <td>
                  <button
                    type="button"
                    class="btn-sm btn-outline-dark"
                    onClick={onOpenModel}
                  >
                    edit
                  </button>{" "}
                  |{" "}
                  <button type="button" class="btn-sm btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>Product123</td>
                <td>Product123</td>
                <td>10</td>
                <td>
                  <input
                    class="check-box"
                    style={{ cursor: "not-allowed" }}
                    disabled="disabled"
                    type="checkbox"
                  />
                </td>
                <td>
                  <button
                    type="button"
                    class="btn-sm btn-outline-dark"
                    onClick={onOpenModel}
                  >
                    edit
                  </button>{" "}
                  |{" "}
                  <button type="button" class="btn-sm btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>test15</td>
                <td>test15</td>
                <td>10</td>
                <td>
                  <input
                    class="check-box"
                    style={{ cursor: "not-allowed" }}
                    disabled="disabled"
                    type="checkbox"
                  />
                </td>
                <td>
                  <button
                    type="button"
                    class="btn-sm btn-outline-dark"
                    onClick={onOpenModel}
                  >
                    edit
                  </button>{" "}
                  |{" "}
                  <button type="button" class="btn-sm btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>{" "}
              <tr>
                <td>test15</td>
                <td>test15</td>
                <td>10</td>
                <td>
                  <input
                    class="check-box"
                    style={{ cursor: "not-allowed" }}
                    disabled="disabled"
                    type="checkbox"
                  />
                </td>
                <td>
                  <button
                    type="button"
                    class="btn-sm btn-outline-dark"
                    onClick={onOpenModel}
                  >
                    edit
                  </button>{" "}
                  |{" "}
                  <button type="button" class="btn-sm btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>test15</td>
                <td>test15</td>
                <td>10</td>
                <td>
                  <input
                    class="check-box"
                    style={{ cursor: "not-allowed" }}
                    disabled="disabled"
                    type="checkbox"
                  />
                </td>
                <td>
                  <button
                    type="button"
                    class="btn-sm btn-outline-dark"
                    onClick={onOpenModel}
                  >
                    edit
                  </button>{" "}
                  |{" "}
                  <button type="button" class="btn-sm btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>test15</td>
                <td>test15</td>
                <td>10</td>
                <td>
                  <input
                    class="check-box"
                    style={{ cursor: "not-allowed" }}
                    disabled="disabled"
                    type="checkbox"
                  />
                </td>
                <td>
                  <button
                    type="button"
                    class="btn-sm btn-outline-dark"
                    onClick={onOpenModel}
                  >
                    edit
                  </button>{" "}
                  |{" "}
                  <button type="button" class="btn-sm btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>test15</td>
                <td>test15</td>
                <td>10</td>
                <td>
                  <input
                    class="check-box"
                    style={{ cursor: "not-allowed" }}
                    disabled="disabled"
                    type="checkbox"
                  />
                </td>
                <td>
                  <button
                    type="button"
                    class="btn-sm btn-outline-dark"
                    onClick={onOpenModel}
                  >
                    edit
                  </button>{" "}
                  |{" "}
                  <button type="button" class="btn-sm btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>test15</td>
                <td>test15</td>
                <td>10</td>
                <td>
                  <input
                    class="check-box"
                    style={{ cursor: "not-allowed" }}
                    disabled="disabled"
                    type="checkbox"
                  />
                </td>
                <td>
                  <button
                    type="button"
                    class="btn-sm btn-outline-dark"
                    onClick={onOpenModel}
                  >
                    edit
                  </button>{" "}
                  |{" "}
                  <button type="button" class="btn-sm btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>test15</td>
                <td>test15</td>
                <td>10</td>
                <td>
                  <input
                    class="check-box"
                    style={{ cursor: "not-allowed" }}
                    disabled="disabled"
                    type="checkbox"
                  />
                </td>
                <td>
                  <button
                    type="button"
                    class="btn-sm btn-outline-dark"
                    onClick={onOpenModel}
                  >
                    edit
                  </button>{" "}
                  |{" "}
                  <button type="button" class="btn-sm btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>test15</td>
                <td>test15</td>
                <td>10</td>
                <td>
                  <input
                    class="check-box"
                    style={{ cursor: "not-allowed" }}
                    disabled="disabled"
                    type="checkbox"
                  />
                </td>
                <td>
                  <button
                    type="button"
                    class="btn-sm btn-outline-dark"
                    onClick={onOpenModel}
                  >
                    edit
                  </button>{" "}
                  |{" "}
                  <button type="button" class="btn-sm btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>test15</td>
                <td>test15</td>
                <td>10</td>
                <td>
                  <input
                    class="check-box"
                    style={{ cursor: "not-allowed" }}
                    disabled="disabled"
                    type="checkbox"
                  />
                </td>
                <td>
                  <button
                    type="button"
                    class="btn-sm btn-outline-dark"
                    onClick={onOpenModel}
                  >
                    edit
                  </button>{" "}
                  |{" "}
                  <button type="button" class="btn-sm btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row">
          <div className=" col-lg-10">
            <p>Showing 1 to 4 of 4 entries</p>
          </div>
          <div className="col-lg-2 justify-content-end">
            <div class="" id="datatableArmory_paginate">
              <a
                class="paginate_button previous disabled"
                aria-controls="datatableArmory"
                style={{ textDecoration: "none", color: "black" }}
              >
                Previous
              </a>
              <span>
                <button type="button" class="btn btn-light">
                  1
                </button>
              </span>
              <a
                class="paginate_button next disabled"
                aria-controls="datatableArmory"
                style={{ textDecoration: "none", color: "black" }}
              >
                Next
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
