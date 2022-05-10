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
    id: 2,
    title: "KODATION",
    description:
      "An amazing technical Contest specially only for the SRMIST Delhi NCR students, conducted on it's very own trusted platform of GeeksforGeeks, this contest was divided into two groups.",
  },
  {
    id: 3,
    title: "DEBBUGING MINDSET",
    description:
      "An engaging event for SRMIST students! Interactive session with seniors placed in companies like Capgemini, F5 networks, Amazon , Wipro  etc with  24lpa, 20lpa and so on.",
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
