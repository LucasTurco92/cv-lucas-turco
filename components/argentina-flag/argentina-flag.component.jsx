import React from 'react';
import Styles from './argentina-flag.module.scss';
import Flag from "../flag/flag.component.jsx";

const ArgentinaFlag = ({isDemonym,position}) =>{
    return(
        <Flag name={isDemonym? 'argentinian' : 'argentina'} style={Styles[`argentina${position}`]}>
            <div className={Styles.sun}/>
        </Flag>
      )
}

export default ArgentinaFlag;