import React from "react";
import Layout from "../components/Layout";
import Event from "../components/Event/Event";
import Seo from "../components/Seo";

let events = [
  {
    id: 1,
    title: "Resume Building Session",
    description:
      "This resume building workshop will help you build a polished resume that could land you an interview.🥳",
  },
  {
    id: 1,
    title: "Event Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  {
    id: 1,
    title: "Event 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
];

let eventlist = events.map((data) => {
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
        <div className="events-container">{eventlist}</div>
        <h2 className="upcoming">MORE EVENTS COMING SOON !!!</h2>
      </Layout>
    </>
  );
};

export default Events;
