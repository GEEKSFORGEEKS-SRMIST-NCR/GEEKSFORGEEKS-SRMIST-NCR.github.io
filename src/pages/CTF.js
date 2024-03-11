import Link from "next/link";
import { CTFAPI } from "api/CTFAPI";
import { CTFCard } from "components/index";
import { supabase } from "api/Supabase";
import Head from "next/head";
import styles from "styles/Event.module.css";

let eventList = CTFAPI.map((data) => {
    return (
        <CTFCard
            key={data.id}
            title={`Problem ${data.id}`}
            desc={data.question}
            img={data.id}
        />
    );
});

const CTF = () => {
    return (
        <>
            <Head>
                <title>Codyssey</title>
            </Head>
            <h1 className="section-title">Codyssey</h1>
            <div className={styles.container}>
                {/* <Link style={{ textDecoration: "none" }} href="/Registration"><EventCard title={"Web Explore"} desc=" Web Explore is a web development workshop designed to take you deep into the world of web technologies and design, and we invite tech enthusiasts of all academic years to join us." img={11}
        /></Link> */}
                {/* <h2 className={styles.heading + " " + styles.h_2}><br></br>MORE EVENTS SOON!!</h2> */}
            </div>
            {/* Past Events */}
            {/* <h2 className={styles.heading}>
                <br></br>Past Events
            </h2> */}
            <div className={styles.container}>{eventList}</div>
        </>
    );
};

export default CTF;
