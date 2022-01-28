import React from "react";
import "./Team.css";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const card = ({ title, desc, img, link1, link2, link3 }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${require(`../../images/Team/${img}`).default})` }}>
      <div className="card-border">
        <div className="card-info">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>

        <div className="social-links">
          <a href={link1} target="_blank" rel="noreferrer" title="LinkedIn">
            <AiFillLinkedin />
          </a>
          <a href={link2} target="_blank" rel="noreferrer" title="Github">
            <AiFillGithub />
          </a>
          <a href={link3} target="_blank" rel="noreferrer" title="Instagram">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default card;
