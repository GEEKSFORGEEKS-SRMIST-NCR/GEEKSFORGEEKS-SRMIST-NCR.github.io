import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "styles/Home/Navbar.module.css";
import { Logo } from "../../Logo/Logo";
import ThemeToogle from "./ThemeToogle";
import { getBannerData } from "../../../utils/contentful";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    getBannerData().then(setBanners);
  }, []);

  const openMenu = () => {
    if (window.innerWidth <= 1024) {
      setOpen(!open);
    }
  };

  const getNavLink = () => {
    if (banners.some(banner => banner.fields.recruitment)) {
      return {
        href: "/Recruitment",
        text: "Recruitment"
      };
    } else if (banners.some(banner => banner.fields.eventRegistration)) {
      return {
        href: "/Registration",
        text: "Registration"
      };
    } else {
      return {
        href: "/Certificates",
        text: "Certificates"
      };
    }
  };

  const navLink = getNavLink();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Logo />
      </Link>
      <div className={styles.munu_btn} onClick={openMenu}>
        <span
          style={{
            transform: open ? "rotate(45deg) translate(2px, -1px)" : "none",
          }}
        />
        <span style={{ opacity: open ? "0" : "1" }} />
        <span style={{ transform: open ? "rotate(-45deg)" : "none" }} />
      </div>

      <ul className={open ? `${styles.ul} ${styles.open}` : styles.ul}>
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
          <Link href={navLink.href} onClick={openMenu}>
            {navLink.text}
          </Link>
        </li>
      </ul>
      <ThemeToogle />
    </header>
  );
};

export default Navbar;