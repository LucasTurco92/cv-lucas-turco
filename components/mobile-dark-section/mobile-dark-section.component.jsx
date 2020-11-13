import React from "react";
import Acordeon from "../acordeon/acordeon.component";
import Styles from "./mobile-dark-section.module.scss";

const MobileDarkSection = (props) => {
  return (
    <div  className={Styles.container}>
      <hr className={Styles.barr} />
      <Acordeon  title={props.title}>
        {props.children}
        </Acordeon>
    </div>
  );
};

export default MobileDarkSection;
