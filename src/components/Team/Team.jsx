import React from "react";
import Card from "./Card";
import { data } from "/lib/MemberApi";
import "./Team.css";

const Team = () => {
  let leadCard = data.leadList.map((lead) => {
    return <Card key={lead.id} data={lead} />;
  });

  data.facultyList.map((faculty) => {
    return <Card key={faculty.id} data={faculty} />;
  });

  return (
    <section className="team" id="Team">
      <div>
        {/*<h2 className="section-title">Club Convenor</h2>
        <div className="team-container">{facultyCard}</div>*/}
        <h2 className="section-title">Chapter Lead</h2>
        <div className="team-container">
          {<Card key={data.chapterLead[0].id} data={data.chapterLead[0]} />}
        </div>
        <h2 className="section-title">Team Leads</h2>
        <div className="team-container">{leadCard}</div>
      </div>
    </section>
  );
};

export default Team;
