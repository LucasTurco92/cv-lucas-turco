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
  {institution:'Udemy.com',title:"Node.js's course",date:'2020', description:'Zero to Expert - 20 hours.'},
  {institution:'ORT Argentina',title:'Technical degree, System Analyst',date:'2016', description:'Developer at the 2nd stage of the proyect "Academy polls" in ASP.NET MVC 5. September 2016 - December 2016.'},
  {institution:'ORT Argentina',title:'Secondary school, IT Oriented',date:'2011'}
];

const jobList=[
  {institution:'Plataforma10',title:"Node.js's course",date:'14/07/2020 - present', description:'Zero to Expert - 20 hours.'},
  {institution:'ORT Argentina',title:'Technical degree, System Analyst',date:'2016', description:'Developer at the 2nd stage of the proyect "Academy polls" in ASP.NET MVC 5. September 2016 - December 2016.'},
  {institution:'ORT Argentina',title:'Secondary school, IT Oriented',date:'2011'}
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
      <Section title='Work Experience' barr={true} itemsList={jobList}/>
      <Refencies />
      <Footer />
    </div>
  );
};

export default Cv;
