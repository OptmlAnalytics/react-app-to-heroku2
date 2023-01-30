import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Option from "./Option";
import styles from "./Options.module.css";

/**
 * *More segregation is required
 * !Segregate Options into individual Option and map them after stroring them into an array
 */

const Options = (props) => {
  const { logout } = useAuth0();

  return (
    <div className={styles.sidebar}>
      <Option
        isCollapsed={props.isCollapsed}
        text={"Network summary"}
        icon={"grid_view"}
        onClick={props.setSelectedOption.bind(null, 0)}
        active={props.selectedOption === 0 ? true : false}
      />
      <Option
        isCollapsed={props.isCollapsed}
        text={"Location"}
        icon={"location_on"}
      />
      <Option
        isCollapsed={props.isCollapsed}
        text={"Capacity"}
        icon={"store"}
      />
      <Option
        isCollapsed={props.isCollapsed}
        text={"Test Demand"}
        icon={"article"}
      />
      <Option
        isCollapsed={props.isCollapsed}
        text={"Referral Linkages"}
        icon={"language"}
      />
      <Option
        isCollapsed={props.isCollapsed}
        text={"Transportation"}
        icon={"local_shipping"}
      />
      <Option
        isCollapsed={props.isCollapsed}
        text={"Settings"}
        icon={"settings"}
      />

      <Option
        isCollapsed={props.isCollapsed}
        text={"Import file"}
        icon={"file_upload"}
        onClick={props.setSelectedOption.bind(null, 1)}
        active={props.selectedOption === 1 ? true : false}
      />
      <Option
        isCollapsed={props.isCollapsed}
        text={"Logout"}
        icon={"logout"}
        onClick={logout.bind(null, { returnTo: window.location.origin })}
      />
    </div>
  );
};

export default Options;
