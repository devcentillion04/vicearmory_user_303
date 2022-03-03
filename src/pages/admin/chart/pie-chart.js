import React, { Fragment } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

export const PieChart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // max & min both included
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const data = {
    labels,
    datasets: [
      //   {
      //     label: "Dataset 1",
      //     data: labels.map(() => getRandomIntInclusive(0, 100)),
      //     backgroundColor: "rgba(255, 99, 132, 0.5)",
      //   },
      {
        label: "Dataset 2",
        data: labels.map(() => getRandomIntInclusive(0, 100)),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Monthly Sale in %",
      },
    },
  };

  return (
    <Fragment>
      <div className="w-50">
        <div className="card m-5 p-3">
          <Pie data={data} options={options} />
        </div>
      </div>
    </Fragment>
  );
};
