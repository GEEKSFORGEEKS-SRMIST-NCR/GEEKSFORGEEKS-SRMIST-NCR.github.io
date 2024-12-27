import styles from "styles/Home/About.module.css";
import { Logo } from "../Logo/Logo";
import { Logo2 } from "../Logo/Logo2";
import { AnimatedWelcomeText } from "../ui/text-generate-effect";

const About = () => {
  return (
    <section id="About">
      <h2 className="section-title"> About Us</h2>
      <div className={`${styles.container} select-none`}>
        <div className={styles.title}>
          <Logo /> <Logo2 />
        </div>
        <AnimatedWelcomeText duration={1}/>
      </div>
    </section>
  );
};

export default About;
