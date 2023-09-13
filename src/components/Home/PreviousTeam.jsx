import { data } from "api/MemberAPI";
import styles from "styles/Home/Team.module.css";
import Card from "./Card";
import React from "react";


const PreviousTeam = () => {
  // Leader Card Map
  let leadCard = data.leadList.map((lead) => {
    return <Card key={lead.id} data={lead} />;
  });

  return (
    <section id="Team">
      <h2 className="section-title">Core Team 2022</h2>
      <div>
        <h2 className="section-title">Chapter Lead</h2>
        <div className={styles.container}>
          {<Card key={data.chapterLead[0].id} data={data.chapterLead[0]} />}
        </div>
        <h2 className="section-title">Team Leads</h2>
        <div className={styles.container}>{leadCard}</div>
      </div>
    </section>
  );
};

export default PreviousTeam;
