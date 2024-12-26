import React from "react";
import styles from "styles/Home/Potw.module.css"; 
import Card from "./Card"; 
import { SparklesCore } from "../ui/sparkles"; 

const Potw = () => {
  const potwData = {
    name: "John Doe",
    position: "",
    img: "",
    links: {},
    modal: {
      team: "GFG Chapter",
      logo: "main.webp",
      slogan: "",
      desc: "",
    },
    members: {},
    details: {},
  };

  return (
    <section id="Potw" className={`${styles.potwSection} relative overflow-hidden`}>
      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="potwSparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={110} 
          className="w-full h-full"
          particleColor="#C3FFC9"
        />
      </div>

      {/* Content */}
      <div className={`relative z-10 ${styles.contentWrapper}`}>
        <h2 className="section-title text-white">Performer of the Week</h2>
        <div className={styles.container}>
          <div className={styles.cardWrapper}>
            <div className={styles.cardBorder}>
              <Card key={potwData.id} data={potwData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Potw;