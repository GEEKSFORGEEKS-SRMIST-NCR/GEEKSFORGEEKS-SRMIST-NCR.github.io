import React from "react";
import "./Navbar.css";
import { Link } from "gatsby";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { Logo2 } from "../Logo/Logo2";
import { Logo } from "../Logo/Logo";

function menu() {
  document.querySelectorAll(".gfg-burger-1, .gfg-burger-2, .gfg-burger-3, .navbar ul").forEach(function(el) {
    el.classList.toggle("open");
  });
  document.querySelector("body").classList.toggle("hidden");
}


const Navbar = () => {
  return (
    <header>
      <Link to="#" className="logo" >
        <Logo />
        <Logo2 />
      </Link>
      <div className="navbar">
        <span className="hamburger-menu" onClick={ menu }>
          <span className="gfg-burger-1"></span>
          <span className="gfg-burger-2"></span>
          <span className="gfg-burger-3"></span>
        </span>
        <ul>
          <li>
            <Link to="#" onClick={ menu }>Home</Link>
          </li>
          <li>
            <Link to="#events" onClick={ menu }>Events</Link>
          </li>
          <li>
            <Link to="#team" onClick={ menu }>Team</Link>
          </li>
          <li>
            <Link to="#contact" onClick={ menu }>Contact</Link>
          </li>
        </ul>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label  >
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
