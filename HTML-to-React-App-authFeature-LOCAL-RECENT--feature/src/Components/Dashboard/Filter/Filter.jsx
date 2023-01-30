import React from "react";
import Card from "../../UI/Card";
import styles from "./Filter.module.css";

const Filter = () => {
  return (
    <Card className={styles.filter}>
      <h1 style={{ margin: "0 auto 0 0" }}>Filter</h1>
      <div style={{ marginRight: "25px" }}>
        <label htmlFor="devivceType">Device type: </label>
        <select name="deviceType" id="devivceType">
          <option value="All">All</option>
          <option value="EDZ">EDZ</option>
          <option value="GX IV">GX IV</option>
        </select>
      </div>
      <div>
        <label htmlFor="Province">Province: </label>
        <select name="deviceType" id="devivceType">
          <option value="All">All</option>
          <option value="DKI Jakarta">DKI Jakarta</option>
          <option value="Jawa Tengah">Jawa Tengah</option>
          <option value="Jawa Timur">Jawa Timur</option>
          <option value="Bali">Bali</option>
        </select>
      </div>
    </Card>
  );
};

export default Filter;
