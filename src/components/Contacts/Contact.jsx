import React from "react";
import "./Contacts.css";
import { FaLinkedinIn, FaInstagram, FaGithub, FaDiscord } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contacts" id="Contact">
      <h1 className="section-title">Get In Touch</h1>
      <div className="contacts-container">
        <a href="https://www.linkedin.com/in/geeksforgeeks-srmist-ncr/" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/GEEKSFORGEEKS-SRMIST-NCR" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/geeksforgeeks_srmist_ncr/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <FaDiscord />
        </a>
      </div>

      <footer>
        <p>© Copyrights 2022 by GFG SRMIST NCR. All Rights Reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
