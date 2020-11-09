import React from "react";
import Id from "../helpers/id";
import Styles from "./section.module.css";

const Section = ({ title, barr, itemsList }) => {
  return (
    <div className={Styles.container}>
      <hr className={barr ? Styles.barr : Styles.NoneBarr} />
      <h2>{title}</h2>
      <div className={Styles.section}>
      <div className={Styles.baseLine}/>
        <div className={Styles.itemsSection}>
          {itemsList.map((item) => (
            <div key={Id()} className={Styles.itemSection} >
              <div className={Styles.itemHeade}><div className={Styles.dot}/><b>{item.institution}</b> -  {item.date ? item.date : item.dates}</div>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
