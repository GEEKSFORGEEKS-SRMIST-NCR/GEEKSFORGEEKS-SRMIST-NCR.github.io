import { Event } from "components/index";
import { EventsApi } from "/lib/EventAPI";

let eventlist = EventsApi.reverse().map((data) => {
  return (
    <Event
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
      <h2 className="eventh2">Upcoming Events</h2>
      <div className="events-container">
        <Event title={"Tech-Darshan'23"} desc="" img={8} />
      </div>
      <h2 className="eventh2">
        <br></br>Past Events
      </h2>
      <div className="events-container">{eventlist}</div>
      <h2 className="upcoming">MORE EVENTS COMING SOON !!!</h2>
    </>
  );
};

export default Events;
