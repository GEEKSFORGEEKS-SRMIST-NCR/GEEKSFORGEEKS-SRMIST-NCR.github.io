import React, { useState } from "react";
import "./faq.css";
import { FaqApi } from "/lib/FaqApi";

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="wrapper">
      <h2 align="center"> Frequently Asked Questions </h2>
      <div className="accordion">
        {FaqApi.map((item, i) => (
          <div key={i} className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h3> {item.question} </h3>
              <span> {selected === i ? "-" : "+"} </span>
            </div>
            <div className={selected === i ? "content show" : "content"}>
              {item.answer.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
