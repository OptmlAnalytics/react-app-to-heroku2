import React from "react";
import { Bar } from "react-chartjs-2";
import styles from "./Bar.module.css";
import { Chart as ChartJS } from "chart.js/auto";
import Card from "../../../UI/Card";
import { Tooltip } from "chart.js";

const BarChart = (props) => {
  return (
    <Card className={props.className}>
      <Bar
        data={{
          labels: props.label,
          datasets: props.datasets,
        }}
        options={props.options}
      />
    </Card>
  );
};

export default BarChart;
