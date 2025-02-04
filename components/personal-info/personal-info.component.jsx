import React from "react";
import ArgentinaFlag from "../argentina-flag/argentina-flag.component";
import ItalyFlag from "../italy-flag/italy-flag.component";
import Styles from "./personal-info.module.css";


const PersonalInfo = () => {
  const contentList = [
    {
      title: "Nationalities",
      content: [<ArgentinaFlag position='Right' key="1"  isDemonym = {true}/>, <ItalyFlag position='Right' key="2" />],
    },
    { title: "Birth", content: "19/11/1992" },
    { title: "Status", content: "Single" },
    { title: "Adress", content: ["Buenos Aires, ", <ArgentinaFlag position='Right' key="3" />] },
    {title:'Contact',content:[<img className={Styles.linkedinQr} src="./linkedin.svg" alt="linkedin" key="4" />,<a href='https://www.linkedin.com/in/lucas-turco-dev/' key="5"> <img className={Styles.linkedinLogo} src="./linkedin-brands.svg" alt="linkedin" /></a>]}
  ];
  return (
    <div className={Styles.container}>
  
     
      <div className={Styles.personalContainer}>
        {contentList.map((info) => (
          <div key={info.title} className={Styles.personal}>
            {`${info.title}: `} {info.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalInfo;
