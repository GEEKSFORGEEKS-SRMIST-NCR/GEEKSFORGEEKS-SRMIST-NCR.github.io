import Link from "next/link";
import { EventsApi } from "api/EventAPI";
import { EventCard } from "components/index";
import Head from "next/head";
import styles from "styles/Event.module.css";

let eventList = EventsApi.reverse().map((data) => {
  return (
    <EventCard
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
        <title>Events | GFG SRMIST</title>
      </Head>
      <h1 className="section-title">Events</h1>
      <h2 className={styles.heading}>
        <br></br>Upcoming Events
      </h2>
      <div className={styles.container}>
        {<Link style={{textDecoration: "none"}} href="/Registration"><EventCard title={"Web Explore"} desc=" Web Explore is a web development workshop designed to take you deep into the world of web technologies and design, and we invite tech enthusiasts of all academic years to join us." img={11}
        /></Link>}
        
        {/* <h2 className={styles.heading + " " + styles.h_2}><br></br>MORE EVENTS SOON!!</h2> */}
      </div>
      {/* Past Events */}
      <h2 className={styles.heading}>
        <br></br>Past Events
      </h2>
      <div className={styles.container}>{eventList}</div>
    </>
  );
};

export default Events;
