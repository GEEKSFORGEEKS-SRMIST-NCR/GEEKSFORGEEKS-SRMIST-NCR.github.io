import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import "styles/Home/Home.module.css";
import { Logo2 } from "../Logo/Logo2";

const Home = () => {
  const el = useRef();

  useEffect(() => {
    const q = gsap.utils.selector(el);
    gsap.from(q("h1, h2, svg"), {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.inOut",
    });
  }, []);

  return (
    <section className="home" ref={el}>
      <Logo2 />
      <h1>SRMIST NCR CHAPTER</h1>
      <h2>A Community of SRMIST Students</h2>
    </section>
  );
};

export default Home;
