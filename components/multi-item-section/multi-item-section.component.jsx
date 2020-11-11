import React from "react";
import Id from "../helpers/id";
import SimpleItemSection from "../simple-item-section/simple-item-section.component";
import Styles from "./multi-item-section.module.css";

const MultiItemSection = ({ itemsList }) => {
  return (
    <div className={Styles.container}>
      {itemsList.map((item) => (
        <div key={Id()}>
          {item.place ?<div><h3 className={Styles.headerPlace}>{item.place}</h3><h5 className={Styles.date}>{item.totalDate}</h5></div> :''}
          <SimpleItemSection itemsList={item.itemslist} />
        </div>
      ))}
    </div>
  );
};

export default MultiItemSection;
