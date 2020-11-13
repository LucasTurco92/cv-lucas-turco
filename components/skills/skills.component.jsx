import React from "react";
import Id from "../helpers/id";
import styles from "./skills.module.css";

const SkillsInfo = ({title,itemsList,barr}) => {
 

  return (
    <div>
      {barr ?<hr/> : '' }
      <h3>{title}</h3>
      <div className={styles.skillsContainer}>
        {itemsList.map((skill) =>(
        <div key={Id()}>{skill.item}</div>
        ))}
      </div>
    </div>
  );
};

export default SkillsInfo;
