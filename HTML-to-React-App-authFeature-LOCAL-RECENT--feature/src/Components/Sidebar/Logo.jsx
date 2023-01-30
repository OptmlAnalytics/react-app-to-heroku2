import React from "react";
import logo from "../../assets/images/ong.png";
import styles from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={styles.top}>
      {!props.isCollapsed && (
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
      )}
      <div className={styles.icon} id="close-btn" onClick={props.collapse}>
        <span className="material-icons-sharp">
          {props.isCollapsed ? "menu" : "close"}
        </span>
      </div>
    </div>
  );
};

export default Logo;
