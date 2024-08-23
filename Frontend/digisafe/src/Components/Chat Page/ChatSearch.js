import React from "react";

export default function Search(props) {
    const searchStyle =  {
        fontSize: "97%",
        width: "70%",
    };

    return (
        <input style={searchStyle} type="search" placeholder={props.placeholder}/>
    );
}