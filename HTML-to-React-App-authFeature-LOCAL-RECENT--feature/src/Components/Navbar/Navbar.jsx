import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styles from "./Navbar.module.css";
import Card from "../UI/Card";
import { Avatar } from "@mui/material";

const Navbar = (props) => {
  const { user } = useAuth0();

  return (
    <Card
      className={`${styles.navbar} ${
        props.isCollapsed && styles["navbar-collapsed"]
      }`}
    >
      <span className="material-icons-sharp">search</span>
      <div className={styles.avatar}>
        <Avatar src={user.picture}></Avatar>
      </div>
    </Card>
  );
};

export default Navbar;
