import React from "react";
import Skill from "../skill/skill.component";
import Skills from "../skills/skills.component";
import ItalyFlag from "../italy-flag/italy-flag.component";

import styles from "./skills-info.module.css";
import JapanFlag from "../japan-flag/japan-flag.component";
import SpainFlag from "../spain-flag/spain-flag.component";
import UkFlag from "../uk-flag/uk-flag.component";

const SkillsInfo = () => {
  const skillsList = [
    { item: <Skill title="C#" count={4}  /> },
    { item: <Skill title=".NetCore" count={4} /> },
    { item: <Skill title="JavaScript" count={3} /> },
    { item: <Skill title="React.js" count={3} /> },
    { item: <Skill title="Node.js" count={3} /> },
    { item: <Skill title="CSS-3" count={3} /> },
    { item: <Skill title="HTML-5" count={4} /> },
    { item: <Skill title="SQL" count={4} /> },
    { item: <Skill title="MongoDB" count={2} /> },
    { item: <Skill title="API-Rest" count={5} /> },
    { item: <Skill title="Git" count={4} /> },
    { item: <Skill title="Jira" count={4} /> },
  ];

  const languagesList = [
    { item: <Skill title={<SpainFlag/>}  count={5} /> },
    { item: <Skill title= {<UkFlag/>} count={4} /> },
    { item: <Skill title={<ItalyFlag  position='Left' key='3'/>} count={3} /> },
    { item: <Skill title={<JapanFlag/>} count={1} /> },
  ];

  return (
    <div className={styles.container}>
      <Skills itemsList={skillsList}/>
      <Skills title='Languages' barr={true} itemsList={languagesList}/>
    </div>
  );
};

export default SkillsInfo;
