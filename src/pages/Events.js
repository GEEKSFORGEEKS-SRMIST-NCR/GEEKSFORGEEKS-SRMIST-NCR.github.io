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
      {/* Upcomming Events */}
      <h2 className={styles.heading + " " + styles.h2}>
        <br></br>Upcoming Events
        </h2>
      <div className={styles.container}>
        {<EventCard title={"DSA Workshop"} desc={"Hola amigos 💫 📢 GeeksforGeeks SRMIST NCR student chapter is delighted to share with  you the details of the exclusive workshop on DSA.🚀And there is a little surprise✨✨ for you all along with our honourable guest speaker: Karan MashruAssociate mentorGeeksForGeeksTheir expertise and insights will provide invaluable knowledge for your professional journey. 🗣Don't miss the exclusive opportunity to strengthen your DSA skills📈 with a resume that opens doors to exciting opportunities as there are only 40 slots availableHere is the registration link: https://www.srmist-ncr-gfg.org/Registration  📅 Date: 18th September, 2023 🕑 Time: 2:00 pm to 4:00 pm See you there!🙌🎉"} img={10} 
        />}
      </div>
      <br></br>
      <h2 className={styles.heading + " " + styles.h2}>
        <br></br>MORE EVENTS SOON!!
        </h2>
      <div className={styles.container}>
        {/*<EventCard title={"Tech-Darshan'23"} desc="" img={8} />*/}
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
