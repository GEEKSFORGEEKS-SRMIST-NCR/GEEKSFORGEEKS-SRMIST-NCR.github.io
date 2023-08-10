import { FaDiscord, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import styles from "styles/Home/Footer.module.css";

const Footer = () => {
  return (
    <footer id="Contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className={styles.container}>
        <a
          href="https://www.linkedin.com/company/gfg-srm/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/GEEKSFORGEEKS-SRMIST-NCR"
          target="_blank"
          rel="noreferrer"
          title="Github"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/gfg_srmist_ncr"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://discord.gg/jSCXs8tV"
          target="_blank"
          rel="noreferrer"
          title="Discord"
        >
          <FaDiscord />
        </a>
      </div>

      <span className={styles.footer}>
        <p> &#9426; Copyrights 2023 by GFG SRMIST DELHI NCR. All Rights Reserved.</p>
      </span>
    </footer>
  );
};

export default Footer;
