import React, { useState } from "react";
import Credential from "./Credential";
import styles from "./Styles/Credentials.module.css";


export default function Credentials() {

    var allCredentials = [
        "Google",
        "Amazon Account",
        "School Account",
        "Costco Credit Card Details",
        "Bank of America Account Auth",
        "Doordash",
        "Lyft"
    ]

    let allCredentialsDisplay = [];

    for (let j = 0; j < allCredentials.length; j++) {
        allCredentialsDisplay.push(<Credential name={allCredentials[j]} />);
    }
    


    return (
        <div className={styles.credentials}>
            {allCredentialsDisplay}
        </div>
    );
}
