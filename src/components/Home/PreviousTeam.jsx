import { data } from "api/MemberAPI";
import styles from "styles/Home/Team.module.css";
import Card from "./Card";
import React from "react";


const Team = () => {
  // Leader Card Map
  let leadCard = data1.leadList.map((lead) => {
    return <Card key={lead.id} data={lead} />;
  });

  return (
    <>
    <h1 className="section-title">Core Team Members 2022-2023</h1>
    <section id="Team">
      <div>
        <h2 className="section-title">Chapter Lead</h2>
        <div className={styles.container}>
          {<Card key={data.chapterLead[0].id} data={data.chapterLead[0]} />}
        </div>
        <h2 className="section-title">Team Leads</h2>
        <div className={styles.container}>{leadCard}</div>
      </div>
    </section>
    </>
  );
};

export default Team;
