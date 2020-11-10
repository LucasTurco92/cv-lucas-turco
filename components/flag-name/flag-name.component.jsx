import React, { useState } from "react";
import Styles from "./flag-name.module.css";

const FlagName = ({name}) => {
  return (
     <div className={Styles.name}>{name}</div> 
  );
};

export default FlagName;
