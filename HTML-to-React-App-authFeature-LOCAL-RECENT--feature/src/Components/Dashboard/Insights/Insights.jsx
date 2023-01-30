import React from "react";
import Card from "../../UI/Card";
import styles from "./Insights.module.css";

const Insights = () => {
  return (
    <div className={styles.insights}>
      <Card className={styles.Utilization}>
        <div className={styles.middle}>
          <div className={styles.left}>
            <h1>Utilization</h1>
          </div>
          <div className={styles.progress}>
            <svg>
              <circle cx="38" cy="38" r="36"></circle>
            </svg>
            <div className={styles.number}>
              <p>82%</p>
            </div>
          </div>
        </div>
      </Card>

      <Card className={styles.Cost}>
        <div className={styles.middle}>
          <div className={styles.left}>
            <h1>Cost</h1>
            <span className={styles.tagline}>$20 million</span>
          </div>
          {/* <div className={styles.progress}>
            <svg>
              <circle cx="38" cy="38" r="36"></circle>
            </svg>
            <div className={styles.number}>
              <p>71%</p>
            </div>
          </div> */}
          <span
            className="material-icons-sharp"
            style={{ fontSize: "80px", color: "#12a6ad" }}
          >
            attach_money
          </span>
        </div>
      </Card>

      <Card className={styles.Referral_Distance}>
        <div className={`${styles.middle}`}>
          <div className={`${styles.left}`}>
            <h1>Service distance</h1>
            <span className={styles.tagline}>30 Km</span>
          </div>
          <label>
            <a href="/">
              <span
                className="material-icons-sharp"
                style={{ fontSize: "80px", color: "#12a6ad" }}
              >
                social_distance
              </span>
            </a>
          </label>
        </div>
      </Card>
    </div>
  );
};

export default Insights;
