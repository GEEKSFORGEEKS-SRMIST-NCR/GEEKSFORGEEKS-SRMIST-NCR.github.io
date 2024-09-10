import { EventCard } from "components/index";
import Head from "next/head";
import { getAllEventPosters } from "../utils/contentful";
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
  useEffect(() => {
    const fetchImages = async () => {
      const contentfulImages = await getAllEventPosters();
      const images = contentfulImages.map((image) => ({
        src: image.src,
        width: 4,
        height: 3,
      }));
      setPhotos(images);
    };

    fetchImages();
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
        {/* <Link style={{ textDecoration: "none" }} href="/Registration">
          <EventCard
            title={"Machine Learning Workshop 2.0"}
            desc="🚀🤖 Get ready for ML Workshop 2.0! Building on the success of our first workshop, this upcoming event promises to be even more exciting. Participants will dive deeper into advanced Machine Learning concepts, engaging in hands-on projects and learning from industry-leading mentors. The energy will be palpable as attendees explore the latest trends and techniques, further cultivating our vibrant community of innovation and expertise. Don't miss this opportunity to elevate your ML skills to the next level!"
            img={15}
          />
        </Link> */}
        <h2 className={styles.heading + " " + styles.h_2}>
          <br></br>MORE EVENTS SOON!!
        </h2>
      </div>
      {/* Past Events */}
      <h2 className={styles.heading}>
        <br></br>Past Events
      </h2>

      <div className={styles.container}>{eventList}</div>
    </>
  );
};

export default Events;
