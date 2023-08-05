import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import styles from "styles/Home/Navbar.module.css";
import Link from "next/link";

const ThemeToogle = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const openMenu = () => {
    if (window.innerWidth <= 1024) {
      setOpen(!open);
    }
  };
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", checkIsMobile);
    checkIsMobile(); 

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);
  

  return (

    <div className={styles.navContainer}>
      {/* Link */}
    <li>
      <Link className="potd" href="/Potd" onClick={openMenu} >
      {isMobile ? "</>" : "</POTD>"}

      </Link>
    </li>
    {/* Theme Toggle */}
    <label className={styles.toogleTheme}>
      <input
        type="checkbox"
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        checked={theme === "dark"}
      />
      <div></div>
    </label>

    
  </div>
  );
};

export default ThemeToogle;
