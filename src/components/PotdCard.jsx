import Image from "next/image";

import styles from "styles/Potd.module.css"; 


const PotdCard = ({ title, desc, img }) => {
    return (
      <>
        <div className={styles.card}>
          <Image
            src={`/images/Events/${img}.png`}
            alt={title}
            width={300}
            height={400}
            quality={60}
            priority
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
  
  export default PotdCard;