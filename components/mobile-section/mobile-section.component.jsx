import React from "react";
import Acordeon from "../acordeon/acordeon.component";
import Styles from "./mobile-section.module.scss";

const MobileSection = (props) => {
  return (
    <div className={Styles.container}>
      {props.barr?<hr className={Styles.barr} />: ''}
      <Acordeon  title={props.title}>
        {props.children}
        </Acordeon>
    </div>
  );
};

export default MobileSection;
