import Image from "next/image";
import styles from "styles/Potd.module.css";
import Link from "next/link";

const CTFCard = ({ title, desc, img }) => {
    return (
        <>
            <div className={styles.card} style={{ width: 1200 }}>
                {(img != "3" && img != "5") ? < Image
                    src={`/images/CTF/${img}.png`}
                    alt={title}
                    width={300}
                    height={400}
                    quality={60}
                    priority
                    className={styles.banner}
                    style={{ objectFit: 'contain' }}
                /> : (img != "3") ? <Image
                    src={`/images/CTF/${img}.jpg`}
                    alt={title}
                    width={300}
                    height={400}
                    quality={60}
                    priority
                    className={styles.banner}
                    style={{ objectFit: 'contain' }} /> : <></>}
                <div className={styles.card_details}>
                    <h2>{title}</h2>
                    <p> {desc} </p>
                    {(img == 1) ? <a href={"https://drive.google.com/file/d/1kSu7vlwvRNI0E9M2-53xtTZ-pyV3VPKX/view?usp=drive_link"}><button>Image Link</button></a> : <></>}
                    <div style={{marginTop: "30px", padding: "0px"}}>
                        <p>Enter your Solution</p>
                        <div style={{ padding: "10px", width: "500px !important", display: "flex", height: "80px", alignItems: "center" }}>
                            <input style={{ width: "300px", padding: "10px" }} />
                            <button style={{ margin: "0", fontSize: "14px", width: "150px", padding: "10px" }}>Submit Answer</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CTFCard;
