import React from "react";
import {
  Circle,
  CircleMarker,
  MapContainer,
  Popup,
  TileLayer,
  Marker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";
import MapPie from "./MapPie";
import { Icon } from "leaflet";
import L from "leaflet";
import pie from "../../../../assets/images/pie.png"




const fillBlueOptions = { color: "blue" };

const locations = [
  {
    deviceType: "EDL",
    locationName: "Bali",
    latlong: [-8.454211, 115.352],
    util: 0.152,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-7.712914, 110.016597],
    util: 0.284,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-8.67355, 115.232172],
    util: 0.11,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-7.473547, 110.228542],
    util: 0.074,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-6.883944, 107.594247],
    util: 0.116,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [3.585222, 98.675572],
    util: 0.54,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-2.991144, 104.755825],
    util: 0.75,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-7.661517, 112.537225],
    util: 0.792,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-7.661517, 112.537225],
    util: 0.79,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-7.661517, 112.537225],
    util: 0.12,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-8.653139, 114.666794],
    util: 0.12,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-9.349154806, 120.9914955],
    util: 0.121,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-8.454211, 115.352],
    util: 0.112,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-8.67775, 115.205522],
    util: 0.412,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-7.661517, 112.537225],
    util: 0.212,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-8.643361, 115.21],
    util: 0.12,
  },
  {
    deviceType: "EDL",
    locationName: "Sumatera Barat",
    latlong: [-0.915019, 100.358567],
    util: 0.12,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-0.945678, 100.372372],
    util: 0.32,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-0.889017, 100.363],
    util: 0.52,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-0.940067, 100.359458],
    util: 0.122,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-0.315819, 100.374689],
    util: 0.92,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-0.947014, 100.355031],
    util: 0.542,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [3.458222, 98.880436],
    util: 0.222,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [3.585222, 98.675572],
    util: 0.124,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-2.948536, 104.732983],
    util: 0.12,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-2.991144, 104.755825],
    util: 0.12,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-5.385256, 105.260406],
    util: 0.12,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [2.360142, 99.134878],
    util: 0.182,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [3.137533, 98.452942],
    util: 0.12,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-2.970667, 104.750758],
    util: 0.32,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-0.945789, 100.357294],
    util: 0.125,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-2.976347, 104.742911],
    util: 0.62,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-2.927764, 104.699656],
    util: 0.712,
  },
  {
    deviceType: "GX IV",
    locationName: "Jakarta",
    latlong: [3.575194, 98.711631],
    util: 0.21,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [3.68245, 98.665772],
    util: 0.26,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [3.582061, 98.654728],
    util: 0.61,
  },
  {
    deviceType: "GX IV",
    locationName: "Jakarta",
    latlong: [3.585, 98.675633],
    util: 0.49,
  },
  {
    deviceType: "EDL",
    locationName: "Jakarta",
    latlong: [-6.221719, 106.934689],
    util: 0.47,
  },
  {
    deviceType: "GX IV",
    locationName: "Jakarta",
    latlong: [-6.186967, 106.797753],
    util: 0.72,
  },
];

const getIcon = (_iconSize) => {
  return L.icon({
    iconUrl: pie,
    iconSize: [_iconSize],
  });
};

const Map = () => {
  return (

    <div className={styles["map"]}>
      <MapContainer
        className={`${styles.mappy}`}
        center={[-7.712914, 110.016597]}
        zoom={7}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {locations.map((location, ind) => (
          <Marker
            icon={getIcon(45)}

            key={ind}
            position={location.latlong}
          // pathOptions={fillBlueOptions}
          // radius={25}
          >
            <Popup>
              <span>{"Device type: " + location.deviceType}</span>
              <br />
              <span>
                {"Utilization: " + (location.util * 100).toFixed(2) + "%"}
              </span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div >
  );
};

export default Map;
