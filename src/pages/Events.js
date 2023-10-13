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
        {<Link style={{textDecoration: "none"}} href="/Recruitment"><EventCard title={"Recruitment"} desc="Greetings from GeeksforGeeks SRMIST Delhi NCR Chapter, It's time to turn the page. We are thrilled to announce that the recruitment for ✨CORE TEAM MEMBERS✨ for the next academic year is now open! Joining 💥GeeksforGeeks core team💥 will help you get the exposure you need to launch your career in tech. We are looking for students who are passionate about technology and who are eager to learn and grow. Be it Freshman, Sophomore, Junior or Senior. We encourage you to apply!" img={11}
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
