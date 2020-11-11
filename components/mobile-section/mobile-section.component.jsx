import React from "react";
import useOpen from "../helpers/Open";
import Styles from "./mobile-section.module.scss";

const MobileSection = () => {
  const [open, handleOpen] = useOpen();

  return (
    <div className={Styles.container} onClick={() => handleOpen()}>
      <hr className={Styles.barr} />
      <h2 className={open ? Styles.buttonTitle : Styles.buttonTitleSelected }>Professional statement<span className={open ? Styles.iconUp : Styles.iconDown}></span></h2>
      <div className={open ? Styles.acordeonOpen : Styles.acordeonClose}>
        <p className={Styles.text}>

        Perseverant and passional developer. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Debitis dignissimos quaerat, quos esse
        dolores fuga error saepe modi eius aspernatur unde quas sequi similique
        perspiciatis, exercitationem commodi excepturi nam consequatur. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quod, porro? Id,
        nulla nihil? Cumque minus ipsa nisi architecto sequi harum id,
        dignissimos possimus. Tempore, et? Officiis, possimus! Impedit,
        provident distinctio.
        </p>
      </div>
    </div>
  );
};

export default MobileSection;
