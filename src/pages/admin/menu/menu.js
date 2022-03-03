import React, { useState } from "react";
import AdminMenuModal from "../modal/menu-create-modal";

const AdminMenu = (props) => {
  const [isClick, setisClick] = useState(false);

  const onCreatemodel = () => {
    console.log(isClick);
    setisClick(!isClick);
  };

  return (
    <div className="container">
      <p className="page_header_name">
        <h2>Menu</h2>
      </p>
      <div className="top_buttons">
        <button className="btn btn-outline-dark m-2" onClick={onCreatemodel}>
          Create New
        </button>
        <AdminMenuModal
          isOpen={isClick}
          closeModal={onCreatemodel}
        ></AdminMenuModal>
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

      <div className="table-content ">
        <table class="table no footer ">
          <thead class="thead-dark  ">
            <tr>
              <th scope="col"> Name</th>
              <th scope="col">Description</th>
              <th scope="col">IsActive</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>

              <td>No Data available</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className=" col-lg-10">
          <p>Showing 0 to 0 of 0 entries</p>
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
              <button type="button" class="btn btn-light"></button>
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
  );
};
export default AdminMenu;
