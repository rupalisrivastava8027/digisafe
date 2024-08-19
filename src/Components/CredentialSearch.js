import React from "react";
import handleChange from "./Credentials";

export default function Search(props) {
    const searchStyle =  {
        fontSize: "97%",
        width: "70%"
    };
    
    

    return (
        <input style={searchStyle} id="search" onChange={handleChange} type="search" placeholder={props.placeholder}/>
    );
}