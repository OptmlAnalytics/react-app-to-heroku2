import React, { useState, useEffect } from "react";
import Stats from "./Dashboard/Stats";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import File from "./Pages/File/File";
import styles from "./Dashboard.module.css";
import Loader from "./UI/Loader";

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedPage, setSelectedPage] = useState(1);
  const [resp, setResp] = useState([]);

  const PAGES = [
    <Stats resp={resp} />,
    <File setPage={setSelectedPage} setResp={setResp} />,
    <Loader className={styles.loader} />,
  ];

  const collapseHandler = () => {
    setIsCollapsed((pv) => !pv);
  };

  const changePage = (id) => {
    setSelectedPage(2);
    setTimeout(() => {
      setSelectedPage(id);
    }, 2000);
  };

  return (
    <>
      <Navbar isCollapsed={isCollapsed} />
      <Sidebar
        activePage={selectedPage}
        setSelectedOption={changePage}
        isCollapsed={isCollapsed}
        collapseHandler={collapseHandler}
      />
      <main className={isCollapsed ? styles.Collpased : undefined}>
        {PAGES[selectedPage]}
      </main>
    </>
  );
};

export default Dashboard;
