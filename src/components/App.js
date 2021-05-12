import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [state, setState] = useState();
    function Para2() {
        setState("can")
    }
    return (<div id="main">
        <button style={{ marginLeft: '45%', marginTop: '20%' }} id="click" onClick={Para2}>click me</button>
        {state === "can" && (
            <Para />
        )
        }
    </div>
    )
}


function Para() {
    return (
        <p style={{ marginLeft: '30%', marginTop: '1%' }} id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
        </p>
    )
}



export default App;
