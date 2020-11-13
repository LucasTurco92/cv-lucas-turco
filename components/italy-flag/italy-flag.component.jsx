import React from 'react';
import Styles from './italy-flag.module.scss';
import Flag from "../flag/flag.component.jsx";

const ItalyFlag = ({position}) => {
  return (
   <Flag name='italian' style={Styles[`italy${position}`]}/>
  );
};

export default ItalyFlag;
