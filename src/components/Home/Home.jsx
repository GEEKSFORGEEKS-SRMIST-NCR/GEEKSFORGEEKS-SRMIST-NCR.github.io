import styles from "styles/Home/Home.module.css";
import { Logo2 } from "../Logo/Logo2";

const Home = () => {
  const background_image = {
    backgroundImage: "url(/backdrop.jpeg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    margin: 0,
    padding: 0,
  };
  return (
    <section className={styles.home} style={background_image}>
      <Logo2 />
      <h1>SRMIST NCR CHAPTER</h1>
      <h2>A Community of SRMIST Students</h2>
    </section>
  );
};

export default Home;
