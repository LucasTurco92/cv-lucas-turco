import React from "react";
import Styles from "./uk-flag.module.css";
import Flag from "../flag/flag.component.jsx";


const UkFlag = () => {
  return (
   <Flag name='english' style={Styles.uk}/>
  );
};

export default UkFlag;
