import React from "react";

export default function ChatType(props) {
    const chatTypeStyle =  {
        fontSize: "97%",
        width: "70%"
    };

    return (
        <input style={chatTypeStyle} type="search" placeholder={props.placeholder}/>
    );
}