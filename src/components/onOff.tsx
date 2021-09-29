import React from "react";

type PropsType = {
    on: boolean
}

function OnOff(props: PropsType) {

    const onStyle = {}
    const offStyle = {}
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black"
    }


    return <div>
        <div>on</div>
        <div>off</div>
        <div style={indicatorStyle}></div>
    </div>
}

export default OnOff