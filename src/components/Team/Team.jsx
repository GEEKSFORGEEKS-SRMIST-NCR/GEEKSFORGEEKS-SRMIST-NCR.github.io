import React from "react";
import Card from "./card";
import "./Team.css";

let data = {
  leadList: [
    {
      id: 1,
      name: "Deepak Gupta",
      desc: "Chairperson",
      img: "Deepak.webp",
      link1: "https://www.linkedin.com/in/spycaptain/",
      link2: "https://github.com/spycaptain3",
      link3: "https://www.instagram.com/_spycaptain/",
    },
    {
      id: 2,
      name: "Dhruv Pandey",
      desc: "Vice Chairperson",
      img: "Dhruv.webp",
      link1: "https://www.linkedin.com/in/dp2001",
      link2: "https://github.com/pandeydhruv2001",
      link3: "https://www.instagram.com/__the__neverending__footsteps_/",
    },
    {
      id: 3,
      name: "Drish",
      desc: "Technical Head",
      img: "Drish.webp",
      link1: "https://www.linkedin.com/in/drish-xd/",
      link2: "https://github.com/Drish-xD",
      link3: "https://www.instagram.com/drish_xd/",
    },
    {
      id: 4,
      name: "Aditya Prabhakar",
      desc: "Event Head",
      img: "Aditya.webp",
      link1: "https://www.linkedin.com/in/aditya-prabhakar-b9a8a11a6",
      link2: "",
      link3: "",
    },
    {
      id: 5,
      name: "Lahari Krishnam",
      desc: "Marketing Head",
      img: "Lahari.webp",
      link1: "https://www.linkedin.com/in/lahari03",
      link2: "",
      link3: "https://www.instagram.com/lahari_k03/",
    },
    {
      id: 6,
      name: "Srishti Dhingra",
      desc: "Social Media Head",
      img: "Srishti.webp",
      link1: "https://www.linkedin.com/in/srishti-dhingra-8797851b9",
      link2: "",
      link3: "https://www.instagram.com/srishti2631/",
    },
    {
      id: 7,
      name: "Pushpak Kumawat",
      desc: "Design/Branding Head",
      img: "Pushpak.webp",
      link1: "https://www.linkedin.com/in/pushpak-kumawat-b4bb921ba/",
      link2: "https://github.com/1pushpak1",
      link3: "https://www.instagram.com/_pushpak_k_/",
    },
    {
      id: 8,
      name: "Samriddha Basu",
      desc: "P.R. Head",
      img: "Samriddha.webp",
      link1: "http://www.linkedin.com/in/samriddha-basu-cloud",
      link2: "https://github.com/samriddha-basu-cloud",
      link3: "https://www.instagram.com/unsheathed.dmg/",
    },
  ],
  facultyList: [
    {
      name: "Bharti Vidhury",
      desc: "Assistant Professor Department of CSE",
      img: "Faculty.webp",
    },
  ],
};

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
