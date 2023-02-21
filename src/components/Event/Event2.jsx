import React from "react";
import "./Event.css";

const Event2 = ({ title, desc, img }) => {
  return (
    <>
      <div className="event-card">
        <div
          className="event-banner"
          style={{
            backgroundImage: `url(${
              require(`../../images/Events/${img}.png`).default
            })`,
          }}
        ></div>
        <div className="event-card-content">
          <h2><center>{title}</center></h2>
          <p> {desc} </p>
        </div>
      </div>
    </>
  );
};
export default Event2;
