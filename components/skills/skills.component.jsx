import React from "react";
import styles from "./skills.module.css";

const SkillsInfo = ({title,itemsList}) => {
  return (
    <div>
      <hr/>
      <h3>{title}</h3>
      <div className={styles.skillsContainer}>
        {itemsList.map((skill) => (skill.item))}
      </div>
    </div>
  );
};

export default SkillsInfo;
