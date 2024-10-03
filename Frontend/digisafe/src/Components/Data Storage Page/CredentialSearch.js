import React from "react";

export default function Search() {
    const searchStyle =  {
        fontSize: "97%",
        width: "70%"
    };
    
    

    return (
        <input style={searchStyle} id="search" type="search" placeholder="Search Credentials"/>
    );
}