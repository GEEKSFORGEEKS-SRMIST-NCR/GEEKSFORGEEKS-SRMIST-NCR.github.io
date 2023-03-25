import "styles/Event.module.css";

const Event = ({ title, desc, img }) => {
  return (
    <>
      <div className="event-card">
        <div
          className="event-banner"
          style={{
            backgroundImage: `url(${`images/Events/${img}.png`})`,
          }}
        ></div>
        <div className="event-card-content">
          <h2>{title}</h2>
          <p> {desc} </p>
        </div>
      </div>
    </>
  );
};

export default Event;
