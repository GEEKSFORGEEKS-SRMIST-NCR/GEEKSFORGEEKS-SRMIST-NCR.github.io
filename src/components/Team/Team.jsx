import React from "react";
import Card from "./card";
import "./Team.css";

let data = [
  { id: 1, name: "name1", desc: "desc1", img: "https://images.unsplash.com/photo-1532171875345-9712d9d4f65a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" },
  { id: 2, name: "name2", desc: "desc2", img: "https://images.unsplash.com/photo-1532171875345-9712d9d4f65a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" },
  { id: 3, name: "name3", desc: "desc3", img: "https://images.unsplash.com/photo-1532171875345-9712d9d4f65a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" },
  { id: 4, name: "name4", desc: "desc4", img: "https://images.unsplash.com/photo-1532171875345-9712d9d4f65a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" },
  { id: 5, name: "name5", desc: "desc5", img: "https://images.unsplash.com/photo-1532171875345-9712d9d4f65a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" },
  { id: 6, name: "name6", desc: "desc6", img: "https://images.unsplash.com/photo-1532171875345-9712d9d4f65a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" },
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
