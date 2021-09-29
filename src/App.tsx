import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Rating} from "./components/Rating";
import OnOff from "./components/onOff";

function App() {
    return (
        <div>
            {/*<Accordion value={true}/>
            <Accordion value={false}/>

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            <OnOff on={true}/>
        </div>
    );
}


export default App;
