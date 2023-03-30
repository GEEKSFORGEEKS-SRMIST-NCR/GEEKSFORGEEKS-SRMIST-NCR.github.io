import Image from "next/image";
import { useState } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineClose
} from "react-icons/ai";
import Popup_styles from "styles/Home/Popup.module.css";
import styles from "styles/Home/Team.module.css";

const Card = ({ data }) => {
  const {
    id,
    name,
    position,
    img,
    links: { link1, link2, link3 },
    modal: { team, logo, slogan, desc },
  } = data;

  const [popup, setPopup] = useState(null);

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

  // Card Module
  return (
    <>
      <div
        onClick={() => toggleModal(id)}
        onKeyDown={() => toggleModal(id)}
        role="button"
        tabIndex="0"
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
                  height={60}
                  className={Popup_styles.logo}
                  src={`/images/teamlogo/${logo}`}
                  alt="Team Logo"
                  loading="lazy"
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
            <div className={Popup_styles.modal_body}>
              <Image
                width={300}
                height={300}
                src={`/images/Team/${img}`}
                alt=""
                style={{ objectFit: "cover" }}
              />
              <div>
                <h4>{name}</h4>
                <h5>{position}</h5>
                <hr />
                <p>{desc}</p>
                <Socials classStyle={Popup_styles.socials} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
