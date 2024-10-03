import React from "react";
import styles from "../Styles/Message.module.css";

export default function Message(props) {

    return (
        <div className={props.type == "user" ? styles.user : styles.bot}>
            <div className={props.type == "user" ? styles.userMessage : styles.botMessage}>
                <p> {props.text} </p>
            </div>
        </div>
    );
}