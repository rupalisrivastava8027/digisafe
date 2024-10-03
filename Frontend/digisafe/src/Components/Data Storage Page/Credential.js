import React from "react";
import styles from "../Styles/Credential.module.css";

import * as IndivCredParams from "./Indiv. Credentials Page/IndivCredParams"

export default function Credential(props) {

    function handleClick() {

        console.log("CLicked")
        // state = true when clicked and other nav states false
        IndivCredParams.setState(true)

        // pass in parameters
        IndivCredParams.setName(props.name)
        IndivCredParams.setUsername("username!")
        IndivCredParams.setPassword("123")
    }
    return (
        <button style={styles.button} onClick={handleClick}>{props.name}</button>
    );
}