import { PotdAPI } from "api/PotdAPI";
import { PotdCard } from "components/index";
import Head from "next/head";
import styles from "styles/Potd.module.css";

let ProblemList = PotdAPI.reverse().map((data) => {
  return (
    <PotdCard
      key={data.id}
      title={data.title}
      desc={data.problem}
      img={data.id}
      url={data.url}
      date={data.date}
      difficult={data.difficult}
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
      <h2 className={styles.heading + " " + styles.h_2}>Today's Problem of the Day</h2>
      <div className={styles.container}>{ProblemList[0]}
       
      </div> 
      {/* Past Events */}
      <h2 className={styles.heading}>
        <br></br>Previous Problem of the Day
      </h2>
      <div className={styles.container}>{ProblemList.slice(1,4)}</div>
      <h2 className={styles.heading}>MORE PROBLEMS ARE COMING SOON !!!</h2>
    </>
  );
};

export default Events;
