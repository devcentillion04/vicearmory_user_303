import React, { Fragment } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const Graph = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
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
        label: "Sale ",
        data: labels.map(() => getRandomIntInclusive(0, 100)),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sale",
      },
    },
  };

  return (
    <div className="w-50 ">
      <div className="m-5 card p-3">
        <Bar options={options} data={data} />;
      </div>
    </div>
  );
};

export default Graph;
