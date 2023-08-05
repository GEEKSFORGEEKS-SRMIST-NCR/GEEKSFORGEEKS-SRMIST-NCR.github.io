import Image from "next/image";
import { useState } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineClose,
} from "react-icons/ai";
import Popup_styles from "styles/Home/Popup.module.css";
import styles from "styles/Home/Team.module.css/";

const Card = ({ data }) => {
  const [popup, setPopup] = useState(null);
  // Destructuring Data
  const {
    id,
    name,
    position,
    img,
    links: { link1, link2, link3 },
    modal: { team, logo, slogan, desc },
    members: { mem1, mem2,mem3,mem4,mem5,mem6,mem7,mem8,mem9,mem10,mem11,mem12},
    details:{det1,det2,det3,det4,det5,det6,det7,det8,det9,det10,det11,det12},
  } = data;

  const TestDiv = ({ time }) => {
    return (
      <pre>
        {time.map((t) => t + "\n")} <br />
      </pre>
    );
  };

  const toggleModal = (id) => {
    if (popup === id) {
      return setPopup(null);
    }
    setPopup(id);
  };

  // Created social icons
  const Socials = ({ classStyle }) => {
    return (
      <div className={classStyle}>
        {!link1 ? (
          <></>
        ) : (
          <a href={link1} target="_blank" rel="noreferrer" title="LinkedIn">
            <AiFillLinkedin />
          </a>
        )}
        {!link2 ? (
          <></>
        ) : (
          <a href={link2} target="_blank" rel="noreferrer" title="Github">
            <AiFillGithub />
          </a>
        )}
        {!link3 ? (
          <></>
        ) : (
          <a href={link3} target="_blank" rel="noreferrer" title="Instagram">
            <AiFillInstagram />
          </a>
        )}
      </div>
    );
  };
  const Core_Members = () => {
    return (
      <div>
      {!det1 ? (
        <></>
      ) : (
                 <div>
                  <h2 style={{textAlign:"center"}}>Core Team Members</h2>
                  <table style={{width:"100%",border:"2px solid white",borderRadius:"15px"}}>
                    <tr>
                      <th style={{borderBottom:"1px solid white",paddingTop:"4px",paddingBottom:"4px",textAlign:"center",width:"50%"}}>Names</th>
                      <th style={{borderBottom:"1px solid white",paddingTop:"4px",paddingBottom:"4px",textAlign:"center",width:"50%"}}>Details</th>
                    </tr>
                    <tr>
                      <td style={{textAlign:"center",padding:"2px",fontSize:"1rem",fontWeight:"300",lineHeight:"1.4",fontSize:"1rem",fontWeight:"300",lineHeight:"1.4"}}>{mem1}</td>
                      <td style={{textAlign:"center",padding:"2px",fontSize:"1rem",fontWeight:"300",lineHeight:"1.4"}}>{det1}</td>
                    </tr>
                    <tr>
                      <td style={{textAlign:"center",padding:"2px",fontSize:"1rem",fontWeight:"300",lineHeight:"1.4"}}>{mem2}</td>
                      <td style={{textAlign:"center",padding:"2px",fontSize:"1rem",fontWeight:"300",lineHeight:"1.4"}}>{det2}</td>
                    </tr>
                    <tr>
                      <td style={{textAlign:"center",padding:"2px",fontSize:"1rem",fontWeight:"300",lineHeight:"1.4"}}>{mem3}</td>
                      <td style={{textAlign:"center",padding:"2px",fontSize:"1rem",fontWeight:"300",lineHeight:"1.4"}}>{det3}</td>
                    </tr>
                    <tr>
                      <td style={{textAlign:"center",padding:"2px",fontSize:"1rem",fontWeight:"300",lineHeight:"1.4"}}>{mem4}</td>
                      <td style={{textAlign:"center",padding:"2px",fontSize:"1rem",fontWeight:"300",lineHeight:"1.4"}}>{det4}</td>
                    </tr>
                    <tr>
                      <td style={{textAlign:"center",padding:"2px",fontSize:"1rem",fontWeight:"300",lineHeight:"1.4"}}>{mem5}</td>
                      <td style={{textAlign:"center",padding:"2px",fontSize:"1rem",fontWeight:"300",lineHeight:"1.4"}}>{det5}</td>
                    </tr>
                    <tr>
                      <td style={{textAlign:"center",padding:"2px",fontSize:"1rem",fontWeight:"300",lineHeight:"1.4"}}>{mem6}</td>
                      <td style={{textAlign:"center",padding:"2px",fontSize:"1rem",fontWeight:"300",lineHeight:"1.4"}}>{det6}</td>
                    </tr>
                    <tr>
                      <td style={{textAlign:"center",padding:"2px",fontSize:"1rem",fontWeight:"300",lineHeight:"1.4"}}>{mem7}</td>
                      <td style={{textAlign:"center",padding:"2px",fontSize:"1rem",fontWeight:"300",lineHeight:"1.4"}}>{det7}</td>
                    </tr>
                    <tr>
                      <td style={{textAlign:"center",padding:"2px",fontSize:"1rem",fontWeight:"300",lineHeight:"1.4"}}>{mem8}</td>
                      <td style={{textAlign:"center",padding:"2px",fontSize:"1rem",fontWeight:"300",lineHeight:"1.4"}}>{det8}</td>
                    </tr>
                    <tr>
                      <td style={{textAlign:"center",padding:"2px",fontSize:"1rem",fontWeight:"300",lineHeight:"1.4"}}>{mem9}</td>
                      <td style={{textAlign:"center",padding:"2px",fontSize:"1rem",fontWeight:"300",lineHeight:"1.4"}}>{det9}</td>
                    </tr>
                    <tr>
                      <td style={{textAlign:"center",padding:"2px",fontSize:"1rem",fontWeight:"300",lineHeight:"1.4"}}>{mem10}</td>
                      <td style={{textAlign:"center",padding:"2px",fontSize:"1rem",fontWeight:"300",lineHeight:"1.4"}}>{det10}</td>
                    </tr>
                    <tr>
                      <td style={{textAlign:"center",padding:"2px",fontSize:"1rem",fontWeight:"300",lineHeight:"1.4"}}>{mem11}</td>
                      <td style={{textAlign:"center",padding:"2px",fontSize:"1rem",fontWeight:"300",lineHeight:"1.4"}}>{det11}</td>
                    </tr>
                    <tr>
                      <td style={{textAlign:"center",padding:"2px",fontSize:"1rem",fontWeight:"300",lineHeight:"1.4"}}>{mem12}</td>
                      <td style={{textAlign:"center",padding:"2px",fontSize:"1rem",fontWeight:"300",lineHeight:"1.4"}}>{det12}</td>
                    </tr>
                  </table>
                </div>
      )}
      </div>
    );
  };




  // Card Module
  return (
    <>
      <div
        onClick={() => toggleModal(id)}
        className={styles.card}
        style={{
          backgroundImage: `url(${`/images/Team/${img})`}`,
        }}
      >
        <div className={styles.card_border}>
          <div className={styles.card_info}>
            <h3>{name}</h3>
            <p>{position}</p>
          </div>
          <Socials classStyle={styles.socials} />
        </div>
      </div>

      {/* Modal Container */}
      {popup && (
        <div className={Popup_styles.modal}>
          <div
            onClick={() => toggleModal()}
            onKeyDown={() => toggleModal()}
            aria-label="Popup Modal"
            role="button"
            tabIndex="0"
            className={Popup_styles.overlay}
          ></div>
          <div className={Popup_styles.modal_content}>
            <div className={Popup_styles.modal_head}>
              {logo && (
                <Image
                  width={100}
                  height={50}
                  className={Popup_styles.logo}
                  src={`/images/teamlogo/${logo}`}
                  alt="Team Logo"
                  quality={50}
                />
              )}
              <span>
                <h3>{team}</h3>
                {slogan && <q>{slogan}</q>}
              </span>
              <div
                className={Popup_styles.close_modal}
                onClick={() => toggleModal()}
                onKeyDown={() => toggleModal()}
                role="button"
                tabIndex="0"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className={Popup_styles.modal_body_wrapper}>
              <div className={Popup_styles.modal_body}>
                <Image
                  width={300}
                  height={300}
                  src={`/images/Team/${img}`}
                  alt={name}
                  style={{ objectFit: "cover" }}
                  quality={50}
                />
                <hr />
                <div>
                  <h4>{name}</h4>
                  <h5>{position}</h5>
                  <hr />
                  <p>{desc}</p>
                  <Socials classStyle={Popup_styles.socials} />
                </div>
              </div>
              <Core_Members />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
