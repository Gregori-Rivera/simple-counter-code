//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap';


// include your styles into the webpack bundle
import "../styles/index.css";
import { propTypes } from "react-bootstrap/esm/Image";

//import your own components
// import Home from "./component/home.jsx";

// import './component/icons.jsx';

function SimpleCounter(props){
    return(<div className="bigCounter">
        <h1>Simple Counter</h1>
        <div className="calendar">
            <i className="fa fa-clock"></i>
        </div>
        <div className="four">{props.digitFour}</div>
        <div className="three">{props.digitThree}</div>
        <div className="two">{props.digitTwo}</div>
        <div className="one">{props.digitOne}</div>
    </div>)
}

let counter = 0;
setInterval(function(){
    const four = Math.floor(counter/10000);
    const three = Math.floor(counter/1000);
    const two = Math.floor(counter/100);
    const one = Math.floor(counter/10);
    console.log(four, three, two, one);
    counter++;
    ReactDOM.render(
        <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four}  />, 
        document.querySelector("#app")
    );
},1000);
