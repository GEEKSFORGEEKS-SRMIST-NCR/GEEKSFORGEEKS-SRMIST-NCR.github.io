import styles from "styles/Potd.module.css"; 
import { Link } from "next/link";


const PotdCard = ({ title, desc, url,date,difficult }) => {
    return (
      <>
        <div className={styles.card}>
          {/* <Image
            src={`/images/Events/${img}.png`}
            alt={title}
            width={300}
            height={400}
            quality={60}
            priority
            className={styles.banner}
          /> */}
       
          <div className={styles.card_details}>
            <h2>{title}</h2>
            <p> {desc} </p>
            <p><small>Date:{date}</small></p>
            <p><small>Difficulty:{difficult}</small></p>
            <a href={url}><button>Solve Now !!!</button></a>
          </div>
        </div>
        
      </>
    );
  };
  
  export default PotdCard;