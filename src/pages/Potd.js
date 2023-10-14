import { PotdAPI } from "api/PotdAPI";
import { PotdCard } from "components/index";
import Head from "next/head";
import styles from "styles/Potd.module.css";

// let { data: POTDForm, error } = await supabase
//   .from('POTDForm')
//   .select('id,title,url,date,topic')

let ProblemList = PotdAPI.reverse().map((data) => {
  return (
    <PotdCard
      key={data.id}
      title={data.title}
      url={data.url}
      date={data.date}
      topic={data.topic}
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
      <div className={styles.container}>{ProblemList[0]}
       
      </div> 
      {/* Past Events */}
      <h2 className={styles.heading}>
        <br></br>Previous Problem of the Day
      </h2>
      <div className={styles.container}>{ProblemList.slice(1, ProblemList.length)}</div>
    </>
  );
};

export default Events;
