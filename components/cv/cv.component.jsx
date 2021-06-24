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
    title: "React.js",
    date: "2020",
    description: "Duration: 40 hours.",
  },
  {
    institution: "Udemy.com",
    title: "Node.js's & Express course",
    date: "2020",
    description: "Duration: 20 hours.",
  },
  {
    institution: "ORT Argentina",
    title: "Technical degree, System Analyst",
    date: "2016",
    description:
      'Developer at the 2nd stage of  "Academy polls" in ASP.NET MVC as final proyect.',
  }
];
const education = [{ itemslist: itemsList }];

const jobList = [
  {
    institution: "Fullstack Ssr.",
    title: "Principal e-commerce",
    date: "Jun. 2020 - PRESENT",
    description: "In charge of Maintenance of existing code, develope new features, create units tests, resolve bugs, fix styles issues, application of SOLID, DDD architecture and anothers clean code rules, refactoring components.",
  },
  {
    institution: "Back-ender Ssr.",
    title: "Flights Department",
    date: "Apr. 2019 - May.2020",
    description:
      "In charge of Maintenance of existing code, develope new features, create units tests, resolve bugs, integrate Sabre's webs servicies, application of SOLID, DDD architecture and anothers clean code rules, migration of .Net Classic into .Net Core APIRest, create a mock of sabre's service in Node.js.",
  },
  {
    institution: "Back-ender Jr.",
    title: "Flights Department",
    date: "Jul. 2017 - Apr. 04/2019",
    description:
      "In charge of Maintenance of existing code, develope new features, create units tests, resolve bugs, integrate Sabre's webs servicies.",
  },
];
const nation = [
  {
    institution: "Tech support",
    title: "PNSA",
    date: "Jun. 2013 - Oct. 2016",
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
      <MobileSection title="Profesional statement">
        <p className={Styles.smallText}>
        My name is Lucas and I develop to create solutions, focus on quality and added value, implementing good practices and working in team
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
