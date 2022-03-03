import React, { Fragment, useState } from "react";
import Graph from "../chart/chart";
import Chart from "../chart/chart";
import { PieChart } from "../chart/pie-chart";

const AdminDashboard = () => {
  return (
    <Fragment>
      {" "}
      <div className="d-flex content-sm-center">
        <Graph />
        <PieChart />
      </div>
    </Fragment>
  );
};

export default AdminDashboard;
