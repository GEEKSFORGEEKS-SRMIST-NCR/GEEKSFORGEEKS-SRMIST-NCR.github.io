import { EventCard } from "components/index";
import Head from "next/head";
import styles from "styles/Event.module.css";
import { getAllEventPosters, getActiveEventPoster } from "../utils/contentful";
import { useEffect, useState } from "react";
import Link from "next/link";

const Events = () => {
  const [activePoster, setActivePoster] = useState([]);
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    const fetchPosters = async () => {
      const contentfulPosters = await getAllEventPosters();
      setPosters(contentfulPosters);
    };
    const fetchActivePoster = async () => {
      const contentfulActivePoster = await getActiveEventPoster();

      setActivePoster(contentfulActivePoster);
    };
    fetchActivePoster();
    fetchPosters();
  }, []);
  return (
    <>
      <Head>
        <title>Events | GFG SRMIST</title>
      </Head>
      <h1 className="section-title">Events</h1>
      <h2 className={styles.heading}>
        <br></br>Upcoming Events
      </h2>
      <div className={styles.container}>
        {activePoster.length > 0 ? (
          <Link style={{ textDecoration: "none" }} href="/Registration">
            <EventCard
              title={activePoster[0].title}
              desc={activePoster[0].desc}
              img={activePoster[0].img}
            />
          </Link>
        ) : (
          <>
            <h2 className={styles.heading + " " + styles.h_2}>
              <br></br>MORE EVENTS SOON!!
            </h2>
          </>
        )}
      </div>
      {/* Past Events */}
      <h2 className={styles.heading}>
        <br></br>Past Events
      </h2>

      <div className={`${styles.container} select-none`}>
        {posters.length > 0 ? (
          posters.map((data) => {
            return (
              <EventCard
                key={data.key}
                title={data.title}
                desc={data.desc}
                img={data.img}
              />
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Events;
