import React from "react";
import "./Team.css";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const card = ({ title, desc, img }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={img} alt="team member" />
      </div>

      <h1>{title}</h1>
      <p>{desc}</p>

      <div className="social-links">
        <a href="" target="_blank" rel="noreferrer">
          <AiFillLinkedin />
        </a>
        <a href="" target="_blank" rel="noreferrer">
            <AiFillGithub />
        </a>
        <a href="" target="_blank" rel="noreferrer">
            <AiFillInstagram />
        </a>
      </div>
    </div>
  );
};

export default card;
