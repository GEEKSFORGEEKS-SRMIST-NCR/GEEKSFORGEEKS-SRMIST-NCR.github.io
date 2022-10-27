import React,{
    useState
} from 'react'
import './faq.css';
import {FaqApi} from '/lib/FaqApi'

const Faq = () => {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return (
        <div className="wrapper">
        <h1 align = "center" > Frequently Asked Questions </h1>
            <div className = "accordion" >
            {FaqApi.map((item, i) => (
                <div className = "item" >
                    <div className = "title" onClick = {() => toggle(i)}>
                        <h2 > {item.question} </h2>
                        <span> {selected === i ? '-' : '+'} </span>
                    </div>
                    <div className = {selected === i ? "content show" : "content"}>
                        {item.answer.map((it) => (<li>{it}</li>))}
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}

export default Faq;
