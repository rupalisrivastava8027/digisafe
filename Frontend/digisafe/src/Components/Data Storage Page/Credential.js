import React from "react";
import styles from "../Styles/Credential.module.css";

export default function Credential(props) {

    return (
        <button style={styles.button}>{props.name}</button>
    );
}