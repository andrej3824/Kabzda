import React from "react";

type PropsType = {
    on: boolean
}

function OnOff(props: PropsType) {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "2px solid black",
        display: "inline-block",
        padding: "2px",
        background: "green"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "2px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        background: "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px"
    }


    return <div>
        <div style={onStyle}>on</div>
        <div style={offStyle}>off</div>
        <div style={indicatorStyle}></div>
    </div>
}

export default OnOff