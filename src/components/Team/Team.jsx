import React from "react";
import Card from "./card";
import "./Team.css";

let data = [
  { id: 1, name: "name1", desc: "desc1", img: "https://cdn-icons-png.flaticon.com/512/64/64495.png" },
  { id: 2, name: "name2", desc: "desc2", img: "https://cdn-icons-png.flaticon.com/512/64/64495.png" },
  { id: 3, name: "name3", desc: "desc3", img: "https://cdn-icons-png.flaticon.com/512/64/64495.png" },
  { id: 4, name: "name4", desc: "desc4", img: "https://cdn-icons-png.flaticon.com/512/64/64495.png" },
  { id: 5, name: "name5", desc: "desc5", img: "https://cdn-icons-png.flaticon.com/512/64/64495.png" },
  { id: 6, name: "name6", desc: "desc6", img: "https://cdn-icons-png.flaticon.com/512/64/64495.png" },
];
let cardgrid = data.map((data) => {
  return <Card key={data.id} title={data.name} desc={data.desc} img={data.img} />;
});

const Team = () => {
  return (
    <section className="team" id="Team">
      <div className="">
        <h1 className="section-title">Team</h1>
        <div className="team-container" key={data.id}>{cardgrid}</div>
      </div>
    </section>
  );
};

export default Team;
