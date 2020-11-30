import React from "react";
import Styles from "./animated-background.module.scss";

const AnimatedBackground = () => {
  return (
    <div className={Styles.container}>
      <div className={`${Styles.backImage} ${Styles.wave1}`}></div>
      <div className={`${Styles.backImage} ${Styles.wave2}`}></div>
      <div className={`${Styles.backImage} ${Styles.wave3}`}></div>
      <div className={`${Styles.backImage} ${Styles.wave4}`}></div>
    </div>
  );
};

export default AnimatedBackground;
