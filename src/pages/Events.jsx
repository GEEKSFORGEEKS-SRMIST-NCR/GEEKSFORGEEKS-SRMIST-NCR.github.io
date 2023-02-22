import React from "react";
import Layout from "../components/Layout";
import Event from "../components/Event/Event";
import Event2 from "../components/Event/Event2";
import Seo from "../components/Seo";
import { EventsApi } from "/lib/EventAPI";

let eventlist = EventsApi.map((data) => {
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
      <Seo title="Events" />
      <Layout>
        <h1 className="section-title">Events</h1>
        <h2 className="eventh2">Upcoming Events</h2>
        <div className="events-container">
        <Event2
            title={"Talk with Love Babbar"}
            desc=""
            img={9}
          />
          <Event2
            title={"Tech-Darshan'23"}
            desc=""
            img={8}
          />
        </div>
        <h2 className="eventh2">
          <br></br>Past Events
        </h2>
        <div className="events-container">{eventlist}</div>
        <h2 className="upcoming">MORE EVENTS COMING SOON !!!</h2>
      </Layout>
    </>
  );
};

export default Events;
