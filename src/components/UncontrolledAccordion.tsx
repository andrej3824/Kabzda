import React, {useState} from "react";
import Accordion from "./Accordion";

type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props:AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={props.titleValue}/><button onClick={() => { setCollapsed(!collapsed) }}>TOGGLE</button>
        { !collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitleType = {
    title: string
}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UncontrolledAccordion;