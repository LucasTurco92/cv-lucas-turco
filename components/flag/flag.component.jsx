import React from 'react';
import Styles from './flag.module.scss';

const Flag = (props) =>{
const {style,name} = props;

  return (
    <div className={`${Styles.container} ${style}`}>
      <div className={Styles.name}>{name}</div>
      {props.children}
    </div>
  );
};


export default Flag;