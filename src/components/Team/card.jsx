import React from "react";
import { Link } from "gatsby";
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
        <Link to="">
          <AiFillLinkedin />
        </Link>
        <Link to="">
            <AiFillGithub />
        </Link>
        <Link to="">
            <AiFillInstagram />
        </Link>
      </div>
    </div>
  );
};

export default card;
