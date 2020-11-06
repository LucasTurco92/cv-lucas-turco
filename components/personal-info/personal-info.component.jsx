import React from "react";
import ArgentinaFlag from "../argentina-flag/argentina-flag.component";
import ItalyFlag from "../italy-flag/italy-flag.component";
import styles from "./personal-info.module.css";

const PersonalInfo = () => {
  const contentList = [
    {
      title: "Nationalities",
      content: [<ArgentinaFlag key="1" />, <ItalyFlag key="2" />],
    },
    { title: "Birth", content: "19/11/1992" },
    { title: "Status", content: "Single" },
    { title: "Adress", content: ["Buenos Aires, ", <ArgentinaFlag key="3" />] },
  ];
  return (
    <div className={styles.container}>
      <hr className={styles.barr} />
      <h4>Personal Information</h4>
      <div className={styles.personalContainer}>
        {contentList.map((info) => (
          <div key={info.title} className={styles.personal}>
            {`${info.title}: `} {info.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalInfo;
