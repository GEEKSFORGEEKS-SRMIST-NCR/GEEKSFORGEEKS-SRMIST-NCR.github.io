import { EventsApi } from "api/EventAPI";
import { EventCard } from "components/index";
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
      <h1 className="section-title">Events</h1>
      {/* Upcomming Events */}
      <h2 className={styles.heading + " " + styles.h_2}>Upcoming Events</h2>
      <div className={styles.container}>
        <EventCard title={"Tech-Darshan'23"} desc="" img={8} />
      </div>
      {/* Past Events */}
      <h2 className={styles.heading}>
        <br></br>Past Events
      </h2>
      <div className={styles.container}>{eventList}</div>
      <h2 className={styles.heading}>MORE EVENTS COMING SOON !!!</h2>
    </>
  );
};

export default Events;
