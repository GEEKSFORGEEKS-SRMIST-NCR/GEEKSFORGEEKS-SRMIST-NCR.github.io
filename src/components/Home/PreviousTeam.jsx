import styles from "styles/Home/Team.module.css";
import Card from "./Card";
import React from "react";
import { previousMembers } from "../../../lib/MemberAPI";

const PreviousTeam = () => {
  // Leader Card Map
  let leadCard = previousMembers.leadList.map((lead) => {
    return <Card key={lead.id} data={lead} />;
  });
  const lastyear = new Date().getFullYear() - 1;

  return (
    <section id="Team">
      <h2 className="section-title">Core Team {lastyear}</h2>
      <div>
        <h2 className="section-title">Chapter Lead</h2>
        <div className={styles.container}>
          {
            <Card
              key={previousMembers.chapterLead[0].id}
              data={previousMembers.chapterLead[0]}
            />
          }
        </div>
        <h2 className="section-title">Team Leads</h2>
        <div className={styles.container}>{leadCard}</div>
      </div>
    </section>
  );
};

export default PreviousTeam;
