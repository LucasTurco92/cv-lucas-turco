import React from "react";
import styles from "./education.module.css";

const Education = () => {
  return (
    <div className={styles.container}>
      <hr className={styles.barr} />
      <h2>Education</h2>
      <span className={styles.education}>
        <b>ORT Argentina 2016</b> - Technical degree.
      </span>
      <span className={styles.education}>
        <b>ORT Argentina 2011</b> - Secondary school.
      </span>
    </div>
  );
};

export default Education;
