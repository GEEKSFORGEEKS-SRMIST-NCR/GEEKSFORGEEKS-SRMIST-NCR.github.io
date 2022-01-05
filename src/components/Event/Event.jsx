import React from "react";
import "./Event.css";

const Event = ({ title, desc, img }) => {
  return (
    <>
      <div className="event-card">
        <div className="event-banner">
          <img src={img} alt={title} />
        </div>
        <div className="event-card-content">
          <h2>{title}</h2>
          <p> {desc} </p>
        </div>
      </div>
    </>
  );
};

export default Event;
