import React from "react";
import Message from "./Message";

export default function Chat() {
    const style = {
        backgroundColor: "green",
        width: "70%",
        height: "20%",
        marginBottom: "25px"
    }

    return (
        <div style={style}>
            <Message type="bot" text="Hello"/>
            <Message type="user" text="HI"/>
            <Message type="bot" text="Hello"/>
        </div>
    );
}