import Link from "next/link";
import { useState } from "react";
import styles from "styles/Home/Navbar.module.css";
import { Logo } from "../../Logo/Logo";
import ThemeToogle from "./ThemeToogle";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Toogle Menu for small devices
  const openMenu = () => {
    if (window.innerWidth <= 1024) {
      setOpen(!open);
    }
  };

  return (
    <header className={styles.header}>
      {/* GFG Logo */}
      <Link href="/" className={styles.logo}>
        <Logo />
      </Link>
      {/* Menu Toogle Btn */}
      <div className={styles.munu_btn} onClick={openMenu}>
        <span
          style={{
            transform: open ? "rotate(45deg) translate(2px, -1px)" : "none",
          }}
        />
        <span
          style={{
            opacity: open ? "0" : "1",
          }}
        />
        <span
          style={{
            transform: open ? "rotate(-45deg)" : "none",
          }}
        />
      </div>

      {/* Navbar List */}
      <ul className={open ? `${styles.ul + " " + styles.open}` : styles.ul}>
        <li>
          <Link href="/" onClick={openMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/Events" onClick={openMenu}>
            Events
          </Link>
        </li>
        <li>
          <Link href="/#Team" onClick={openMenu}>
            Team
          </Link>
        </li>
        <li>
          <Link href="/Gallery" onClick={openMenu}>
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/Certificates" onClick={openMenu}>
            Certificates
          </Link>
        </li>
        <li>
          <Link href="/Potd" onClick={openMenu}>
          &lt;/POTD&gt;
          </Link>
        </li>
      </ul>
      {/* Theme Toogle Btn */}
      <ThemeToogle />
    </header>
  );
};

export default Navbar;
