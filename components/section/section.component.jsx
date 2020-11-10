import React from "react";
import SimpleItemSection from "../simple-item-section/simple-item-section.component";

import Styles from "./section.module.css";

const Section = ({ title, barr, itemsList }) => {
  return (
    <div className={Styles.container}>
      <hr className={barr ? Styles.barr : Styles.NoneBarr} />
      <h2>{title}</h2>
      <div className={Styles.section}>
        <div className={Styles.baseLine} />
        <SimpleItemSection itemsList={itemsList}/>
      </div>
    </div>
  );
};

export default Section;
