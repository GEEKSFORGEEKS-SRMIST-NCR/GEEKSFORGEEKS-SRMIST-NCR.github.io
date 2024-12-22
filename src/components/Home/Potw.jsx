import React from "react";
import styles from "styles/Home/Potw.module.css"; // Custom CSS for Potw
import Card from "./Card"; // Reusing Card component

const Potw = () => {

  const potwData = {
      name: "John ABC",
      position: "",
      img: "",
      links: {
      },
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
    <section id="Potw" className={styles.potwSection}>
      <h2 className="section-title">Performer of the Week</h2>
      <div className={styles.container}>
        <Card key={potwData.id} data={potwData} />
      </div>
    </section>
  );
};

export default Potw;
