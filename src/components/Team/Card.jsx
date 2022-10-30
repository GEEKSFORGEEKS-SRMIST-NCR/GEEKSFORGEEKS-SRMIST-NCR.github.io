import React from "react";
import { useState } from "react";
import "./Team.css";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineClose,
} from "react-icons/ai";
import "./Popup.css";

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

  return (
    <>
      <div
        onClick={() => toggleModal(id)}
        className="card"
        style={{
          backgroundImage: `url(${
            require(`../../images/Team/${img}`).default
          })`,
        }}
      >
        <div className="card-border">
          <div className="card-info">
            <h3>{name}</h3>
            <p>{position}</p>
          </div>

          <div className="social-links">
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
              <a
                href={link3}
                target="_blank"
                rel="noreferrer"
                title="Instagram"
              >
                <AiFillInstagram />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Modal Container */}
      {popup && (
        <div className="modal">
          <div onClick={() => toggleModal()} className="overlay"></div>
          <div className="modal-content">
            <div className="modal-head">
              {logo && (
                <img
                  className="modal-logo"
                  src={require(`../../images/teamlogo/${logo}`).default}
                />
              )}
              <span>
                <h3>{team}</h3>
                <p>{slogan}</p>
              </span>
              <div className="close-modal" onClick={() => toggleModal()}>
                <AiOutlineClose />
              </div>
            </div>
            <div className="modal-body">
              <img src={require(`../../images/Team/${img}`).default} />
              <div>
                <h4>{name}</h4>
                <h5>{position}</h5>
                <hr />
                <p>{desc}</p>
                <div className="socials">
                  {!link1 ? (
                    <></>
                  ) : (
                    <a
                      href={link1}
                      target="_blank"
                      rel="noreferrer"
                      title="LinkedIn"
                    >
                      <AiFillLinkedin />
                    </a>
                  )}
                  {!link2 ? (
                    <></>
                  ) : (
                    <a
                      href={link2}
                      target="_blank"
                      rel="noreferrer"
                      title="Github"
                    >
                      <AiFillGithub />
                    </a>
                  )}
                  {!link3 ? (
                    <></>
                  ) : (
                    <a
                      href={link3}
                      target="_blank"
                      rel="noreferrer"
                      title="Instagram"
                    >
                      <AiFillInstagram />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
