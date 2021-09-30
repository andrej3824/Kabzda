import React, {useState} from "react";

type AccordionPropsType = {
    //value: boolean
}

function UncontrolledAccordion(props:AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)



    if (!collapsed === false)
    return (
        <div>
            <h1>Menu</h1><button onClick={() => { setCollapsed(true) }}>TOGGLE</button>
            <h3>1</h3>
            <h3>2</h3>
            <h3>3</h3>
            <h3>4</h3>
        </div>
    )
    return (
        <h1>Menu</h1>
    )
}

export default UncontrolledAccordion;