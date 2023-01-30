import React, { useEffect, useState } from "react";
import styles from "./Stats.module.css";
import Insights from "./Insights/Insights";
import Map from "./Charts/Map/Map";
import BarChart from "./Charts/Bar/Bar";
import Filter from "./Filter/Filter";
import HashMap from "hashmap";
import { Tooltips } from "chart.js";

const Stats = () => {
  // console.log(props.resp);

  // const [histTest, setHistTest] = useState([]);

  // const labAreaUtilizations = new HashMap();
  // var valuesForChartValues = [];
  // var latitude = []
  // var longitude = []
  // var valuesForChartUtilization = []
  // var valuesForChartDevice = []
  // var numberoflab = []
  // const device = new Set();
  // const labnames = new Set();
  // var my_liste = []
  // for (var i = 1; i < props.resp.length; i++) {
  //   var el = props.resp[i];
  //   var my_el = []
  //   my_el.push(el.Area);
  //   my_el.push(el.Hist_test);
  //   my_el.push(el.Latitude);
  //   my_el.push(el.Longitude);
  //   my_el.push(el.Capacity_Utilization);
  //   my_el.push(el.DeviceType);
  //   my_el.push(el.Lab)
  //   device.add(el.DeviceType);
  //   labAreaUtilizations.set(el.Area, 0)
  //   labnames.add(el.Area);
  //   my_liste.push(my_el)
  // }

  // var devices = []
  // var devices = Array.from(device);

  // var valuesForChartNames = Array.from(labnames)
  // console.log(valuesForChartNames)
  // var device1Utilization = 0;
  // var device2Utilization = 0;
  // var device1lab = 0;
  // var device2lab = 0;
  // var histTestValuesForEachLocation = []
  // for (var x = 0; x < my_liste.length; x++) {
  //   valuesForChartValues.push(my_liste[x][1])
  //   latitude.push(my_liste[x][2]);
  //   longitude.push(my_liste[x][3]);
  //   valuesForChartUtilization.push(my_liste[x][4]);
  //   valuesForChartDevice.push(my_liste[x][5]);
  //   if (my_liste[x][5] === devices[0]) {
  //     device1Utilization = device1Utilization + my_liste[x][4];
  //     device1lab = device1lab + 1;
  //   } else if (my_liste[x][5] === devices[1]) {
  //     device2Utilization = device2Utilization + my_liste[x][4];
  //     device2lab = device2lab + 1;
  //   }

  //   for (var y = 0; y < labnames.length; y++) {
  //     if (labnames[y] === my_liste[x][0]) {
  //       labAreaUtilizations.set(labnames[y], labAreaUtilizations.get(labnames[y]) + my_liste[x][1])
  //     }
  //   }
  // }
  // for (var z = 0; z < labnames.length; z++) {
  //   histTestValuesForEachLocation.push(labAreaUtilizations.get(labnames[z]));
  // }
  // console.log(histTestValuesForEachLocation);

  const utilizationDatasets = [
    {
      label: "Hist test",
      data: [30723, 0, 130142, 148940, 137180, 24168, 34017, 118777],
      borderWidth: 1,

    },
  ];
  const dataonutilizationp = [
    {
      label: "Utilization",
      data: [26, 0, 23, 27, 42, 20, 36, 91],
      borderWidth: 1,
    },
  ];

  const dataonverticalutilizationp = [
    {
      label: "Utilization",
      data: [29, 26],
      borderWidth: 1,
    },
  ];

  const dataonverticalnooflabs = [
    {
      label: "Utilization",
      data: [178, 410],
      borderWidth: 1,
    },
  ];

  const option1 = {
    scales: {
      x: {
        grid: {
          display: false
        },
      },
      y: {
        grid: {
          display: false
        },
      },
    },
  };

  const option = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.formattedValue + "%";
          },
        },
      },
    },
    indexAxis: "y",
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          // format: {
          //   style: "percent",
          // },
          callback: function (value, index, ticks) {
            return value + " %";
          },
        },
      },
      y: {
        grid: {
          display: false
        }

      },
    },
  };

  return (
    <>
      <Filter />
      <Insights />
      <Map />
      <div className={styles.barContainer}>
        <BarChart
          isHorizontal={false}
          className={styles.bar}
          datasets={utilizationDatasets}
          options={option1}
          label={[
            "Bali",
            "DKI Jakarta",
            "Jawa Barat",
            "Jawa Tengah",
            "Jawa Timur",
            "Sumatera Barat",
            "Sumatera Selatan",
            "Sumatera Utara",
          ]}
        />
        <BarChart
          isHorizontal={true}
          className={styles.bar}
          datasets={dataonverticalutilizationp}
          options={option}
          label={["GX IV", "EDL"]}
        />
      </div>

    </>
  );
};

export default Stats;
