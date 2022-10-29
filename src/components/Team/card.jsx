import React from "react";
import "./Team.css";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineClose,
} from "react-icons/ai";
import "./Popup.css";

const card = ({
  title,
  desc,
  img,
  link1,
  link2,
  link3,
  ds,
  popup,
  setPopup,
  logo,
}) => {
  console.log(logo);

  const toggleModal = () => {
    setPopup(!popup);
  };

  if (popup) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <div
        onClick={toggleModal}
        className="card"
        style={{
          backgroundImage: `url(${
            require(`../../images/Team/${img}`).default
          })`,
        }}
      >
        <div className="card-border">
          <div className="card-info">
            <h1>{title}</h1>
            <p>{desc}</p>
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
      {popup && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="modal-head">
              <span><h2>{desc}</h2>
              <p>Slogan</p></span>
              <div>
                {logo && (
                  <img
                    className="modallogo"
                    src={require(`../../images/teamlogo/${logo}`).default}
                  />
                )}
                <div className="close-modal" onClick={toggleModal}>
                  <AiOutlineClose />
                </div>
              </div>
            </div>
            <div className="modal-body">
              <img src={require(`../../images/Team/${img}`).default} />
              <p>{ds}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default card;
