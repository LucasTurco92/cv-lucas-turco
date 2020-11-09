import React from "react";
import Section from "../section/section.component";
import Footer from "../footer/footer.component";
import ImgProfile from "../img-profile/img-profile.component";
import PersonalInfo from "../personal-info/personal-info.component";
import ProfessionalStatement from "../professional-statement/professional-statement.component";
import Refencies from "../refencies/refencies.component";
import SkillsInfo from "../skills-info/skills-info.component";

import Styles from "./cv.module.css";

const itemsList=[
  {institution:'ORT Argentina',title:'Technical degree',date:'2016'},
  {institution:'ORT Argentina',title:'Secondary school',date:'2011'}
];


const Cv = () => {
  return (
    <div className={Styles.cv}>
      <ImgProfile />
      <ProfessionalStatement />
      <div className={Styles.band}>
        <span className={Styles.name}>Lucas Turco</span>
        <span className={Styles.profession}>System Analist & Developer</span>
      </div>
      <div className={Styles.separator}>
        <div className={Styles.border} />
      </div>
      <div className={Styles.blueBarr} />
      <PersonalInfo />
      <Section title='Education' itemsList={itemsList}/>
      <SkillsInfo />
      <Section title='Work Experience' barr={true} itemsList={itemsList}/>
      <Refencies />
      <Footer />
    </div>
  );
};

export default Cv;
