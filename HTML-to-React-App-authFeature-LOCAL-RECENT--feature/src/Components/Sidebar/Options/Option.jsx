import React from "react";
import styles from "./Option.module.css";

const Option = (props) => {
  return (
    <div
      className={props.active ? styles.active : undefined}
      onClick={props.onClick}
    >
      <span className="material-icons-sharp"> {props.icon} </span>
      {!props.isCollapsed && <h3>{props.text}</h3>}
    </div>
  );
};

export default Option;
