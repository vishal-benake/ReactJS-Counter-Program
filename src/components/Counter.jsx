import { useState } from "react";
import "../components/Counter.css"

const ReactCounter = () => {
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter((oldCounter) => {
            return oldCounter + 1;
        });
    };
    
    const decreaseCounter = () => {
        setCounter((oldCounter) => {
            return oldCounter - 1;
        })
    };



    return (
        <div>
            <h3>React JS Counter Program</h3>
            <span>{counter}</span>
            <br />
            <br />
            <div>
            {counter > 0 ? <button onClick={decreaseCounter} className="btn" id="btn1">Decrease</button> : null }
            <button onClick={increaseCounter} id="btn1">Increase</button>
            </div>
        </div>
    )
};

export default ReactCounter;