import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import styles from "./Line.module.css";
import Card from "../../../UI/Card";

const LineChart = () => {
  return (
    <Card className={styles.line}>
      <Line
        data={{
          labels: ["A", "B", "C", "D", "E"],
          datasets: [
            {
              label: "# of votes",
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        }}
      />
    </Card>
  );
};

export default LineChart;
