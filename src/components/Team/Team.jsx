import React from "react";
import Card from "./card";
import "./Team.css";

let data = [
  {
    id: 1,
    name: "Deepak Gupta",
    desc: "Chairperson",
    img: "Deepak.webp",
    link1: "https://www.linkedin.com/in/spycaptain/",
    link2: "https://www.github.com/",
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
    link1: "https://www.linkedin.com/in/anushka-kanwar-8484241b6",
    link2: "",
    link3: "https://www.instagram.com/anushkakanwar15/",
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
];

let cardgrid = data.map((data) => {
  return (
    <Card
      key={data.id}
      title={data.name}
      desc={data.desc}
      img={data.img}
      link1={data.link1}
      link2={data.link2}
      link3={data.link3}
    />
  );
});

// let othermembers = [
//   {
//     team: "Technical Team",
//     member: ["Aastha", "Drish", "Tanish Khare"],
//   },
//   {
//     team: "Event Management Team",
//     member: ["Aryan Gaur", "Chithjyot Kaur", "Shivansh Kaul"],
//   },
//   {
//     team: "Design and Branding Team",
//     member: ["Dhruv Pandey", "Pushpak Kumawat"],
//   },
//   {
//     team: "Marketing Team",
//     member: ["Kshitiz Priyam", "Manas Kumar", "Shrishti Dhingra"],
//   },
//   {
//     team: "Public Relation and Outreach Team",
//     member: ["Sohem Mondal", "Abhijeet Lakhera"],
//   },
//   {
//     team: "Social Media Team",
//     member: ["Lahri Krishnam", "Palak Dwivedi", "Shrishti Srivastava"],
//   },
// ];

// let otherTeamMembers = othermembers.map((member) => {
//   let members = member.member.map((name) => <p key={name}>{name}</p>);
//   return (
//     <div key={member.team} className="member-grid">
//       <h3>{member.team}</h3>
//       {members}
//     </div>
//   );
// });

const faculty = (
  <Card
    title="Bharti Vidhury"
    desc="Assistent Professor Department of CSE"
    img="Faculty.webp"
  />
);

const Team = () => {
  return (
    <section className="team" id="Team">
      <div>
        <h1 className="section-title">Team Leads</h1>
        <div className="team-container">{cardgrid}</div>
        {/* <h1 className="section-title">Other Team Members</h1>
        <div className="team-container">{otherTeamMembers}</div> */}
        <h1 className="section-title">Faculty Coordinator</h1>
        <div className="team-container">{faculty}</div>
      </div>
    </section>
  );
};

export default Team;
