import Image from "next/image";
import styles from "styles/Event.module.css";

const EventCard = ({ title, desc, img }) => {
  return (
    <>
      <div className={styles.card}>
        <Image
          src={img}
          alt={title}
          width={280}
          height={475}
          quality={60}
          loading="lazy"
          className={styles.banner}
        />
        <div className={styles.card_details}>
          <h2>{title}</h2>
          <p> {desc} </p>
        </div>
      </div>
    </>
  );
};

export default EventCard;
