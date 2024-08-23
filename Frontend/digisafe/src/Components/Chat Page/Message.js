import React from "react";

export default function Message(props) {

    const botstyle = {textAlign: "left"}
    const userstyle = {textAlign: "right"}
    return (
        <div style={props.type == "user" ? userstyle : botstyle}>
            <p> {props.text} </p>
        </div>
    );
}