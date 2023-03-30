import { useTheme } from "next-themes";
import styles from "styles/Home/Navbar.module.css";

const ThemeToogle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <label className={styles.toogleTheme}>
      <input
        type="checkbox"
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        checked={theme === "dark"}
      />
      <div></div>
    </label>
  );
};

export default ThemeToogle;
