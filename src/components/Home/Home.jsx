import styles from "styles/Home/Home.module.css";
import { Logo2 } from "../Logo/Logo2";

const Home = () => {
  return (
    <section className={styles.home}>
      <Logo2 />
      <h1>SRMIST NCR CHAPTER</h1>
      <h2>A Community of SRMIST Students</h2>
    </section>
  );
};

export default Home;
