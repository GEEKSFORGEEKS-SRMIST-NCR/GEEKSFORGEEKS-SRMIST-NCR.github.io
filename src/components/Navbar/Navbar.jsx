import React from "react";
import "./Navbar.css";
import { Link } from "gatsby";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

const Navbar = () => {
  return (
    <header>
      <Link to="#" className="logo">
        GeeksForGeeks
      </Link>
      <div className="navbar">
        <ul>
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#team">Team</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
		<ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label className="dayNight">
              <input type="checkbox" onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")} checked={theme === "dark"} />
              <div></div>
            </label>
          )}
        </ThemeToggler>
      </div>
    </header>
  );
};

export default Navbar;
