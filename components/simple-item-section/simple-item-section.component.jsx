import React from "react";
import Styles from "./simple-item-section.module.css";
import Id from "../helpers/id";

const SimpleItemSection = ({ itemsList }) => {
  return (
    <div className={Styles.itemsSection}>
      {itemsList.map((item) => (
        <div key={Id()} className={Styles.itemSection}>
          <div className={Styles.itemHeader}>
            <div className={Styles.dot} />
            <b>{item.institution}</b> 
          </div>
          <div className={Styles.description}>
            <div className={Styles.headerDescription}>
              <i>{item.title}</i> 
              <span className={Styles.date}>{item.date ? item.date : item.dates}</span>
            </div>
            <p>{item.description ? item.description : ""}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SimpleItemSection;
