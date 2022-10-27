import React, { useState } from "react";
import { FaqApi } from "/lib/FaqApi";
import "./faq.css";

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <section className="faq" id="faq">
      <h1 className="section-title"> Frequently Asked Questions </h1>
      <div className="accordion">
        {FaqApi.map((item, i) => (
          <div className="item" key={i}>
            <div className="title" onClick={() => toggle(i)}>
              <h2> {item.question} </h2>
              <span> {selected === i ? "-" : "+"} </span>
            </div>
            <div className={selected === i ? "content show" : "content"}>
              <hr />
              {item.answer.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
