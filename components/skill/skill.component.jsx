import React from "react";
import styles from "./skill.module.css";

const Skill = ({ title, count }) => {
  const countLimit = 5;

  const level = () => {
    var barrs = [];

    for (var i = 0; i < countLimit; i++) {
      barrs.push(
        count > 0 ? (
          <span key={`${title}${i}`} className={styles.blue} />
        ) : (
          <span key={`${title}${i}`} className={styles.white} />
        )
      );

      count--;
    }

    return barrs;
  };


  return (
    <div key={title} className={styles.skill}>
      {`${title}: `}
      <div className={styles.barrs}>{level().map((barrs) => barrs)}</div>
    </div>
  );
};

export default Skill;
