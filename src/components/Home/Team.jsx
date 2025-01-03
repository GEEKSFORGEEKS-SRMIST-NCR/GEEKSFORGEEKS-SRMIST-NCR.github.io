import { currentMembers } from "api/MemberAPI";
import styles from "styles/Home/Team.module.css";
import {Card} from "./Card";
import React from "react";
import Link from "next/link";
const Team = () => {
  // Leader Card Map
  let leadCard = currentMembers.leadList.map((lead) => {
    return <Card key={lead.id} data={lead} />;
  });

  return (
    <section id="Team">
      <div>
        {/* <h2 className="section-title"> Star Performer</h2> */} 
        <div className={styles.container}>
          {/* {<Card key={data2.chapterLead[0].id} data={data2.chapterLead[0]} />} */}
        </div>
      </div>
      <div>
        <h2 className="section-title">Chapter Lead</h2>
        <div className={styles.container}>
          {<Card key={currentMembers.chapterLead[0].id} data={currentMembers.chapterLead[0]} />}
        </div>
        <h2 className="section-title">Team Leads</h2>
        <div className={styles.container}>{leadCard}</div>
      </div>
      <Link href="/Core-Team-22" style={{ textDecoration: "none" }}>
        <button className={styles.container1}>Previous Members</button>
      </Link>
    </section>
  );
};

export default Team;
