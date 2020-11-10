import React from "react";
import SimpleItemSection from "../simple-item-section/simple-item-section.component";
import Styles from "./multi-item-section.module.css";


const MultiItemSection = ({ item }) => {

  return (
    <div className={Styles.container}>
      {itemList.map((item) => (     
          <SimpleItemSection itemList={item.itemList}/>
      ))}    
    </div>
  )
};

export default MultiItemSection;
