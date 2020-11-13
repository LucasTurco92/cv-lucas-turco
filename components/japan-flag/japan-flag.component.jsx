import React from "react";
import Styles from "./japan-flag.module.scss";
import Flag from "../flag/flag.component.jsx";

const JapanFlag = () => {
  return (
    <Flag name='japanese' style={Styles.japan}/>
  );
};

export default JapanFlag;
