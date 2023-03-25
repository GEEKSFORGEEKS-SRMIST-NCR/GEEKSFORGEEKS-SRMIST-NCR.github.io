import { gsap } from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";
import "styles/Home/Navbar.module.css";
import { Logo } from "./Logo/Logo";
import { Logo2 } from "./Logo/Logo2";

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
    <header className="header" ref={el}>
      <Link href="/" className="logo">
        <Logo />
        <Logo2 />
      </Link>
      <div className="navbar">
        <span
          className="hamburger-menu"
          onClick={tooglemenu}
          onKeyDown={tooglemenu}
          role="button"
          tabIndex="0"
        >
          <span className="gfg-burger-1"></span>
          <span className="gfg-burger-2"></span>
          <span className="gfg-burger-3"></span>
        </span>
        <ul>
          <li>
            <Link href="/" onClick={tooglemenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/Events" onClick={tooglemenu}>
              Events
            </Link>
          </li>
          <li>
            <Link href="/#Team" onClick={tooglemenu}>
              Team
            </Link>
          </li>
          <li>
            <Link href="/Gallery" onClick={tooglemenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/#Contact" onClick={tooglemenu}>
              Contact
            </Link>
          </li>
        </ul>
        {/* <ThemeToggler>
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
        </ThemeToggler> */}
      </div>
    </header>
  );
};

export default Navbar;
