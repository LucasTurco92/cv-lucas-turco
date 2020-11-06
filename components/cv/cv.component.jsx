import React from 'react';
import Education from '../education/education.component';
import Footer from '../footer/footer.component';
import ImgProfile from '../img-profile/img-profile.component';
import PersonalInfo from '../personal-info/personal-info.component';
import ProfessionalStatement from '../professional-statement/professional-statement.component';
import Refencies from '../refencies/refencies.component';
import SkillsInfo from '../skills-info/skills-info.component';
import WorkExperience from '../work-experience/work-experience.component';

import styles from './cv.module.css'


const Cv = () =>{
    return (<div className={styles.cv}> 
        <ImgProfile/>
        <ProfessionalStatement/>
        <PersonalInfo/>
        <Education/>
        <SkillsInfo/>
        <WorkExperience/>
        <Refencies/>
        <Footer/>
    </div>)
}

export default Cv;