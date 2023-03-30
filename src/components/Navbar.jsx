import Link from "next/link";
import { useState } from "react";
import styles from "styles/Home/Navbar.module.css";
import { Logo } from "./Logo/Logo";
import { Logo2 } from "./Logo/Logo2";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Logo />
        <Logo2 />
      </Link>

      <div className={styles.navbar}>
        <span
          className={styles.munu_btn}
          onClick={() => setOpen(!open)}
          onKeyDown={() => setOpen(!open)}
          role="button"
          tabIndex="0"
        >
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
        </span>
        <ul className={open ? `${styles.ul + styles.open}` : styles.ul}>
          <li>
            <Link href="/" onClick={() => setOpen(!open)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/Events" onClick={() => setOpen(!open)}>
              Events
            </Link>
          </li>
          <li>
            <Link href="/#Team" onClick={() => setOpen(!open)}>
              Team
            </Link>
          </li>
          <li>
            <Link href="/Gallery" onClick={() => setOpen(!open)}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/#Contact" onClick={() => setOpen(!open)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
