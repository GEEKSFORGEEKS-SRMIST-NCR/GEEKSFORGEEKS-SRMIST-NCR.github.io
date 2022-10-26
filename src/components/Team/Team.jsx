import React from "react";
import Card from "./card";
import { data } from "/lib/MemberApi";
import "./Team.css";

let leadCard = data.leadList.map((lead) => {
  return (
    <Card
      key={lead.id}
      title={lead.name}
      desc={lead.desc}
      img={lead.img}
      link1={lead.link1}
      link2={lead.link2}
      link3={lead.link3}
    />
  );
});

let facultyCard = data.facultyList.map((faculty) => {
  return (
    <Card
      key={faculty.name}
      title={faculty.name}
      desc={faculty.desc}
      img={faculty.img}
    />
  );
});

const Team = () => {
  return (
    <section className="team" id="Team">
      <div>
        <h2 className="section-title">Faculty Coordinator</h2>
        <div className="team-container">{facultyCard}</div>
        <h2 className="section-title">Team Leads</h2>
        <div className="team-container">{leadCard}</div>
      </div>
    </section>
  );
};

export default Team;
