import React from 'react';
import './App.css';

import OnOff from "./components/onOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion";
import {Rating} from "./components/Rating";

function App() {
    return (
        <div className={"App"}>

            <OnOff />
            <UncontrolledAccordion titleValue={'Menu'}/>

            <Rating value={0}/>
        </div>
    );
}


export default App;
