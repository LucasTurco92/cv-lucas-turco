import React from "react";
import MultiItemSection from "../multi-item-section/multi-item-section.component";
import Styles from "./section.module.css";

const Section = ({ title, itemsList }) => {
  return (
    <div className={Styles.container}>
      <h2>{title}</h2>
      <div className={Styles.section}>
        <div className={Styles.baseLine} />
        <MultiItemSection itemsList={itemsList}/>
      </div>
    </div>
  );
};

export default Section;
