import React from "react";
import Layout from "../components/Layout";
import Event from "../components/Event/Event";

let events = [
  {
    id: 1,
    title: "Event Title 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    image: "https://source.unsplash.com/random/400x300",
  },
  {
    id: 2,
    title: "Event Title 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    image: "https://source.unsplash.com/random/400x300",
  },
];

let eventlist = events.map((data) => {
  return <Event key={data.id} title={data.title} desc={data.description} img={data.image} />;
});

const Events = () => {
  return (
    <>
      <Layout>
        <h1 className="section-title">Events</h1>
        <div className="events-container">{eventlist}</div>
        <h2 className="upcoming">MORE EVENTS COMING SOON !!!</h2>
      </Layout>
    </>
  );
};

export default Events;
