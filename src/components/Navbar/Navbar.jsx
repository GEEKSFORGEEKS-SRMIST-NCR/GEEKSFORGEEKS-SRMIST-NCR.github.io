import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import { Link } from "gatsby";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { gsap } from "gsap";
import { Logo2 } from "../Logo/Logo2";
import { Logo } from "../Logo/Logo";

function tooglemenu() {
  if (window.innerWidth <= 1024) {
    document
      .querySelectorAll(
        ".gfg-burger-1, .gfg-burger-2, .gfg-burger-3, .navbar ul"
      )
      .forEach(function (el) {
        el.classList.toggle("open");
      });
    document.querySelector("body").classList.toggle("hidden");
  }
}

const Navbar = () => {
  const el = useRef();

  useEffect(() => {
    gsap.from(el.current, {
      y: "-100%",
      opacity: 0,
      duration: 1,
      delay: 1.2,
      stagger: 0.2,
      ease: "power4.inOut",
    });
  }, []);

  return (
    <header ref={el}>
      <AniLink cover bg="#2f8d46" to="/" className="logo">
        <Logo />
        <Logo2 />
      </AniLink>
      <div className="navbar">
        <span className="hamburger-menu" onClick={tooglemenu}>
          <span className="gfg-burger-1"></span>
          <span className="gfg-burger-2"></span>
          <span className="gfg-burger-3"></span>
        </span>
        <ul>
          <li>
            <AniLink cover bg="#2f8d46" to="/" onClick={tooglemenu}>
              Home
            </AniLink>
          </li>
          <li>
            <AniLink cover bg="#2f8d46" to="/Events" onClick={tooglemenu}>
              Events
            </AniLink>
          </li>
          <li>
            <Link to="/#Team" onClick={tooglemenu}>
              Team
            </Link>
          </li>
          <li>
            <Link to="/#Contact" onClick={tooglemenu}>
              Contact
            </Link>
          </li>
        </ul>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
              <input
                type="checkbox"
                onChange={(e) =>
                  toggleTheme(e.target.checked ? "dark" : "light")
                }
                checked={theme === "dark"}
              />
              <div></div>
            </label>
          )}
        </ThemeToggler>
      </div>
    </header>
  );
};

export default Navbar;
