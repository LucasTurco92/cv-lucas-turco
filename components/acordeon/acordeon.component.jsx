import React, {useEffect } from "react";
import useOpen from "../helpers/Open";
import Styles from "./acordeon.module.scss";

const Acordeon = (props) => {
  const [open, handleOpen, openAlways] = useOpen();


  useEffect(() => {
    if (window.matchMedia("(min-width: 720px)").matches) {
      openAlways();
    }
  }, []);

  return (
    <div>
      <h2
        onClick={() => handleOpen()}
        className={open ? Styles.buttonTitleSelected : Styles.buttonTitle}
      >
        {props.title}
        <span className={open ? Styles.iconUp : Styles.iconDown}></span>
      </h2>
      <div className={open ? Styles.acordeonOpen : Styles.acordeonClose}>
        {props.children}
      </div>
    </div>
  );
};

export default Acordeon;
