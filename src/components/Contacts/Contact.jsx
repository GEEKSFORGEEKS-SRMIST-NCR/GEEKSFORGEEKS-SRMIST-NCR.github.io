import React from "react";
import "./Contacts.css";
import { FaLinkedinIn, FaInstagram, FaGithub, FaDiscord } from "react-icons/fa";
import { Link } from "gatsby";

const Contact = () => {
  return (
    <section className="contacts" id="contact">
      <h1 className="section-title">Get In Touch</h1>
      <div className="contacts-container">
        <Link to="https://www.linkedin.com/in/geeksforgeeks-srmist-ncr/" target="_blank">
          <FaLinkedinIn />
        </Link>
        <Link to="https://github.com/GEEKSFORGEEKS-SRMIST-NCR">
          <FaGithub />
        </Link>
        <Link to="https://www.instagram.com/geeksforgeeks_srmist_ncr/">
          <FaInstagram />
        </Link>
        <Link to="">
          <FaDiscord />
        </Link>
      </div>

      <footer>
        <p>
            © Copyrights {new Date().getFullYear()} by GFG SRMIST NCR. All Rights Reserved.
  
        </p>
      </footer>
    </section>
  );
};

export default Contact;
