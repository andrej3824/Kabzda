import React from 'react';
import './App.css';
import OnOff from "./components/onOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion";
import {Rating} from "./components/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating";

function App() {
    return (
        <div className={"App"}>

            <OnOff/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledRating />
            <Rating value={3}/>
        </div>
    );
}


export default App;
