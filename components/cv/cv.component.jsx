import React from "react";
import Section from "../section/section.component";
import Footer from "../footer/footer.component";
import ImgProfile from "../img-profile/img-profile.component";
import PersonalInfo from "../personal-info/personal-info.component";
import Refencies from "../refencies/refencies.component";
import SkillsInfo from "../skills-info/skills-info.component";

import Styles from "./cv.module.css";
import MobileSection from "../mobile-section/mobile-section.component";
import MobileDarkSection from "../mobile-dark-section/mobile-dark-section.component";

const itemsList = [
  {
    institution: "Udemy.com",
    title: "Node.js's course",
    date: "2020",
    description: "Zero to expert - duration: 20 hours.",
  },
  {
    institution: "ORT Argentina",
    title: "Technical degree, System Analyst",
    date: "2016",
    description:
      'Developer at the 2nd stage of the proyect "Academy polls" in ASP.NET MVC 5. September 2016 - December 2016.',
  },
  {
    institution: "ORT Argentina",
    title: "Secondary school, IT Oriented",
    date: "2011",
  },
];
const education = [{ itemslist: itemsList }];

const jobList = [
  {
    institution: "Fullstack Ssr.",
    title: "Principal e-commerce",
    date: "14/07/2020 - Present",
    description: "Zero to Expert - 20 hours.",
  },
  {
    institution: "Back-ender Ssr.",
    title: "Flights Department",
    date: "01/04/2019 - 01/05/2020",
    description:
      "In charge of Maintenance of existing code, develope new features, create units tests, resolve bugs fixs, integrate Sabre's webs servicies, application of SOLID, DDD architecture and anothers clean code rules, migration of the flight's search .Net Classic into .Net Core APIRest, create a mock of sabre's service in Node.js.",
  },
  {
    institution: "Back-ender Jr.",
    title: "Flights Department",
    date: "14/07/2017 - 01/04/2019",
    description:
      "In charge of Maintenance of existing code, develope new features, create units tests, resolve bugs fixs, integrate Sabre's webs servicies.",
  },
];
const nation = [
  {
    institution: "Tech support",
    title: "PNSA",
    date: "16/06/2013 - 29/10/2016",
    description: "Help desk, networks and computer repair.",
  },
];

const workExperience = [
  { itemslist: jobList, place: "Plataforma10", totalDate: "3 years, 4 months" },
  {
    itemslist: nation,
    place: "Argentina's Goverment",
    totalDate: "3 years, 5 months",
  },
];

const Cv = () => {
  return (
    <div className={Styles.cv}>
      <ImgProfile />
      <MobileSection title="profesional statement">
        <p className={Styles.smallText}>
          {" "}
          Perseverant and passional developer. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Debitis dignissimos quaerat, quos esse
          dolores fuga error saepe modi eius aspernatur unde quas sequi
          similique perspiciatis, exercitationem commodi excepturi nam
          consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quod, porro? Id, nulla nihil? Cumque minus ipsa nisi architecto sequi
          harum id, dignissimos possimus. Tempore, et? Officiis, possimus!
          Impedit, provident distinctio.
        </p>
      </MobileSection>
      <div className={Styles.band}>
        <span className={Styles.name}>Lucas Turco</span>
        <span className={Styles.profession}>System Analist & Developer</span>
      </div>
      <div className={Styles.separator}>
        <div className={Styles.border} />
      </div>
      <div className={Styles.blueBarr} />
      <MobileDarkSection title="Personal Info" >
        <PersonalInfo />
      </MobileDarkSection>
      <MobileSection title="Education">
        <Section  itemsList={education} />
      </MobileSection>
      <MobileDarkSection title="Skills">
        <SkillsInfo />
      </MobileDarkSection>
      <MobileSection title="Work Experience" barr={true}>
      <Section itemsList={workExperience} />
      </MobileSection>
      <MobileDarkSection title="Refencies">
      <Refencies />
      </MobileDarkSection>
      <Footer />
    </div>
  );
};

export default Cv;
