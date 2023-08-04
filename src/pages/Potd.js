import { PotdAPI } from "api/PotdAPI";
import { PotdCard } from "components/index";
import Head from "next/head";
import styles from "styles/Event.module.css";

let ProblemList = PotdAPI.reverse().map((data) => {
  return (
    <PotdCard
      key={data.id}
      title={data.title}
      desc={data.description}
      img={data.id}
    />
  );
});

const Events = () => {
  return (
    <>
      <Head>
        <title>Problem of the Day | GFG SRMIST</title>
      </Head>
      <h1 className="section-title">Problem Of The Day</h1>
      {/* Upcomming Events */}
      <h2 className={styles.heading + " " + styles.h_2}>Today's Problem of the Day</h2>
      <div className={styles.container}>
        <PotdCard title={"Tech-Darshan'23"} desc="bbbkb"  />
      </div>
      {/* Past Events */}
      <h2 className={styles.heading}>
        <br></br>Previous Problem of the Day
      </h2>
      <div className={styles.container}>{ProblemList}</div>
      <h2 className={styles.heading}>MORE EVENTS COMING SOON !!!</h2>
    </>
  );
};

export default Events;
