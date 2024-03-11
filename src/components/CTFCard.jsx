import Image from "next/image";
import styles from "styles/Potd.module.css";
import Link from "next/link";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { supabase } from "api/Supabase";
const CTFCard = ({ title, desc, img }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submitData = async (data, e) => {
        // Sending data to Supabase
        await supabase
            .from("CTFForm")
            .insert([{ "ques_number": img, "lead_email": data.lead_email, "answer": data.answer}])
            .then(() => {
                e.target.reset();
            })
            .then((e) => console.log(e));
    };
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
                    <div style={{ marginTop: "30px", padding: "0px" }}>
                        <p>Enter your Solution</p>
                        <form onSubmit={handleSubmit(submitData)} style={{ padding: "10px", width: "500px !important", display: "flex", gap: "10px", flexDirection: "column", justifyContent: "center" }}>
                            <input
                                placeholder="Enter Your College email"
                                style={{ width: "300px", padding: "10px" }}
                                {...register("lead_email", {
                                    required: "This field is required",
                                    pattern: {
                                        value: /^[a-zA-Z]{2}[0-9]{4}@srmist\.edu\.in$/i,
                                        message: "Enter a valid email ending with '@srmist.edu.in'",
                                    },
                                })}
                            />
                            <ErrorMessage errors={errors} name="lead_email" as="span" />

                            <input
                                placeholder="Enter Solution"
                                style={{ width: "300px", padding: "10px" }}
                                {...register("answer", {
                                    required: "This field is required",
                                    // pattern: {
                                    //     value: /^[a-zA-Z][a-zA-Z ]+$/,
                                    //     message: "Alphabetical characters only",
                                    // },
                                })}
                            />
                            <button style={{ margin: "0", fontSize: "14px", width: "150px", padding: "10px" }}>Submit Answer</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CTFCard;
