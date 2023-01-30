import React from "react";
import Logo from "./Logo";
import Options from "./Options/Options";
import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  const { isCollapsed, collapseHandler } = props;
  return (
    <aside className={isCollapsed ? styles.collapse : undefined}>
      <Logo isCollapsed={isCollapsed} collapse={collapseHandler} />
      <Options
        selectedOption={props.activePage}
        setSelectedOption={props.setSelectedOption}
        isCollapsed={isCollapsed}
      />
    </aside>
  );
};

export default Sidebar;
