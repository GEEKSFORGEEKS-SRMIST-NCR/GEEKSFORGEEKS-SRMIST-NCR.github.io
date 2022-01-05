import React from "react";
import "./About.css";
import { Logo } from "../Logo/Logo";
import { Logo2 } from "../Logo/Logo2";

const About = () => {
  return (
    <section id="about" className="about">
      <h1 className="section-title"> About Us</h1>
      <div className="about-container">
        <div className="title">
          <Logo className="logo" /> <Logo2 />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo totam nisi beatae iure natus fuga, autem ab quia reprehenderit commodi vel assumenda officiis laboriosam.
          Maxime, sint voluptatem! Consequatur reiciendis voluptatibus dolore doloremque esse! Corporis, voluptas sit tenetur eos quas aliquid autem veritatis recusandae nisi
          dolore. Totam ratione iste numquam dolorem.
          <br />
          &emsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aliquam?
        </p>
      </div>
    </section>
  );
};

export default About;
